
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { useOSDetection } from "@/hooks/useOSDetection";
import { compatibilityData } from "@/data/compatibility";
import { toast } from "sonner";
import { OSNotification } from "./OSNotification";
import { VersionSelector } from "./VersionSelector";
import { FrameworkSelector } from "./FrameworkSelector";
import { OSSelector } from "./OSSelector";
import { JavaRecommendationResult } from "./JavaRecommendationResult";
import { getBestJavaProvider, getAlternativeProviders, generateLaunchCommand } from "@/utils/javaUtils";

export const JavaSelector = () => {
  const { t } = useTranslation();
  const { detectedOS, userOS, setUserOS, showOSNotification } = useOSDetection();
  const [selectedVersion, setSelectedVersion] = useState("");
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [showOSWarning, setShowOSWarning] = useState(false);

  const handleFrameworkChange = (framework: string, checked: boolean) => {
    if (checked) {
      setSelectedFrameworks([...selectedFrameworks, framework]);
    } else {
      setSelectedFrameworks(selectedFrameworks.filter(f => f !== framework));
    }
  };

  const handleOSChange = (newOS: string) => {
    if (newOS !== detectedOS) {
      setShowOSWarning(true);
      setTimeout(() => setShowOSWarning(false), 5000);
    }
    setUserOS(newOS as any);
  };

  const getJavaForVersion = (version: string) => {
    // Проверяем точное совпадение в compatibilityData
    if (compatibilityData[version]) {
      return compatibilityData[version];
    }

    // Логика для определения Java по версии
    if (version.toLowerCase().includes('alpha') || version.toLowerCase().includes('classic') || version.startsWith('c0')) {
      return {
        recommendedJava: "Java 6",
        frameworks: ["Vanilla"],
        warnings: [t('warnings.old_version', 'Это очень старая версия Minecraft. Рекомендуется Java 6.')]
      };
    }

    if (version.toLowerCase().includes('beta') || version === '1.0.0' || version === '1.1') {
      return {
        recommendedJava: "Java 6",
        frameworks: ["Vanilla"],
        warnings: [t('warnings.old_version', 'Это старая версия Minecraft. Рекомендуется Java 6.')]
      };
    }

    // Парсим версию для релизов
    const versionMatch = version.match(/(\d+)\.(\d+)(?:\.(\d+))?/);
    if (versionMatch) {
      const major = parseInt(versionMatch[1]);
      const minor = parseInt(versionMatch[2]);
      const patch = parseInt(versionMatch[3] || '0');

      // 1.2.x - 1.4.x -> Java 6
      if (major === 1 && minor >= 2 && minor <= 4) {
        return {
          recommendedJava: "Java 6",
          frameworks: ["Vanilla", "Forge"],
          warnings: []
        };
      }

      // 1.5.x - 1.6.x -> Java 7
      if (major === 1 && (minor === 5 || minor === 6)) {
        return {
          recommendedJava: "Java 7",
          frameworks: ["Vanilla", "Forge"],
          warnings: []
        };
      }

      // 1.7.x - 1.16.x -> Java 8
      if (major === 1 && minor >= 7 && minor <= 16) {
        return {
          recommendedJava: "Java 8",
          frameworks: ["Vanilla", "Forge", "Fabric", "OptiFine"],
          warnings: []
        };
      }

      // 1.17.x -> Java 16
      if (major === 1 && minor === 17) {
        return {
          recommendedJava: "Java 16",
          frameworks: ["Vanilla", "Forge", "Fabric", "OptiFine"],
          warnings: []
        };
      }

      // 1.18.x - 1.20.x -> Java 17
      if (major === 1 && minor >= 18 && minor <= 20) {
        return {
          recommendedJava: "Java 17",
          frameworks: ["Vanilla", "Forge", "Fabric", "NeoForge", "OptiFine", "Quilt"],
          warnings: []
        };
      }

      // 1.21.x и выше -> Java 21
      if (major === 1 && minor >= 21) {
        return {
          recommendedJava: "Java 21",
          frameworks: ["Vanilla", "Forge", "Fabric", "NeoForge", "OptiFine", "Quilt"],
          warnings: []
        };
      }
    }

    // Для снапшотов
    if (version.includes('w') && (version.startsWith('24w') || version.startsWith('25w'))) {
      return {
        recommendedJava: "Java 21",
        frameworks: ["Vanilla", "Fabric"],
        warnings: []
      };
    }

    if (version.includes('w') && (version.startsWith('22w') || version.startsWith('23w'))) {
      return {
        recommendedJava: "Java 17",
        frameworks: ["Vanilla", "Fabric"],
        warnings: []
      };
    }

    if (version.includes('w') && version.startsWith('21w')) {
      return {
        recommendedJava: "Java 16",
        frameworks: ["Vanilla", "Fabric"],
        warnings: []
      };
    }

    if (version.includes('w') && version.startsWith('20w')) {
      return {
        recommendedJava: "Java 8",
        frameworks: ["Vanilla", "Fabric"],
        warnings: []
      };
    }

    // Fallback для неизвестных версий
    return {
      recommendedJava: "Java 17",
      frameworks: ["Vanilla", "Forge", "Fabric", "OptiFine"],
      warnings: [t('warnings.unknown_version', 'Неизвестная версия. Используется стандартная рекомендация Java 17.')]
    };
  };

  const handleSubmit = () => {
    if (!selectedVersion || selectedFrameworks.length === 0) {
      toast.error(t('errors.fill_all_fields', 'Пожалуйста, заполните все поля'));
      return;
    }

    console.log('Selected version:', selectedVersion);
    
    const versionData = getJavaForVersion(selectedVersion);
    const recommendedJava = versionData.recommendedJava;
    const compatibleFrameworks = selectedFrameworks.filter(f => 
      versionData.frameworks.includes(f)
    );

    const bestProvider = getBestJavaProvider(recommendedJava);
    const alternativeProviders = getAlternativeProviders(recommendedJava);
    const launchCommand = generateLaunchCommand(recommendedJava, compatibleFrameworks);

    setResult({
      version: selectedVersion,
      java: recommendedJava,
      frameworks: compatibleFrameworks,
      os: userOS,
      warnings: versionData.warnings || [],
      provider: bestProvider,
      alternativeProviders,
      command: launchCommand
    });

    toast.success(t('success.recommendation_generated', 'Рекомендация сгенерирована!'));
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <OSNotification 
        showOSNotification={showOSNotification}
        showOSWarning={showOSWarning}
        detectedOS={detectedOS}
      />

      <Card className="glass-card animate-fade-in">
        <CardHeader className="pb-4 md:pb-6">
          <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm md:text-base">J</span>
            </div>
            {t('selector.title', 'Подбор Java для Minecraft')}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            {t('selector.description', 'Выберите параметры для получения рекомендации')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6">
          <VersionSelector 
            selectedVersion={selectedVersion}
            onVersionChange={setSelectedVersion}
          />

          <FrameworkSelector 
            selectedFrameworks={selectedFrameworks}
            onFrameworkChange={handleFrameworkChange}
          />

          <OSSelector 
            userOS={userOS}
            onOSChange={handleOSChange}
          />

          <Button 
            onClick={handleSubmit} 
            className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-sm md:text-base" 
            size="lg"
          >
            {t('selector.get_recommendation', 'Получить рекомендацию')}
          </Button>
        </CardContent>
      </Card>

      <JavaRecommendationResult result={result} />
    </div>
  );
};
