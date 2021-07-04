import Head from 'next/head'
import Link from 'next/link'
import Typewriter from "typewriter-effect";


export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Marin</title>
        <meta name="description" content="Daniel Marin's Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        className="h-screen w-screen fixed top-0 left-0 animate-fade-in-slow overflow-hidden"
        src="/embeds/perlin-noise/index.html"
        scrolling="no"
      />
      <main className="flex items-center justify-center h-full">
        <section className="z-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl text-center text-black dark:text-white border-b-2 border-black dark:border-white px-2 sm:px-10 pb-6 max-w-xs sm:max-w-none">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Daniel.")
                  .start();
              }}
            />
          </h1>
          <ul className="animate-fade-in flex justify-between items-center mt-5 text-black dark:text-white text-2xl w-96 px-4">
            <li className="w-32 flex justify-center">
              <Link href="https://www.danielmarin.dev/notes">
                <a className="border-b-2 px-2 border-transparent hover:border-black dark:hover:border-white">
                  Notes
                </a>
              </Link>
            </li>
            <li className="w-32 flex justify-center">
              <Link href="https://www.danielmarin.dev/projects">
                <a className="border-b-2 px-2 border-transparent hover:border-black dark:hover:border-white">
                  Projects
                </a>
              </Link>
            </li>
            <li className="w-32 flex justify-center">
              <Link href="https://www.linkedin.com/in/danielmarin0051/">
                <img
                  src="/icons/linkedin.svg"
                  className="h-7 w-7 cursor-pointer"
                />
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
