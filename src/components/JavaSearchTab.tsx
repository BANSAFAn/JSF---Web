import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, ExternalLink, ChevronDown, ChevronUp, Monitor, Smartphone, Shield, CheckCircle, XCircle, Globe } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { fetchMinecraftVersions, frameworks, getJavaRecommendation, detectOS, checkJavaCompatibility, MinecraftVersion, JavaRecommendation, CompatibilityCheck } from '../utils/minecraftData';

export const JavaSearchTab = () => {
  const { t } = useLanguage();
  const [minecraftVersions, setMinecraftVersions] = useState<Record<string, MinecraftVersion[]>>({});
  const [loading, setLoading] = useState(true);
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedFramework, setSelectedFramework] = useState('vanilla');
  const [detectedOS, setDetectedOS] = useState('');
  const [selectedOS, setSelectedOS] = useState('');
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [recommendation, setRecommendation] = useState<JavaRecommendation | null>(null);
  const [compatibilityCheck, setCompatibilityCheck] = useState<CompatibilityCheck | null>(null);
  const [checkingCompatibility, setCheckingCompatibility] = useState(false);

  useEffect(() => {
    const loadVersions = async () => {
      setLoading(true);
      const versions = await fetchMinecraftVersions();
      setMinecraftVersions(versions);
      setLoading(false);
    };
    
    loadVersions();
    
    const os = detectOS();
    setDetectedOS(os);
    setSelectedOS(os);
  }, []);

  useEffect(() => {
    if (selectedVersion && selectedFramework) {
      const rec = getJavaRecommendation(selectedVersion, selectedFramework);
      setRecommendation(rec);
    }
  }, [selectedVersion, selectedFramework]);

  const handleCompatibilityCheck = async () => {
    setCheckingCompatibility(true);
    try {
      const result = await checkJavaCompatibility();
      setCompatibilityCheck(result);
    } catch (error) {
      console.error('Compatibility check failed:', error);
    } finally {
      setCheckingCompatibility(false);
    }
  };

  const handleSearch = () => {
    if (selectedVersion && selectedFramework) {
      const rec = getJavaRecommendation(selectedVersion, selectedFramework);
      setRecommendation(rec);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-600" />
            {t('findJavaVersion')}
          </CardTitle>
          <CardDescription>
            {t('subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 animate-slide-in-right">
              <label className="text-sm font-medium">{t('minecraftVersion')}</label>
              {loading ? (
                <div className="h-10 bg-gradient-to-r from-muted to-muted/50 animate-pulse rounded-md" />
              ) : (
                <Select value={selectedVersion} onValueChange={setSelectedVersion}>
                  <SelectTrigger className="hover:bg-accent transition-colors duration-200">
                    <SelectValue placeholder={t('minecraftVersion')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background max-h-60">
                    {Object.entries(minecraftVersions).map(([category, versions]) => (
                      <div key={category}>
                        {versions.length > 0 && (
                          <>
                            <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase">
                              {category}
                            </div>
                            {versions.map((version) => (
                              <SelectItem key={version.version} value={version.version} className="hover:bg-accent transition-colors duration-150">
                                <div className="flex items-center gap-2">
                                  {version.version}
                                  {version.popular && <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Popular</Badge>}
                                </div>
                              </SelectItem>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="space-y-2 animate-slide-in-right" style={{animationDelay: '0.1s'}}>
              <label className="text-sm font-medium">{t('framework')}</label>
              <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                <SelectTrigger className="hover:bg-accent transition-colors duration-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.id} value={framework.id} className="hover:bg-accent transition-colors duration-150">
                      <div className="flex items-center gap-2">
                        {framework.name}
                        {framework.popular && <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Popular</Badge>}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            <label className="text-sm font-medium">{t('operatingSystem')}</label>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Smartphone className="w-4 h-4" />
              {t('detected')}: {detectedOS}
            </div>
            <Select value={selectedOS} onValueChange={setSelectedOS}>
              <SelectTrigger className="hover:bg-accent transition-colors duration-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="windows">🪟 Windows</SelectItem>
                <SelectItem value="macos">🍎 macOS</SelectItem>
                <SelectItem value="linux">🐧 Linux</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 animate-slide-in-right" style={{animationDelay: '0.3s'}}>
            <Button 
              onClick={handleSearch} 
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-200 hover:scale-105" 
              disabled={!selectedVersion}
            >
              {t('findJavaVersion')}
            </Button>
            <Button 
              onClick={handleCompatibilityCheck} 
              variant="outline"
              disabled={checkingCompatibility}
              className="flex items-center gap-2 hover:bg-accent border-2 hover:border-blue-300 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              {checkingCompatibility ? 'Проверка...' : 'Онлайн проверка'}
            </Button>
          </div>

          {compatibilityCheck && (
            <div className={`p-4 rounded-lg border transition-all duration-300 animate-fade-in ${
              compatibilityCheck.isCompatible 
                ? 'bg-green-50 border-green-200 dark:bg-green-950/20 hover:bg-green-100 dark:hover:bg-green-950/30' 
                : 'bg-red-50 border-red-200 dark:bg-red-950/20 hover:bg-red-100 dark:hover:bg-red-950/30'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {compatibilityCheck.isCompatible ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="font-medium">
                  {compatibilityCheck.isCompatible ? 'Система совместима' : 'Обнаружены проблемы'}
                </span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>🖥️ ОС: {compatibilityCheck.systemInfo.os}</div>
                <div>🏗️ Архитектура: {compatibilityCheck.systemInfo.architecture}</div>
                <div>☕ Java: {compatibilityCheck.systemInfo.javaInstalled ? '✅ Установлена' : '❌ Не найдена'}</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {recommendation && (
        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5 text-purple-600" />
              {t('recommendedJava')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg border hover:shadow-md transition-shadow duration-200">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{recommendation.javaVersion}</h3>
                <p className="text-sm text-muted-foreground">{recommendation.description}</p>
              </div>
              <Badge variant="default" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                {t('recommended')}
              </Badge>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">{t('primaryDownload')}</h4>
              <div className="space-y-2">
                <Button className="w-full justify-between hover:bg-accent transition-all duration-200 hover:scale-[1.02]" asChild>
                  <a href={recommendation.primarySource.url} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      {recommendation.primarySource.name}
                      {recommendation.primarySource.verified && <Shield className="w-4 h-4 text-green-600" />}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <div className="flex gap-1 justify-center">
                  {recommendation.primarySource.architecture.map(arch => (
                    <Badge key={arch} variant="outline" className="text-xs hover:bg-accent transition-colors duration-150">{arch}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <Separator />

            <Collapsible open={showAlternatives} onOpenChange={setShowAlternatives}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between hover:bg-accent transition-colors duration-200">
                  {t('showAlternatives')}
                  {showAlternatives ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2 mt-3 animate-accordion-down">
                {recommendation.alternativeSources.map((source, index) => (
                  <div key={index} className="space-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <Button variant="outline" className="w-full justify-between hover:bg-accent transition-all duration-200 hover:scale-[1.02]" asChild>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2">
                          {source.name}
                          {source.verified && <Shield className="w-4 h-4 text-green-600" />}
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <div className="flex gap-1 justify-center">
                      {source.architecture.map(arch => (
                        <Badge key={arch} variant="outline" className="text-xs hover:bg-accent transition-colors duration-150">{arch}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Separator />

            <div className="space-y-2">
              <h4 className="font-medium">{t('installInstructions')} {selectedOS}</h4>
              <div className="p-3 bg-muted rounded-lg">
                <pre className="text-sm whitespace-pre-wrap">{recommendation.installInstructions[selectedOS as keyof typeof recommendation.installInstructions]}</pre>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
