import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
    <main className="min-h-screen bg-white dark:bg-white p-4 sm:p-10">
      <aside className="w-48" aria-label="Sidebar"> {/* Reduced width to 48 from 64 */}
        <div className="py-4 px-3 bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a href="/blogs" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="max-w-4xl mx-auto w-full">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-black">Georgina 👩🏼‍💻</h1>
        </header>

        <section className="mb-6">
          <p className="text-gray-600 dark:text-gray-600">
          Passionate about advancing women's health, building impactful communities, and developing fun apps. Right now my mission is to personalize health so we can prevent more diseases and live longer, healthier lives.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl text-gray-800 dark:text-black mb-3">Projects and Startups</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-600">
          <li>
              I'm building <a href="https://tryavocadohealth.com/" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Avocado Health 🥑</a>
            </li>
            <li>
              I'm running the <a href="https://womenxinnovators.wixsite.com/letsinnovate" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Womenx Innovators</a> community!
            </li>
            <li>
              Building Destig Femme, winner of the <a href="destigfemme.app" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Pi Network</a> 20K grant competition at Hack Harvard 2022
            </li>
            <li>
              Building Older Sister <a href="https://spark-older-sister.vercel.app/" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer"> an AI powered app for women's health literacy</a> 
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl text-gray-800 dark:text-black mb-3">Experience</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-600">
            <li>
              I worked as a technology risk management intern @<a href="https://www.statestreet.com/us/en/asset-manager" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">State Street.</a> My favorite part was learning about digital assets and quantum encryption in banking.
            </li>
            <li>
              I was a software engineer and app developer at <a href="https://www.lotus-app.org/" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Lotus</a> 🪷 (startup)
            </li>
            <li>
              I worked at <a href="https://anetabtc.io/" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">AnetaBTC</a> building the community and learning about tokenomics and decentralized finance! (startup)
            </li>
          </ul>
        </section>


        <section className="mb-6">
          <h2 className="text-3xl text-gray-800 dark:text-black mb-3">About Me</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-600">
            <li>I love sports, I have gone skydiving twice in my life, I also love skiing and horseback riding</li>
            <li>I'm from Barcelona, Spain ☀️ and I'm currently an undergraduate student at BU majoring in Business Analytics</li>
            <li>I learned how to code in high school because I wanted to be able to create and build new things</li>
          </ul>
        </section>

        <footer className="mb-10">
          <h2 className="text-3xl text-gray-800 dark:text-black mb-3">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-600">Email: galcaraz@bu.edu</p>
          <p className="text-gray-600 dark:text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/georgina-alcaraz/" className="text-blue-500 hover:text-blue-700">LinkedIn</a></p>
          <p className="text-gray-600 dark:text-gray-600">Twitter: <a href="https://twitter.com/gigiialc" className="text-blue-500 hover:text-blue-700">Twitter</a></p>
        </footer>
      </div>
    </main>
  </div>
  );
}
