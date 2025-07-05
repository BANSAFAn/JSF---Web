export interface MinecraftVersion {
  version: string;
  javaVersion: number;
  popular?: boolean;
  releaseTime?: string;
  type: 'release' | 'snapshot' | 'old_beta' | 'old_alpha';
}

export interface Framework {
  id: string;
  name: string;
  popular?: boolean;
}

export interface JavaSource {
  name: string;
  url: string;
  verified: boolean;
  architecture: string[];
  checkUrl?: string;
}

export interface CompatibilityCheck {
  isCompatible: boolean;
  detectedJavaVersion?: string;
  systemInfo: {
    os: string;
    architecture: string;
    javaInstalled: boolean;
  };
}

export interface JavaRecommendation {
  javaVersion: string;
  description: string;
  primarySource: JavaSource;
  alternativeSources: JavaSource[];
  installInstructions: {
    windows: string;
    macos: string;
    linux: string;
  };
  compatibilityCheck?: CompatibilityCheck;
}

export const frameworks: Framework[] = [
  { id: 'vanilla', name: 'Vanilla (No Mods)', popular: true },
  { id: 'forge', name: 'Forge', popular: true },
  { id: 'fabric', name: 'Fabric', popular: true },
  { id: 'quilt', name: 'Quilt' },
  { id: 'neoforge', name: 'NeoForge' },
  { id: 'optifine', name: 'OptiFine', popular: true },
  { id: 'forge-optifine', name: 'Forge + OptiFine' },
];

const javaSourcesMap: Record<number, JavaSource[]> = {
  8: [
    {
      name: 'Oracle JDK 8',
      url: 'https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html',
      verified: true,
      architecture: ['x64', 'x86', 'arm64'],
      checkUrl: 'https://www.java.com/verify/'
    },
    {
      name: 'Adoptium Eclipse Temurin 8',
      url: 'https://adoptium.net/temurin/releases/?version=8',
      verified: true,
      architecture: ['x64', 'x86', 'arm64']
    },
    {
      name: 'Amazon Corretto 8',
      url: 'https://aws.amazon.com/corretto/',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Azul Zulu 8',
      url: 'https://www.azul.com/downloads/?version=java-8-lts&package=jdk',
      verified: true,
      architecture: ['x64', 'x86', 'arm64']
    }
  ],
  11: [
    {
      name: 'Adoptium Eclipse Temurin 11',
      url: 'https://adoptium.net/temurin/releases/?version=11',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Oracle JDK 11',
      url: 'https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Amazon Corretto 11',
      url: 'https://aws.amazon.com/corretto/',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Microsoft OpenJDK 11',
      url: 'https://docs.microsoft.com/en-us/java/openjdk/download',
      verified: true,
      architecture: ['x64', 'arm64']
    }
  ],
  17: [
    {
      name: 'Adoptium Eclipse Temurin 17',
      url: 'https://adoptium.net/temurin/releases/?version=17',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Oracle JDK 17',
      url: 'https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Amazon Corretto 17',
      url: 'https://aws.amazon.com/corretto/',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Azul Zulu 17',
      url: 'https://www.azul.com/downloads/?version=java-17-lts&package=jdk',
      verified: true,
      architecture: ['x64', 'arm64']
    }
  ],
  21: [
    {
      name: 'Adoptium Eclipse Temurin 21',
      url: 'https://adoptium.net/temurin/releases/?version=21',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Oracle JDK 21',
      url: 'https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html',
      verified: true,
      architecture: ['x64', 'arm64']
    },
    {
      name: 'Amazon Corretto 21',
      url: 'https://aws.amazon.com/corretto/',
      verified: true,
      architecture: ['x64', 'arm64']
    }
  ]
};

export const detectOS = (): string => {
  if (typeof window === 'undefined') return 'linux';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'macos';
  return 'linux';
};

export const detectArchitecture = (): string => {
  if (typeof window === 'undefined') return 'x64';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('arm64') || userAgent.includes('aarch64')) return 'arm64';
  if (userAgent.includes('x86_64') || userAgent.includes('amd64')) return 'x64';
  if (userAgent.includes('i386') || userAgent.includes('i686')) return 'x86';
  
  return 'x64';
};

export const fetchMinecraftVersions = async (): Promise<Record<string, MinecraftVersion[]>> => {
  try {
    const response = await fetch('https://launchermeta.mojang.com/mc/game/version_manifest.json');
    const data = await response.json();
    
    const versionGroups: Record<string, MinecraftVersion[]> = {
      'Release': [],
      'Snapshot': [],
      'Beta': [],
      'Alpha': []
    };

    data.versions.forEach((version: any) => {
      const javaVersion = getJavaVersionForMinecraft(version.id);
      const mcVersion: MinecraftVersion = {
        version: version.id,
        javaVersion,
        releaseTime: version.releaseTime,
        type: version.type,
        popular: isPopularVersion(version.id)
      };

      switch (version.type) {
        case 'release':
          versionGroups['Release'].push(mcVersion);
          break;
        case 'snapshot':
          versionGroups['Snapshot'].push(mcVersion);
          break;
        case 'old_beta':
          versionGroups['Beta'].push(mcVersion);
          break;
        case 'old_alpha':
          versionGroups['Alpha'].push(mcVersion);
          break;
      }
    });

    // Ограничить количество версий для лучшей производительности
    Object.keys(versionGroups).forEach(key => {
      versionGroups[key] = versionGroups[key].slice(0, 50);
    });

    return versionGroups;
  } catch (error) {
    console.error('Failed to fetch Minecraft versions:', error);
    return getDefaultMinecraftVersions();
  }
};

const getJavaVersionForMinecraft = (version: string): number => {
  // Логика определения версии Java на основе версии Minecraft
  if (version.startsWith('1.20') || version.startsWith('1.19') || version.startsWith('1.18')) {
    return 17;
  }
  if (version.startsWith('1.17')) {
    return 16;
  }
  if (version.includes('24w') || version.includes('1.21')) {
    return 21;
  }
  return 8;
};

const isPopularVersion = (version: string): boolean => {
  const popularVersions = [
    '1.20.4', '1.20.2', '1.20.1', '1.19.4', '1.19.2', 
    '1.18.2', '1.17.1', '1.16.5', '1.12.2', '1.8.9', '1.7.10'
  ];
  return popularVersions.includes(version);
};

const getDefaultMinecraftVersions = (): Record<string, MinecraftVersion[]> => {
  return {
    'Release': [
      { version: '1.20.4', javaVersion: 17, popular: true, type: 'release' },
      { version: '1.20.2', javaVersion: 17, popular: true, type: 'release' },
      { version: '1.19.4', javaVersion: 17, popular: true, type: 'release' },
      { version: '1.19.2', javaVersion: 17, popular: true, type: 'release' },
      { version: '1.18.2', javaVersion: 17, popular: true, type: 'release' },
      { version: '1.17.1', javaVersion: 16, popular: true, type: 'release' },
      { version: '1.16.5', javaVersion: 8, popular: true, type: 'release' },
      { version: '1.12.2', javaVersion: 8, popular: true, type: 'release' },
      { version: '1.8.9', javaVersion: 8, popular: true, type: 'release' },
      { version: '1.7.10', javaVersion: 8, popular: true, type: 'release' },
    ],
    'Snapshot': [],
    'Beta': [],
    'Alpha': []
  };
};

export const checkJavaCompatibility = async (): Promise<CompatibilityCheck> => {
  const os = detectOS();
  const architecture = detectArchitecture();
  
  try {
    // Онлайн проверка через публичный API
    const response = await fetch('https://api.adoptium.net/v3/info/available_releases', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      const availableVersions = data.available_releases || [];
      
      // Проверяем доступность популярных версий Java
      const recommendedVersions = [8, 11, 17, 21];
      const hasRecommendedJava = recommendedVersions.some(version => 
        availableVersions.includes(version)
      );
      
      return {
        isCompatible: hasRecommendedJava,
        systemInfo: {
          os,
          architecture,
          javaInstalled: hasRecommendedJava
        }
      };
    }
    
    // Fallback к локальной проверке
    return fallbackCompatibilityCheck(os, architecture);
  } catch (error) {
    console.error('Online compatibility check failed:', error);
    return fallbackCompatibilityCheck(os, architecture);
  }
};

const fallbackCompatibilityCheck = (os: string, architecture: string): CompatibilityCheck => {
  // Базовая проверка совместимости архитектуры
  const supportedArchitectures = ['x64', 'arm64'];
  const isArchitectureSupported = supportedArchitectures.includes(architecture);
  
  return {
    isCompatible: isArchitectureSupported,
    systemInfo: {
      os,
      architecture,
      javaInstalled: false // Не можем определить без онлайн проверки
    }
  };
};

export const getJavaRecommendation = (version: string, framework: string): JavaRecommendation => {
  const javaVersion = getJavaVersionForMinecraft(version);
  
  // Некоторые фреймворки требуют более новые версии Java
  let requiredJava = javaVersion;
  if (framework === 'neoforge' && requiredJava < 17) {
    requiredJava = 17;
  }
  
  const sources = javaSourcesMap[requiredJava] || javaSourcesMap[8];
  const javaVersionName = `Java ${requiredJava}`;
  
  return {
    javaVersion: javaVersionName,
    description: `Required for Minecraft ${version} with ${frameworks.find(f => f.id === framework)?.name}`,
    primarySource: sources[0],
    alternativeSources: sources.slice(1),
    installInstructions: {
      windows: `1. Загрузите Windows installer (.exe) по ссылке выше
2. Запустите установщик от имени администратора
3. Следуйте инструкциям мастера установки
4. Проверьте установку, открыв Командную строку и введя: java -version
5. Установите переменную JAVA_HOME в папку установки Java`,
      macos: `1. Загрузите macOS installer (.dmg) по ссылке выше
2. Дважды щёлкните по файлу .dmg для монтирования
3. Запустите пакет установки
4. Проверьте установку, открыв Терминал и введя: java -version
5. При необходимости установите JAVA_HOME: export JAVA_HOME=$(/usr/libexec/java_home -v ${requiredJava})`,
      linux: `1. Загрузите Linux tar.gz архив по ссылке выше
2. Распакуйте: tar -xzf openjdk-${requiredJava}_linux-x64_bin.tar.gz
3. Переместите в /opt: sudo mv jdk-${requiredJava}* /opt/jdk-${requiredJava}
4. Установите JAVA_HOME: export JAVA_HOME=/opt/jdk-${requiredJava}
5. Добавьте в PATH: export PATH=$JAVA_HOME/bin:$PATH
6. Сделайте постоянным, добавив в ~/.bashrc или ~/.profile`
    }
  };
};
