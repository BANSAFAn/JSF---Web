
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Monitor } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface OSSelectorProps {
  userOS: string;
  onOSChange: (os: string) => void;
}

export const OSSelector = ({ userOS, onOSChange }: OSSelectorProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-3 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
      <Label>{t('selector.operating_system', 'Операционная система')}</Label>
      <Select value={userOS} onValueChange={onOSChange}>
        <SelectTrigger className="transition-all duration-300 hover:scale-[1.01]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Windows">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Windows
            </div>
          </SelectItem>
          <SelectItem value="macOS">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              macOS
            </div>
          </SelectItem>
          <SelectItem value="Linux">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Linux
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
