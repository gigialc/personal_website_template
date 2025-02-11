"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AvocadoPage() {
  const tags = [
    "next.js",
    "Chatbot",
    "health",
    "openai",
    "typescript",
    "vercel",
    "guardrails",
    "RAG",
    "langchain",
    "pinecone",
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Avocado Health 🥑</h1>
          
          <div className="flex gap-4 mb-8">
            <a
              href="https://avocadoai.vercel.app/api"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Demo
            </a>
            {/* <a
              href="https://github.com/yourusername/avocado"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              GitHub
            </a> */}
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

          <div className="mb-12 rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/avocado-demo.png"
              alt="Avocado Health Demo"
              width={1200}
              height={675}
              className="w-full"
            />
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Avocado Health is an AI copilot that provides accurate, personalized health information by leveraging PubMed articles and advanced AI techniques. It combines RAG (Retrieval Augmented Generation) with strict guardrails to ensure reliable, scientifically-backed responses while maintaining accessibility for different target audiences.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-3">
                <li>
                  <span className="font-medium">Scientific Accuracy:</span> All responses are based on peer-reviewed PubMed articles, with direct citations and references
                </li>
                <li>
                  <span className="font-medium">Personalized Explanations:</span> Content is automatically adapted based on the target audience's age and background
                </li>
                <li>
                  <span className="font-medium">Custom Knowledge Base:</span> Users can expand the system's knowledge by adding their own PubMed articles to the database
                </li>
                <li>
                  <span className="font-medium">Anti-Hallucination Measures:</span> Strict guardrails ensure responses stick to verified medical information
                </li>
                <li>
                  <span className="font-medium">Source Transparency:</span> Every response includes links to the original PubMed articles used
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Technical Implementation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">RAG Architecture</h3>
                  <p className="text-white/80">
                    The system uses Retrieval Augmented Generation to provide accurate responses:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-white/80 space-y-2">
                    <li>PubMed articles are vectorized and stored in a Pinecone database</li>
                    <li>User queries trigger semantic search to find relevant article sections</li>
                    <li>Retrieved context is used by the LLM to generate accurate responses</li>
                    <li>Citations are automatically included with each response</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Guardrails Implementation</h3>
                  <p className="text-white/80">
                    To prevent hallucination and ensure accuracy, the system employs multiple guardrails:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-white/80 space-y-2">
                    <li>Strict context adherence - responses must be based on provided PubMed articles</li>
                    <li>Citation requirements - every claim must reference a specific source</li>
                    <li>Medical terminology validation</li>
                    <li>Confidence thresholds for retrieved content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Knowledge Base Management</h3>
                  <p className="text-white/80">
                    Users can enhance the system's knowledge:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-white/80 space-y-2">
                    <li>Upload PubMed articles to personal knowledge base</li>
                    <li>Automatic text extraction and vectorization</li>
                    <li>Integration with existing article database</li>
                    <li>Source prioritization for personalized responses</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Technology Stack</h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>Next.js 14 with App Router for the frontend</li>
                <li>LangChain for RAG implementation</li>
                <li>Pinecone for vector database storage</li>
                <li>OpenAI API for content generation</li>
                <li>Guardrails for hallucination prevention</li>
                <li>TypeScript for type safety</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">How It Works</h2>
              <div className="space-y-4">
                <p className="text-white/80">
                  1. User submits a health-related question and specifies their target audience
                </p>
                <p className="text-white/80">
                  2. System searches vectorized PubMed articles in Pinecone for relevant context
                </p>
                <p className="text-white/80">
                  3. LangChain combines retrieved context with guardrails to generate accurate response
                </p>
                <p className="text-white/80">
                  4. Response is formatted with citations and adapted to the target audience
                </p>
                <p className="text-white/80">
                  5. Users can optionally add new articles to improve future responses
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 