import Head from "next/head";
import Typewriter from "typewriter-effect";

export default function Index() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        {/* <!-- HTML Meta Tags --> */}
        <title>Daniel Marin | Home</title>
        <meta name="description" content="Hi, I'm Daniel." />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.danielmarin.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Marin | Home" />
        <meta property="og:description" content="Hi, I'm Daniel." />
        <meta
          property="og:image"
          content="https://www.danielmarin.dev/images/opengraph.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="danielmarin.dev" />
        <meta property="twitter:url" content="https://www.danielmarin.dev/" />
        <meta name="twitter:title" content="Daniel Marin | Home" />
        <meta name="twitter:description" content="Hi, I'm Daniel." />
        <meta
          name="twitter:image"
          content="https://www.danielmarin.dev/images/opengraph.png"
        />
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
                typewriter.typeString("Hi, I'm Daniel.").start();
              }}
            />
          </h1>
        </section>
      </main>
    </>
  );
}
