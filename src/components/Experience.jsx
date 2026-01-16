import React, { useEffect, useRef, useState } from "react";

/* -------------------- ICONS -------------------- */

function CalendarIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3v2M17 3v2M4 7h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11h3M8 15h3M13 11h3M13 15h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapPinIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------- SCROLL OBSERVER HOOK -------------------- */

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

/* -------------------- DATA -------------------- */

const EXPERIENCE = [
  {
    id: "hcn",
    title: "Software Developer",
    company: "Heartland Community Network, USA",
    date: "2025 – Present",
    location: "Remote",
    bullets: [
      "Contributing to building a production mobile application using React Native (Expo), delivering user-facing features used in real-world workflows.",
      "Implemented core app flows including onboarding, navigation, forms, and data-driven UI components with a strong focus on usability and consistency.",
      "Integrated frontend components with backend services, ensuring smooth data flow, error handling, and responsive UI states.",
      "Collaborated closely with design and product to translate Figma designs into clean, reusable components.",
      "Debugged cross-platform issues and improved performance to ensure a stable experience across iOS and Android.",
      "Took ownership of features from development through testing and refinement, focusing on scalability and maintainability.",
    ],
    side: "left",
  },
  {
    id: "qk-sre",
    title: "Site Reliability Engineer",
    company: "QualityKiosk Technologies, India",
    date: "2022 – 2023",
    location: "India",
    bullets: [
      "Supported large-scale production systems handling 100GB+ of log data daily, ensuring system stability and uptime.",
      "Monitored live services and investigated incidents to quickly identify and resolve reliability issues.",
      "Automated repetitive operational tasks to reduce manual effort and improve incident response times.",
    ],
    side: "right",
  },
  {
    id: "qk-pa",
    title: "Performance Assurance Engineer",
    company: "QualityKiosk Technologies, India",
    date: "2021 – 2022",
    location: "India",
    bullets: [
      "Analyzed application performance using logs, metrics, and dashboards to identify bottlenecks and inefficiencies.",
      "Built and maintained performance dashboards to track system health, latency, and throughput.",
      "Conducted root-cause analysis for performance degradations under high traffic and load.",
      "Developed a performance-first mindset by working on high-volume, data-intensive systems in production."
    ],
    side: "left",
  },
];

/* -------------------- CARD -------------------- */

function ExperienceCard({ item }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const fromLeft = item.side === "left";

  return (
    <div
      ref={ref}
      className={`
        relative rounded-2xl border border-white/10 bg-white/5 p-6
        backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        transition-all duration-700 ease-out
        ${
          inView
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${fromLeft ? "-translate-x-12" : "translate-x-12"}`
        }
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-200">{item.title}</h3>
          <p className="mt-1 font-medium text-cyan-300">{item.company}</p>
        </div>

        <div className="text-right text-xs text-blue-200/70">
          <div className="flex items-center justify-end gap-2">
            <CalendarIcon />
            <span>{item.date}</span>
          </div>
          <div className="mt-1 flex items-center justify-end gap-2">
            <MapPinIcon />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Bullets */}
      <ul className="mt-4 space-y-2">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm text-blue-200/75">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------- PAGE -------------------- */

export default function Experience() {
  return (
    <section id="experience"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/experiimg.png')" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative px-6 pt-32">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
            EXPERIENCE
          </h2>
          <p className="mt-3 text-blue-200/70">
            Professional roles and impact across frontend, backend, and systems
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-7xl px-4 py-10">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

          <div className="grid gap-16 md:grid-cols-2">
            {EXPERIENCE.map((item) => (
              <React.Fragment key={item.id}>
                {item.side === "left" ? (
                  <>
                    <div className="md:pr-12">
                      <ExperienceCard item={item} />
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-12">
                      <ExperienceCard item={item} />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
