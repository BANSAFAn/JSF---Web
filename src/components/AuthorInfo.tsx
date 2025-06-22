
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, User, MapPin, Calendar, Code, Heart } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const AuthorInfo = () => {
  const { t } = useTranslation();

  const technologies = [
    "Rust", "TypeScript", "Vue", "React", "Node.js", 
    "Docker", "AWS", "Vercel", "PostgreSQL", "MongoDB"
  ];

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/BANSAFAn",
      icon: <Github className="h-5 w-5" />,
      description: t('author.github_desc', 'Репозитории и проекты')
    },
    {
      name: "Portfolio",
      url: "https://baneronetwo.vercel.app/",
      icon: <Globe className="h-5 w-5" />,
      description: t('author.portfolio_desc', 'Личное портфолио')
    }
  ];

  const stats = [
    { label: t('author.stats.projects', 'Проектов'), value: "15+", icon: <Code className="h-5 w-5" /> },
    { label: t('author.stats.languages', 'Языков'), value: "8", icon: <Globe className="h-5 w-5" /> },
    { label: t('author.stats.experience', 'Лет опыта'), value: "5+", icon: <Calendar className="h-5 w-5" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Main Profile Card */}
      <Card className="glass-card animate-bounce-in">
        <CardHeader className="text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
          
          <div className="relative z-10">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 relative group">
              <img
                src="https://github.com/BANSAFAn.png"
                alt="BANSAFAn Avatar"
                className="w-full h-full rounded-full border-4 border-primary/20 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" fill="#3b82f6"/><text x="64" y="72" font-family="Arial" font-size="48" fill="white" text-anchor="middle">BA</text></svg>')}`;
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow" />
            </div>

            <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              BANSAFAn
            </CardTitle>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-blue-500" />
              <CardDescription className="text-lg">
                {t('author.location', 'Каменское, Украина')} • {t('author.role', 'Fullstack разработчик')}
              </CardDescription>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center p-3 rounded-lg bg-muted/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center mb-1">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* About */}
          <div className="animate-slide-in">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              {t('author.about', 'Обо мне')}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t('author.description', 'Разработчик с страстью к созданию полезных инструментов. Специализируюсь на веб-технологиях и облачных решениях. Создаю проекты, которые решают реальные проблемы пользователей.')}
            </p>
          </div>

          {/* Technologies */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-500" />
              {t('author.technologies', 'Технологии')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground animate-bounce-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-green-500" />
              {t('author.links', 'Ссылки')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {links.map((link, index) => (
                <Button
                  key={link.name}
                  variant="outline"
                  className="h-auto p-4 group transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  asChild
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {link.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{link.name}</div>
                          <div className="text-xs text-muted-foreground group-hover:text-muted-foreground/80">
                            {link.description}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Info Card */}
      <Card className="glass-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            {t('project.title', 'О проекте JSF')}
          </CardTitle>
          <CardDescription className="text-base">
            {t('project.subtitle', 'Java Selector for Minecraft - инструмент для подбора оптимальной Java')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                {t('project.motivation_title', 'Мотивация')}
              </h4>
              <p className="text-muted-foreground">
                {t('project.motivation', 'Упростить процесс выбора Java для игроков в Minecraft, избавив от необходимости разбираться в совместимости версий.')}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-500" />
                {t('project.features_title', 'Возможности')}
              </h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• {t('project.feature_1', 'Автоматический подбор Java')}</li>
                <li>• {t('project.feature_2', 'Поддержка всех популярных модов')}</li>
                <li>• {t('project.feature_3', 'Определение операционной системы')}</li>
                <li>• {t('project.feature_4', 'Мультиязычный интерфейс')}</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {t('project.open_source', 'Проект с открытым исходным кодом')}
            </p>
            <Button variant="outline" className="transition-all duration-300 hover:scale-105" asChild>
              <a 
                href="https://github.com/BANSAFAn/java-selector-for-minecraft" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                {t('project.view_source', 'Посмотреть код')}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
