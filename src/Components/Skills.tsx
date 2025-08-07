import { Title } from "./UI/Title";
import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Java",
    icon: "☕",
    category: "Backend",
    description:
      "Linguagem principal para desenvolvimento de aplicações robustas",
  },
  {
    name: "Spring Boot",
    icon: "🌱",
    category: "Backend",
    description: "Framework Java para desenvolvimento rápido de microserviços",
  },
  {
    name: "React",
    icon: "⚛️",
    category: "Frontend",
    description: "Biblioteca JavaScript para interfaces de usuário interativas",
  },
  {
    name: "React Native",
    icon: "📱",
    category: "Mobile",
    description:
      "Framework para desenvolvimento de aplicações móveis multiplataforma",
  },
  {
    name: "Python",
    icon: "🐍",
    category: "Backend",
    description: "Linguagem versátil para automação e desenvolvimento web",
  },
  {
    name: "Flask",
    icon: "🔥",
    category: "Backend",
    description: "Framework Python minimalista para aplicações web",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    category: "Database",
    description: "Sistema de gerenciamento de banco de dados relacional",
  },
  {
    name: "SQL",
    icon: "🗄️",
    category: "Database",
    description: "Linguagem de consulta estruturada para bancos de dados",
  },
  {
    name: "Git",
    icon: "📚",
    category: "DevOps",
    description: "Sistema de controle de versão distribuído",
  },
  {
    name: "GitHub",
    icon: "🐙",
    category: "DevOps",
    description: "Plataforma de hospedagem e colaboração de código",
  },
  {
    name: "Tailwind CSS",
    icon: "💨",
    category: "Frontend",
    description: "Framework CSS utilitário para design responsivo",
  },
  {
    name: "n8n",
    icon: "⚡",
    category: "Automation",
    description: "Plataforma de automação de workflows e integrações",
  },
];

const categories = [
  "All",
  "Backend",
  "Frontend",
  "Mobile",
  "Database",
  "DevOps",
  "Automation",
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="h-full w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-300 rounded-full blur-lg opacity-50 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full flex items-center relative z-10">
        <div className="w-full">
          <div className="text-center mb-16">
            <Title title="Skills & Technologies" extraClass="mb-6" />
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Tecnologias e ferramentas que utilizo para criar soluções
              inovadoras como Software Engineer Full-Stack
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-blue-300 backdrop-blur-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                Principais Tecnologias
              </h3>

              <div className="h-96 overflow-y-auto pr-2 scrollbar-hide relative">
                <div className="grid grid-cols-2 gap-6 p-2">
                  {filteredSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:z-10"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        {/* Skill Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>

                        {/* Skill Content */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Additional Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                Outras Habilidades & Ferramentas
              </h3>

              <div className="h-96 overflow-y-auto pr-2 scrollbar-hide relative">
                <div className="grid grid-cols-2 gap-4 p-2">
                  {[
                    "Full-Stack Development",
                    "REST APIs",
                    "Microservices",
                    "Docker",
                    "AWS",
                    "Responsive Design",
                    "Agile/Scrum",
                    "Figma",
                    "VS Code",
                    "Postman",
                    "MongoDB",
                    "TypeScript",
                    "JavaScript",
                    "HTML/CSS",
                    "Node.js",
                    "Vite",
                    "Webpack",
                    "JUnit",
                    "Maven",
                    "Gradle",
                    "JPA/Hibernate",
                    "Swagger",
                    "JWT",
                    "OAuth2",
                  ].map((tool, index) => (
                    <div
                      key={tool}
                      className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer hover:z-10"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
