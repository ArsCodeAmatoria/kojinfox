'use client';

import { Medal, Award, GraduationCap, Calendar, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, SlideIn, RevealOnScroll, StaggerChildren, ScaleFadeIn, MotionButton } from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col bg-black text-zinc-200">
      {/* Header */}
      <section className="relative bg-black py-20 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-600/10 blur-3xl rounded-full"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-amber-600/20 rounded-full"
          ></motion.div>
          <div className="grid grid-cols-6 absolute inset-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
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
            className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-amber-600/10 border border-amber-600/20"
          >
            <span className="text-xs font-medium text-amber-600">ABOUT ME</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            About <span className="text-amber-600">Kojin Fox</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl"
          >
            Highrise Safety Specialist with extensive experience in construction safety
          </motion.p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <RevealOnScroll className="relative h-96 overflow-hidden rounded-2xl bg-black">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"
              ></motion.div>
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 1.2 }}
                className="h-full w-full bg-[url('/placeholder-profile.jpg')] bg-cover bg-center"
              ></motion.div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Badge className="mb-3 bg-amber-600 text-black font-medium">Safety Expert</Badge>
                  <h2 className="text-3xl font-bold text-zinc-200">Kojin Fox</h2>
                  <p className="text-zinc-400">15+ Years Experience</p>
                </motion.div>
              </div>
            </RevealOnScroll>
            
            <div>
              <FadeIn delay={0.2}>
                <h2 className="text-3xl font-bold mb-6">Professional <span className="text-amber-600">Profile</span></h2>
                <p className="text-zinc-400 mb-4">
                  As a Highrise Safety Specialist at Bigfoot Crane Company Inc., 
                  I specialize in comprehensive safety training including Fall Protection, WHMIS, 
                  Civil Rigging, Overhead Crane, Hoist, and Lockout/Tagout procedures.
                </p>
                <p className="text-zinc-400 mb-8">
                  With extensive experience as both a Carpenter and Construction Safety Officer (CSO) 
                  on major projects across the Lower Mainland, including Vancouver House, Olympic Village, 
                  and Oakridge Mall, I bring practical expertise to every safety solution I provide.
                </p>
              </FadeIn>
              
              <StaggerChildren staggerDelay={0.1} className="flex flex-wrap gap-3">
                {[
                  "Fall Protection",
                  "Rigging Training",
                  "Crane Safety",
                  "Hoist Safety",
                  "WHMIS"
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Badge variant="outline" className="border-amber-600 text-amber-600">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto w-full max-w-7xl px-4"
      >
        <Separator className="bg-zinc-800/60" />
      </motion.div>

      {/* Experience Timeline */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">CAREER PATH</span>
            </div>
            <h2 className="text-4xl font-bold">Professional <span className="text-amber-600">Journey</span></h2>
          </FadeIn>
          
          <div className="space-y-14">
            {[
              {
                period: "2024 - Present",
                title: "Highrise Safety Specialist",
                description: "Providing comprehensive safety training including Fall Protection, WHMIS, Civil Rigging, Overhead Crane, Hoist, and Lockout/Tagout procedures at Bigfoot Crane Company Inc. as a Certified Ives Training Instructor.",
                badges: [
                  { text: "Safety Training", color: "bg-emerald-500 text-black" },
                  { text: "Certification", color: "bg-emerald-500 text-black" }
                ]
              },
              {
                period: "2021 - 2024",
                title: "Crane, Rigging & Safety Training Instructor, Bigfoot Crane Company Inc.",
                description: "Delivered specialized safety programs focused on tower crane operations, rigging procedures, and fall protection systems. Responsible for certification courses and developing tailored training materials for various construction equipment.",
                badges: [
                  { text: "IVES Certified", color: "bg-amber-600 text-black" },
                  { text: "Training", color: "bg-amber-600 text-black" }
                ]
              },
              {
                period: "2021 - Present",
                title: "Carpenter / CSO, EMBERS",
                description: "Working as a Carpenter and Construction Safety Officer on numerous projects throughout the Lower Mainland, including Vancouver House, Olympic Village, and Oakridge Mall. Collaborating with Prime Contractors to ensure site safety."
              },
              {
                period: "2022 - 2023",
                title: "Safety Officer, Marcon",
                description: "Focused on workplace safety compliance and implementation of safety protocols across construction sites."
              },
              {
                period: "2018 - 2019",
                title: "Safety Officer, Whitewater Concrete Ltd",
                description: "Safety Coordinator on the Vancouver House Project. Responsible for Safe Work Procedures, Inventory, Tool Box talks, Guardrails, Flagging, and material movement coordination."
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-8 pb-4 border-l border-zinc-800 sm:pl-12 md:pl-16">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                  className="absolute left-0 top-0 sm:left-0 sm:ml-[-16px] h-8 w-8 rounded-full bg-amber-600 flex items-center justify-center"
                >
                  <Calendar className="h-4 w-4 text-black" />
                </motion.div>
                <FadeIn delay={index * 0.2} className="space-y-3">
                  <span className="text-sm text-amber-600 font-medium">{job.period}</span>
                  <h3 className="text-2xl font-semibold text-zinc-200">{job.title}</h3>
                  <p className="text-zinc-400">
                    {job.description}
                  </p>
                  {job.badges && (
                    <div className="pt-3 flex gap-2">
                      {job.badges.map((badge, i) => (
                        <Badge key={i} className={badge.color}>{badge.text}</Badge>
                      ))}
                    </div>
                  )}
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs font-medium text-emerald-500">SPECIALIZATION</span>
            </div>
            <h2 className="text-4xl font-bold">Areas of <span className="text-emerald-500">Expertise</span></h2>
          </FadeIn>
          
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Medal className="h-6 w-6 text-amber-600" />,
                title: "Crane & Hoist Safety",
                description: "Specialized training and certification in operational safety for tower cranes, hoists, and construction elevators.",
                list: [
                  "Overhead crane training",
                  "Construction use elevator operation", 
                  "Telehandler operations"
                ]
              },
              {
                icon: <Award className="h-6 w-6 text-amber-600" />,
                title: "Rigging & Fall Protection",
                description: "Comprehensive expertise in rigging operations and fall protection systems for high-rise construction.",
                list: [
                  "Level 1 & 2 Rigging Certification",
                  "Fall protection implementation", 
                  "Safety harness inspection"
                ]
              },
              {
                icon: <GraduationCap className="h-6 w-6 text-amber-600" />,
                title: "Safety Training & Education",
                description: "IVES Certified Trainer providing hands-on training and certification for construction equipment and safety procedures.",
                list: [
                  "Mobile Elevating Work Platforms",
                  "Forklift and Telehandler operation", 
                  "WHMIS and Lockout/Tagout protocols"
                ]
              }
            ].map((expertise, index) => (
              <ScaleFadeIn key={index}>
                <Card className="border-zinc-800 bg-black/40 backdrop-blur-sm h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 rounded-full bg-amber-600/10 p-2 w-fit">
                      {expertise.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-zinc-200">{expertise.title}</h3>
                    <p className="text-zinc-400 mb-5">
                      {expertise.description}
                    </p>
                    <ul className="space-y-3">
                      {expertise.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-zinc-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScaleFadeIn>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
} 