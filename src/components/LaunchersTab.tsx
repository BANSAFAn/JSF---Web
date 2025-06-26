
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { memo } from "react";

const LaunchersTab = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="glass-card border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/20 animate-bounce-in transition-all duration-300 hover:scale-[1.01]">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl">
            {t('launchers.title', 'Лаунчеры Minecraft')}
          </CardTitle>
          <CardDescription className="text-lg">
            {t('launchers.coming_soon', 'Скоро здесь появятся рекомендации лаунчеров')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Badge variant="secondary" className="text-lg px-4 py-2 animate-pulse">
              {t('launchers.in_development', 'В разработке')}
            </Badge>
          </div>
          
          <div className="p-4 sm:p-6 bg-muted/50 rounded-lg transition-all duration-300 hover:bg-muted/70">
            <h3 className="font-semibold mb-3 text-center">
              {t('launchers.what_coming', 'Что будет добавлено:')}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t('launchers.feature_1', 'Рекомендации официальных лаунчеров')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                {t('launchers.feature_2', 'Сторонние лаунчеры (MultiMC, Prism, etc.)')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                {t('launchers.feature_3', 'Настройки производительности')}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                {t('launchers.feature_4', 'Автоматическая установка модов')}
              </li>
            </ul>
          </div>

          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            {t('launchers.current_message', 'В настоящее время мы не можем рекомендовать конкретные лаунчеры, но эта функция будет добавлена в ближайшее время.')}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const MemoizedLaunchersTab = memo(LaunchersTab);
