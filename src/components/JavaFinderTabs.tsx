
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coffee, Monitor, Github, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { JavaSearchTab } from './JavaSearchTab';
import { LaunchersTab } from './LaunchersTab';
import { DeveloperTab } from './DeveloperTab';
import { AIMJFTab } from './AIMJFTab';

export const JavaFinderTabs = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          {t('title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <Tabs defaultValue="java-search" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 max-w-lg mx-auto bg-muted/50 backdrop-blur">
          <TabsTrigger value="java-search" className="flex items-center gap-2 hover:bg-accent transition-colors duration-200">
            <Coffee className="w-4 h-4" />
            <span className="hidden sm:inline">{t('javaSearch')}</span>
          </TabsTrigger>
          <TabsTrigger value="launchers" className="flex items-center gap-2 hover:bg-accent transition-colors duration-200">
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">{t('launchers')}</span>
          </TabsTrigger>
          <TabsTrigger value="ai-mjf" className="flex items-center gap-2 hover:bg-accent transition-colors duration-200">
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline">AI-MJF</span>
          </TabsTrigger>
          <TabsTrigger value="developer" className="flex items-center gap-2 hover:bg-accent transition-colors duration-200">
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">{t('developer')}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="java-search" className="animate-fade-in">
          <JavaSearchTab />
        </TabsContent>

        <TabsContent value="launchers" className="animate-fade-in">
          <LaunchersTab />
        </TabsContent>

        <TabsContent value="ai-mjf" className="animate-fade-in">
          <AIMJFTab />
        </TabsContent>

        <TabsContent value="developer" className="animate-fade-in">
          <DeveloperTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
