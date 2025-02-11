"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AiStylistPage() {
  const tags = [
    "next.js",
    "typescript",
    "openai vision",
    "fashion",
    "AI",
    "aesthetic mapping",
    "pinterest",
    "hackMIT",
    "image search",
    "style matching"
  ];

  const demoExample = "https://i.pinimg.com/474x/75/ea/32/75ea320c089a9fb9626f9c0a81d9dcb9.jpg";

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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">AI Stylist 👠</h1>
          
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
              <div className="space-y-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  Built at HackMIT, AI Stylist is a revolutionary fashion search engine that lets you find clothes by uploading images that match your style. Using our "aesthetic mapping" technique with OpenAI vision models, we analyze the visual elements and vibe of your reference image to find similar fashion pieces you'll love.
                </p>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/aistylistdemo.png"
                    alt="AI Stylist Interface"
                    width={1200}
                    height={675}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Try It Out</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/80 mb-4">
                      Find fashion that matches your style! Try our demo with this example dress:
                    </p>
                    <Image
                      src="/sampledress.png"
                      alt="Example Floral Dress"
                      width={300}
                      height={400}
                      className="rounded-lg border border-white/10"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-white/80">How to use:</p>
                    <ol className="list-decimal pl-6 text-white/80 space-y-2">
                      <li>Paste this image URL in the search bar:</li>
                      <div className="bg-black/30 p-4 rounded-lg text-purple-300 font-mono text-sm break-all select-all">
                        https://i.pinimg.com/474x/75/ea/32/75ea320c089a9fb9626f9c0a81d9dcb9.jpg
                      </div>
                      <li>See similar styles that match the vibe!</li>
                    </ol>
                    <div className="mt-4">
                      <a
                        href="https://aifashion-seven.vercel.app/"
                        className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Try Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Visual Search & Aesthetic Mapping</h3>
                  <p className="text-white/80">
                    Upload any fashion image, and our AI analyzes its style, patterns, colors, and overall aesthetic. We then search our database for products that match that specific vibe, making it easy to find clothes that fit your personal style.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-3">
                <li>
                  <span className="font-medium">Visual Search:</span> Upload any fashion image to find similar styles and aesthetics
                </li>
                <li>
                  <span className="font-medium">Aesthetic Understanding:</span> AI-powered analysis of style, patterns, and overall vibe
                </li>
                <li>
                  <span className="font-medium">Style Matching:</span> Find clothes that match your preferred aesthetic
                </li>
                <li>
                  <span className="font-medium">Pinterest Integration:</span> Use Pinterest images as search references
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Technical Implementation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Frontend</h3>
                  <ul className="list-disc pl-6 text-white/80 space-y-2">
                    <li>Next.js for the web application</li>
                    <li>Tailwind CSS for styling</li>
                    <li>TypeScript for type safety</li>
                    <li>Responsive image upload and display</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">AI Integration</h3>
                  <ul className="list-disc pl-6 text-white/80 space-y-2">
                    <li>OpenAI Vision API for image analysis</li>
                    <li>Custom aesthetic mapping algorithm</li>
                    <li>Image similarity search</li>
                    <li>Style categorization system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 