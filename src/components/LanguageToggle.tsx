
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { AnimatedFlags } from "./AnimatedFlags";
import { useState, useEffect } from "react";

export const LanguageToggle = () => {
  const { locale, setLocale, t } = useTranslation();
  const [forceUpdate, setForceUpdate] = useState(0);

  const languages = [
    { code: 'en', name: 'English', Flag: AnimatedFlags.US },
    { code: 'ru', name: 'Русский', Flag: AnimatedFlags.RU },
    { code: 'uk', name: 'Українська', Flag: AnimatedFlags.UA },
    { code: 'de', name: 'Deutsch', Flag: AnimatedFlags.DE },
    { code: 'pl', name: 'Polski', Flag: AnimatedFlags.PL },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    setLocale(languageCode as any);
    setForceUpdate(prev => prev + 1);
    // Force immediate re-render
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    const handleLocaleChange = () => {
      setForceUpdate(prev => prev + 1);
    };

    window.addEventListener('localeChange', handleLocaleChange);
    return () => window.removeEventListener('localeChange', handleLocaleChange);
  }, []);

  return (
    <DropdownMenu key={forceUpdate}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 transition-all duration-300 hover:scale-105">
          <currentLanguage.Flag />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border shadow-lg">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="gap-2 transition-all duration-300 hover:bg-accent/80 cursor-pointer"
          >
            <language.Flag />
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
