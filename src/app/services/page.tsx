'use client';

import Link from "next/link";
import { FileCheck, HardHat, AlertTriangle, ShieldCheck, BookOpen, Hammer, LucideIcon, ArrowRight, Cpu, BarChart } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { FadeIn, SlideIn, RevealOnScroll, StaggerChildren, ScaleFadeIn, MotionButton } from "@/components/ui/motion";
import { motion } from "framer-motion";

interface ServiceType {
  title: string;
  description: string;
  details: string[];
  icon: ReactNode;
  highlight?: boolean;
}

const services: ServiceType[] = [
  {
    title: "Crane & Hoist Training",
    description: "Expert training for overhead crane operation, hoist safety, and vertical transport systems.",
    details: [
      "Overhead Crane operation certification",
      "Personal Hoist & Construction Elevator operation",
      "Load calculation and rigging selection",
      "Signal person training",
      "Self Erect Crane operation (Full Scope)"
    ],
    icon: <HardHat className="h-5 w-5" />,
  },
  {
    title: "Rigging Training",
    description: "Specialized training in rigging fundamentals, load security, and safe lifting operations.",
    details: [
      "Basic and advanced rigging techniques",
      "Level 1 & 2 Rigging certification",
      "Civil rigging applications",
      "Wire rope and synthetic sling inspection",
      "Lift planning and execution"
    ],
    icon: <AlertTriangle className="h-5 w-5" />,
    highlight: true,
  },
  {
    title: "Equipment Operation Training",
    description: "Certified training for various construction equipment including forklifts and telehandlers.",
    details: [
      "Standard Forklift (Class 4-5) certification",
      "Telehandler (Class 7) operation",
      "Mobile Elevating Work Platform training",
      "Skidsteer and Wheel Loader operation",
      "Back-Hoe Loader certification"
    ],
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "AI-Powered Risk Assessment",
    description: "Advanced predictive analytics using AI and data science to identify potential safety hazards before they become incidents.",
    details: [
      "Leveraging IBM Data Science methodology",
      "Real-time data analysis from equipment sensors",
      "Predictive maintenance recommendations",
      "Weather pattern impact assessment",
      "Early warning system implementation"
    ],
    icon: <Cpu className="h-5 w-5" />,
    highlight: true,
  }
];

export default function Services() {
  return (
    <div className="flex flex-col bg-background-dark text-text-primary">
      {/* Header */}
      <section className="relative bg-background-dark py-20 md:py-24 overflow-hidden border-b border-primary/20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-3xl rounded-full"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full"
          ></motion.div>
          <div className="grid grid-cols-6 absolute inset-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
                className="border-r border-t border-primary/10"
              ></motion.div>
            ))}
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-xs font-medium text-primary">MY OFFERINGS</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight md:text-6xl text-text-primary"
          >
            My <span className="text-primary">Services</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-xl text-text-muted max-w-2xl"
          >
            IVES Certified Trainer offering comprehensive safety training solutions and IBM-certified AI-powered risk assessment for construction and industrial operations
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScaleFadeIn key={service.title} className="flex flex-col">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className={service.highlight ? "border-primary/50 bg-background-darker" : "bg-background-darker/70"}
                  id={service.title === "AI-Powered Risk Assessment" ? "risk-assessment" : 
                      service.title === "Crane & Hoist Training" ? "vertical-transport" :
                      service.title === "Lockout/Tagout Training" ? "crisis-planning" :
                      service.title === "Equipment Operation Training" ? "safety-training" :
                      service.title === "Rigging Training" ? "catastrophic-prevention" : ""}
                />
                <motion.ul 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="mt-4 space-y-2 pl-6"
                >
                  {service.details.map((detail, detailIndex) => (
                    <motion.li 
                      key={detailIndex} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (detailIndex * 0.1) }}
                      className="text-sm text-text-muted list-disc"
                    >
                      {detail}
                    </motion.li>
                  ))}
                </motion.ul>
              </ScaleFadeIn>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="relative bg-background-darker py-20 border-y border-primary/10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <FadeIn className="flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-xs font-medium text-primary">TAILORED APPROACHES</span>
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Custom Safety Solutions</h2>
              <p className="text-text-muted mb-4">
                Don't see what you need? I specialize in creating custom safety programs 
                tailored to your specific project requirements and challenges.
              </p>
              <p className="text-text-muted mb-8">
                My approach begins with a thorough assessment of your construction site, 
                project plans, and team capabilities. I then develop targeted solutions 
                that address your unique safety concerns while optimizing operational efficiency.
              </p>
              <div>
                <MotionButton>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                    <Link href="/contact" className="flex items-center">
                      Request a Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </MotionButton>
              </div>
            </FadeIn>
            
            <RevealOnScroll className="relative hidden rounded-xl overflow-hidden md:block">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-background-darker via-transparent to-transparent z-10"
              ></motion.div>
              <motion.div 
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="h-full bg-[url('/custom-solution.jpg')] bg-cover bg-center"
              ></motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="text-xs font-medium text-secondary">HOW I WORK</span>
            </div>
            <h2 className="text-4xl font-bold text-text-primary">My <span className="text-secondary">Process</span></h2>
          </FadeIn>
          
          <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                number: "1",
                title: "Assessment",
                description: "Thorough evaluation of your specific construction site and safety needs"
              },
              {
                number: "2",
                title: "Planning",
                description: "Development of customized safety protocols and procedures"
              },
              {
                number: "3",
                title: "Implementation",
                description: "On-site training and system integration with your existing operations"
              },
              {
                number: "4",
                title: "Verification",
                description: "Ongoing monitoring, adjustment, and improvement of safety measures"
              }
            ].map((step) => (
              <ScaleFadeIn key={step.number} className="text-center">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex flex-col items-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-text-primary">{step.title}</h3>
                  <p className="text-sm text-text-muted">
                    {step.description}
                  </p>
                </motion.div>
              </ScaleFadeIn>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-tr from-background-darker via-background-darker to-secondary/10 border-t border-primary/20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
        ></motion.div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <FadeIn>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold tracking-tight text-secondary md:text-4xl"
              >
                Ready to elevate your safety standards?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-text-primary mb-10"
              >
                Contact me today to discuss how my services can benefit your next project.
              </motion.p>
            </FadeIn>
            
            <div>
              <MotionButton>
                <Button asChild size="lg" className="bg-background-darker text-primary hover:bg-background-dark hover:text-primary border border-primary/50">
                  <Link href="/contact" className="flex items-center">
                    Get Started
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