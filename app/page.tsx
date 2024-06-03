import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="min-h-screen bg-white dark:bg-white p-4 sm:p-10">
        <aside className="w-48" aria-label="Sidebar"> {/* Reduced width to 48 from 64 */}
          <div className="py-4 px-3">
            <ul className="space-y-2">
              <li>
                <a href="/blogs" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-black">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="max-w-4xl mx-auto w-full">
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-black">Gigi Alcaraz 👩🏼‍💻</h1>
          </header>

          <div className="flex justify-right">
            <Image
              src="/georgina.jpg"
              alt="Picture of the author"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <section className="mb-6 mt-10">
            <p className="text-gray-600 dark:text-gray-600">
              On a mission to increase women's health literacy ❤️
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl text-gray-900 dark:text-black mb-3">Projects and Apps</h2>
            <ul className="list-disc list-inside text-gray-900 dark:text-gray-600">
              <li className="list-disc">
                Building Older Sister <a href="https://spark-older-sister.vercel.app/" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">an AI powered app for women's health literacy</a>
              </li>
              <br/>
              <li className="list-disc">
                I'm running the <a href="https://womenxinnovators.wixsite.com/letsinnovate" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Womenx Innovators</a> community for female founders!
              </li>
              <br/>
              <li className="list-disc">
                I'm building <a href="https://tryavocadohealth.com/" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Avocado Health 🥑</a>
              </li>
              <br/>
              <li className="list-disc">
                Building Destig Femme, an app on <a href="https://www.destigfemme.app/" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Pi Network</a> and a safe space for women in blockchain to build community
              </li>
            </ul>
          </section>

          {/* <section className="mb-6">
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
          </section> */}

          <section className="mb-6">
            <h2 className="text-2xl text-gray-900 dark:text-black mb-3">More about me...</h2>
            <ul className="list-disc list-inside text-gray-900 dark:text-gray-600">
              <li className="list-disc">I love sports, I have gone skydiving twice in my life, I also love skiing and horseback riding</li>
              {/* <li>I'm from Barcelona, Spain ☀️ and I'm currently an undergraduate student at BU majoring in Business Analytics</li> */}
              <br/>
              <li className="list-disc">I learned how to code in high school because I wanted to be able to create things</li>
            </ul>
          </section>

          <footer className="mb-10">
            <h2 className="text-2xl text-gray-900 dark:text-black mb-3">Contact 💌</h2>
            <p className="text-gray-600 dark:text-gray-600">Email: galcaraz@bu.edu </p>
            <p className="text-gray-600 dark:text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/georgina-alcaraz/" className="text-blue-500 hover:text-blue-700">LinkedIn</a></p>
            {/* <p className="text-gray-600 dark:text-gray-600">Twitter: <a href="https://twitter.com/gigiialc" className="text-blue-500 hover:text-blue-700">Twitter</a></p> */}
          </footer>
        </div>
      </main>
    </div>
  );
}
