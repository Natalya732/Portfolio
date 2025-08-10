"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="space-y-2"
          whileHover={{ x: 5 }}
        >
          <Label htmlFor="name" className="text-white font-medium">Name</Label>
          <Input 
            id="name" 
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="bg-[#1e4eae]/20 border-[#546a7b] text-white placeholder:text-[#9ea3b0] focus:border-orange-400 focus:ring-orange-400/20 transition-all duration-300"
          />
        </motion.div>
        <motion.div 
          className="space-y-2"
          whileHover={{ x: -5 }}
        >
          <Label htmlFor="email" className="text-white font-medium">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="bg-[#1e4eae]/20 border-[#546a7b] text-white placeholder:text-[#9ea3b0] focus:border-orange-400 focus:ring-orange-400/20 transition-all duration-300"
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="space-y-2"
        whileHover={{ x: 5 }}
      >
        <Label htmlFor="subject" className="text-white font-medium">Subject</Label>
        <Input 
          id="subject" 
          placeholder="What's this about?"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          className="bg-[#1e4eae]/20 border-[#546a7b] text-white placeholder:text-[#9ea3b0] focus:border-orange-400 focus:ring-orange-400/20 transition-all duration-300"
        />
      </motion.div>
      
      <motion.div 
        className="space-y-2"
        whileHover={{ x: -5 }}
      >
        <Label htmlFor="message" className="text-white font-medium">Message</Label>
        <textarea 
          id="message" 
          placeholder="Tell me about your project..."
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-[#1e4eae]/20 border border-[#546a7b] text-white placeholder:text-[#9ea3b0] focus:border-orange-400 focus:ring-orange-400/20 rounded-md px-3 py-2 resize-none transition-all duration-300"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <Button 
          type="submit"
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 px-8 py-3 font-semibold transform hover:scale-105"
        >
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </motion.div>
    </motion.form>
  );
};

const ContactInfo = () => {
  const contactItems = [
    { 
      icon: Mail, 
      title: "Email", 
      value: "nikita@example.com",
      href: "mailto:nikita@example.com"
    },
    { 
      icon: Phone, 
      title: "Phone", 
      value: "+91 123 456 7890",
      href: "tel:+911234567890"
    },
    { 
      icon: MapPin, 
      title: "Location", 
      value: "Uttarakhand, India",
      href: "#"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="text-center group cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:rotate-12">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h3>
            <p className="text-[#9ea3b0] group-hover:text-white transition-colors">{item.value}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

const SocialLinks = () => {
  const socialItems = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nikita@example.com", label: "Email" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="mt-12 text-center"
    >
      <h3 className="text-white font-semibold mb-6">Connect with me</h3>
      <div className="flex justify-center gap-6">
        {socialItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
            className="w-12 h-12 bg-[#1e4eae]/20 border border-[#546a7b] rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
          >
            <item.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f295c]/20 to-black" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#9ea3b0] text-lg font-medium mb-2">Get In Touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#9ea3b0] text-lg">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>

        <ContactForm />
        <ContactInfo />
        <SocialLinks />
      </motion.div>
    </section>
  );
}
