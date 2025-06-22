
import { javaProviders } from "@/data/compatibility";

export const getBestJavaProvider = (javaVersion: string) => {
  const providers = javaProviders[javaVersion as keyof typeof javaProviders];
  if (!providers || providers.length === 0) return null;
  
  // Найти рекомендуемый провайдер или взять первый
  return providers.find(p => p.recommended) || providers[0];
};

export const getAlternativeProviders = (javaVersion: string) => {
  const providers = javaProviders[javaVersion as keyof typeof javaProviders];
  if (!providers || providers.length <= 1) return [];
  
  const bestProvider = getBestJavaProvider(javaVersion);
  return providers.filter(p => p !== bestProvider);
};

export const generateLaunchCommand = (javaVersion: string, frameworks: string[]) => {
  const hasOptiFine = frameworks.includes('OptiFine');
  const hasForge = frameworks.includes('Forge') || frameworks.includes('NeoForge');
  
  let command = 'java -Xmx4G -Xms2G';
  
  if (hasOptiFine) command += ' -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=20';
  if (hasForge) command += ' -XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=2147483646';
  
  command += ' -jar minecraft.jar';
  return command;
};
