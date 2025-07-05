import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Coffee, Heart, Code, Star, GitFork, Users } from 'lucide-react';

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const DeveloperTab = () => {
  const { t } = useLanguage();
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/BANSAFAn');
        const userData = await userResponse.json();
        
        const reposResponse = await fetch('https://api.github.com/users/BANSAFAn/repos?sort=stars&per_page=6');
        const reposData = await reposResponse.json();
        
        setGithubData(userData);
        setRepos(reposData);
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            {t('aboutCreator')}
          </CardTitle>
          <CardDescription>
            Встречайте разработчика Minecraft Java Finder
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-muted animate-pulse rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-6 bg-muted animate-pulse rounded" />
                <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
              </div>
            </div>
          ) : githubData ? (
            <div className="flex items-start gap-4">
              <img 
                src={githubData.avatar_url} 
                alt={githubData.name || githubData.login}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{githubData.name || githubData.login}</h3>
                <p className="text-muted-foreground mb-3">
                  {githubData.bio || 'Passionate developer and Minecraft enthusiast dedicated to making Java version management simple for everyone.'}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {githubData.followers} подписчиков
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="w-4 h-4" />
                    {githubData.public_repos} репозиториев
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java Developer</Badge>
                  <Badge variant="secondary">Minecraft Modder</Badge>
                  <Badge variant="secondary">Open Source Advocate</Badge>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">BANSAFAn</h3>
                <p className="text-muted-foreground mb-3">
                  Passionate developer and Minecraft enthusiast dedicated to making Java version management simple for everyone.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java Developer</Badge>
                  <Badge variant="secondary">Minecraft Modder</Badge>
                  <Badge variant="secondary">Open Source Advocate</Badge>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1" asChild>
              <a href="https://github.com/BANSAFAn" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <a href="mailto:contact@bansafan.dev" target="_blank" rel="noopener noreferrer">
                <Heart className="w-4 h-4 mr-2" />
                Contact Me
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {repos.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              Популярные репозитории
            </CardTitle>
            <CardDescription>
              Последние проекты с GitHub
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.slice(0, 4).map((repo) => (
                <div key={repo.name} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-blue-600 dark:text-blue-400">{repo.name}</h4>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                  {repo.description && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            {t('projectInfo')}
          </CardTitle>
          <CardDescription>
            Узнайте больше об этом проекте с открытым исходным кодом
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Github className="w-4 h-4" />
                Open Source
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Этот проект полностью открытый и приветствует вклад сообщества.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/BANSAFAn/minecraft-java-finder" target="_blank" rel="noopener noreferrer">
                  Исходный код <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Версия 1.2.0</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Обновление с поддержкой тем, мультиязычности и авто-проверки совместимости.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/BANSAFAn/minecraft-java-finder/releases" target="_blank" rel="noopener noreferrer">
                  Changelog <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Внести вклад</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Хотите помочь улучшить Minecraft Java Finder? Вклады приветствуются! Будь то отчеты об ошибках, 
              запросы функций или вклад в код - каждая помощь делает этот инструмент лучше для сообщества.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/BANSAFAn/minecraft-java-finder/issues" target="_blank" rel="noopener noreferrer">
                  Сообщить о проблеме <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/BANSAFAn/minecraft-java-finder/pulls" target="_blank" rel="noopener noreferrer">
                  Отправить PR <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Благодарности</CardTitle>
          <CardDescription>
            Особая благодарность сообществу Minecraft
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Этот проект был бы невозможен без удивительного сообщества Minecraft, модостроителей 
            и создателей лаунчеров, которые делают игру бесконечно увлекательной. Особая благодарность всем, 
            кто внес обратную связь, предложения и поддержку.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
