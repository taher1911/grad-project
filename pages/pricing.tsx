import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Detectiva website uses latest deep learning algorithms and AI techniques to make deepfake video identification easier."
        />
      </Head>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <h1 className="text-white text-2xl mt-[40vh]">pricing page</h1>
      </main>
    </>
  );
}
