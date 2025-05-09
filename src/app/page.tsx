'use client';

import Link from "next/link";
import { ArrowRight, FileCheck, Shield, AlertTriangle, ShieldCheck, BookOpen, CheckCircle, Bot } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { StatsChart } from "@/components/ui/stats-chart";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideIn, RevealOnScroll, StaggerChildren, ScaleFadeIn, MotionButton, MotionContainer } from "@/components/ui/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const skills = [
  {
    title: "AI Risk Prediction",
    description: "Implementing machine learning models that analyze historical data to predict and prevent safety incidents before they occur.",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    title: "Vertical Transport Systems",
    description: "Expert analysis and certification of lifts, hoists, and crane systems used in high-rise construction environments.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Predictive Maintenance",
    description: "Using AI-powered sensors and data analysis to identify equipment failures before they lead to catastrophic events.",
    icon: <FileCheck className="h-5 w-5" />,
  },
  {
    title: "Crisis Response Systems",
    description: "Development of automated emergency protocols and digital communication systems for rapid response during critical incidents.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const testimonials = [
  {
    quote: "AI-powered risk prediction systems can transform safety management in construction. They can identify potential structural vulnerabilities that would be impossible to detect with traditional methods.",
    name: "Dr. Robert Thompson",
    role: "Safety Officer",
    imageSrc: "/testimonials/robert-thompson.jpg",
  },
  {
    quote: "Implementing AI safety analysis can dramatically reduce near-miss incidents. The combination of construction expertise and data science creates solutions tailored to high-rise projects.",
    name: "Lisa Wong",
    role: "Project Director",
    imageSrc: "/testimonials/lisa-wong.jpg",
  },
  {
    quote: "Predictive maintenance models can detect failure patterns in equipment weeks before any visible signs appear. This AI-driven approach prevents downtime and serious safety incidents.",
    name: "James Carpenter",
    role: "Operations Manager",
    imageSrc: "/testimonials/james-carpenter.jpg",
  },
];

// Add AI Demo section after skills section
const aiDemoSection = {
  title: "AI-Powered FLHA Creator",
  description: "Experience our cutting-edge AI assistant that helps create comprehensive Field Level Hazard Assessments. Simply describe your work activities, and our AI will guide you through identifying potential hazards and control measures.",
  features: [
    "Interactive AI conversation",
    "Dynamic hazard assessment",
    "Real-time control measure suggestions",
    "Export to PDF functionality"
  ]
};

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
          <Image 
            src="/hero-image.png"
            alt="Construction site background"
            fill
            priority
            className="object-cover opacity-20"
            quality={90}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-screen items-center py-16 md:py-0">
            {/* Left Content Column */}
            <div className="flex flex-col justify-center lg:col-span-6 py-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-amber-600/10 border border-amber-600/20"
              >
                <span className="text-xs font-medium text-amber-600">Highrise Safety Specialist</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"
              >
                Elevating<br />Safety<br />Standards
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-6 text-xl text-zinc-400 max-w-lg"
              >
                Specialized in construction safety training, rigging certification, and AI-powered risk prediction. IBM Data Science Certified.
              </motion.p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <MotionButton>
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-medium">
                    <Link href="/contact" className="inline-flex items-center">
                      Request Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MotionButton>
                
                <MotionButton>
                  <Button asChild variant="outline" size="lg" className="group border-amber-600/50 hover:bg-amber-600/10 text-zinc-300">
                    <Link href="/services" className="flex items-center">
                      Explore Services
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </MotionButton>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="mt-12 flex items-center gap-6"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 1 + (i * 0.1) }}
                      className="w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                    >
                      <Image
                        src={`/testimonials/${i === 1 ? 'robert-thompson' : i === 2 ? 'lisa-wong' : 'james-carpenter'}.jpg`}
                        alt={`Client ${i}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-zinc-400">
                  <span className="text-amber-600 font-semibold">100+</span> Projects Completed
                </div>
                <div className="h-10 w-px bg-zinc-800"></div>
                <div className="text-sm text-zinc-400">
                  <span className="text-emerald-500 font-semibold">15+</span> Years Experience
                </div>
              </motion.div>
            </div>
            
            {/* Right Certification & Stats Column */}
            <div className="flex flex-col lg:col-span-6 relative py-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative w-full h-[300px] lg:h-[500px] rounded-xl overflow-hidden border border-amber-600/20 shadow-xl shadow-amber-600/5"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/hero-image.png"
                  playsInline
                  controls
                  preload="auto"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/preventing-the-unthinkable.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Touch overlay for mobile controls */}
                <div 
                  className="absolute inset-0 z-10 md:hidden"
                  onTouchStart={(e) => {
                    e.preventDefault();
                    if (videoRef.current) {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                      } else {
                        videoRef.current.pause();
                      }
                    }
                  }}
                />
                {/* Play button overlay - only shown when video is not playing */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (videoRef.current) {
                        videoRef.current.play();
                      }
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      if (videoRef.current) {
                        videoRef.current.play();
                      }
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-amber-600/80 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/50 backdrop-blur-sm p-3 rounded-lg">
                  <h3 className="text-amber-500 font-medium text-sm">Preventing the Unthinkable</h3>
                  <p className="text-zinc-300 text-xs">Construction Safety & Black Swan Events</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Mobile Certifications - Only visible on mobile */}
        <div className="lg:hidden w-full px-4 py-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-4 rounded-xl bg-black/50 border border-amber-600/20 backdrop-blur-sm"
            >
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-amber-600 mr-2" />
                <h3 className="text-base font-bold text-zinc-200">IVES Certified Trainer</h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {["Forklift", "Telehandler", "MEWP", "Skidsteer"].map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-0.5 bg-amber-600/10 border border-amber-600/20 rounded-md text-amber-500 text-xs"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-xl bg-black/50 border border-emerald-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-5 w-5 text-emerald-500 mr-2" />
                <h3 className="text-base font-bold text-zinc-200">Rigging Specialist</h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {["Level 1 Rigging", "Level 2 Rigging", "Crane Operations"].map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400 text-xs"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 border-t border-zinc-800/50">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-1/4 h-1/4 bg-amber-600/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/2 right-1/4 w-1/5 h-1/5 bg-emerald-500/5 blur-2xl rounded-full"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">WHY CHOOSE ME</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center">
              Core <span className="text-amber-600">Expertise</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl text-center">
              Specialized skills for high-rise construction safety with a focus on
              preventing catastrophic failures through innovative approaches
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <RevealOnScroll key={skill.title}>
                <ServiceCard
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  className={index === 2 ? "border-amber-600/30" : ""}
                />
              </RevealOnScroll>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.4} className="mt-16 flex justify-center">
            <MotionButton>
              <Button asChild variant="outline" className="group border-amber-600/50 text-zinc-300 hover:bg-amber-600/10">
                <Link href="/services" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </MotionButton>
          </FadeIn>
        </div>
      </section>

      {/* Add AI Demo section after skills section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">AI INNOVATION</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center">
              AI-Powered <span className="text-amber-600">Safety</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl text-center">
              Experience the future of safety assessment with our AI-powered FLHA creator
            </p>
          </FadeIn>

          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="bg-zinc-900/50 rounded-2xl p-8 border border-amber-600/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      <span className="text-amber-600">FLHA</span> Creator
                    </h3>
                    <p className="text-zinc-400 mb-6">
                      {aiDemoSection.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {aiDemoSection.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-zinc-300">
                          <CheckCircle className="h-5 w-5 text-amber-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <MotionButton>
                      <Button asChild className="bg-amber-600 hover:bg-amber-700 text-black">
                        <Link href="/ai-demo" className="inline-flex items-center">
                          Try AI FLHA Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </MotionButton>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent rounded-xl"></div>
                    <div className="relative bg-zinc-800/50 rounded-xl p-6 border border-amber-600/20">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                            <Bot className="h-4 w-4 text-black" />
                          </div>
                          <span className="text-zinc-300 font-medium">AI Assistant</span>
                        </div>
                        <div className="bg-zinc-900/50 rounded-lg p-4 text-zinc-400 text-sm">
                          "I'll help you create a comprehensive FLHA. What work activities will you be performing today?"
                        </div>
                        <div className="bg-amber-600/10 rounded-lg p-4 text-zinc-300 text-sm border border-amber-600/20">
                          "We'll be working on the 15th floor, installing new HVAC units."
                        </div>
                        <div className="bg-zinc-900/50 rounded-lg p-4 text-zinc-400 text-sm">
                          "I'll help you identify potential hazards and control measures for this work. Let's start with the basics..."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black border-y border-zinc-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs font-medium text-emerald-500">PROVEN RESULTS</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center">
              Safety <span className="text-emerald-500">Impact</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl text-center">
              Real-world data showing how proper safety systems dramatically 
              improve outcomes in high-risk construction environments
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <ScaleFadeIn className="md:col-span-5 rounded-2xl overflow-hidden border border-zinc-800 bg-black/50 backdrop-blur-sm p-8">
              <div className="flex items-center mb-5">
                <div className="rounded-full p-2 mr-3 bg-amber-600/10">
                  <Shield className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-200">Incidents Prevented</h3>
              </div>
              <StatsChart
                type="bar"
                title="Fatalities Prevented with Proper Protocols"
                labels={["Standard Safety", "Advanced Safety", "Catastrophe Prevention"]}
                data={[35, 72, 89]}
                color="#d97706"
              />
              <div className="mt-6 flex justify-between px-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">89%</p>
                  <p className="text-sm text-zinc-400">Risk Reduction</p>
                </div>
                <div className="h-16 w-px bg-zinc-800 my-auto"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">100+</p>
                  <p className="text-sm text-zinc-400">Lives Saved</p>
                </div>
              </div>
            </ScaleFadeIn>

            <div className="md:col-span-7 flex flex-col">
              <FadeIn delay={0.2} className="rounded-2xl overflow-hidden border border-zinc-800 bg-black/50 backdrop-blur-sm p-8 mb-8 h-1/2">
                <div className="flex items-center mb-5">
                  <div className="rounded-full p-2 mr-3 bg-emerald-500/10">
                    <AlertTriangle className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-200">Financial Returns</h3>
                </div>
                <StatsChart
                  type="line"
                  title="ROI on Safety Investment (in %)"
                  labels={["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"]}
                  data={[120, 180, 230, 310, 390]}
                  color="#22c55e"
                />
              </FadeIn>
              
              <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-3 gap-5 h-1/2">
                <RevealOnScroll className="rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm p-6 flex flex-col justify-center items-center">
                  <p className="text-4xl font-bold text-amber-600 mb-2">47%</p>
                  <p className="text-sm text-zinc-400 text-center">Fewer Worksite Incidents</p>
                </RevealOnScroll>
                <RevealOnScroll className="rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm p-6 flex flex-col justify-center items-center">
                  <p className="text-4xl font-bold text-emerald-500 mb-2">3.9x</p>
                  <p className="text-sm text-zinc-400 text-center">Return on Safety Investment</p>
                </RevealOnScroll>
                <RevealOnScroll className="rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm p-6 flex flex-col justify-center items-center">
                  <p className="text-4xl font-bold text-zinc-200 mb-2">14.5%</p>
                  <p className="text-sm text-zinc-400 text-center">Faster Project Completion</p>
                </RevealOnScroll>
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-amber-600/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-1/5 h-1/5 bg-emerald-500/5 blur-2xl rounded-full"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">AI POTENTIAL</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center">
              Expert <span className="text-amber-600">Perspectives</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl text-center">
              Industry professionals share how AI safety systems can 
              transform construction and prevent catastrophic events
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScaleFadeIn key={index} className="h-full">
                <TestimonialCard 
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  imageSrc={testimonial.imageSrc}
                  index={index + 1}
                />
              </ScaleFadeIn>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-tr from-black via-black to-amber-950/30 border-t border-amber-600/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/noise.png')] bg-repeat"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"
          ></motion.div>
          <div className="absolute right-0 top-0 w-1/3 h-1/2 bg-amber-600/5 blur-3xl rounded-full"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <FadeIn className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">GET STARTED TODAY</span>
            </FadeIn>
            
            <SlideIn className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
              Ready to enhance your safety team?
            </SlideIn>
            
            <FadeIn delay={0.3} className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
              Let's discuss how my expertise can protect your personnel, 
              reduce risks, and improve your project outcomes
            </FadeIn>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MotionButton>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-medium px-8 py-7 text-lg">
                  <Link href="/contact" className="inline-flex items-center">
                    Contact Me Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MotionButton>
              <MotionButton>
                <Button asChild variant="outline" size="lg" className="border-zinc-700 hover:border-amber-600/50 hover:bg-amber-600/5 text-zinc-300 px-8 py-7 text-lg">
                  <Link href="/services">View All Services</Link>
                </Button>
              </MotionButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
