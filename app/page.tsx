"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { href: "https://twitter.com/gigiialc", icon: Twitter },
    { href: "https://github.com/gigialc", icon: Github },
    { href: "https://substack.com/@gigialcaraz?utm_source=edit-profile-page", icon: SubstackIcon },
    { href: "https://www.youtube.com/@gigialcaraz", icon: Youtube },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 p-4 sm:p-8">
    <main className="pt-14 sm:pt-14">
      <div className="max-w-3xl mx-auto mb-20">
        <section id="home" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/gigi.png"
                alt="Georgina Alcaraz"
                width={250}
                height={250}
                className="rounded-full shadow-md mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h1 className="text-3xl sm:text-3xl font-bold text-gray-800 mb-4">Georgina Alcaraz</h1>
              <p className="text-xl sm:text-base text-gray-600 mb-6">
                Building in AI and blockchain right now 👩‍💻💌🪩🩷
              </p>
              <div className="flex justify-center md:justify-end space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
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
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">Founder of Womenx Innovators 🩷</h3>
            <p className="text-gray-600 mb-4">A community dedicated to building the next generation of womenx unicorn founders focused on making the world a better place.</p>
            <a
              href="https://www.womenxinnovators.com/"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the community →
            </a>
          </motion.div>

          {/* Coding Projects */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-10 mt-20 border-b border-gray-200 pb-8">Coding Projects 🤖</h3>
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
                linkText: "Join Grapevine",
                link1: "https://www.grapevinewaitlist.com/",
                linkText1: "Our graphics on the waitlist"
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
                className="border-b border-gray-200 pb-8 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-col">
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 transition-colors mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkText} →
                  </a>
                  <a
                    href={project.link1}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkText1}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

          <section id="about" className="mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">More about me</h2>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600">🪂 I have gone skydiving twice in my life and was a competitive alpine skier at one point.</p>
              <p className="text-gray-600">💻 I learned how to code in high school because I wanted to channel my creativity into building for others.</p>
              <p className="text-gray-600">🇪🇸 I'm from Spain, the funnest country ever.</p>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}