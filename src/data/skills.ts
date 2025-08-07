export interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
}

export const skills: Skill[] = [
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

export const categories = [
  "All",
  "Backend",
  "Frontend",
  "Mobile",
  "Database",
  "DevOps",
  "Automation",
];
