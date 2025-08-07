import { GithubLinkendin } from "./UI/GithubLinkedin";

export function Introduction() {
  return (
    <section className="flex flex-col justify-center items-center h-full px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob max-w-[90vw] max-h-[90vw]"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 max-w-[90vw] max-h-[90vw]"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 max-w-[90vw] max-h-[90vw]"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Desenvolvedor
            </span>
            <br />
            <span className="text-gray-700">Full-Stack</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium mb-8">
            Romy Manuel Martinez Nava
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transformando ideias em experiências digitais incríveis com React,
            TypeScript e as mais modernas tecnologias web.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-sm md:text-base"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-sm md:text-base"
          >
            Entre em Contato
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center">
          <GithubLinkendin />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
