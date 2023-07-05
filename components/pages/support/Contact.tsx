import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="mt-[10vh] px-[3%] text-gray-200">
      <div>
        {" "}
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-300 leading-7">
          If you have any question regarding the detection of a Deepfake video,
          you can contact us via social media or with the following formular. We
          usually have a response time of 24 hours maximum:{" "}
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Contact;
