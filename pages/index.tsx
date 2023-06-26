import Head from "next/head";
import Landing from "@/components/pages/home/Landing";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Video from "@/components/pages/home/Video";
import Prices from "@/components/pages/home/Prices";
import Mobile from "@/components/pages/home/Mobile";
import Start from "@/components/pages/home/Start";
import Footer from "@/components/Footer";
import Explain from "@/components/pages/home/Explain";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Detectiva</title>
        <meta
          name="description"
          content="Detectiva website uses latest deep learning algorithms and AI techniques to make deepfake video identification easier."
        />
      </Head>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Landing />
        {/* <Explain /> */}
        <Video />
        <Prices />
        <Mobile />
        <Start />
      </main>
      <Footer />
    </>
  );
}
