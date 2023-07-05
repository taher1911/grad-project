import Footer from "@/components/Footer";
import { useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";

import { AiOutlineCloudUpload } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Checking() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const uploadVideo = (e) => {
    const { type, name } = e.target.files[0];
    console.log(type);
  };
  return (
    <>
      <Head>
        <title>Checking</title>
        <meta
          name="description"
          content="Detectiva website uses latest deep learning algorithms and AI techniques to make deepfake video identification easier."
        />
      </Head>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
      >
        <div className="flex justify-center items-center">
          <>
            {!loading && (
              <label className="text-white">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-2xl">
                      <AiOutlineCloudUpload />
                    </p>
                    <p className="text-lg">click to upload</p>
                  </div>
                  <p className="text-gray-400 mt-2 text-xs">
                    {" "}
                    use high-quality JPG, SVG, PNG, GIF less than 20 MB
                  </p>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  onChange={uploadVideo}
                  className="w-0 h-0"
                />
              </label>
            )}
          </>
        </div>
      </main>
      <Footer />
    </>
  );
}
