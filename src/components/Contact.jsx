import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 
                 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 py-16"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      {/* Judul */}
      <h1 className="text-2xl sm:text-4xl font-bold text-amber-900 mb-4 text-center">
        Get in Touch
      </h1>
      <p className="text-gray-700 mb-10 max-w-2xl text-center text-sm sm:text-base">
        I'm currently building my career in{" "}
        <span className="font-semibold text-amber-800">AI/ML</span>.  
        Let's connect for collaborations, projects, or just a friendly chat!
      </p>

      {/* Grid Kontak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <a
          href="https://www.linkedin.com/in/arvio-abe-suhendar/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-white shadow-md rounded-xl p-5 
                     hover:scale-105 transition"
        >
          <FaLinkedin className="text-blue-600 text-2xl sm:text-3xl" />
          <span className="text-base sm:text-lg font-medium text-gray-800">
            LinkedIn
          </span>
        </a>

        <a
          href="https://github.com/arvio1378"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-white shadow-md rounded-xl p-5 
                     hover:scale-105 transition"
        >
          <FaGithub className="text-gray-800 text-2xl sm:text-3xl" />
          <span className="text-base sm:text-lg font-medium text-gray-800">
            GitHub
          </span>
        </a>

        <a
          href="mailto:4rv10suhendar@gmail.com"
          className="flex items-center gap-4 bg-white shadow-md rounded-xl p-5 
                     hover:scale-105 transition"
        >
          <FaEnvelope className="text-red-500 text-2xl sm:text-3xl" />
          <span className="text-base sm:text-lg font-medium text-gray-800 break-all">
            4rv10suhendar@gmail.com
          </span>
        </a>

        <a
          href="https://www.instagram.com/arvio1378/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-white shadow-md rounded-xl p-5 
                     hover:scale-105 transition"
        >
          <FaInstagram className="text-pink-500 text-2xl sm:text-3xl" />
          <span className="text-base sm:text-lg font-medium text-gray-800">
            Instagram
          </span>
        </a>

        <div
          className="flex items-center gap-4 bg-white shadow-md rounded-xl p-5 
                     sm:col-span-2"
        >
          <FaMapMarkerAlt className="text-green-600 text-2xl sm:text-3xl" />
          <span className="text-base sm:text-lg font-medium text-gray-800">
            Depok, Indonesia
          </span>
        </div>
      </div>

      {/* Tombol CTA */}
      <a
        href="mailto:4rv10suhendar@gmail.com"
        className="mt-10 cursor-pointer text-white font-semibold rounded-full px-6 py-3 
                   bg-gradient-to-r from-amber-500 to-amber-700 shadow-lg shadow-amber-700/50 
                   hover:scale-110 transition duration-300 w-full sm:w-auto text-center"
      >
        📩 Send me an Email
      </a>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-xs sm:text-sm text-center">
        © {new Date().getFullYear()} Arvio Abe Suhendar. All Rights Reserved.
      </footer>
    </section>
  );
}
