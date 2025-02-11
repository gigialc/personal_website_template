"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MiraiPage() {
  const tags = [
    "AI",
    "voice-cloning",
    "NLP",
    "psychology",
    "next.js",
    "hume.ai",
    "mem0",
    "affirmations",
    "mental-health",
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
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-8">
              Transforming Self-Perception Through AI: The Impact of Personalized Voice-Cloning and Affirmation on Mental Wellbeing
            </h1>
            <p className="text-xl text-white/80 mb-2">Georgina Alcaraz</p>
            <p className="text-lg text-white/60">November, 2024</p>
          </div>
          
          <div className="flex gap-4 mb-8">
            <a
              href="https://mirai-girlssssss.vercel.app/"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Demo
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none space-y-12">
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">1 Overview</h2>
              <div className="space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  This research explores the use of AI voice-cloning technology to create an "aspirational digital twin"—a personalized AI coach using the user's own voice. By delivering daily affirmations, the study aims to assess the impact on self-confidence, motivation, and life satisfaction over a prolonged period. The integration of advanced AI models and psychological principles seeks to transform negative internal dialogues into positive subconscious discourse.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Hypothesis</h3>
                  <p className="text-white/80 text-lg leading-relaxed italic">
                    "Regular exposure to personalized affirmations in one's own voice will lead to sustained improvements in self-confidence, motivation, and overall life satisfaction over a prolonged period."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Affirmations and Neural Pathways</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Positive affirmations have been shown to help individuals challenge and overcome self-sabotaging and negative thoughts. According to self-affirmation theory, individuals can maintain their sense of self-integrity by affirming their core values and beliefs. Repetition of affirmations can reprogram neural pathways in the brain, leading to lasting changes in thinking patterns due to neuroplasticity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">2 Technical Approach</h2>
              <p className="text-white/80 text-lg mb-6">
                The proposed system leverages advanced AI technologies to deliver personalized daily affirmations in the user's own AI-generated voice. The key technologies include:
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">2.1 AI Voice-Cloning and Synthesis</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We will utilize state-of-the-art like Hume AI voice synthesis models capable of capturing emotional nuances and adjusting tone according to the affirmation's content. These models will generate affirmations in the user's voice, incorporating desired emotional tones such as confidence and positivity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">2.2 Agentic Long-Term Memory</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    To enhance personalization and ensure continuity in user interactions, we will employ Mem0, an AI memory module designed for long-term information retention. Mem0 allows the AI coach to store and recall past interactions, user preferences, personal goals, and progress over time. By integrating Mem0, the AI coach can provide context-aware affirmations that are tailored to the user's evolving needs, making the experience more relevant and engaging.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">2.3 Prompt Engineering</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Effective prompt engineering will be used to guide the AI in generating affirmations that align with the user's goals and preferences. Prompts will be designed to ensure affirmations are positive, use present tense, and avoid negative language, in line with cognitive-behavioral therapy principles.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">2.4 Feedback System with Voice Note Integration</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    To enhance personalization, users can provide feedback through voice notes, which act as journal entries. Using NLP, the AI will analyze these notes to capture emotional cues, goals, and recurring challenges, enabling it to adapt affirmations based on the user's current state and needs.
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-2">
                    <li>
                      <span className="font-medium">Voice Note Processing:</span> Voice notes will be transcribed and analyzed to identify themes, emotional tones, and key goals, allowing the AI to tailor responses accordingly. For example, if a user expresses frustration, the AI might generate affirmations focused on resilience.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">3 Psychological Approach</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">3.1 Initial Assessment and Survey Design</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Participants will complete a comprehensive survey designed to assess their self-confidence, motivation, life satisfaction, and internal dialogue patterns. The survey will include questions about their goals, moments when they felt confident and at their "best selves," and instances of negative internal discourse.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed mt-4">
                    Validated scales such as the Rosenberg Self-Esteem Scale and the Positive and Negative Affect Schedule will be used to establish baseline measurements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">3.2 Designing Effective Affirmations</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Affirmations will be carefully crafted using specific Neuro-Linguistic Programming (NLP) techniques to enhance their effectiveness and impact on the subconscious mind. The techniques include:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white/80 space-y-4">
                    <li>
                      <span className="font-medium">Positive Framing and Reframing:</span> Transform negative thoughts into positive statements to shift the user's mindset toward positivity (e.g., changing "I am not good enough" to "I am capable and deserving of success").
                    </li>
                    <li>
                      <span className="font-medium">Anchoring:</span> Associate affirmations with positive emotions or sensations to reinforce their effect (e.g., encouraging a deep breath and a smile while listening).
                    </li>
                    <li>
                      <span className="font-medium">Visualization Prompts:</span> Use language that stimulates mental imagery to enhance motivation and belief in one's abilities.
                    </li>
                    <li>
                      <span className="font-medium">Embedded Commands:</span> Include subtle suggestions that encourage desired behaviors (e.g., "You naturally find yourself taking steps toward your goals every day").
                    </li>
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