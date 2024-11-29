import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/context/LanguageContext';
import { AnimatedText } from '@/components/ui/animated-text';
import { useRef } from 'react';
import { Canvas } from '@/components/three/Canvas';

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <Canvas className="absolute inset-0 z-0" />
      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 px-4 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <AnimatedText
              text={`${t('hero.greeting')} ELHEROUAL SALAH EDDINE`}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-6"
            >
              {t('hero.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-lg mb-8 max-w-2xl"
            >
              {t('hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-purple-500 hover:opacity-90"
              >
                {t('hero.viewProjects')}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary hover:bg-primary/10"
              >
                {t('hero.downloadCV')}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex justify-center md:justify-start gap-4 mt-8"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="flex-1 max-w-md relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="ELHEROUAL SALAH EDDINE"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto relative z-10 border-4 border-primary/20"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}