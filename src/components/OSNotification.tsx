
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Monitor, AlertTriangle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface OSNotificationProps {
  showOSNotification: boolean;
  showOSWarning: boolean;
  detectedOS: string;
}

export const OSNotification = ({ showOSNotification, showOSWarning, detectedOS }: OSNotificationProps) => {
  const { t } = useTranslation();

  return (
    <>
      {showOSNotification && (
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 animate-slide-in">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <Monitor className="h-5 w-5" />
              <span>
                {t('os.detected', 'Определена ОС: {{os}}. Можете изменить при необходимости.', { os: detectedOS })}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {showOSWarning && (
        <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 animate-bounce-in">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {t('os.warning', 'Переход на другую ОС может немного изменить результаты рекомендации.')}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
