"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import StarsBackground from './components/StarsBackground';

const SubstackIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 3.75H20.25V6.75H3.75V3.75Z" fill={color} />
    <path d="M3.75 8.25H20.25V11.25H3.75V8.25Z" fill={color} />
    <path d="M3.75 12.75H20.25V20.25L12 16.5L3.75 20.25V12.75Z" fill={color} />
  </svg>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
   const socials = [
    { href: "mailto:galcaraz@bu.edu", icon: Mail },
    { href: "https://www.linkedin.com/in/georgina-alcaraz/", icon: Linkedin },
    { href: "https://github.com/gigialc", icon: Github },
    { href: "https://substack.com/@gigialcaraz?utm_source=edit-profile-page", icon: SubstackIcon },
    { href: "https://www.youtube.com/@gigialcaraz", icon: Youtube },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'research', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <StarsBackground />
      
      <div className="relative z-10 min-h-screen p-4 sm:p-8">
        <main className="pt-14 sm:pt-14">
          <div className="max-w-3xl mx-auto mb-20">
            <section id="home" className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-between"
              >
                <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
                  <div className="absolute inset-0 rounded-full opacity-30" />
                  <Image
                    src="/gigi.png"
                    alt="Georgina Alcaraz"
                    width={250}
                    height={250}
                    className="rounded-full shadow-lg mx-auto md:mx-0 relative z-10 border-white/50"
                  />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-right">
                  <motion.h1 
                    className="text-2xl sm:text-5xl font-bold text-white bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Georgina Alcaraz
                  </motion.h1>
                  <p className="text-xl sm:text-base text-white/80 mb-6">
                    Building AI and communities👩‍💻💌🪩
                  </p>
                  <div className="flex justify-center md:justify-end space-x-4">
                    {socials.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            <section id="projects" className="mb-24 mt-20">
              
              {/* Womenx Innovators */}
              <motion.div
                className=" border-gray-200 pb-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Founder of Womenx Innovators 🩷</h3>
                <p className="text-white/80 mb-4">A community dedicated to building the next generation of womenx unicorn founders focused on making the world a better place.</p>
                <a
                  href="https://www.womenxinnovators.com/"
                  className="text-purple-300 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the community →
                </a>
              </motion.div>

              {/* Coding Projects */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-10 mt-20 border-b border-white/10 pb-8">Coding Projects</h3>
              <div className="space-y-12">
                {[
                  {
                    title: "Avocado Health 🥑",
                    description: "AI copilot for health writing.",
                    link: "https://avocadoai.vercel.app/api",
                    linkText: "Discover Avocado Health"
                  },
                  {
                    title: "Grapevine 🍇",
                    description: "Connect and collaborate on passion projects",
                    link: "https://grapevinemvp.vercel.app/",
                    linkText: "Join Grapevine"
                  },
                  {
                    title: "AI Stylist 👠",
                    description: "Your personal AI stylist based on your pinterest board.",
                    link: "https://aifashion-seven.vercel.app/",
                    linkText: "Try AI Stylist"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="relative group rounded-xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="relative">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">{project.title}</h4>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <div className="flex flex-col">
                        <a
                          href={project.link}
                          className="text-purple-300 hover:text-purple-400 transition-colors mb-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.linkText} →
                        </a>
                      
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Add new Research section here */}
            <section id="research" className="mb-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 border-b border-white/10 pb-8">
                Research
              </h2>
              <motion.div
                className="border-b border-white/10 pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Mirai @ MIT Media Lab</h4>
                <p className="text-white/80 mb-4">
                   Transform your inner dialogue with an AI voice clone that helps you reflect and grow. Experience conversations with your ideal self.
                </p>
                <a
                  href="https://mirai-girlssssss.vercel.app/"
                  className="text-purple-300 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Mirai →
                </a>
              </motion.div>
            </section>

            <section id="about" className="mb-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">More about me</h2>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white/80">🪂 I have gone skydiving twice in my life and was a competitive alpine skier at one point.</p>
                <p className="text-white/80">💻 I learned how to code in high school because I wanted to channel my creativity into building for others.</p>
                <p className="text-white/80">🇪🇸 I'm from Spain, the funnest country ever.</p>
              </motion.div>
            </section>
            </div>
          </main>
        </div>
      </div>
  );
}