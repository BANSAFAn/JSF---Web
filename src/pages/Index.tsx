
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JavaSelector } from "@/components/JavaSelector";
import { AuthorInfo } from "@/components/AuthorInfo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LoadingScreen } from "@/components/LoadingScreen";
import { LaunchersTab } from "@/components/LaunchersTab";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark' | 'neon' | 'retro'>('dark');
  const [isLoading, setIsLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const savedTheme = localStorage.getItem('jsf-theme') as typeof theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jsf-theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    // Симуляция загрузки
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen theme={theme} />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme}`} data-theme={theme}>
      <AnimatedBackground theme={theme} />
      
      {/* Header */}
      <header className="relative z-10 border-b glass-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-4 animate-slide-in">
            <div className="space-y-1">
              <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
                Java Selector Finder
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                {t('subtitle', 'Найдите идеальную Java для вашей игры')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4 animate-fade-in">
            <LanguageToggle />
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-4 md:py-8">
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 md:mb-8 enhanced-tabs">
            <TabsTrigger 
              value="main" 
              className="enhanced-tab-trigger text-xs md:text-base"
            >
              {t('tabs.main', 'Главная')}
            </TabsTrigger>
            <TabsTrigger 
              value="launchers" 
              className="enhanced-tab-trigger text-xs md:text-base"
            >
              {t('tabs.launchers', 'Лаунчеры')}
            </TabsTrigger>
            <TabsTrigger 
              value="author" 
              className="enhanced-tab-trigger text-xs md:text-base"
            >
              {t('tabs.author', 'Автор')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="space-y-4 md:space-y-8 animate-fade-in">
            <JavaSelector />
          </TabsContent>

          <TabsContent value="launchers" className="animate-fade-in">
            <LaunchersTab />
          </TabsContent>

          <TabsContent value="author" className="animate-fade-in">
            <AuthorInfo />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t glass-card mt-8 md:mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="flex items-center justify-center gap-2 animate-fade-in text-sm md:text-base">
            <span className="text-muted-foreground">
              {t('footer.made_by', 'Создано с')} 
            </span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-muted-foreground">{t('footer.by', 'от')}</span>
            <a 
              href="https://github.com/BANSAFAn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all duration-300 hover:scale-105"
            >
              BANSAFAn
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            © {currentYear} JSF - Java Selector for Minecraft
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
