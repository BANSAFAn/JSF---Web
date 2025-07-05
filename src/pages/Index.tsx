
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { JavaFinderTabs } from '@/components/JavaFinderTabs';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen relative overflow-hidden">
          {/* Анимированный фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
            <div className="absolute inset-0">
              {/* Плавающие частицы */}
              <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              <div className="absolute top-60 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
              <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
              
              {/* Градиентные круги */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
          </div>
          
          {/* Контент */}
          <div className="relative z-10">
            <Header />
            <main>
              <JavaFinderTabs />
            </main>
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
