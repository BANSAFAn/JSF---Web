
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Lock } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { frameworkCompatibility } from "@/data/compatibility";

interface FrameworkSelectorProps {
  selectedFrameworks: string[];
  onFrameworkChange: (framework: string, checked: boolean) => void;
}

export const FrameworkSelector = ({ selectedFrameworks, onFrameworkChange }: FrameworkSelectorProps) => {
  const { t } = useTranslation();
  const frameworks = ["Vanilla", "Forge", "Fabric", "NeoForge", "OptiFine", "Quilt", "Other"];

  const isFrameworkCompatible = (framework: string) => {
    if (selectedFrameworks.length === 0) return true;
    
    return selectedFrameworks.every(selected => {
      const compatibleWithSelected = frameworkCompatibility[selected] || [];
      const compatibleWithFramework = frameworkCompatibility[framework] || [];
      return compatibleWithSelected.includes(framework) || compatibleWithFramework.includes(selected);
    });
  };

  const getFrameworkTooltip = (framework: string) => {
    if (!isFrameworkCompatible(framework)) {
      const conflicting = selectedFrameworks.find(selected => {
        const compatibleWithSelected = frameworkCompatibility[selected] || [];
        const compatibleWithFramework = frameworkCompatibility[framework] || [];
        return !compatibleWithSelected.includes(framework) && !compatibleWithFramework.includes(selected);
      });
      return `Несовместим с ${conflicting}`;
    }
    return "";
  };

  return (
    <div className="space-y-3 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
      <Label>{t('selector.frameworks', 'Моды/Фреймворки')}</Label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {frameworks.map((framework) => {
          const isCompatible = isFrameworkCompatible(framework);
          const tooltip = getFrameworkTooltip(framework);
          const isSelected = selectedFrameworks.includes(framework);
          
          return (
            <div 
              key={framework} 
              className={`flex items-center space-x-2 p-3 rounded-lg border transition-all duration-300 ${
                !isCompatible 
                  ? 'bg-muted/50 border-muted cursor-not-allowed opacity-50' 
                  : 'hover:bg-accent/50 hover:scale-105 border-border cursor-pointer'
              } ${isSelected ? 'bg-primary/10 border-primary' : ''}`}
              title={tooltip}
            >
              <Checkbox
                id={framework}
                checked={isSelected}
                disabled={!isCompatible && !isSelected}
                onCheckedChange={(checked) => 
                  onFrameworkChange(framework, checked as boolean)
                }
                className="transition-transform hover:scale-110"
              />
              <Label htmlFor={framework} className={`text-xs md:text-sm flex items-center gap-2 ${!isCompatible && !isSelected ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                {t(`frameworks.${framework.toLowerCase()}`, framework)}
                {!isCompatible && !isSelected && <Lock className="h-3 w-3 text-muted-foreground" />}
              </Label>
            </div>
          );
        })}
      </div>
      {selectedFrameworks.length > 0 && (
        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
          <p className="text-xs md:text-sm text-blue-800 dark:text-blue-200">
            <CheckCircle className="h-4 w-4 inline mr-1" />
            {t('frameworks.selected', 'Выбрано совместимых модов: {{frameworks}}', { frameworks: selectedFrameworks.join(', ') })}
          </p>
        </div>
      )}
    </div>
  );
};
