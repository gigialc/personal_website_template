import Image from 'next/image';
import { Mail, Linkedin, Twitter, Github , YoutubeIcon} from 'lucide-react';

export default function Home() {

  const SubstackIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 3.75H20.25V6.75H3.75V3.75Z" fill={color} />
      <path d="M3.75 8.25H20.25V11.25H3.75V8.25Z" fill={color} />
      <path d="M3.75 12.75H20.25V20.25L12 16.5L3.75 20.25V12.75Z" fill={color} />
    </svg>
  );

  return (
    <div className="flex bg-white flex-col">
      <main className="min-h-screen p-4 sm:p-10">
        <div className="max-w-4xl mx-auto w-full">

          <aside className="w-48" aria-label="Sidebar">
            <div className="py-4 px-3">
              <ul className="space-y-2">
                <li>
                  <a href="/blogs" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-rose-200 transition-colors">
                    Thoughts 💭
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Gigi Alcaraz</h1>
          </header>

          <div className="flex justify-center mb-10">
            <Image
              src="/profilepic.png"
              alt="Gigi Alcaraz"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
          </div>

          <section className="mb-12 text-center">
            <p className="text-base text-gray-700 leading-relaxed">
              building in ai and blockchain right now  👩‍💻💌🪩🩷 
              ...also figuring it out
            </p>
            <br />
             {/* Social icons at the top */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="mailto:galcaraz@bu.edu" className="text-gray-600 hover:text-teal-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/georgina-alcaraz/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/gigiialc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://github.com/gigialc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://substack.com/@gigialcaraz?utm_source=edit-profile-page" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
              <SubstackIcon size={24} />
            </a>
            <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
      <YouTubeIcon size={24} />
    </a>
          </div>
          </section>

          

          <section className="mb-12">
            {/* <h2 className="text-2xl text-black mb-6 text-center">Projects</h2> */}
            <div className="space-y-6">
              <div className="bg-white p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Womenx Innovators</h3>
                <p className="text-gray-600 mb-4">Fostering a community of visionary female founders, driving innovation and change.</p>
                <a href="https://womenxinnovators.wixsite.com/letsinnovate" className="text-teal-600 hover:text-teal-800 font-medium" target="_blank" rel="noopener noreferrer">Explore the community →</a>
              </div>
              <div className="bg-white p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Avocado Health 🥑</h3>
                <p className="text-gray-600 mb-4">AI copilot for safe health content generation.</p>
                <a href="https://avocadoai.vercel.app/" className="text-teal-600 hover:text-teal-800 font-medium" target="_blank" rel="noopener noreferrer">Discover Avocado Health →</a>
              </div>
              <div className="bg-white p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Verve 💜</h3>
                <p className="text-gray-600 mb-4">Empowering women with tailored, affordable healthcare solutions.</p>
                <a href="https://verve-health.vercel.app/" className="text-teal-600 hover:text-teal-800 font-medium" target="_blank" rel="noopener noreferrer">Experience Verve →</a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl text-gray-800 mb-6 text-center">More about me...</h2>
            <div className="bg-white p-6">
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>I have gone skydiving twice in my life and was a competitive alpine skier at one point.</li>
                <li>I learned how to code in high school because I wanted to channel my creativity into building for others.</li>
                <li>I'm originally from Spain 🇪🇸</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}