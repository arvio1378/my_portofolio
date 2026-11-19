export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row">
            {/* Bagian Foto */}
            <div className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-br from-amber-100 to-amber-300 p-6 sm:p-10">
                <div 
                    className="relative group" 
                    data-aos="fade-right" 
                    data-aos-duration="1500"
                >
                    <img 
                        src="/fotoprofil.jpeg" 
                        alt="Foto Profil" 
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 
                                   rounded-full object-cover border-4 sm:border-6 md:border-8 
                                   border-amber-700 border-dashed shadow-2xl 
                                   transform transition duration-500 group-hover:scale-105 
                                   group-hover:shadow-amber-500/50"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-amber-500 opacity-20 blur-3xl group-hover:opacity-40 transition duration-500"></div>
                </div>
            </div>

            {/* Bagian Teks */}
            <div 
                className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 sm:px-10 lg:px-16 py-10"
                data-aos="fade-left" 
                data-aos-duration="1500"
            >
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Hi, I'm <span className="text-amber-600">Arvio Abe Suhendar</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-6">
                    AI/ML Enthusiast
                </p>
                
                {/* Tombol */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
                    <button className="cursor-pointer text-white font-semibold rounded-full px-5 sm:px-6 py-2.5 sm:py-3 
                                        bg-gradient-to-r from-amber-500 to-amber-700 shadow-lg shadow-amber-700/50 
                                        hover:scale-110 transition duration-300 text-sm sm:text-base">
                        <a href="/CV.pdf" target="_blank">Download CV</a>
                    </button>
                    <button className="cursor-pointer text-white font-semibold rounded-full px-5 sm:px-6 py-2.5 sm:py-3 
                                        bg-gradient-to-r from-amber-500 to-amber-700 shadow-lg shadow-amber-700/50 
                                        hover:scale-110 transition duration-300 text-sm sm:text-base">
                        <a href="#projects">My Projects</a>   
                    </button>
                    <button className="cursor-pointer text-white font-semibold rounded-full px-5 sm:px-6 py-2.5 sm:py-3 
                                        bg-gradient-to-r from-amber-500 to-amber-700 shadow-lg shadow-amber-700/50 
                                        hover:scale-110 transition duration-300 text-sm sm:text-base">
                        <a href="#contact">Contact Me</a>  
                    </button>
                </div>
            </div>
        </section>
    )
}
