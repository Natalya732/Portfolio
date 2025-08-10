"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import { Sun, Download } from "lucide-react";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "@/shared/constants/navigation";

const Logo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center"
  >
    <Image src={"/images/user.jpg"} alt="Erick" width={40} height={40} className="rounded-full" />
  </motion.div>
);

const NavItem = ({ name, href, index }: { name: string; href: string; index: number }) => (
  <motion.a
    href={href}
    key={index}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    whileHover={{ y: -2 }}
    className="text-[#9ea3b0] hover:text-white transition-colors cursor-pointer font-medium text-sm"
  >
    {name}
  </motion.a>
);

// const ThemeToggle = () => (
//   <motion.button
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5, delay: 0.4 }}
//     className="text-white hover:text-[#ff6b35] transition-colors p-2"
//   >
//     <Sun className="w-5 h-5" />
//   </motion.button>
// );

const ResumeButton = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <Button 
      size="sm"
      className="bg-white text-black hover:bg-gray-100 font-medium text-sm px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Download className="w-4 h-4 mr-2" />
      Resume
    </Button>
  </motion.div>
);

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Logo />

          {/* Navigation items in center */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <NavItem
                key={item.name}
                name={item.name}
                href={item.href}
                index={index}
              />
            ))}
          </div>

          {/* Theme toggle and Resume button on the right */}
          <div className="flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <ResumeButton />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
