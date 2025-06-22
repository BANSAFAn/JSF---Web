
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface LoadingScreenProps {
  theme: 'light' | 'dark' | 'neon' | 'retro';
}

export const LoadingScreen = ({ theme }: LoadingScreenProps) => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center space-y-12 relative z-10">
        {/* JSF Logo with Dynamic Lighting */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            {/* Rotating Light Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 border-4 border-transparent border-t-cyan-400/30 border-r-purple-500/30 rounded-full animate-spin"></div>
              <div className="absolute w-64 h-64 border-4 border-transparent border-b-pink-500/30 border-l-blue-400/30 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '4s'}}></div>
              <div className="absolute w-48 h-48 border-4 border-transparent border-t-green-400/30 border-b-yellow-400/30 rounded-full animate-spin" style={{animationDuration: '6s'}}></div>
            </div>

            {/* Main JSF Text */}
            <div className="relative text-9xl font-black tracking-wider">
              {/* Glowing background text */}
              <div className="absolute inset-0 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text animate-pulse-glow blur-sm">
                JSF
              </div>
              
              {/* Main text with individual letter animations */}
              <div className="relative flex justify-center">
                <span className="inline-block text-white drop-shadow-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}>J</span>
                <span className="inline-block text-white drop-shadow-2xl animate-bounce" style={{animationDelay: '0.2s', animationDuration: '2s'}}>S</span>
                <span className="inline-block text-white drop-shadow-2xl animate-bounce" style={{animationDelay: '0.4s', animationDuration: '2s'}}>F</span>
              </div>
            </div>
            
            {/* Dynamic Light Beams */}
            <div className="absolute inset-0 -z-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 origin-center"
                  style={{
                    width: '300px',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#6366f1'][i]}, transparent)`,
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    animation: `spin ${4 + i * 0.5}s linear infinite`,
                    opacity: '0.6'
                  }}
                />
              ))}
            </div>
            
            {/* Pulsing Aura */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-cyan-400/20 via-purple-500/10 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
          </div>
        </div>
        
        {/* Loading Dots with Different Colors */}
        <div className="flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full shadow-lg animate-bounce`}
              style={{ 
                backgroundColor: ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][i],
                animationDelay: `${i * 0.15}s`,
                boxShadow: `0 0 20px ${['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][i]}50`
              }}
            />
          ))}
        </div>
        
        {/* Loading Text with Typewriter Effect */}
        <div className="space-y-4">
          <div className="text-white/90 text-xl font-medium">
            <span className="inline-block animate-pulse">
              {t('loading.text', 'Загрузка Java Selector...')}
            </span>
          </div>
          
          {/* Animated Progress Text */}
          <div className="text-cyan-400/80 text-sm font-mono">
            <span className="animate-pulse">Initializing components...</span>
          </div>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="w-96 h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg" 
               style={{
                 background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
                 backgroundSize: '200% 100%',
                 animation: 'shimmer 2s ease-in-out infinite'
               }}
          />
        </div>
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-cyan-400/30 rounded-tl-lg"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-4 border-t-4 border-purple-500/30 rounded-tr-lg"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-4 border-b-4 border-pink-500/30 rounded-bl-lg"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-green-400/30 rounded-br-lg"></div>
    </div>
  );
};
