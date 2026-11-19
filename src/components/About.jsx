export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row"
    >
      {/* Bagian Teks */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-20 py-12 gap-6"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 md:left-0 w-20 h-1 bg-amber-600 transform -translate-x-1/2 md:translate-x-0"></span>
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4 text-gray-800 leading-relaxed max-w-xl mx-auto md:mx-0">
          <p>
            👨‍💻 I'm a tech enthusiast with a strong foundation in Informatics
            Engineering from Universitas Gunadarma, where I developed solid
            analytical thinking, programming, and problem-solving skills.
          </p>
          <p>
            🔧 After graduating, I began my professional journey as a Junior
            Network Engineer, managing enterprise network services like VPNIP,
            Astinet, and SIP Trunk on Huawei and Cisco platforms—handling
            configurations, service activations, and troubleshooting.
          </p>
          <p>
            🤖 Over time, my curiosity led me to explore the world of Artificial
            Intelligence & Machine Learning. I've been actively upskilling
            through bootcamps and self-learning—covering data preprocessing,
            supervised & unsupervised learning, and deep learning using Python.
          </p>
          <p>
            🎯 I'm now transitioning my career into AI/ML, combining my network
            infrastructure background with my growing expertise in data and
            intelligent systems. I'm particularly interested in how AI can
            improve systems, automate operations, and drive smarter
            decision-making.
          </p>
          <p>
            🤝 Open to collaborations, mentorship, and new opportunities in the
            AI/ML space.
          </p>
        </div>
      </div>

      {/* Bagian Foto */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-br from-amber-100 to-amber-300 py-10 md:py-0">
        <div
          className="relative group"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img
            src="profilAI.png"
            alt="profil AI"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-cover border-8 border-amber-700 border-dashed shadow-xl transition duration-500 group-hover:scale-105"
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-amber-500 opacity-20 blur-3xl group-hover:opacity-40 transition duration-500"></div>
        </div>
      </div>
    </section>
  );
}
