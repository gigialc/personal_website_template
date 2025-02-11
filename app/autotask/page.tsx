"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AutoTaskPage() {
  const tags = [
    "next.js",
    "screenpipe",
    "LLM",
    "scraping",
    "transcription",
    "langchain",
    "agent",
    "Automation",
    "Productivity",
    "AI tools"
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">AutoTask 🤖</h1>
          
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/sundai-club/tasks-auto-complete"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.sundai.club/projects/b09871dc-3a94-4cda-a6dc-397f47d8192b"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Sundai Page
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
                  AutoTask analyzes the daily activity on your computer and offers to automate repetitive and boring tasks using AI agents.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Are there tasks that you know you need to do but dread having to do them? Applying for jobs, shopping for groceries, paying your bills, travel arrangements, booking appointments, organizing your digital photos, etc.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  What if AI could take over some of those tasks, and do them on your behalf? That's where AutoTask comes in - it watches what you're doing throughout the day, and sees which tasks you're repeatedly doing, and comes up with a plan for automating those tasks.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  These tasks come into the AutoTask dashboard where you can review the plan before accepting the task. Once you accept the task, AutoTask gets to work - firing up a browser and executing the plan to complete the task. When it's done with the task, it reports back what it did in the dashboard.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Technical Implementation</h2>
              <p className="text-white/80 mb-4">AutoTask is comprised of 3 key components:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">1. Screenpipe</h3>
                  <p className="text-white/80">
                    For capturing screen activity and OCRing it (it can also record audio and transcribe it). We've built a custom pipe called tasks-auto-complete that captures the OCR output from Screenpipe, passes it to OpenAI which then returns suggestions on how to automate the activity.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">2. Electron App</h3>
                  <p className="text-white/80">
                    The Electron app listens for tasks suggested by the tasks-auto-complete pipe and displays them in the dashboard. It's the "glue code" that takes the tasks from the pipe and passes them along to browser use for execution. It also has a MacOS notification capability to alert you when it's identified a task to be automated.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">3. Browser Use</h3>
                  <p className="text-white/80">
                    For using AI to execute tasks in the browser. Browser use has a whole library of tasks that it can automate including grocery shopping!
                  </p>
                </div>
              </div>
            </div>

            {/* Future Improvements */}
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Future Improvements</h2>
              <ul className="space-y-3 text-white/80 list-disc pl-6">
                <li>
                  Extend beyond browser tasks using macOS use once it becomes more stable with 3rd party MacOSX apps
                </li>
                <li>
                  Add settings screen for storing commonly used information (name, email, phone, etc.) and dashboard buttons for triggering common tasks
                </li>
                <li>
                  Utilize Screenpipe's microphone and audio recording capabilities for capturing and automating tasks from Zoom conversations or voice journaling
                </li>
                <li>
                  Implement detailed plan viewing with the ability to reorder, delete, add steps, and include human approval steps
                </li>
                <li>
                  Leverage the SQLite database of OCR and audio transcriptions for trend analysis and more efficient task automation suggestions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 