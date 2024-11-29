import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg mb-6">
              {t('about.description2')}
            </p>
            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{t('about.education')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('about.educationDetails')}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{t('about.experience')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('about.experienceDetails')}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{t('about.interests')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('about.interestsDetails')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Working on code"
              className="rounded-lg shadow-lg relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}