
interface AnimatedBackgroundProps {
  theme: 'light' | 'dark' | 'neon' | 'retro';
}

export const AnimatedBackground = ({ theme }: AnimatedBackgroundProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(theme === 'neon' ? 80 : 50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${
              theme === 'neon' 
                ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                : theme === 'retro' 
                  ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' 
                  : 'bg-primary/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0">
        {[...Array(theme === 'neon' ? 15 : 10)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float ${
              theme === 'neon' 
                ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20' 
                : theme === 'retro' 
                  ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30' 
                  : 'bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10'
            }`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              borderRadius: theme === 'retro' ? '0' : '50%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlays */}
      <div className={`absolute inset-0 ${
        theme === 'neon' 
          ? 'bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-pink-900/10' 
          : theme === 'retro' 
            ? 'bg-gradient-to-br from-yellow-200/10 via-orange-200/10 to-red-200/10' 
            : 'bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5'
      }`} />
      
      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <svg
          className="absolute bottom-0 w-full h-full animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={`${
              theme === 'neon' 
                ? 'fill-cyan-500/20' 
                : theme === 'retro' 
                  ? 'fill-yellow-500/20' 
                  : 'fill-primary/10'
            }`}
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ animationDelay: '1s' }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className={`${
              theme === 'neon' 
                ? 'fill-purple-500/15' 
                : theme === 'retro' 
                  ? 'fill-orange-500/15' 
                  : 'fill-accent/8'
            }`}
          />
        </svg>
      </div>
    </div>
  );
};
