import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

type Props = {};

const Upload = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [vid, setVid] = useState(false);

  const uploadVideo = (e: any) => {
    setLoading(true);
    const { type, name } = e.target.files[0];
    console.log(type);
    setVid(e.target.files[0]);
    setTimeout(() => {
      console.log(e.target.files[0]);
      setLoading(false);
    }, 3500);
  };
  return (
    <section className="mt-[20vh] rounded-lg border-2 border-gray-700 w-[90%] max-w-[1200px] min-h-[500px] flex justify-center items-center text-gray-200">
      <div className="flex justify-center items-center">
        {!loading && (
          <label className="text-white">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">
                  <AiOutlineCloudUpload />
                </p>
                {vid && <p>video uploaded click to upload another video</p>}
                {!vid && <p className="text-lg">click to upload</p>}
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
        {loading && <p>loading...</p>}
      </div>
    </section>
  );
};

export default Upload;
