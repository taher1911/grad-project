import Head from "next/head";
import Landing from "@/components/pages/home/Landing";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Video from "@/components/pages/home/Video";
import Prices from "@/components/pages/home/Prices";

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
        <Video />
        <Prices />
      </main>
    </>
  );
}
