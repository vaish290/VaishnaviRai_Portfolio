import React from "react";

const ProjectCard = () => {
  const PROJECTS = [
    {
      title: "Master of Jokes",
      category: "Full Stack",
      description:"A full-stack application where users can explore and interact with jokes through a polished interface. I built the frontend using HTML, CSS, and JavaScript, creating responsive pages for browsing and rating jokes. On the backend, I used Flask (Python) to handle API routes, application logic, and secure user interactions. The app features role-based access control, allowing different levels of interaction depending on user permissions, and it’s connected to a database for persistent data storage. This project highlights my ability to deliver a complete end-to-end web experience with both frontend and backend components working together smoothly.",
      repo: "https://github.com/vaish290/Master_Of_Jokes",
      image: "/jokes.png",
    },
    {
      title: "Multi-Format File Conversion Engine on Google Cloud",
      category: "Cloud & Backend",
      description:
        "A cloud-enabled web application that lets users upload files and convert them between formats through a simple web interface. I built the frontend using HTML, CSS, and JavaScript to handle file uploads and display conversion results, and developed the backend with Python and Flask to securely process document conversions and manage requests. The backend runs on Google Cloud services, making the system scalable and capable of handling multiple conversion workflows efficiently. This project highlights my ability to integrate frontend interfaces with cloud-powered backend logic and deliver a complete, user-focused application.",
      repo: "https://github.com/vaish290/Multi-Format-File-Conversion-Engine-on-Google-Cloud",
      image: "/cloud.png",
    },
    {
      title: "Movie Data Visualization & Analysis",
      category: "Data Visualization",
      description:
        "A data exploration project analyzing movie data to understand trends such as popular genres, audience ratings, and performance over time. I cleaned and explored the dataset and created visual charts to highlight patterns and insights.",
      repo: "https://github.com/vaish290/DataVisalization_MovieAnalysis",
      image: "/moviedata.png",
    },
    {
      title: "Food Delivery Data Analysis",
      category: "Data Analytics",
      description:
        "A data analysis project focused on understanding food delivery orders and customer behavior. I analyzed order data to identify trends such as peak ordering times, customer preferences, and overall performance metrics.",
      repo: "https://github.com/vaish290/Food_Delivery_Analysis",
      image: "/fooddelivery.png",
    },
    {
      title: "Walmart Sales Analysis (SQL & Power BI)",
      category: "Business Intelligence",
      description:
        "A business intelligence project analyzing Walmart sales data using SQL and Power BI. I queried sales data with SQL and built interactive dashboards to visualize revenue trends and store performance across locations.",
      repo: "https://github.com/vaish290/Walmart_Sales_Data_Analysis-SQL-and-PowerBi",
      image: "/walmart.png",
    },
    {
      title: "Airbnb Data Analysis",
      category: "Data Analytics",
      description:
        "A data analysis project exploring Airbnb listings to understand pricing, availability, and location-based trends using charts and statistical summaries.",
      repo: "https://github.com/vaish290/Airbnb_DataAnalysis_Python",
      image: "/airbnb.png",
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen w-full bg-[#050e22]">
      {/* dotted background */}
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Header */}
      <div className="relative mx-auto max-w-6xl px-6 pt-28 text-center">
        <h3 className="text-3xl font-bold text-blue-400">PROJECTS</h3>
        <p className="mt-3 text-blue-200/60">
          A collection of projects where I experimented, learned, and built
          practical solutions across full-stack development, cloud, and data.
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto mt-14 grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="
              relative flex flex-col
              mb-30
              rounded-2xl border border-white/10
              bg-white/5 p-6
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_60px_rgba(120,170,255,0.18)]
            "
          >
            {/* Title + Image */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold leading-snug text-blue-200">
                {project.title}
              </h3>

              {/* Project Image */}
<div
  className="
    relative shrink-0
    rounded-xl overflow-hidden
    bg-black/30
    shadow-[0_0_40px_rgba(120,170,255,0.25)]
  "
>
  <img
    src={project.image}
    alt={project.title}
    className="
      h-28 w-44
      object-cover
      transition-transform duration-300
      hover:scale-105
    "
  />
</div>
            </div>

            {/* Category */}
            <p className="mt-3 text-sm font-medium text-cyan-300">
              {project.category}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-blue-200/75">
              {project.description}
            </p>

            {/* Button */}
            <div className="mt-auto pt-6">
              <button
                onClick={() => window.open(project.repo, "_blank")}
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-blue-500/60
                  bg-blue-400/20 px-4 py-2
                  text-sm font-semibold text-blue-200
                  transition hover:bg-blue-400/30
                "
              >
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
