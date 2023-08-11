import React from "react";

function AboutMe() {
  return (
    <div name="about" className="w-full h-screen bg-slate-900  text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-indigo-900">
            About me
          </h1>
        </div>
        <p className="text-2xl text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          veritatis natus a doloremque, culpa animi impedit enim ipsa quaerat
          nulla ipsum nihil dicta similique repellendus optio ut odit quasi.
          Iusto quas optio itaque numquam animi? Dignissimos, hic architecto eum
          omnis aliquam, eos, ea ad rerum possimus reprehenderit est quos illum!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
