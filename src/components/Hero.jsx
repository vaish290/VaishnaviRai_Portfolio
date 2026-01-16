import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Background image */}
      <img
        src="/Heroimage.png"
        alt="Hero background"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center pt-40 pb-16 text-white sm:px-10 md:pt-32">
        {/* Badge */}
        <p className="mb-5 inline-flex w-fit items-center rounded-full bg-blue-400/20 px-4 py-2 text-sm font-bold text-cyan-300 sm:text-base">
          👋 Hi, I’m Vaishnavi Rai
        </p>

        {/* Heading */}
        <h1 className="mb-4 text-3xl font-semibold text-blue-400 sm:text-4xl md:text-4xl">
          Software Developer | Frontend & Full-Stack
        </h1>

        {/* Stack line */}
        <p className="mb-5 text-sm font-medium text-blue-200/70 sm:text-base">
          React · React Native · Node.js · Express · MongoDB · Cloud
        </p>

        {/* Description */}
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-200/80 sm:text-base">
          I’m a software developer passionate about building reliable, user-focused
          applications. I enjoy learning new technologies, refining frontend
          experiences, and contributing to products that solve meaningful problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#projects"
            className="inline-flex justify-center rounded-full border-2 border-blue-600 bg-blue-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-white/10 hover:text-blue-400 sm:w-auto"
          >
            View Projects
          </a>

          <a
            href="/ResumeVaishnaviRai_V2_SDEHN.pdf"
            download
            className="inline-flex justify-center rounded-full border-2 border-blue-600 bg-blue-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-white/10 hover:text-blue-400 sm:w-auto"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
