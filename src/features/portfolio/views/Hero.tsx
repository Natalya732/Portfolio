"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { Github, Linkedin, Mail, Download, MailIcon } from "lucide-react";

const SocialIcon = ({
  icon: Icon,
  href,
  delay,
}: {
  icon: any;
  href: string;
  delay: number;
}) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
    className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);

const ProfilePicture = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="mb-8 relative"
  >
    <div className="relative w-40 h-40 mx-auto">
      {/* Outer gradient border */}
      <div className="w-full h-full rounded-full border-none p-1 animate-pulse-glow">
        <Image
          src={"/images/user.jpg"}
          alt="Erick"
          width={160}
          height={160}
          className="rounded-full border-none outline-0 shadow-none"
        />
      </div>

      {/* Floating particles effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-orange-400/20"
      />
    </div>
  </motion.div>
);

const Greeting = () => (
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat tracking-wide"
  >
    Hi! I'm Nikita
  </motion.h1>
);

const RoleBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="mb-6"
  >
    <div className="inline-block bg-[#1e4eae] text-white text-xl font-bold px-8 py-3 rounded-lg border border-[#546a7b] shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
    Web Developer
    </div>
  </motion.div>
);

const Description = () => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="text-[#9ea3b0] text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
  >
    based in Uttarakhand, India. I build interactive software applications &
    websites that run across platforms & devices.
  </motion.p>
);

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: "#", delay: 1.4 },
    { icon: MailIcon, href: "#", delay: 1.5 },
    { icon: Linkedin, href: "#", delay: 1.6 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="flex justify-center gap-4 mb-8"
    >
      {socialLinks.map((social, index) => (
        <SocialIcon
          key={index}
          icon={social.icon}
          href={social.href}
          delay={social.delay}
        />
      ))}
    </motion.div>
  );
};

const CallToActionButtons = () => (
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
   className="flex gap-4 justify-center mb-8"
>
    <Button
      variant="outline"
      size="lg"
      className="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-base cursor-pointer rounded-lg hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <Mail className="w-4 h-4 mr-2" />
      Contact Me
    </Button>
    <Button
      size="lg"
      className="bg-white text-black cursor-pointer hover:bg-gray-100 transition-all duration-300 font-semibold text-base rounded-lg hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <Download className="w-4 h-4 mr-2" />
      Resume
    </Button>
  </motion.div>
);

const Separator = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 1, delay: 2 }}
    className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-[#546a7b] to-transparent"
  />
);

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f295c] to-black opacity-50" />


      <div
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <ProfilePicture />
        <Greeting />
        <RoleBadge />
        <Description />
        <SocialLinks />
        <CallToActionButtons />
        <Separator />
      </div>
    </section>
  );
}
