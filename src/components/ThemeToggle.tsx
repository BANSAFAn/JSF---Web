
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Palette, Sun, Moon, Zap, Gamepad2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface ThemeToggleProps {
  theme: 'light' | 'dark' | 'neon' | 'retro';
  setTheme: (theme: 'light' | 'dark' | 'neon' | 'retro') => void;
}

export const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  const { t } = useTranslation();

  const themes = [
    { key: 'light', label: t('themes.light'), icon: <Sun className="h-4 w-4" /> },
    { key: 'dark', label: t('themes.dark'), icon: <Moon className="h-4 w-4" /> },
    { key: 'neon', label: t('themes.neon'), icon: <Zap className="h-4 w-4" /> },
    { key: 'retro', label: t('themes.retro'), icon: <Gamepad2 className="h-4 w-4" /> },
  ] as const;

  const currentTheme = themes.find(t => t.key === theme) || themes[1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          {currentTheme.icon}
          <span className="hidden sm:inline">{currentTheme.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.key}
            onClick={() => setTheme(themeOption.key)}
            className="gap-2"
          >
            {themeOption.icon}
            {themeOption.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
