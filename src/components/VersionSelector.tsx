
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "@/hooks/useTranslation";
import { minecraftVersions } from "@/data/compatibility";

interface VersionSelectorProps {
  selectedVersion: string;
  onVersionChange: (version: string) => void;
}

export const VersionSelector = ({ selectedVersion, onVersionChange }: VersionSelectorProps) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [versionFilter, setVersionFilter] = useState("all");

  const filteredVersions = minecraftVersions.filter(version => {
    const matchesSearch = version.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (versionFilter === "all") return matchesSearch;
    if (versionFilter === "alpha") return matchesSearch && version.toLowerCase().includes("alpha");
    if (versionFilter === "beta") return matchesSearch && version.toLowerCase().includes("beta");
    if (versionFilter === "snapshot") return matchesSearch && (version.toLowerCase().includes("w") || version.toLowerCase().includes("c0"));
    if (versionFilter === "release") return matchesSearch && !version.toLowerCase().includes("alpha") && !version.toLowerCase().includes("beta") && !version.toLowerCase().includes("w") && !version.toLowerCase().includes("c0");
    
    return matchesSearch;
  });

  const getSuggestions = () => {
    if (searchTerm.length < 1) return [];
    return filteredVersions.slice(0, 8);
  };

  return (
    <div className="space-y-3 animate-bounce-in" style={{ animationDelay: '0.1s' }}>
      <Label htmlFor="version-search">{t('selector.minecraft_version', 'Версия Minecraft')}</Label>
      
      <div className="flex flex-wrap gap-1 md:gap-2 mb-2">
        <Button
          variant={versionFilter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setVersionFilter("all")}
          className="text-xs md:text-sm"
        >
          {t('filters.all', 'Все')}
        </Button>
        <Button
          variant={versionFilter === "release" ? "default" : "outline"}
          size="sm"
          onClick={() => setVersionFilter("release")}
          className="text-xs md:text-sm"
        >
          {t('filters.release', 'Релиз')}
        </Button>
        <Button
          variant={versionFilter === "snapshot" ? "default" : "outline"}
          size="sm"
          onClick={() => setVersionFilter("snapshot")}
          className="text-xs md:text-sm"
        >
          {t('filters.snapshot', 'Снапшоты')}
        </Button>
        <Button
          variant={versionFilter === "beta" ? "default" : "outline"}
          size="sm"
          onClick={() => setVersionFilter("beta")}
          className="text-xs md:text-sm"
        >
          {t('filters.beta', 'Бета')}
        </Button>
        <Button
          variant={versionFilter === "alpha" ? "default" : "outline"}
          size="sm"
          onClick={() => setVersionFilter("alpha")}
          className="text-xs md:text-sm"
        >
          {t('filters.alpha', 'Альфа')}
        </Button>
      </div>

      <div className="relative">
        <Input
          id="version-search"
          placeholder={t('selector.search_version', 'Поиск версии...')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-2 transition-all duration-300 focus:scale-[1.02] text-sm md:text-base"
        />
        
        {searchTerm && getSuggestions().length > 0 && (
          <div className="absolute top-full left-0 right-0 z-10 bg-background border rounded-md shadow-lg max-h-40 overflow-y-auto">
            {getSuggestions().map((version) => (
              <div
                key={version}
                className="px-3 py-2 hover:bg-accent cursor-pointer transition-colors text-sm md:text-base"
                onClick={() => {
                  onVersionChange(version);
                  setSearchTerm("");
                }}
              >
                {version}
              </div>
            ))}
          </div>
        )}
      </div>

      <Select value={selectedVersion} onValueChange={onVersionChange}>
        <SelectTrigger className="transition-all duration-300 hover:scale-[1.01] text-sm md:text-base">
          <SelectValue placeholder={t('selector.select_version', 'Выберите версию')} />
        </SelectTrigger>
        <SelectContent className="max-h-60">
          {filteredVersions.map((version) => (
            <SelectItem key={version} value={version} className="transition-colors hover:bg-accent text-sm md:text-base">
              {version}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
