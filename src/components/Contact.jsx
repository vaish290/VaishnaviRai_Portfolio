import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:vaishnavi29rai@gmail.com
      ?subject=Message from ${name}
      &body=Name: ${name}%0A
      Email: ${email}%0A%0A
      Message:%0A${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/contactback.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated wrapper */}
      <div
        ref={sectionRef}
        className={`
          relative pt-40 px-6
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-400">CONTACT ME</h2>
          <p className="mt-3 text-blue-200/70">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* LET'S CONNECT */}
          <div className="flex flex-col p-6 gap-6
                          border border-blue-400/30
                          rounded-xl bg-blue-400/10 backdrop-blur-md
                          w-full min-h-[420px]">
            <h3 className="text-cyan-300 text-lg font-semibold">
              Let&apos;s Connect
            </h3>

            <p className="text-blue-200/70 text-sm">
              I&apos;m always open to new opportunities and collaborations.
            </p>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between gap-4
                              border border-blue-400/30 rounded-lg
                              bg-blue-400/10 px-4 py-3
                              hover:bg-blue-400/20 transition">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-black/20 border border-blue-400/20">
                    ✉️
                  </div>
                  <span className="text-sm text-blue-200/80">Email</span>
                </div>
                <a
                  href="mailto:vaishnavi29rai@gmail.com"
                  className="text-sm text-blue-200 hover:underline truncate max-w-[260px]"
                >
                  vaishnavi29rai@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center justify-between gap-4
                              border border-blue-400/30 rounded-lg
                              bg-blue-400/10 px-4 py-3
                              hover:bg-blue-400/20 transition">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-black/20 border border-blue-400/20">
                    🐙
                  </div>
                  <span className="text-sm text-blue-200/80">GitHub</span>
                </div>
                <a
                  href="https://github.com/vaish290"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-200 hover:underline truncate max-w-[260px]"
                >
                  github.com/vaish290
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between gap-4
                              border border-blue-400/30 rounded-lg
                              bg-blue-400/10 px-4 py-3
                              hover:bg-blue-400/20 transition">
                <div className="flex items-center gap-2">
                  <div className="text-blue-700 h-9 w-9 flex items-center justify-center rounded-lg bg-black/20 border border-blue-400/20 font-semibold">
                    in
                  </div>
                  <span className="text-sm text-blue-200/80">LinkedIn</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-rai-a074ba194/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-200 hover:underline truncate max-w-[260px]"
                >
                  linkedin.com/in/vaishnavi-rai
                </a>
              </div>
            </div>
          </div>

          {/* SEND MESSAGE */}
          <div className="flex flex-col p-6 gap-6
                          border border-blue-400/30
                          rounded-xl bg-blue-400/10 backdrop-blur-md
                          w-full min-h-[420px]">
            <h3 className="text-cyan-300 text-lg font-semibold">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col flex-1"
            >
              <div className="flex flex-col gap-1">
                <label className="text-blue-200/80 text-sm">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 rounded-md border border-blue-400/30 bg-blue-400/10
                             text-blue-200 focus:outline-none focus:ring-2
                             focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-blue-200/80 text-sm">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 rounded-md border border-blue-400/30 bg-blue-400/10
                             text-blue-200 focus:outline-none focus:ring-2
                             focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-blue-200/80 text-sm">Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-2 rounded-md border border-blue-400/30 bg-blue-400/10
                             text-blue-200 focus:outline-none focus:ring-2
                             focus:ring-blue-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-auto bg-blue-400/30 hover:bg-blue-400/50
                           text-blue-200 px-5 py-2 rounded-full
                           border border-blue-400/30 transition-all duration-300
                           hover:shadow-[0_0_25px_rgba(120,170,255,0.35)]"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
