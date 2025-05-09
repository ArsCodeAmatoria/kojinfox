'use client';

import { Medal, Award, GraduationCap, Calendar, CheckCircle, Link2, Globe, Database, Lock, Award as AwardIcon, Code, FileCode, Shield, Network, Cpu, Terminal, FileCheck, ShieldCheck } from "lucide-react";
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
                  As a Highrise Safety Specialist with expertise in construction safety, I currently work as a 
                  Training Instructor at Bigfoot Crane Company Inc., specializing in comprehensive safety training 
                  including Fall Protection, WHMIS, Civil Rigging, Overhead Crane, Hoist, and Lockout/Tagout procedures.
                </p>
                <p className="text-zinc-400 mb-4">
                  With extensive experience as both a Carpenter and Construction Safety Officer (CSO) 
                  on major projects across the Lower Mainland, including Vancouver House, Olympic Village, 
                  and Oakridge Mall, I bring practical expertise to every safety solution I provide.
                </p>
                <p className="text-zinc-400 mb-8">
                  As an IBM-certified Data Scientist, I now integrate AI and predictive analytics into construction safety, 
                  developing early warning systems that identify potential Black Swan events before they occur. This data-driven 
                  approach allows for proactive risk mitigation rather than reactive crisis management.
                </p>
              </FadeIn>
              
              <StaggerChildren staggerDelay={0.1} className="flex flex-wrap gap-3">
                {[
                  "Fall Protection",
                  "Rigging Training",
                  "Crane Safety",
                  "Hoist Safety",
                  "WHMIS",
                  "AI Risk Prediction",
                  "IBM Data Science"
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
                period: "2021 - Present",
                title: "Crane, Rigging & Safety Training Instructor, Bigfoot Crane Company Inc.",
                description: "Delivering specialized safety programs focused on tower crane operations, rigging procedures, and fall protection systems. Responsible for certification courses and developing tailored training materials for various construction equipment.",
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

      {/* Courses Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">EDUCATION</span>
            </div>
            <h2 className="text-4xl font-bold">Courses I've <span className="text-amber-600">Created</span></h2>
          </FadeIn>
          
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tower Crane Erection Documentation Course",
                description: "Comprehensive training on tower crane erection procedures, documentation requirements, and safety protocols.",
                details: [
                  "Erection sequence documentation",
                  "Safety inspection procedures",
                  "Load chart interpretation",
                  "Assembly/disassembly planning",
                  "Regulatory compliance requirements"
                ],
                icon: <FileCheck className="h-6 w-6 text-amber-600" />
              },
              {
                title: "Fall Protection Training",
                description: "Comprehensive training on fall prevention, proper harness use, and safety procedures for working at heights.",
                details: [
                  "Fall protection system assessment",
                  "Proper harness fitting and inspection",
                  "Anchor point selection and verification",
                  "Rescue procedures training",
                  "CORE of Fall Protection certification"
                ],
                icon: <ShieldCheck className="h-6 w-6 text-amber-600" />
              },
              {
                title: "WHMIS Training",
                description: "Workplace Hazardous Materials Information System training for proper handling of hazardous materials.",
                details: [
                  "Hazard identification and classification",
                  "Safety Data Sheet (SDS) interpretation",
                  "Proper labeling requirements",
                  "Hazardous material storage protocols",
                  "Emergency response procedures"
                ],
                icon: <Shield className="h-6 w-6 text-amber-600" />
              },
              {
                title: "Lockout/Tagout Training",
                description: "Comprehensive training on energy control procedures to prevent accidental equipment startup.",
                details: [
                  "Hazardous energy source identification",
                  "Proper lockout device application",
                  "Equipment-specific procedures",
                  "Group lockout coordination",
                  "Verification and testing protocols"
                ],
                icon: <Lock className="h-6 w-6 text-amber-600" />
              },
              {
                title: "New and Young Workers Training",
                description: "Specialized safety training program designed for new and young workers entering the construction industry.",
                details: [
                  "Workplace rights and responsibilities",
                  "Hazard recognition and assessment",
                  "Personal protective equipment (PPE)",
                  "Emergency procedures",
                  "Workplace violence prevention"
                ],
                icon: <GraduationCap className="h-6 w-6 text-amber-600" />
              }
            ].map((course, index) => (
              <ScaleFadeIn key={index} className="flex flex-col">
                <Card className="bg-zinc-800/50 border-zinc-700/50 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {course.icon}
                      <h3 className="text-xl font-semibold text-zinc-200">{course.title}</h3>
                    </div>
                    <p className="text-zinc-400 mb-4">{course.description}</p>
                    <ul className="space-y-2">
                      {course.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                          <CheckCircle className="h-4 w-4 text-amber-600" />
                          {detail}
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

      {/* Digital Skills Section */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">TECHNICAL PROFICIENCY</span>
            </div>
            <h2 className="text-4xl font-bold">Digital <span className="text-amber-600">Skills</span></h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Combining construction safety expertise with technical capabilities
              for modern solutions to complex challenges
            </p>
          </FadeIn>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 gap-14">
            {/* Office & Productivity */}
            <RevealOnScroll>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-zinc-200 border-b border-amber-600/30 pb-2 mb-8 inline-block">
                  Office & Productivity
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "PowerPoint",
                    description: "Creating engaging training presentations and safety briefings with detailed visuals",
                    level: 90
                  },
                  {
                    name: "Word",
                    description: "Developing comprehensive documentation, safety manuals and training protocols",
                    level: 95
                  },
                  {
                    name: "Excel",
                    description: "Building safety data tracking systems and analytical tools for incident reporting",
                    level: 85
                  },
                  {
                    name: "Office Suite",
                    description: "Integrated approach using multiple tools for complete project documentation",
                    level: 90
                  },
                  {
                    name: "Google Workspace",
                    description: "Collaborative safety planning and real-time document sharing with teams",
                    level: 80
                  },
                  {
                    name: "Project Management",
                    description: "Coordinating multi-faceted safety implementation projects with various stakeholders",
                    level: 85
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-black/30 border border-zinc-800 rounded-lg p-6 hover:border-amber-600/30 transition-all duration-300"
                  >
                    <h4 className="text-lg font-medium text-zinc-200 mb-2">{skill.name}</h4>
                    <p className="text-sm text-zinc-400 mb-4">{skill.description}</p>
                    <div className="w-full bg-zinc-800/50 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-xs text-amber-600">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Programming & Development */}
            <RevealOnScroll>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-zinc-200 border-b border-amber-600/30 pb-2 mb-8 inline-block">
                  Development & Blockchain
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-black/30 border border-zinc-800 rounded-lg p-6"
                >
                  <h4 className="text-lg font-semibold text-zinc-200 mb-4">Programming Languages</h4>
                  <div className="space-y-5">
                    {[
                      {
                        name: "Rust",
                        description: "Systems programming with emphasis on safety and performance",
                        proficiency: "Advanced",
                        color: "bg-amber-600"
                      },
                      {
                        name: "Python",
                        description: "Versatile language for data analysis and safety system automation",
                        proficiency: "Advanced",
                        color: "bg-amber-600"
                      },
                      {
                        name: "C",
                        description: "Low-level programming for embedded safety systems and hardware interfaces",
                        proficiency: "Intermediate",
                        color: "bg-amber-500"
                      },
                      {
                        name: "Haskell",
                        description: "Functional programming for robust, maintainable applications",
                        proficiency: "Intermediate",
                        color: "bg-amber-500"
                      },
                      {
                        name: "TypeScript",
                        description: "Strongly-typed JavaScript for safer web development",
                        proficiency: "Advanced",
                        color: "bg-amber-600"
                      }
                    ].map((skill, i) => (
                      <div key={i} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-zinc-300">{skill.name}</span>
                          <span className="text-xs text-zinc-400">{skill.proficiency}</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`h-1 w-1 rounded-full ${skill.color} mr-2`}></div>
                          <p className="text-sm text-zinc-400">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-black/30 border border-zinc-800 rounded-lg p-6"
                >
                  <h4 className="text-lg font-semibold text-zinc-200 mb-4">Web & Mobile Frameworks</h4>
                  <div className="space-y-5">
                    {[
                      {
                        name: "React",
                        description: "Building interactive UIs for safety training applications",
                        proficiency: "Advanced",
                        color: "bg-amber-600"
                      },
                      {
                        name: "Next.js",
                        description: "Server-side rendering for performant web applications",
                        proficiency: "Advanced",
                        color: "bg-amber-600"
                      },
                      {
                        name: "React Native & Expo",
                        description: "Cross-platform mobile apps for field safety operations",
                        proficiency: "Intermediate",
                        color: "bg-amber-500"
                      }
                    ].map((skill, i) => (
                      <div key={i} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-zinc-300">{skill.name}</span>
                          <span className="text-xs text-zinc-400">{skill.proficiency}</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`h-1 w-1 rounded-full ${skill.color} mr-2`}></div>
                          <p className="text-sm text-zinc-400">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-black/30 border border-zinc-800 rounded-lg p-6 lg:col-span-2"
                >
                  <h4 className="text-lg font-semibold text-zinc-200 mb-4">Blockchain & Decentralized Technologies</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        name: "Blockchain",
                        description: "Immutable record-keeping for safety certification verification",
                        icon: <Link2 className="h-6 w-6 text-amber-600" />
                      },
                      {
                        name: "Polkadot",
                        description: "Multi-chain network for connected safety compliance systems",
                        icon: <Globe className="h-6 w-6 text-amber-600" />
                      },
                      {
                        name: "Substrate",
                        description: "Blockchain framework for custom safety verification networks",
                        icon: <Database className="h-6 w-6 text-amber-600" />
                      },
                      {
                        name: "ZKID / DID",
                        description: "Zero-knowledge and decentralized identity solutions for private credential verification",
                        icon: <Lock className="h-6 w-6 text-amber-600" />
                      },
                      {
                        name: "SBT",
                        description: "Soul Bound Tokens for permanent safety certification records",
                        icon: <AwardIcon className="h-6 w-6 text-amber-600" />
                      }
                    ].map((tech, i) => (
                      <motion.div 
                        key={i}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex flex-col items-center text-center p-4 rounded-lg border border-zinc-800/50 hover:border-amber-600/30 transition-all duration-300"
                      >
                        <div className="mb-3">{tech.icon}</div>
                        <h5 className="font-medium text-zinc-300 mb-2">{tech.name}</h5>
                        <p className="text-xs text-zinc-400">{tech.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </RevealOnScroll>

            {/* Cybersecurity & Penetration Testing */}
            <RevealOnScroll>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-zinc-200 border-b border-amber-600/30 pb-2 mb-8 inline-block">
                  Cybersecurity & Penetration Testing
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-black/30 border border-zinc-800 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 rounded-full bg-amber-600/10 border border-amber-600/20">
                      <Terminal className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-zinc-200">Penetration Testing with Kali Linux</h4>
                  </div>
                  <p className="text-sm text-zinc-400 mb-6">
                    Expertise in conducting security audits and vulnerability assessments using the industry-standard Kali Linux security platform. Implementing network security measures to protect construction site communications and IoT devices.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Tools & Techniques",
                        items: ["Network scanning & enumeration", "Vulnerability detection", "Social engineering tactics", "Wireless network security"]
                      },
                      {
                        title: "Safety Applications",
                        items: ["Construction site network hardening", "IoT device security", "Credential protection", "Security awareness training"]
                      }
                    ].map((group, idx) => (
                      <div key={idx} className="space-y-3">
                        <h5 className="text-sm font-medium text-amber-500">{group.title}</h5>
                        <ul className="space-y-2">
                          {group.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-zinc-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </RevealOnScroll>

            {/* IT Certifications */}
            <RevealOnScroll>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-zinc-200 border-b border-amber-600/30 pb-2 mb-8 inline-block">
                  IT Certifications
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "CompTIA Security+",
                    description: "Security fundamentals including network security, compliance, threats, vulnerabilities, and security protocols",
                    icon: <Shield className="h-10 w-10 text-amber-600" />,
                    details: ["Identity management", "Risk management", "Cryptography", "Network security"]
                  },
                  {
                    name: "CompTIA Network+",
                    description: "Network technologies, installation, configuration, troubleshooting, and maintenance",
                    icon: <Network className="h-10 w-10 text-amber-600" />,
                    details: ["Network architecture", "Security implementation", "Troubleshooting", "Industry standards"]
                  },
                  {
                    name: "CompTIA A+",
                    description: "Hardware, software troubleshooting, operating system configuration, and security fundamentals",
                    icon: <Cpu className="h-10 w-10 text-amber-600" />,
                    details: ["Hardware installation", "Software configuration", "OS troubleshooting", "Security best practices"]
                  }
                ].map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i }}
                    className="bg-black/30 border border-zinc-800 rounded-lg p-6 hover:border-amber-600/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 rounded-full bg-amber-600/10 border border-amber-600/20">
                        {cert.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-zinc-200">{cert.name}</h4>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4">{cert.description}</p>
                    <div className="space-y-2">
                      {cert.details.map((detail, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></div>
                          <span className="text-xs text-zinc-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Skill Applications */}
            <RevealOnScroll>
              <Card className="border-amber-600/20 bg-black/40 backdrop-blur-sm mt-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-amber-500">Applications of Technical Skills</h3>
                  <ul className="space-y-3">
                    {[
                      "Digital safety certification tracking system development",
                      "Custom training material creation with interactive elements",
                      "Blockchain-based verification of training credentials and certifications",
                      "Mobile applications for on-site safety protocol access",
                      "Data analysis of safety incidents for prevention strategies",
                      "Decentralized identity solutions for secure credential management"
                    ].map((application, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3"
                      >
                        <div className="h-5 w-5 rounded-full bg-amber-600/10 border border-amber-600/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                        </div>
                        <span className="text-zinc-300">{application}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-amber-600/10 border border-amber-600/20">
              <span className="text-xs font-medium text-amber-600">EXPERTISE</span>
            </div>
            <h2 className="text-4xl font-bold">Certifications & <span className="text-amber-600">Training</span></h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* IBM Data Science Professional Certificate */}
            <ScaleFadeIn className="col-span-1">
              <Card className="bg-zinc-900/40 border border-zinc-800 hover:border-amber-600/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="rounded-full p-2 mr-3 bg-blue-600/10">
                      <Cpu className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-200">IBM Data Science Professional</h3>
                      <p className="text-xs text-zinc-500">IBM • 2023</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">
                    Comprehensive data science certification covering machine learning, data analysis, 
                    Python, and AI applications for industry.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["ML Algorithms", "Predictive Analytics", "Python", "Risk Modeling"].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-blue-600/10 border border-blue-600/30 rounded-md text-blue-400 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScaleFadeIn>

            {/* Original certifications follow... */}
          </div>
        </div>
      </section>
    </div>
  );
} 