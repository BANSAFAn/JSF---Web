
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sun, Moon, Monitor, Globe, Languages } from 'lucide-react';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: <svg width="20" height="15" viewBox="0 0 20 15" className="inline-block"><rect width="20" height="15" fill="#012169"/><path d="M0 0l20 15M20 0L0 15" stroke="#fff" strokeWidth="3"/><path d="M0 0l20 15M20 0L0 15" stroke="#C8102E" strokeWidth="2"/><path d="M10 0v15M0 7.5h20" stroke="#fff" strokeWidth="5"/><path d="M10 0v15M0 7.5h20" stroke="#C8102E" strokeWidth="3"/></svg>
    },
    { 
      code: 'ru', 
      name: 'Русский', 
      flag: <svg width="20" height="15" viewBox="0 0 20 15" className="inline-block"><rect width="20" height="5" fill="#fff"/><rect y="5" width="20" height="5" fill="#0039A6"/><rect y="10" width="20" height="5" fill="#D52B1E"/></svg>
    },
    { 
      code: 'uk', 
      name: 'Українська', 
      flag: <svg width="20" height="15" viewBox="0 0 20 15" className="inline-block"><rect width="20" height="7.5" fill="#005BBB"/><rect y="7.5" width="20" height="7.5" fill="#FFD500"/></svg>
    },
    { 
      code: 'de', 
      name: 'Deutsch', 
      flag: <svg width="20" height="15" viewBox="0 0 20 15" className="inline-block"><rect width="20" height="5" fill="#000"/><rect y="5" width="20" height="5" fill="#DD0000"/><rect y="10" width="20" height="5" fill="#FFCE00"/></svg>
    },
    { 
      code: 'ja', 
      name: '日本語', 
      flag: <svg width="20" height="15" viewBox="0 0 20 15" className="inline-block"><rect width="20" height="15" fill="#fff"/><circle cx="10" cy="7.5" r="3" fill="#BC002D"/></svg>
    },
    { 
      code: 'zh', 
      name: '中文', 
      flag: <svg width="20" height="15" viewBox="0 0 20 15" className="inline-block"><rect width="20" height="15" fill="#DE2910"/><polygon points="4,2 5,4 3,4" fill="#FFDE00"/><polygon points="7,1 7.5,2 6.5,2" fill="#FFDE00"/><polygon points="7,3 7.5,4 6.5,4" fill="#FFDE00"/><polygon points="7,5 7.5,6 6.5,6" fill="#FFDE00"/><polygon points="7,7 7.5,8 6.5,8" fill="#FFDE00"/></svg>
    },
  ];

  const themes = [
    { 
      value: 'light', 
      icon: Sun, 
      label: t('light'), 
      svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
    },
    { 
      value: 'dark', 
      icon: Moon, 
      label: t('dark'), 
      svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    },
    { 
      value: 'system', 
      icon: Monitor, 
      label: t('system'), 
      svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
    },
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const currentLanguage = languages.find(l => l.code === language);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform duration-200">
            ☕
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            {t('title')}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
            <SelectTrigger className="w-auto hover:bg-accent transition-colors duration-200">
              <span className="mr-2">{currentLanguage?.flag}</span>
              <Languages className="w-4 h-4 mr-1" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border shadow-lg z-50">
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code} className="hover:bg-accent transition-colors duration-150">
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={theme} onValueChange={(value) => setTheme(value as any)}>
            <SelectTrigger className="w-auto hover:bg-accent transition-colors duration-200">
              <span className="mr-2">{currentTheme?.svg}</span>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border shadow-lg z-50">
              {themes.map((themeOption) => (
                <SelectItem key={themeOption.value} value={themeOption.value} className="hover:bg-accent transition-colors duration-150">
                  <div className="flex items-center gap-2">
                    <span>{themeOption.svg}</span>
                    <span>{themeOption.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};
