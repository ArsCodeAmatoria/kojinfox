'use client';

import Link from "next/link";
import { 
  AlertTriangle, 
  CloudLightning, 
  Wind, 
  Shield, 
  Anchor, 
  Bomb, 
  Bug, 
  Flame, 
  Radiation, 
  BarChart3, 
  Scroll, 
  Send, 
  ArrowRight,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  FadeIn, 
  SlideIn, 
  SlideUp, 
  RevealOnScroll, 
  StaggerChildren, 
  ScaleFadeIn, 
  MotionButton 
} from "@/components/ui/motion";

const blackSwanExamples = [
  {
    title: "Structural Material Failure",
    description: "Unexpected collapse despite passing all safety tests due to undetected material defects.",
    icon: Anchor,
  },
  {
    title: "Unprecedented Weather Event",
    description: "Extreme wind force or lightning strikes that exceed historical averages and design parameters.",
    icon: CloudLightning,
  },
  {
    title: "Cyber Attack on Control Systems",
    description: "Malicious interference with computerized hoisting or monitoring systems.",
    icon: Bug,
  },
  {
    title: "Simultaneous Catastrophic System Failures",
    description: "Multiple safety systems failing simultaneously during a critical operation.",
    icon: XCircle,
  },
  {
    title: "Unexpected Geological Event",
    description: "Sudden soil instability or ground movement not revealed by site surveys.",
    icon: Bomb,
  },
  {
    title: "Chemical or Material Contamination",
    description: "Contaminated concrete or steel that passes standard testing but fails under specific conditions.",
    icon: Radiation,
  },
];

export default function BlackSwan() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-200">
      {/* Hero Section */}
      <section className="relative bg-black py-20 md:py-28 overflow-hidden border-b border-amber-600/20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-600/10 blur-3xl rounded-full"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-600/10 blur-3xl rounded-full"
          ></motion.div>
          <div className="grid grid-cols-6 absolute inset-0 opacity-5">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
                className="border-r border-t border-amber-600/10"
              ></motion.div>
            ))}
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-red-600/10 border border-red-600/20"
          >
            <span className="text-xs font-medium text-red-500">HIGH-RISK ASSESSMENT</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight md:text-6xl text-zinc-200"
          >
            <span className="text-red-500">Black Swan</span> Risk Assessment
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-xl text-zinc-400 max-w-2xl"
          >
            Prepare for the unpredictable. Our specialized approach identifies and mitigates catastrophic 
            risks that conventional safety assessments overlook.
          </motion.p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-0 w-1/2 h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">What are <span className="text-red-500">Black Swan</span> Events?</h2>
              <div className="space-y-6 text-zinc-300">
                <p>
                  <span className="text-amber-600 font-semibold">Black Swan events</span> are rare, high-impact, and unpredictable occurrences 
                  that lie outside the realm of regular expectations and standard risk assessments.
                </p>
                <p>
                  In high-rise construction, these events can lead to catastrophic failures, substantial financial losses, 
                  and even loss of life. Traditional risk management often fails to account for these outlier events.
                </p>
                <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 mr-4 rounded-full bg-red-500/10">
                        <AlertTriangle className="h-6 w-6 text-red-500" />
                      </div>
                      <blockquote className="italic text-zinc-400">
                        "The risk of a Black Swan event is often overlooked until it's too late, resulting in consequences 
                        that could have been mitigated with proper identification and planning."
                        <footer className="mt-2 text-sm text-zinc-500">— Nassim Nicholas Taleb, Author of "The Black Swan"</footer>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
            
            <RevealOnScroll>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full border-2 border-red-500/20 animate-pulse p-4 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 rounded-full border-2 border-amber-600/20 p-4 flex items-center justify-center">
                      <div className="w-4/5 h-4/5 rounded-full border-2 border-red-500/30 flex items-center justify-center">
                        <div className="p-6 rounded-full bg-gradient-to-br from-red-900/40 to-amber-900/40 backdrop-blur-sm border border-amber-600/30">
                          <AlertTriangle className="h-16 w-16 text-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0,rgba(0,0,0,1)_100%)]"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* Why It Matters */}
      <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black border-y border-amber-600/20 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SlideIn className="mb-6 text-3xl font-bold text-center">
            Why Black Swan <span className="text-red-500">Risk Prevention</span> Matters
          </SlideIn>
          
          <SlideUp delay={0.2} className="mx-auto max-w-3xl text-center text-zinc-400 mb-16">
            In tower construction, where the stakes are high and variables numerous, 
            preparing for the unpredictable can be the difference between project success and disaster.
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerChildren>
              <ScaleFadeIn className="h-full">
                <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-zinc-200">Traditional Safety Falls Short</h3>
                    <p className="text-zinc-400">
                      Standard safety protocols are designed for known risks, not the statistically 
                      improbable events that cause the most catastrophic failures.
                    </p>
                  </CardContent>
                </Card>
              </ScaleFadeIn>
              
              <ScaleFadeIn className="h-full">
                <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 w-16 h-16 rounded-full bg-amber-600/10 flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-zinc-200">Financial Protection</h3>
                    <p className="text-zinc-400">
                      A single Black Swan event can lead to project delays, massive cost overruns, 
                      legal liabilities, and permanent damage to company reputation.
                    </p>
                  </CardContent>
                </Card>
              </ScaleFadeIn>
              
              <ScaleFadeIn className="h-full">
                <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <div className="mb-6 p-3 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Wind className="h-8 w-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-zinc-200">Systematic Resilience</h3>
                    <p className="text-zinc-400">
                      Creating systems that are resilient to unpredictable shocks builds 
                      robustness into your entire operation, beyond just safety protocols.
                    </p>
                  </CardContent>
                </Card>
              </ScaleFadeIn>
            </StaggerChildren>
          </div>
        </div>
      </section>
      
      {/* Examples Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Examples of <span className="text-red-500">Black Swan</span> Events</h2>
              <p className="text-zinc-400 max-w-3xl mx-auto">
                These events share common characteristics: they were considered improbable, 
                had extreme impact, and in hindsight appeared predictable with proper analysis.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerChildren>
              {blackSwanExamples.map((example, index) => (
                <ScaleFadeIn key={index} className="h-full">
                  <Card className="h-full bg-black/40 border-zinc-800 backdrop-blur-sm hover:border-amber-600/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="p-3 w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-amber-600/20 flex items-center justify-center mb-4">
                        <example.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-zinc-200">{example.title}</h3>
                      <p className="text-zinc-400">{example.description}</p>
                    </CardContent>
                  </Card>
                </ScaleFadeIn>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>
      
      {/* Methodology */}
      <section className="py-20 bg-gradient-to-tr from-black via-black to-amber-950/20 border-t border-amber-600/20 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SlideIn>
              <h2 className="text-3xl font-bold mb-6">Our <span className="text-amber-600">Methodology</span></h2>
              <p className="text-zinc-400 mb-8">
                We apply a specialized analysis framework that goes beyond conventional risk assessment
                to identify potential Black Swan events in your tower construction projects.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center border border-amber-600/20">
                      <span className="text-amber-600 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-zinc-200">Comprehensive System Mapping</h3>
                    <p className="text-zinc-400">
                      We identify all critical systems, dependencies, and potential cascading failure points in your tower construction.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center border border-amber-600/20">
                      <span className="text-amber-600 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-zinc-200">Scenario Planning & Stress Testing</h3>
                    <p className="text-zinc-400">
                      We develop unlikely but possible scenarios and simulate their impacts on your project
                      to identify vulnerabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center border border-amber-600/20">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-zinc-200">Resilience Enhancement</h3>
                    <p className="text-zinc-400">
                      We develop practical, cost-effective strategies to build resilience against identified 
                      Black Swan scenarios, focusing on critical failure points.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center border border-amber-600/20">
                      <span className="text-amber-600 font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-zinc-200">Integration with Existing Safety Systems</h3>
                    <p className="text-zinc-400">
                      We ensure our Black Swan prevention strategies complement and enhance your existing safety protocols.
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
            
            <RevealOnScroll>
              <Card className="bg-black/40 border-amber-600/20 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-8">
                    <div className="p-4 rounded-full bg-amber-600/10">
                      <Scroll className="h-8 w-8 text-amber-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center text-zinc-200">
                    Schedule a Black Swan Assessment
                  </h3>
                  
                  <p className="text-zinc-400 text-center mb-6">
                    Our specialized team will analyze your project's vulnerability to Black Swan events 
                    and provide actionable protection strategies.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-amber-600 mr-3"></div>
                      <p className="text-zinc-300">Detailed assessment of your specific project</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-amber-600 mr-3"></div>
                      <p className="text-zinc-300">Customized Black Swan scenario modeling</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-amber-600 mr-3"></div>
                      <p className="text-zinc-300">Practical, implementable safety recommendations</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-amber-600 mr-3"></div>
                      <p className="text-zinc-300">Integration with existing safety protocols</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <MotionButton className="w-full">
                      <Button 
                        asChild 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-black font-medium py-6"
                      >
                        <Link href="/contact" className="inline-flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" />
                          Schedule Assessment
                        </Link>
                      </Button>
                    </MotionButton>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black to-amber-950/20"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <FadeIn className="text-3xl font-bold md:text-4xl mb-6 text-zinc-200">
              Don't let a <span className="text-red-500">Black Swan</span> event derail your project
            </FadeIn>
            
            <FadeIn delay={0.3} className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
              Our specialized team can help you identify and mitigate the most severe unpredictable risks
            </FadeIn>
            
            <div>
              <MotionButton>
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-7 text-lg">
                  <Link href="/contact" className="inline-flex items-center">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MotionButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 