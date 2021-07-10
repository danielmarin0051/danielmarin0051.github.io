import Typewriter from "typewriter-effect";

export default function Index() {
  return (
    <>
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
