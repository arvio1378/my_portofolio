export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-bg4 flex flex-col justify-center px-4 sm:px-6 md:px-20 py-16"
    >
      {/* Judul */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        My <span className="text-amber-600">Education</span> & Experience
      </h1>

      {/* Timeline */}
      <div
        className="relative border-l-4 border-amber-500 ml-4 sm:ml-6 md:ml-12 max-w-4xl mx-auto space-y-10 sm:space-y-12"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {/* Education - Gunadarma */}
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute -left-3 top-2 w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full border-4 border-white"></div>
          <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 hover:shadow-2xl duration-300">
            <h3 className="text-xl sm:text-2xl font-bold">
              GUNADARMA UNIVERSITY (2019 - 2023)
            </h3>
            <h5 className="text-base sm:text-lg text-gray-600 mb-3">
              Informatics Engineering - GPA 3.82/4.00
            </h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
              <li>Built multiple applications (web & desktop) using Java, Python, and PHP.</li>
              <li>Built and optimized database systems.</li>
              <li>Learned techniques for solving mathematical problems using programming.</li>
            </ul>
          </div>
        </div>

        {/* Education - Bootcamp */}
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute -left-3 top-2 w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full border-4 border-white"></div>
          <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 hover:shadow-2xl duration-300">
            <h3 className="text-xl sm:text-2xl font-bold">
              DIBIMBING.ID Bootcamp (Apr 2025 - Sep 2025)
            </h3>
            <h5 className="text-base sm:text-lg text-gray-600 mb-3">
              Artificial Intelligence
            </h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
              <li>Mastered core concepts of Python programming.</li>
              <li>Learned fundamentals of AI & ML, key concepts, and applications.</li>
              <li>Techniques to clean, transform, and prepare data for analysis.</li>
            </ul>
          </div>
        </div>

        {/* Work Experience */}
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute -left-3 top-2 w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full border-4 border-white"></div>
          <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 hover:shadow-2xl duration-300">
            <h3 className="text-xl sm:text-2xl font-bold">
              PT INFOMEDIA NUSANTARA - Jakarta, Indonesia
            </h3>
            <h5 className="text-base sm:text-lg text-gray-600 mb-3">
              Junior Network Engineer (2023 - Present)
            </h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
              <li>
                Astinet & VPNIP Service Management (Huawei Routers): handled
                activation, modification, and resumption.
              </li>
              <li>
                Wifi.id Service Provisioning (Cisco & WPgen): end-to-end
                activation & troubleshooting.
              </li>
              <li>
                SIP Trunk International Access Control: managed
                blocking/unblocking for secure connectivity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
