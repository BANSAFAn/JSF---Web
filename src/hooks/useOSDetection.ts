
import { useState, useEffect } from 'react';

export type OSType = 'Windows' | 'macOS' | 'Linux' | 'Unknown';

export const useOSDetection = () => {
  const [detectedOS, setDetectedOS] = useState<OSType>('Unknown');
  const [userOS, setUserOS] = useState<OSType>('Unknown');
  const [showOSNotification, setShowOSNotification] = useState(false);

  useEffect(() => {
    const detectOS = (): OSType => {
      const userAgent = window.navigator.userAgent;
      const platform = window.navigator.platform;
      
      if (/Win/.test(platform)) return 'Windows';
      if (/Mac/.test(platform)) return 'macOS';
      if (/Linux/.test(platform)) return 'Linux';
      if (/Android/.test(userAgent)) return 'Linux';
      if (/iPhone|iPad/.test(userAgent)) return 'macOS';
      
      return 'Unknown';
    };

    const os = detectOS();
    setDetectedOS(os);
    setUserOS(os);
    
    if (os !== 'Unknown') {
      setShowOSNotification(true);
      setTimeout(() => setShowOSNotification(false), 5000);
    }
  }, []);

  return {
    detectedOS,
    userOS,
    setUserOS,
    showOSNotification,
    setShowOSNotification
  };
};
