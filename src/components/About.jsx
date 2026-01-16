import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative bg-[#050e22] py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div
        ref={sectionRef}
        className={`
          relative mx-auto max-w-7xl rounded-3xl
          bg-gradient-to-br from-blue-950 via-blue-1000 to-black
          p-10 text-white
          transition-all duration-700 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-3 scale-95"
          }
        `}
      >
        <h2 className="mb-4 text-3xl text-blue-400 font-bold flex justify-center">
          About Me
        </h2>

        <p className="text-lg text-blue-200 leading-relaxed">
          I’m a recently graduated Computer Science professional from Indiana
          University Bloomington with hands-on experience building full-stack
          web and mobile applications, cloud-based systems, and production-ready
          user interfaces.
          <br />
          <br />
          My core strengths include frontend development with React and React
          Native, backend development using Node.js, Express, and Flask, and
          building cloud-native workflows on Google Cloud and AWS. I enjoy
          translating designs into clean, reusable UI components, integrating
          them with reliable APIs, and optimizing applications for performance,
          scalability, and maintainability.
          <br />
          <br />
          With experience spanning frontend engineering, backend systems, and
          site reliability, I bring a well-rounded engineering mindset focused on
          building software that works reliably in real-world production
          environments.
        </p>

        <p className="mt-6 text-lg text-blue-200 leading-relaxed">
          <span className="font-bold">What I’m looking for:</span> I’m seeking a
          Software Developer / Full-Stack / Frontend Engineer role where I can
          contribute to building impactful products, collaborate with
          experienced teams, and continue growing as an engineer while working
          on real-world, user-facing systems.
        </p>
      </div>
    </section>
  );
};

export default About;
