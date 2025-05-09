'use client';

import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FadeIn, SlideIn, RevealOnScroll, StaggerChildren, ScaleFadeIn, MotionButton } from "@/components/ui/motion";
import Link from "next/link";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    // Get form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    
    try {
      // Submit form data to direct email API route
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          service,
          message,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Success - show success message
      setIsSubmitted(true);
    } catch (error) {
      // Handle error
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col bg-black text-zinc-200">
      {/* Header */}
      <section className="relative bg-black py-20 md:py-24 overflow-hidden border-b border-amber-600/20">
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
            <span className="text-xs font-medium text-amber-600">GET IN TOUCH</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight md:text-6xl text-zinc-200"
          >
            Contact <span className="text-amber-600">Me</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-xl text-zinc-400 max-w-2xl"
          >
            Get in touch to discover how I can enhance your project's safety standards with specialized training
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Get in <span className="text-amber-600">Touch</span></h2>
              <p className="text-zinc-400 mb-6">
                Have questions about my services or want to schedule a training session? 
                Fill out the form and I'll get back to you within 24 hours.
              </p>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card className="bg-black/40 border-emerald-500/30 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="mb-6 w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                        >
                          <Send className="h-8 w-8 text-emerald-500" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-semibold text-emerald-500 text-center mb-2">Message Sent!</h3>
                      <p className="text-zinc-400 text-center mb-6">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <div className="flex justify-center">
                        <MotionButton>
                          <Button 
                            className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
                            onClick={() => setIsSubmitted(false)}
                          >
                            Send Another Message
                          </Button>
                        </MotionButton>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-900/20 border border-red-600/20 rounded-md text-red-400 text-sm"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-black/40 border-zinc-800 focus:border-amber-600/50 text-zinc-300"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-black/40 border-zinc-800 focus:border-amber-600/50 text-zinc-300"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-300">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      className="bg-black/40 border-zinc-800 focus:border-amber-600/50 text-zinc-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-zinc-300">
                      Service of Interest
                    </label>
                    <Select name="service">
                      <SelectTrigger className="bg-black/40 border-zinc-800 focus:border-amber-600/50 text-zinc-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800">
                        <SelectItem value="fall">Fall Protection Training</SelectItem>
                        <SelectItem value="crane">Crane & Hoist Training</SelectItem>
                        <SelectItem value="rigging">Rigging Training</SelectItem>
                        <SelectItem value="whmis">WHMIS Training</SelectItem>
                        <SelectItem value="equipment">Equipment Operation Training</SelectItem>
                        <SelectItem value="lockout">Lockout/Tagout Training</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project and safety needs..."
                      rows={5}
                      required
                      className="bg-black/40 border-zinc-800 focus:border-amber-600/50 text-zinc-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <MotionButton className="w-full">
                      <Button 
                        type="submit" 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-black font-medium"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </MotionButton>
                  </motion.div>
                </form>
              )}
            </FadeIn>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact <span className="text-amber-600">Information</span></h2>
              <div className="space-y-6">
                <RevealOnScroll className="flex items-start">
                  <div className="rounded-full p-3 mr-4 bg-amber-600/10 border border-amber-600/20 flex-shrink-0">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-1">Phone</h3>
                    <p className="text-zinc-400">236 868 1732</p>
                    <p className="text-sm text-zinc-500 mt-1">Available Monday-Friday, 9am-5pm PST</p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll className="flex items-start">
                  <div className="rounded-full p-3 mr-4 bg-amber-600/10 border border-amber-600/20 flex-shrink-0">
                    <Mail className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-1">Email</h3>
                    <p className="text-zinc-400">kojinfox@gmail.com</p>
                    <p className="text-sm text-zinc-500 mt-1">I typically respond within 24 hours</p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll className="flex items-start">
                  <div className="rounded-full p-3 mr-4 bg-amber-600/10 border border-amber-600/20 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-1">Location</h3>
                    <p className="text-zinc-400">13750 100 Ave #2907</p>
                    <p className="text-zinc-400">Surrey, BC V3T 0L3</p>
                  </div>
                </RevealOnScroll>
              </div>
              
              {/* Google Map */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 aspect-video rounded-xl bg-black/40 border border-zinc-800 overflow-hidden"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.9790699883283!2d-122.84776542326227!3d49.199444879322556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d97fe1c4e4e9%3A0x73fee1676f13c949!2s13750%20100%20Ave%20%232907%2C%20Surrey%2C%20BC%20V3T%200L3%2C%20Canada!5e0!3m2!1sen!2sus!4v1700683252587!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                  className="grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-tr from-black via-black to-amber-950/30 border-t border-amber-600/20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"
        ></motion.div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <SlideIn className="text-3xl font-bold md:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
              Ready to elevate your safety standards?
            </SlideIn>
            
            <FadeIn delay={0.3} className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
              Let my expertise protect your personnel, reduce risks, 
              and improve your project outcomes
            </FadeIn>
            
            <div>
              <MotionButton>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-medium px-8 py-7 text-lg">
                  <Link href="/services" className="inline-flex items-center">
                    View My Services
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