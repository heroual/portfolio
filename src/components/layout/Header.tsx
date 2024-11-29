import { useState } from 'react';
import { Menu, Moon, Sun, X, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/context/LanguageContext';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">
          ELHEROUAL.dev
        </a>
        
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-8`}>
          <a href="#home" className="hover:text-primary transition-colors">{t('nav.home')}</a>
          <a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a>
          <a href="#projects" className="hover:text-primary transition-colors">{t('nav.projects')}</a>
          <a href="#skills" className="hover:text-primary transition-colors">{t('nav.skills')}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
          >
            <Languages className="h-5 w-5" />
            <span className="ml-2 text-sm font-medium">{language.toUpperCase()}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}