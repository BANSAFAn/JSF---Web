
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, ExternalLink, Globe, Copy, AlertTriangle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { toast } from "sonner";

interface JavaRecommendationResultProps {
  result: any;
}

export const JavaRecommendationResult = ({ result }: JavaRecommendationResultProps) => {
  const { t } = useTranslation();
  const [showAlternativeProviders, setShowAlternativeProviders] = useState(false);

  const copyCommand = () => {
    if (result?.command) {
      navigator.clipboard.writeText(result.command);
      toast.success(t('success.command_copied', 'Команда скопирована!'));
    }
  };

  if (!result) return null;

  return (
    <Card className="border-primary/20 bg-primary/5 glass-card animate-bounce-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          {t('result.title', 'Рекомендация готова!')}
          <Badge variant="secondary" className="animate-pulse">{result.java}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Best Java Provider */}
        {result.provider && (
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Download className="h-5 w-5" />
              {t('result.best_provider', 'Лучший провайдер для вас')}
            </h4>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-between h-auto p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                asChild
              >
                <a 
                  href={result.provider.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Download className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{result.provider.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {result.provider.description}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              
              {/* Show Alternative Providers Button */}
              {result.alternativeProviders && result.alternativeProviders.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAlternativeProviders(!showAlternativeProviders)}
                  className="w-full"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {showAlternativeProviders 
                    ? `Скрыть альтернативы (${result.alternativeProviders.length})`
                    : `Показать больше источников (${result.alternativeProviders.length})`
                  }
                </Button>
              )}
              
              {/* Alternative Providers */}
              {showAlternativeProviders && result.alternativeProviders && result.alternativeProviders.length > 0 && (
                <div className="space-y-2 border-t pt-3">
                  <h5 className="text-sm font-medium text-muted-foreground mb-2">
                    {t('result.alternative_providers', 'Альтернативные провайдеры:')}
                  </h5>
                  <div className="grid gap-2">
                    {result.alternativeProviders.map((provider: any, index: number) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="justify-between h-auto p-3 transition-all duration-300 hover:scale-[1.01]"
                        asChild
                      >
                        <a 
                          href={provider.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <div className="text-left">
                            <div className="font-medium text-sm">{provider.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {provider.description}
                            </div>
                          </div>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Launch Command */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Copy className="h-5 w-5" />
            {t('result.launch_command', 'Команда запуска')}
          </h4>
          <div className="flex items-center gap-2">
            <code className="flex-1 p-3 bg-muted rounded-lg text-sm font-mono break-all">
              {result.command}
            </code>
            <Button size="sm" variant="ghost" onClick={copyCommand} className="transition-transform hover:scale-110">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Warnings */}
        {result.warnings && result.warnings.length > 0 && (
          <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg animate-pulse">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              {t('result.warnings', 'Предупреждения')}
            </h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              {result.warnings.map((warning: string, index: number) => (
                <li key={index}>• {t(`warnings.${warning}`, warning)}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
