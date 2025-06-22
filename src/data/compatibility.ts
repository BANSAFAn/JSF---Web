export interface VersionData {
  recommendedJava: string;
  frameworks: string[];
  warnings?: string[];
  notes?: string;
}

export const minecraftVersions = [
  // Latest versions 2024-2025
  "1.21.4", "1.21.3", "1.21.2", "1.21.1", "1.21",
  "1.20.6", "1.20.5", "1.20.4", "1.20.3", "1.20.2", "1.20.1", "1.20",
  "1.19.4", "1.19.3", "1.19.2", "1.19.1", "1.19",
  "1.18.2", "1.18.1", "1.18",
  "1.17.1", "1.17",
  "1.16.5", "1.16.4", "1.16.3", "1.16.2", "1.16.1", "1.16",
  "1.15.2", "1.15.1", "1.15",
  "1.14.4", "1.14.3", "1.14.2", "1.14.1", "1.14",
  "1.13.2", "1.13.1", "1.13",
  "1.12.2", "1.12.1", "1.12",
  "1.11.2", "1.11.1", "1.11",
  "1.10.2", "1.10.1", "1.10",
  "1.9.4", "1.9.3", "1.9.2", "1.9.1", "1.9",
  "1.8.9", "1.8.8", "1.8.7", "1.8.6", "1.8.5", "1.8.4", "1.8.3", "1.8.2", "1.8.1", "1.8",
  "1.7.10", "1.7.9", "1.7.8", "1.7.7", "1.7.6", "1.7.5", "1.7.4", "1.7.2",
  "1.6.4", "1.6.2", "1.6.1",
  "1.5.2", "1.5.1",
  "1.4.7", "1.4.6", "1.4.5", "1.4.4", "1.4.2",
  "1.3.2", "1.3.1",
  "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1",
  "1.1", "1.0.0",
  
  // Snapshots 2024-2025
  "25w03a", "25w02a", "25w01a", "24w51a", "24w50a", "24w49a", "24w48a", "24w47a", "24w46a", "24w45a", 
  "24w44a", "24w40a", "24w39a", "24w38a", "24w37a", "24w36a", "24w35a", "24w34a", "24w33a", "24w32a", 
  "24w21b", "24w21a", "24w20a", "24w19b", "24w19a", "24w18a", "24w14a", "24w13a", "24w12a", "24w11a", 
  "24w10a", "24w09a", "24w07a", "24w06a", "24w05b", "24w05a", "24w04a", "24w03b", "24w03a",
  
  // Beta versions (2010-2011)
  "Beta 1.8.1", "Beta 1.8", "Beta 1.7.3", "Beta 1.7.2", "Beta 1.7", "Beta 1.6.6",
  "Beta 1.6.5", "Beta 1.6.4", "Beta 1.6.3", "Beta 1.6.2", "Beta 1.6.1", "Beta 1.6",
  "Beta 1.5.1", "Beta 1.5", "Beta 1.4.1", "Beta 1.4", "Beta 1.3.1", "Beta 1.3",
  "Beta 1.2.2", "Beta 1.2.1", "Beta 1.2", "Beta 1.1.2", "Beta 1.1", "Beta 1.0.2", "Beta 1.0",
  
  // Alpha versions (2009-2010)
  "Alpha v1.2.6", "Alpha v1.2.5", "Alpha v1.2.4", "Alpha v1.2.3", "Alpha v1.2.2", "Alpha v1.2.1", "Alpha v1.2.0",
  "Alpha v1.1.2", "Alpha v1.1.0", "Alpha v1.0.17", "Alpha v1.0.16", "Alpha v1.0.15", "Alpha v1.0.14",
  "Alpha v1.0.13", "Alpha v1.0.12", "Alpha v1.0.11", "Alpha v1.0.10", "Alpha v1.0.9", "Alpha v1.0.8",
  "Alpha v1.0.7", "Alpha v1.0.6", "Alpha v1.0.5", "Alpha v1.0.4", "Alpha v1.0.3", "Alpha v1.0.2", "Alpha v1.0.1",
  
  // Classic versions (2009)
  "c0.30_01c", "c0.30_01", "c0.28_01", "c0.27_01", "c0.26_ST", "c0.25_05", "c0.24_ST", "c0.23_01",
  "c0.0.23a", "c0.0.22a", "c0.0.21a", "c0.0.20a", "c0.0.19a", "c0.0.18a", "c0.0.17a", "c0.0.16a",
  "c0.0.15a", "c0.0.14a", "c0.0.13a", "c0.0.12a", "c0.0.11a"
];

export const compatibilityData: Record<string, VersionData> = {
  // Classic/Alpha versions (2009-2010)
  "c0.0.13a": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla"],
    notes: "Самая ранняя публичная версия"
  },
  "a1.0.0": {
    recommendedJava: "Java 6", 
    frameworks: ["Vanilla"],
    notes: "Первая альфа версия"
  },
  "a1.0.17": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla"], 
    notes: "Последняя альфа версия"
  },
  
  // Beta versions (2010-2011)
  "b1.0": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla"],
    notes: "Первая бета версия"
  },
  "b1.8.1": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla"],
    notes: "Последняя бета версия"
  },

  // Release versions (2011+)
  "1.0.0": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla"],
    notes: "Первый релиз"
  },
  "1.1": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla"],
    notes: ""
  },
  "1.2.5": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla", "Forge"],
    notes: ""
  },
  "1.3.2": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla", "Forge"],
    notes: ""
  },
  "1.4.7": {
    recommendedJava: "Java 6",
    frameworks: ["Vanilla", "Forge"],
    notes: ""
  },
  "1.5.2": {
    recommendedJava: "Java 7",
    frameworks: ["Vanilla", "Forge"],
    notes: ""
  },
  "1.6.4": {
    recommendedJava: "Java 7",
    frameworks: ["Vanilla", "Forge"],
    notes: ""
  },
  
  // Snapshots 2024-2025
  "25w03a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "25w02a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "25w01a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w51a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w50a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w49a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w48a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w47a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w46a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w45a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w44a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w40a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w39a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w38a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w37a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w36a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w35a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w34a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w33a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w32a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w21b": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w21a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w20a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w19b": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w19a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w18a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w14a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w13a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w12a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w11a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w10a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w09a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w07a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w06a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w05b": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w05a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w04a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w03b": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  "24w03a": { recommendedJava: "Java 21", frameworks: ["Vanilla", "Fabric", "Other"] },
  
  // Snapshots 2023
  "23w51b": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w51a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w46a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w45a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w44a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w43b": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w43a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w42a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w41a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w40a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w35a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w33a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w32a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w31a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w18a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w17a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w16a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w14a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w13a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "23w12a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },

  // Snapshots 2022
  "22w46a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w45a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w44a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w43a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w42a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w24a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w19a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w18a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w17a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w16a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w15a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w14a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w13a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w12a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w11a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w07a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w06a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w05a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },
  "22w03a": { recommendedJava: "Java 17", frameworks: ["Vanilla", "Fabric", "Other"] },

  // Snapshots 2021
  "21w44a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w43a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w42a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w41a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w40a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w39a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w38a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w37a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w20a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w19a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w18a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w17a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w16a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w15a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w14a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w13a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w11a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w10a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w08b": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w08a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w07a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w06a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w05b": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w05a": { recommendedJava: "Java 16", frameworks: ["Vanilla", "Fabric", "Other"] },
  "21w03a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },

  // Snapshots 2020
  "20w51a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w49a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w48a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w46a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w45a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w30a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w29a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w28a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w27a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w22a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w21a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w20b": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w20a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w19a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w18a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w17a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w16a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w15a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w14a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w13b": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w13a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w12a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w11a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w10a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w09a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w08a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w07a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] },
  "20w06a": { recommendedJava: "Java 8", frameworks: ["Vanilla", "Fabric", "Other"] }
};

export const javaProviders = {
  "Java 6": [
    {
      name: "Oracle Java SE 6",
      url: "https://www.oracle.com/java/technologies/javase-java-archive-javase6-downloads.html",
      description: "Официальный архив Oracle Java 6",
      recommended: true
    },
    {
      name: "OpenJDK 6",
      url: "https://jdk.java.net/archive/",
      description: "OpenJDK 6 архив"
    },
    {
      name: "AdoptOpenJDK 6",
      url: "https://adoptopenjdk.net/archive.html",
      description: "AdoptOpenJDK 6 архив"
    }
  ],
  "Java 7": [
    {
      name: "Oracle Java SE 7",
      url: "https://www.oracle.com/java/technologies/javase-java-archive-javase7-downloads.html",
      description: "Официальный архив Oracle Java 7",
      recommended: true
    },
    {
      name: "OpenJDK 7",
      url: "https://jdk.java.net/archive/",
      description: "OpenJDK 7 архив"
    },
    {
      name: "Zulu 7",
      url: "https://www.azul.com/downloads/zulu-community/",
      description: "Azul Zulu OpenJDK 7"
    },
    {
      name: "AdoptOpenJDK 7",
      url: "https://adoptopenjdk.net/archive.html",
      description: "AdoptOpenJDK 7 архив"
    }
  ],
  "Java 8": [
    {
      name: "Oracle Java SE 8",
      url: "https://www.oracle.com/java/technologies/javase-jdk8-downloads.html",
      description: "Официальная Java 8 от Oracle",
      recommended: true
    },
    {
      name: "Eclipse Temurin 8",
      url: "https://adoptium.net/temurin/releases/?version=8",
      description: "Eclipse Temurin JDK 8 (рекомендуется)"
    },
    {
      name: "Amazon Corretto 8",
      url: "https://aws.amazon.com/corretto/",
      description: "Amazon Corretto JDK 8"
    },
    {
      name: "Zulu 8",
      url: "https://www.azul.com/downloads/zulu-community/?version=java-8-lts",
      description: "Azul Zulu OpenJDK 8"
    },
    {
      name: "Red Hat OpenJDK 8",
      url: "https://developers.redhat.com/products/openjdk/download",
      description: "Red Hat OpenJDK 8"
    },
    {
      name: "Microsoft OpenJDK 8",
      url: "https://docs.microsoft.com/en-us/java/openjdk/download",
      description: "Microsoft Build of OpenJDK 8"
    }
  ],
  "Java 11": [
    {
      name: "Eclipse Temurin 11",
      url: "https://adoptium.net/temurin/releases/?version=11",
      description: "Eclipse Temurin JDK 11 (рекомендуется)",
      recommended: true
    },
    {
      name: "Oracle JDK 11",
      url: "https://www.oracle.com/java/technologies/javase-jdk11-downloads.html",
      description: "Oracle JDK 11"
    },
    {
      name: "Amazon Corretto 11",
      url: "https://aws.amazon.com/corretto/",
      description: "Amazon Corretto JDK 11"
    },
    {
      name: "Zulu 11",
      url: "https://www.azul.com/downloads/zulu-community/?version=java-11-lts",
      description: "Azul Zulu OpenJDK 11"
    },
    {
      name: "Red Hat OpenJDK 11",
      url: "https://developers.redhat.com/products/openjdk/download",
      description: "Red Hat OpenJDK 11"
    },
    {
      name: "Microsoft OpenJDK 11",
      url: "https://docs.microsoft.com/en-us/java/openjdk/download",
      description: "Microsoft Build of OpenJDK 11"
    }
  ],
  "Java 17": [
    {
      name: "Eclipse Temurin 17",
      url: "https://adoptium.net/temurin/releases/?version=17",
      description: "Eclipse Temurin JDK 17 (рекомендуется)",
      recommended: true
    },
    {
      name: "Oracle JDK 17",
      url: "https://www.oracle.com/java/technologies/javase-jdk17-downloads.html",
      description: "Oracle JDK 17 LTS"
    },
    {
      name: "Amazon Corretto 17",
      url: "https://aws.amazon.com/corretto/",
      description: "Amazon Corretto JDK 17"
    },
    {
      name: "Zulu 17",
      url: "https://www.azul.com/downloads/zulu-community/?version=java-17-lts",
      description: "Azul Zulu OpenJDK 17"
    },
    {
      name: "Red Hat OpenJDK 17",
      url: "https://developers.redhat.com/products/openjdk/download",
      description: "Red Hat OpenJDK 17"
    },
    {
      name: "Microsoft OpenJDK 17",
      url: "https://docs.microsoft.com/en-us/java/openjdk/download",
      description: "Microsoft Build of OpenJDK 17"
    },
    {
      name: "GraalVM 17",
      url: "https://www.graalvm.org/downloads/",
      description: "GraalVM JDK 17 (высокая производительность)"
    }
  ],
  "Java 21": [
    {
      name: "Eclipse Temurin 21",
      url: "https://adoptium.net/temurin/releases/?version=21",
      description: "Eclipse Temurin JDK 21 (рекомендуется)",
      recommended: true
    },
    {
      name: "Oracle JDK 21",
      url: "https://www.oracle.com/java/technologies/javase-jdk21-downloads.html",
      description: "Oracle JDK 21 LTS"
    },
    {
      name: "Amazon Corretto 21",
      url: "https://aws.amazon.com/corretto/",
      description: "Amazon Corretto JDK 21"
    },
    {
      name: "Zulu 21",
      url: "https://www.azul.com/downloads/zulu-community/?version=java-21-lts",
      description: "Azul Zulu OpenJDK 21"
    },
    {
      name: "Red Hat OpenJDK 21",
      url: "https://developers.redhat.com/products/openjdk/download",
      description: "Red Hat OpenJDK 21"
    },
    {
      name: "Microsoft OpenJDK 21",
      url: "https://docs.microsoft.com/en-us/java/openjdk/download",
      description: "Microsoft Build of OpenJDK 21"
    },
    {
      name: "GraalVM 21",
      url: "https://www.graalvm.org/downloads/",
      description: "GraalVM JDK 21 (высокая производительность)"
    }
  ]
};

// Framework compatibility rules
export const frameworkCompatibility = {
  "Forge": ["Vanilla", "OptiFine", "NeoForge", "Other"],
  "Fabric": ["Vanilla", "Other"],
  "NeoForge": ["Vanilla", "OptiFine", "Forge", "Other"],
  "OptiFine": ["Vanilla", "Forge", "NeoForge", "Other"],
  "Quilt": ["Vanilla", "Other"],
  "Vanilla": ["Forge", "Fabric", "NeoForge", "OptiFine", "Quilt", "Other"],
  "Other": ["Vanilla", "Forge", "Fabric", "NeoForge", "OptiFine", "Quilt"]
};
