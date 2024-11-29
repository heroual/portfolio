import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ELHEROUAL.dev</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-sm hover:text-primary transition-colors">{t('nav.home')}</a>
              <a href="#about" className="block text-sm hover:text-primary transition-colors">{t('nav.about')}</a>
              <a href="#projects" className="block text-sm hover:text-primary transition-colors">{t('nav.projects')}</a>
              <a href="#skills" className="block text-sm hover:text-primary transition-colors">{t('nav.skills')}</a>
              <a href="#contact" className="block text-sm hover:text-primary transition-colors">{t('nav.contact')}</a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <p className="text-sm">contact@elheroual.dev</p>
              <p className="text-sm">+1234567890</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.social')}</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            {t('footer.madeWith')} <Heart className="h-4 w-4 text-red-500" /> {t('footer.by')} ELHEROUAL SALAH EDDINE
          </p>
          <p>© {currentYear} ELHEROUAL.dev. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}