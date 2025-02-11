"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GrapevinePage() {
  const tags = [
    "next.js",
    "typescript",
    "mongodb",
    "node.js",
    "tailwind",
    "networking",
    "entrepreneurship",
    "projects",
    "collaboration"
  ];

  const features = [
    {
      title: "Profile Creation",
      description: "Create a profile to showcase your background, interests, and current projects",
      image: "/grapevine3.png"
    },
    {
      title: "Project Discovery",
      description: "Browse and discover interesting projects and potential collaborators",
      image: "/grapevine3.png"
    },
    {
      title: "People Discovery",
      description: "Discover people based on your interests and skills",
      image: "/grapevine2.png"
    },
    {
      title: "Collaboration Requests",
      description: "Connect with others through a streamlined collaboration request system",
      image: "/grapevine4.png"
    },
    {
      title: "Project Management",
      description: "Manage your projects and collaborate with others",
      image: "/grapevine5.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-purple-300 hover:text-purple-400 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Grapevine 🍇</h1>
          
          <div className="flex gap-4 mb-8">
            <a
              href="https://grapevinemvp.vercel.app/"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Demo
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Grapevine is a platform for entrepreneurs and project builders to showcase their work in a more casual, project-focused environment than LinkedIn. It connects passionate individuals who love building things, enabling them to discover like-minded people, share their projects, and find potential collaborators at their university and beyond.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Social Features</h3>
                  <ul className="list-disc pl-6 text-white/80 space-y-2">
                    <li>Follow other entrepreneurs and creators</li>
                    <li>Discover profiles with similar interests</li>
                    <li>University-based networking</li>
                    <li>Project feed from followed users</li>
                    <li>Search people and projects by tags</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Project Showcase</h3>
                  <ul className="list-disc pl-6 text-white/80 space-y-2">
                    <li>Share current and past projects</li>
                    <li>Tag projects with relevant skills/topics</li>
                    <li>Request to collaborate on projects</li>
                    <li>Project updates and progress sharing</li>
                    <li>Informal, builder-focused format</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">UI Showcase</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                    <div className="rounded-xl overflow-hidden border border-white/10">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={450}
                        className="w-full"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Technical Implementation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Frontend Stack</h3>
                  <ul className="list-disc pl-6 text-white/80 space-y-2">
                    <li>Next.js for server-side rendering and routing</li>
                    <li>Tailwind CSS for responsive styling</li>
                    <li>TypeScript for type safety</li>
                    <li>Custom API integration for data fetching</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Backend Infrastructure</h3>
                  <ul className="list-disc pl-6 text-white/80 space-y-2">
                    <li>Node.js backend with RESTful API endpoints</li>
                    <li>MongoDB for flexible document storage</li>
                    <li>User authentication and following system</li>
                    <li>Tag-based search and filtering</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Key Differentiators</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  <span className="font-medium">Project-First Approach:</span> Unlike LinkedIn's career-focused environment, Grapevine prioritizes ongoing projects and building activities
                </li>
                <li>
                  <span className="font-medium">University Focus:</span> Connect with fellow builders at your university and discover what others are working on
                </li>
                <li>
                  <span className="font-medium">Interest-Based Discovery:</span> Find people and projects through shared interests and tags, not just professional connections
                </li>
                <li>
                  <span className="font-medium">Casual Building Community:</span> A space for sharing and collaborating on side projects and entrepreneurial ventures
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 