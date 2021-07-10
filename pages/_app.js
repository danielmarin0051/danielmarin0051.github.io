import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="w-screen h-screen relative">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
