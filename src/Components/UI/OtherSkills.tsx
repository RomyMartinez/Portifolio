interface OtherSkill {
  name: string;
  icon: string;
  description: string;
}

interface OtherSkillsProps {
  skills: OtherSkill[];
}

export function OtherSkills({ skills }: OtherSkillsProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Outras Habilidades & Ferramentas
      </h3>
      <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto scrollbar-hide">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{skill.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">
                  {skill.name}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
