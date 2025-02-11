"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function OpenSeekPage() {
  const tags = [
    "next.js",
    "typescript",
    "openai",
    "deepseek",
    "groq",
    "translation",
    "AI",
    "censorship",
    "bias",
    "research"
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">OpenSeek 🌐</h1>
          
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/gigialc/openseek"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://openseek.vercel.app/"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Demo
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
            {/* Overview Section */}
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
              <div className="space-y-4">
                <p className="text-white/80 text-lg leading-relaxed">
                  OpenSeek is an innovative research project that explores how language translation affects AI responses, particularly focusing on potential censorship and bias in AI systems. The project investigates whether translating queries between English and Russian can bypass or alter DeepSeek's content restrictions.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  By implementing a multi-step translation process, OpenSeek provides insights into how language barriers and translation can impact AI behavior and response patterns.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Technical Implementation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Translation Flow</h3>
                  <p className="text-white/80">
                    The system follows a specific flow:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-white/80 space-y-2">
                    <li>English query → Russian translation (via OpenAI)</li>
                    <li>Russian query → DeepSeek AI processing</li>
                    <li>Russian response → English translation (via OpenAI)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Core Components</h3>
                  <ul className="list-disc pl-6 text-white/80 space-y-2">
                    <li>Next.js 14 for the frontend framework</li>
                    <li>TypeScript for type safety</li>
                    <li>Tailwind CSS for styling</li>
                    <li>OpenAI API for translation services</li>
                    <li>Groq SDK for DeepSeek integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research Implications */}
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Research Implications</h2>
              <ul className="space-y-3 text-white/80 list-disc pl-6">
                <li>
                  Investigation of how language translation affects AI content filtering
                </li>
                <li>
                  Analysis of cultural and linguistic bias in AI responses
                </li>
                <li>
                  Understanding of cross-language AI behavior patterns
                </li>
                <li>
                  Exploration of potential censorship circumvention through translation
                </li>
                <li>
                  Study of AI response consistency across different languages
                </li>
              </ul>
            </div>

            {/* Future Directions */}
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Future Directions</h2>
              <ul className="space-y-3 text-white/80 list-disc pl-6">
                <li>
                  Expand language pairs beyond English-Russian
                </li>
                <li>
                  Implement automated testing for response consistency
                </li>
                <li>
                  Add visualization tools for bias analysis
                </li>
                <li>
                  Develop metrics for measuring censorship effectiveness
                </li>
                <li>
                  Create a public API for researchers
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 