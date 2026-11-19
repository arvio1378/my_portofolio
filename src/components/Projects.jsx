export default function Projects() {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 bg-amber-50"
            id="projects"
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Title */}
                <h1
                    className="text-3xl sm:text-4xl font-bold text-center mb-12"
                    data-aos="zoom-in-down"
                    data-aos-duration="1500"
                >
                    🚀 My Projects
                </h1>

                {/* Project Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Project 1 */}
                    <div
                        className="bg-white/90 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300"
                        data-aos="zoom-in-right"
                        data-aos-duration="1500"
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-3">
                            AI News Summarizer
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            An AI-based app that summarizes long news articles into concise pieces using NLP with Transformers.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 text-sm">
                            <li>Extracts articles via web scraping</li>
                            <li>Summarizes long stories concisely</li>
                            <li>Supports multilingual translation</li>
                            <li>Interactive interface with Gradio</li>
                        </ul>
                        <a
                            href="https://github.com/arvio1378/AI_News_Summarizer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-amber-700 font-medium hover:underline"
                        >
                            🔗 View This Project
                        </a>
                    </div>

                    {/* Project 2 */}
                    <div
                        className="bg-white/90 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300"
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-3">
                            Apple QA RAG
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            A Retrieval-Augmented Generation (RAG) system for accurate and contextual iPhone-related Q&A.
                        </p>
                        <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">Results:</p>
                        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 text-sm">
                            <li>More accurate & contextual answers</li>
                            <li>Helps users find info quickly</li>
                            <li>Example questions tested:</li>
                            <ul className="list-disc list-inside ml-5">
                                <li>Can I use calculator on iPhone?</li>
                                <li>How to check RAM of a Mac?</li>
                                <li>Can I use keyboard & mouse for Apple TV?</li>
                            </ul>
                        </ul>
                        <a
                            href="https://github.com/arvio1378/Apple-QA-RAG"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-amber-700 font-medium hover:underline"
                        >
                            🔗 View This Project
                        </a>
                    </div>

                    {/* Project 3 */}
                    <div
                        className="bg-white/90 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300"
                        data-aos="zoom-in-left"
                        data-aos-duration="1500"
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-3">
                            Diabetes Prediction Using AI
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mb-3">
                            A training project to predict diabetes based on patient medical data such as BMI, glucose, and insulin.
                        </p>
                        <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">Goals:</p>
                        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 text-sm">
                            <li>Predict diabetes based on medical factors</li>
                            <li>Enable early diagnosis using AI</li>
                        </ul>
                        <a
                            href="https://github.com/arvio1378/Diabetes-Prediction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-amber-700 font-medium hover:underline"
                        >
                            🔗 View This Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
