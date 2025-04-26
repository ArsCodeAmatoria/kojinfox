'use client';

import Link from "next/link";
import { ArrowRight, FileCheck, Shield, AlertTriangle, ShieldCheck, BookOpen } from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { StatsChart } from "@/components/ui/stats-chart";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideIn, RevealOnScroll, StaggerChildren, ScaleFadeIn, MotionButton, MotionContainer } from "@/components/ui/motion";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Risk Assessment",
    description: "Expert assessment of potential hazards in high-rise construction with focus on prevention strategies.",
    icon: <FileCheck className="h-5 w-5" />,
  },
  {
    title: "Vertical Transport Systems",
    description: "Specialized knowledge of tower crane and hoist safety operations in complex construction environments.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Catastrophic Risk Prevention",
    description: "Identification and mitigation of rare but high-impact failure scenarios in tower construction.",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    title: "Crisis Response",
    description: "Development of practical emergency protocols for rapid, effective response to construction incidents.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const testimonials = [
  {
    quote: "Kojin's expertise was instrumental in overhauling my company's safety protocols. His insights helped us prevent potential incidents during our most complex tower project.",
    name: "Sarah Johnson",
    company: "Skyline Developers Inc.",
  },
  {
    quote: "Hiring Kojin was one of the best decisions I made. His approach to identifying overlooked risks completely changed how I think about construction safety.",
    name: "Michael Chen",
    company: "Vertical Structures Ltd.",
  },
  {
    quote: "As a senior safety manager, I was impressed by Kojin's practical knowledge and his ability to train my team effectively. He bridges the gap between theory and application.",
    name: "Elena Rodriguez",
    company: "Summit Construction Group",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
          <div className="absolute inset-0 bg-[url('/hero-image.png')] bg-contain bg-center opacity-20"></div>
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
                Specialized in construction safety training, rigging certification, and crane operation safety.
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
                      className={`w-10 h-10 rounded-full border-2 border-black bg-[url('/client-${i}.jpg')] bg-cover bg-center`}
                    ></motion.div>
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
            <div className="hidden lg:flex flex-col lg:col-span-6 relative py-16">
              <div className="grid grid-cols-2 gap-6">
                {/* Certification Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 rounded-xl bg-black/50 border border-amber-600/20 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-amber-600 mr-3" />
                    <h3 className="text-lg font-bold text-zinc-200">IVES Certified Trainer</h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">Certified to provide training for:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Forklift", "Telehandler", "MEWP", "Skidsteer"].map((cert, i) => (
                      <motion.span
                        key={cert}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                        className="px-2 py-1 bg-amber-600/10 border border-amber-600/20 rounded-md text-amber-500 text-xs"
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 rounded-xl bg-black/50 border border-emerald-500/20 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-emerald-500 mr-3" />
                    <h3 className="text-lg font-bold text-zinc-200">Rigging Specialist</h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">Certified in:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Level 1 Rigging", "Level 2 Rigging", "Civil Rigging", "Crane Operations"].map((cert, i) => (
                      <motion.span
                        key={cert}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) }}
                        className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-400 text-xs"
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="p-6 rounded-xl bg-black/50 border border-zinc-600/20 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-3">
                    <FileCheck className="h-6 w-6 text-zinc-400 mr-3" />
                    <h3 className="text-lg font-bold text-zinc-200">Safety Stats</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-400">Training Sessions</span>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-amber-500">500+</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-400">Certified Workers</span>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-emerald-500">1000+</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-400">Safety Improvement</span>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-amber-500">47%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="p-6 rounded-xl bg-black/50 border border-zinc-600/20 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-3">
                    <ShieldCheck className="h-6 w-6 text-zinc-400 mr-3" />
                    <h3 className="text-lg font-bold text-zinc-200">Certification Areas</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Fall Protection",
                      "WHMIS Training",
                      "Lockout/Tagout",
                      "Hoist Operations",
                      "OFA Level 3"
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 + (i * 0.1) }}
                        className="flex items-center text-sm text-zinc-400"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
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
              <span className="text-xs font-medium text-amber-600">CLIENT SUCCESS</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center">
              What Industry <span className="text-amber-600">Leaders Say</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl text-center">
              Feedback from construction professionals who've experienced 
              my innovative safety systems in action
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScaleFadeIn key={index} className="relative rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm p-8 h-full">
                <div className="absolute top-0 right-0 -mt-2 -mr-2 rounded-full bg-amber-600 text-black p-2 z-10">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>
                </div>
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 inline-block mr-1">★</span>
                  ))}
                </div>
                <blockquote className="mb-6 text-zinc-200 relative">
                  <span className="text-amber-600 absolute -top-3 -left-1 text-4xl opacity-20">"</span>
                  <p className="relative z-10">{testimonial.quote}</p>
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 mr-4"></div>
                  <div>
                    <p className="text-zinc-200 font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-zinc-400">{testimonial.company}</p>
                  </div>
                </div>
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
