import React, { useEffect, useRef, useState } from "react";

const TechStack = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const frontend = [
    { name: "HTML5", icon: "logos:html-5" },
    { name: "CSS3", icon: "logos:css-3" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "React", icon: "logos:react" },
    { name: "React Native", icon: "logos:react" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
  ];

  const backend = [
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Express", icon: "logos:express" },
    { name: "Python", icon: "logos:python" },
    { name: "Flask", icon: "logos:flask" },
  ];

  const database = [
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "MySQL", icon: "logos:mysql" },
  ];

  const cloud = [
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "Google Cloud", icon: "logos:google-cloud" },
    { name: "AWS", icon: "logos:aws" },
  ];

  const analytics = [
    { name: "Pandas", icon: "simple-icons:pandas" },
    { name: "NumPy", icon: "logos:numpy" },
    { name: "Tableau", icon: "logos:tableau" },
    { name: "Power BI", icon: "logos:microsoft-power-bi" },
  ];

  return (
    <section className="relative py-20 bg-[#050e22] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Animated wrapper */}
      <div
        ref={sectionRef}
        className={`
          relative mx-auto max-w-7xl rounded-3xl
          bg-gradient-to-br from-blue-950 via-blue-1000 to-black
          text-white border-white/10 bg-blue-200/15 backdrop-blur-xl p-10
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <h2 className="mb-4 text-3xl text-blue-400 font-bold flex justify-center">
          TECH STACK
        </h2>

        <p className="text-base font-medium text-blue-200 flex justify-center">
          Technologies I work with to build scalable applications
        </p>

        <div className="mt-10">
          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-3">
            {/* FRONTEND */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">FRONTEND</h3>
              <div className="mt-2 mb-4 h-px w-12 bg-blue-300/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>

              <div className="flex flex-wrap gap-4 mb-4">
                {frontend.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <span className="iconify text-4xl" data-icon={tech.icon}></span>
                    <span className="mt-2 text-sm text-blue-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">BACKEND</h3>
              <div className="mt-2 mb-4 h-px w-12 bg-blue-300/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>

              <div className="flex flex-wrap gap-4 mb-4">
                {backend.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <span className="iconify text-4xl" data-icon={tech.icon}></span>
                    <span className="mt-2 text-sm text-blue-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DATABASE */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">DATABASE</h3>
              <div className="mt-2 mb-4 h-px w-12 bg-blue-300/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>

              <div className="flex flex-wrap gap-4 mb-4">
                {database.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <span className="iconify text-4xl" data-icon={tech.icon}></span>
                    <span className="mt-2 text-sm text-blue-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CLOUD & TOOLS */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">CLOUD & TOOLS</h3>
              <div className="mt-2 mb-4 h-px w-12 bg-blue-300/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>

              <div className="flex flex-wrap gap-4 mb-4">
                {cloud.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <span className="iconify text-4xl" data-icon={tech.icon}></span>
                    <span className="mt-2 text-sm text-blue-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ANALYTICS */}
            <div>
              <h3 className="text-xl font-semibold text-cyan-300">ANALYTICS</h3>
              <div className="mt-2 mb-4 h-px w-12 bg-blue-300/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>

              <div className="flex flex-wrap gap-4 mb-4">
                {analytics.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <span className="iconify text-4xl" data-icon={tech.icon}></span>
                    <span className="mt-2 text-sm text-blue-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
