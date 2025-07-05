
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, Github, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-12 border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                {t('siteInfo')}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t('version')}:</span>
                  <Badge variant="secondary">1.2.0</Badge>
                </div>
                <div className="flex justify-between">
                  <span>{t('lastUpdate')}:</span>
                  <span>2025-01-04</span>
                </div>
                <div className="flex justify-between">
                  <span>API:</span>
                  <span>Mojang Official</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Minecraft Java Finder</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Бесплатный инструмент для поиска совместимых версий Java для Minecraft. 
                Поддерживает все версии игры и модлоадеры.
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">Open Source</Badge>
                <Badge variant="outline" className="text-xs">Free</Badge>
                <Badge variant="outline" className="text-xs">No Ads</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Github className="w-4 h-4" />
                Разработчик
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>BANSAFAn</span>
                  <a 
                    href="https://github.com/BANSAFAn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-muted-foreground">
                  Создатель и поддержатель проекта
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Minecraft Java Finder. Создано с ❤️ для Minecraft сообщества.</p>
          <p className="mt-1">Minecraft является торговой маркой Mojang Studios.</p>
        </div>
      </div>
    </footer>
  );
};
