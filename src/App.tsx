import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';
import {
  Menu,
  Shield,
  Heart,
  Droplet,
  Sparkles,
  Recycle,
  Bot,
  BarChart,
  BookOpen,
  MapPin,
  Clock,
  ChevronRight,
  Twitter,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Users,
  Award,
  Globe,
  Send,
  Mail,
  Linkedin,
  Facebook
} from 'lucide-react';
import { motion } from 'framer-motion';

const HeroIllustration = () => (
  <div className="relative mx-auto w-full max-w-[560px] aspect-[4/3]">
    <div className="absolute inset-0 rounded-[2.5rem] border border-primary/10 bg-gradient-to-br from-sky-50 via-white to-emerald-50 shadow-[0_30px_80px_-30px_rgba(25,118,210,0.35)]" />
    <svg viewBox="0 0 600 500" className="relative h-full w-full">
      <rect x="40" y="40" width="520" height="420" rx="36" fill="#ffffff" />
      <circle cx="500" cy="120" r="92" fill="#eaf8ff" />
      <circle cx="140" cy="430" r="110" fill="#eaf9ef" />
      <path d="M90 390H510" stroke="#dbeef9" strokeWidth="10" strokeLinecap="round" />

      <rect x="100" y="260" width="140" height="120" rx="18" fill="#e8f5ff" />
      <rect x="118" y="235" width="104" height="40" rx="14" fill="#2aae66" />
      <rect x="142" y="208" width="56" height="28" rx="10" fill="#1f77e0" />
      <rect x="122" y="278" width="76" height="58" rx="10" fill="#ffffff" />
      <path d="M175 278V236" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />
      <rect x="198" y="278" width="24" height="24" rx="6" fill="#1f77e0" />
      <path d="M210 302V330" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />
      <path d="M198 330H234" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />

      <rect x="256" y="290" width="70" height="92" rx="18" fill="#1f77e0" />
      <rect x="264" y="250" width="54" height="44" rx="16" fill="#2aae66" />
      <circle cx="291" cy="220" r="30" fill="#fdfefe" />
      <rect x="256" y="320" width="70" height="40" rx="14" fill="#dff6ea" />
      <path d="M290 382V342" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />
      <path d="M268 382H312" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />

      <rect x="348" y="292" width="48" height="90" rx="14" fill="#ffffff" stroke="#1f77e0" strokeWidth="8" />
      <rect x="360" y="264" width="24" height="28" rx="8" fill="#2aae66" />
      <circle cx="372" cy="248" r="18" fill="#fdfefe" />
      <rect x="354" y="316" width="36" height="18" rx="8" fill="#e8f5ff" />
      <path d="M372 382V334" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />
      <path d="M354 382H390" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />

      <rect x="420" y="214" width="108" height="150" rx="24" fill="#ffffff" stroke="#1f77e0" strokeWidth="8" />
      <rect x="438" y="232" width="72" height="86" rx="16" fill="#eaf8ff" />
      <rect x="446" y="248" width="56" height="18" rx="8" fill="#1f77e0" />
      <rect x="446" y="276" width="42" height="12" rx="6" fill="#2aae66" />
      <circle cx="470" cy="326" r="12" fill="#2aae66" />
      <path d="M470 338V354" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />
      <path d="M454 354H486" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />

      <rect x="214" y="132" width="90" height="80" rx="22" fill="#ffffff" stroke="#2aae66" strokeWidth="8" />
      <rect x="232" y="150" width="54" height="22" rx="10" fill="#dff6ea" />
      <path d="M242 188L258 166L274 188" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M226 176C248 154 260 154 282 176" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />

      <circle cx="452" cy="122" r="34" fill="#ffffff" stroke="#1f77e0" strokeWidth="8" />
      <path d="M452 96V148" stroke="#1f77e0" strokeWidth="8" strokeLinecap="round" />
      <path d="M426 122H478" stroke="#2aae66" strokeWidth="8" strokeLinecap="round" />

      <path d="M112 152C150 116 190 110 218 122" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />
      <path d="M324 134H378" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />
      <path d="M378 134L404 106" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />
      <path d="M342 170C368 150 396 150 422 165" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />

      <path d="M470 110C492 94 510 96 522 108" stroke="#2aae66" strokeWidth="8" strokeLinecap="round" />
      <path d="M482 144C500 136 514 138 526 150" stroke="#1f77e0" strokeWidth="8" strokeLinecap="round" />

      <path d="M102 142C116 124 132 115 148 116" stroke="#2aae66" strokeWidth="8" strokeLinecap="round" />
      <path d="M118 120C126 102 142 97 158 98" stroke="#1f77e0" strokeWidth="8" strokeLinecap="round" />

      <path d="M148 132C162 126 176 126 190 134" stroke="#2aae66" strokeWidth="8" strokeLinecap="round" />
      <path d="M150 150C168 146 182 146 196 152" stroke="#1f77e0" strokeWidth="8" strokeLinecap="round" />

      <path d="M504 332C520 308 532 300 546 302" stroke="#1f77e0" strokeWidth="10" strokeLinecap="round" />
      <path d="M514 344C530 330 540 328 552 332" stroke="#2aae66" strokeWidth="10" strokeLinecap="round" />

      <path d="M90 382C106 360 122 348 138 348" stroke="#2aae66" strokeWidth="8" strokeLinecap="round" />
      <path d="M104 400C120 384 136 376 154 374" stroke="#1f77e0" strokeWidth="8" strokeLinecap="round" />
    </svg>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>
        <HeroSection />
        <StatisticsSection />
        <FeaturesSection />
        <MissionSection />
        <MeetTheVisionarySection />
        <RoadmapSection />
        <HowItWorksSection />
        <LatestCommunityReportsSection />
        <ImpactSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#Features' },
    { name: 'Report Issue', href: '# Report' },
    { name: 'Dashboard', href: '#' },
    { name: 'AI Assistant', href: '#Features' },
    { name: 'About', href: '#About' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-3 group">
            <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/1515983f-d128-4434-8853-ec2f6bbc6ba1/1783586098686_a_vector_style_digital_illustration_logo_for_heal.png" 
                alt="HealthWASH Logo" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" 
            />
            <span className="text-xl font-bold tracking-tight">HealthWASH<span className="text-primary">Smart</span></span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex rounded-full px-6" variant="default">
              Get Started
            </Button>
            
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px]">
                <div className="flex flex-col space-y-6 p-6 mt-8">
                  {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-2xl font-bold hover:text-primary transition-colors" 
                        onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="rounded-full py-6 text-lg mt-4">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => (
    <section id ="home"className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-card">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-primary" />
        </svg>
        </div>

        

       
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
    <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full text-primary border-primary/20 bg-primary/5 font-bold uppercase tracking-widest text-xs">
              Innovating WASH Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
              <span className="text-primary">HealthWASH</span> <br className="hidden lg:block" /> Community Monitoring
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
              Empowering Communities Through Smart Water, Sanitation, Hygiene ( WASH ) And AI-Driven Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full px-10 py-8 text-xl bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/25">
                <Send className="mr-2 h-6 w-6" /> Report a WASH Issue
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 py-8 text-xl hover:bg-primary/5 transition-all">
                Explore Solution
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-[3rem] bg-primary/10 blur-3xl opacity-60" />
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-background fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
);

const StatisticsSection = () => {
    const stats = [
      {
        icon: <Send className="w-8 h-8" />,
        value: '24,580',
        label: 'Total Reports',
        description: 'Issues reported by community members.',
        color: 'text-primary',
        bg: 'bg-primary/10',
      },
      {
        icon: <Globe className="w-8 h-8" />,
        value: '315',
        label: 'Communities Covered',
        description: 'Actively monitored communities.',
        color: 'text-secondary',
        bg: 'bg-secondary/10',
      },
      {
        icon: <Shield className="w-8 h-8" />,
        value: '18,920',
        label: 'Issues Resolved',
        description: 'Successfully addressed reports.',
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
      },
      {
        icon: <Users className="w-8 h-8" />,
        value: '1,240',
        label: 'Registered Volunteers',
        description: 'Dedicated community health advocates.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
      },
    ];
  
    return (
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-500 rounded-[2rem] border-none bg-card group hover:-translate-y-2 overflow-hidden premium-shadow">
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${stat.bg.replace('/10', '')}`} />
                  <CardContent className="p-10">
                    <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-2xl ${stat.bg} ${stat.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-5xl font-black tracking-tight mb-2">{stat.value}</h3>
                    <p className="text-lg font-bold text-foreground mb-3">{stat.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

const FeaturesSection = () => {
    const features = [
        { icon: <Recycle className="w-8 h-8" />, title: 'Community Reporting', description: 'Easily report issues like unsafe water or poor sanitation via our mobile-friendly web app.' },
        { icon: <Droplet className="w-8 h-8" />, title: 'Smart Water Monitoring', description: 'Real-time tracking of water quality and borehole functionality to ensure safety.' },
        { icon: <Shield className="w-8 h-8" />, title: 'Sanitation Tracking', description: 'Monitor waste management and public toilet conditions to prevent disease outbreaks.' },
        { icon: <Bot className="w-8 h-8" />, title: 'AI Assistant', description: 'Our AI analyzes reports, identifies trends, and provides actionable insights for authorities.' },
        { icon: <BarChart className="w-8 h-8" />, title: 'Real-Time Analytics', description: 'Interactive dashboards for NGOs and governments to visualize data and make informed decisions.' },
        { icon: <BookOpen className="w-8 h-8" />, title: 'Community Education', description: 'Access resources and information on best practices for hygiene and sanitation.' },
    ];

    return (
        <section id ="Features"className="py-24 bg-card relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">Our Key Features</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A comprehensive suite of tools for a healthier and more resilient community.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="text-center p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 border-none bg-background/50 backdrop-blur-sm group hover:-translate-y-2 h-full premium-shadow">
                                <div className="flex justify-center mb-8">
                                    <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-background fill-current">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
            </div>
        </section>
    );
};

const MissionSection = () => (
    <section id ="About"className="py-24 bg-background overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight">Why <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">HealthWASH</span>?</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        HealthWASH bridges the gap between communities and decision-makers. We empower citizens to be the eyes and ears on the ground, while providing authorities, NGOs, and researchers with the critical data needed to solve public health challenges efficiently.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                        By leveraging AI and digital technology, we accelerate the response to urgent WASH issues, creating healthier environments for everyone. Our commitment is to data-driven health equity for all.
                    </p>
                    <div className="grid grid-cols-2 gap-8 p-8 rounded-[2rem] bg-card premium-shadow border border-primary/5">
                        <div className="space-y-1">
                            <span className="text-4xl font-black text-primary">95%</span>
                            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Faster Response</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-4xl font-black text-secondary">100%</span>
                            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Transparent Data</p>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6"
                >
                    <div className="space-y-6 pt-12">
                        <div className="h-64 bg-primary/5 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center premium-shadow">
                             <Droplet className="w-16 h-16 text-primary mb-4 opacity-80" />
                             <span className="font-bold">Clean Water</span>
                        </div>
                        <div className="h-80 bg-secondary/5 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center premium-shadow">
                             <Users className="w-16 h-16 text-secondary mb-4 opacity-80" />
                             <span className="font-bold">Community Driven</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="h-80 bg-orange-500/5 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center premium-shadow">
                             <Shield className="w-16 h-16 text-orange-500 mb-4 opacity-80" />
                             <span className="font-bold">Health Safety</span>
                        </div>
                        <div className="h-64 bg-blue-500/5 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center premium-shadow">
                             <Bot className="w-16 h-16 text-blue-500 mb-4 opacity-80" />
                             <span className="font-bold">AI Analytics</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const MeetTheVisionarySection = () => (
    <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative mx-auto md:mx-0"
                >
                    <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[12px] border-background premium-shadow">
                        <img 
                            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a052778e-9443-4061-8eef-55c4cbd5c6de/fatima-idris-ceo-47f48f1b-1783586268969.webp" 
                            alt="Fatima Idris - CEO"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-10 tracking-tight leading-tight">Meet the Visionary <br /> Behind <span className="text-primary">HealthWash</span></h2>
                    <div className="mb-8">
                        <h3 className="text-3xl font-black text-primary mb-1">Fatima Idris</h3>
                        <p className="text-lg font-bold text-muted-foreground uppercase tracking-widest">Founder & CEO, HealthWash Limited</p>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Fatima Idris is a pioneer in digital public health monitoring. With a background in epidemiology and software engineering, she recognized the potential for AI to bridge the gap in community health data across emerging markets. Under her leadership, HealthWash has grown into a global leader in WASH technology.
                    </p>
                    <div className="bg-primary/5 p-10 rounded-[2.5rem] border-l-[6px] border-primary mb-10 shadow-inner">
                        <p className="text-xl font-bold italic text-primary leading-relaxed">
                            "Our mission is simple: use technology to give every community a voice and every citizen a healthier future. We aren't just building apps; we're building health equity."
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                        <Button className="rounded-full px-10 py-7 text-xl font-bold shadow-lg shadow-primary/20">
                             Contact the Founder
                        </Button>
                        <div className="flex items-center space-x-3">
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-white transition-all premium-shadow"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-background border hover:bg-primary hover:text-white transition-all premium-shadow"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const RoadmapSection = () => {
    const phases = [
        { phase: 'Phase 1', title: 'HSCMS Launch', description: 'Rollout of the base Smart Community Monitoring System in 5 major hubs.', icon: <Shield className="w-6 h-6" /> },
        { phase: 'Phase 2', title: 'IoT Integration', description: 'Direct real-time sensor integration for automated water quality alerts.', icon: <Droplet className="w-6 h-6" /> },
        { phase: 'Phase 3', title: 'AI Governance', description: 'Deploying AI models to predict disease outbreaks and guide resource allocation.', icon: <Bot className="w-6 h-6" /> },
        { phase: 'Phase 4', title: 'Global Scaling', description: 'Expansion to 25+ countries across 3 continents by 2030.', icon: <Globe className="w-6 h-6" /> },
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Vision for the Future</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">A data-driven roadmap to transform global community health standards.</p>
                </div>
                
                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/5 via-primary/40 to-primary/5 -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {phases.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-card p-10 rounded-[2.5rem] premium-shadow border-none group hover:bg-primary transition-all duration-700"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-inner">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-black uppercase tracking-[0.2em] text-primary group-hover:text-white/80 mb-2 block">{item.phase}</span>
                                <h3 className="text-2xl font-black group-hover:text-white mb-4 transition-colors">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed group-hover:text-white/70 transition-colors">{item.description}</p>
                                <div className="mt-8 pt-6 border-t border-primary/5 group-hover:border-white/10 flex items-center text-primary group-hover:text-white font-bold cursor-pointer">
                                    Read Strategy <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const steps = [
      { number: '01', title: 'Identify & Report', description: 'Use our app to snap a photo and describe any WASH issue in seconds.' },
      { number: '02', title: 'AI Analysis', description: 'Our AI engine categorizes and validates the report for instant action.' },
      { number: '03', title: 'Rapid Response', description: 'Alerts are automatically routed to verified partners and authorities.' },
      { number: '04', title: 'Verify Resolution', description: 'Get notified when the issue is resolved and verify the results.' },
    ];
  
    return (
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A seamless loop between community action and professional resolution.</p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="text-center flex flex-col items-center group">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 rounded-[2rem] bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black mb-8 z-10 shadow-2xl shadow-primary/30 relative"
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-[2rem] scale-90 blur-sm group-hover:scale-105 transition-transform"></div>
                    <span className="relative">{step.number}</span>
                  </motion.div>
                  <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(25%*${index+1})] w-full h-px border-t-2 border-dashed border-primary/20 -z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

const LatestCommunityReportsSection = () => {
    const reports = [
      { category: 'Unsafe Borehole', title: 'Contaminated water source', location: 'Kibera, Nairobi', status: 'Pending', date: '2024-07-20', icon: <Droplet className="w-6 h-6 text-red-500" />, thumb: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=400' },
      { category: 'Blocked Drainage', title: 'Severe blockage causing floods', location: 'Makoko, Lagos', status: 'In Progress', date: '2024-07-19', icon: <Recycle className="w-6 h-6 text-yellow-500" />, thumb: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=400' },
      { category: 'Overflowing Waste', title: 'Public dump site overflowing', location: 'Ajegunle, Lagos', status: 'Resolved', date: '2024-07-18', icon: <Sparkles className="w-6 h-6 text-green-500" />, thumb: 'https://images.unsplash.com/photo-1591193686104-fddbaafcb553?auto=format&fit=crop&q=80&w=400' },
    ];
  
    const statusColors = {
      Pending: 'bg-red-500/10 text-red-600 border-red-500/20',
      'In Progress': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      Resolved: 'bg-green-500/10 text-green-600 border-green-500/20',
    };
  
    return (
      <section id ="Report"className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Community Reports</h2>
                <p className="text-xl text-muted-foreground">Real-time transparency from the ground up.</p>
            </div>
            <Button variant="outline" className="rounded-full px-8 py-6 font-bold group">
                View All Reports <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-[2.5rem] overflow-hidden border-none bg-card premium-shadow group">
                  <div className="h-64 overflow-hidden relative">
                    <img src={report.thumb} alt={report.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 right-6">
                        <Badge variant="secondary" className={`${statusColors[report.status as keyof typeof statusColors]} backdrop-blur-md px-4 py-2 text-sm font-black border uppercase tracking-wider`}>
                            {report.status}
                        </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2.5 rounded-xl bg-background shadow-inner">{report.icon}</div>
                        <span className="font-black text-sm uppercase tracking-widest opacity-60">{report.category}</span>
                    </div>
                    <h3 className="font-black text-2xl mb-6 leading-tight group-hover:text-primary transition-colors">{report.title}</h3>
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center text-muted-foreground font-medium">
                            <MapPin className="w-5 h-5 mr-3 text-primary/60" />
                            <span>{report.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground font-medium">
                            <Clock className="w-5 h-5 mr-3 text-primary/60" />
                            <span>{report.date}</span>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

const ImpactSection = () => {
    const impacts = [
        { title: '100M+', label: 'Citizens Reached', icon: <Users className="w-10 h-10" />, color: 'bg-primary' },
        { title: '50,000+', label: 'Digital Hubs', icon: <Globe className="w-10 h-10" />, color: 'bg-secondary' },
        { title: '1,000+', label: 'Govt Partners', icon: <Award className="w-10 h-10" />, color: 'bg-orange-500' },
    ];

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="impact-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M0 60 L60 0 M-15 15 L15 -15 M45 75 L75 45" stroke="currentColor" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#impact-pattern)" />
                </svg>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <Badge className="mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary border-primary/20 font-black uppercase tracking-[0.2em] text-xs">The Vision 2035</Badge>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic">Our Global Impact</h2>
                    <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Defining the next generation of public health infrastructure.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {impacts.map((impact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="relative group"
                        >
                            <div className={`absolute -inset-4 ${impact.color} opacity-10 blur-3xl rounded-[3rem] group-hover:opacity-30 transition-all duration-1000`}></div>
                            <div className="relative bg-card p-12 rounded-[3rem] text-center premium-shadow border border-white/5 overflow-hidden h-full flex flex-col justify-center">
                                <div className={`mx-auto w-24 h-24 rounded-3xl flex items-center justify-center text-white ${impact.color} mb-10 shadow-2xl shadow-black/10 group-hover:rotate-6 transition-transform duration-500`}>
                                    {impact.icon}
                                </div>
                                <h3 className="text-6xl font-black tracking-tighter mb-4">{impact.title}</h3>
                                <p className="text-xl font-bold text-muted-foreground uppercase tracking-widest">{impact.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PartnersSection = () => {
    const partners = [
        { name: 'UNICEF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UNICEF_logo.svg/2560px-UNICEF_logo.svg.png' },
        { name: 'WHO', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Logo_of_the_World_Health_Organization.svg/1024px-Logo_of_the_World_Health_Organization.svg.png' },
        { name: 'UNDP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/UNDP_logo.svg/1200px-UNDP_logo.svg.png' },
        { name: 'Nigeria', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Coat_of_arms_of_Nigeria.svg/1200px-Coat_of_arms_of_Nigeria.svg.png' },
        { name: 'World Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/The_World_Bank_logo.svg/1200px-The_World_Bank_logo.svg.png' },
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
    ];
  
    return (
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Strategic Alliances</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We collaborate with world-leading organizations to scale our technological impact and save lives.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1, filter: 'grayscale(0%)', opacity: 1 }}
                className="grayscale opacity-40 transition-all duration-500 h-16 flex items-center justify-center p-2 cursor-pointer"
              >
                <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" title={partner.name} />
              </motion.div>
            ))}
          </div>
          <div className="mt-20 text-center">
             <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-bold border-primary/20 hover:bg-primary/5">Invite a Partnership</Button>
          </div>
        </div>
      </section>
    );
};

const CallToActionSection = () => (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full -ml-64 -mb-64 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight mb-12">
            Ready to change <br className="hidden md:block" /> your community?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-8 text-2xl font-black transition-all hover:scale-105 shadow-2xl shadow-black/10">
            Start Reporting <ChevronRight className="w-6 h-6 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary rounded-full px-12 py-8 text-2xl font-black transition-all">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
);

const Footer = () => {
    const socialLinks = [
      { icon: <Twitter className="w-5 h-5" />, href: '#' },
      { icon: <Linkedin className="w-5 h-5" />, href: '#' },
      { icon: <Facebook className="w-5 h-5" />, href: '#' },
      { icon: <Instagram className="w-5 h-5" />, href: '#' },
      { icon: <Youtube className="w-5 h-5" />, href: '#' },
      { icon: <Github className="w-5 h-5" />, href: '#' },
    ];
  
    const footerLinks = [
      { title: 'Company', links: ['About Us', 'Contact', 'Visionary', 'Strategy'] },
      { title: 'Product', links: ['Features', 'Analytics', 'AI Engine', 'IoT Suite'] },
      { title: 'Resources', links: ['Community', 'Data Reports', 'API Access', 'Support'] },
    ];
  
    return (
      <footer id ="Contact"className="bg-card border-t pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
            <div className="lg:col-span-2 space-y-8">
              <a href="#" className="flex items-center space-x-3">
                <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/1515983f-d128-4434-8853-ec2f6bbc6ba1/1783586098686_a_vector_style_digital_illustration_logo_for_heal.png" alt="HealthWASH Logo" className="w-12 h-12 object-contain" />
                <span className="text-3xl font-black tracking-tighter">HealthWASH</span>
              </a>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Technology for healthier communities. Empowering individuals to report WASH challenges through innovative digital solutions.
              </p>
              <div className="flex space-x-3">
                 {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href} 
                      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-500 premium-shadow"
                    >
                      {link.icon}
                    </a>
                  ))}
              </div>
            </div>
            
            {footerLinks.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg font-black mb-8 uppercase tracking-[0.2em]">{group.title}</h3>
                  <ul className="space-y-4">
                    {group.links.map(link => (
                      <li key={link}>
                        <a href="#" className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
            
            <div className="lg:col-span-1">
                <h3 className="text-lg font-black mb-8 uppercase tracking-[0.2em]">Stay Informed</h3>
                <p className="text-muted-foreground mb-6 font-medium">Subscribe to our monthly impact reports.</p>
                <div className="space-y-3">
                    <Input placeholder="Enter email" className="rounded-2xl border-primary/10 h-14 bg-background/50" />
                    <Button className="w-full rounded-2xl h-14 font-bold text-lg">
                        <Send className="w-5 h-5 mr-2" /> Subscribe
                    </Button>
                </div>
            </div>
          </div>
          
          <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center text-muted-foreground font-bold text-sm gap-8">
            <p>&copy; {new Date().getFullYear()} HealthWASH Smart Monitoring. All rights reserved.</p>
            <div className="flex space-x-8 uppercase tracking-widest text-[10px]">
               <a href="#" className="hover:text-primary">Privacy Policy</a>
               <a href="#" className="hover:text-primary">Terms of Service</a>
               <a href="#" className="hover:text-primary">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default App;
