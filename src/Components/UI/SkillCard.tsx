interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  onClick: () => void;
}

export function SkillCard({ skill, isSelected, onClick }: SkillCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer transition-all duration-300 ${
        isSelected
          ? "transform scale-105 z-10"
          : "hover:scale-105 hover:z-10"
      }`}
    >
      <div
        className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 overflow-hidden ${
          isSelected
            ? "border-blue-500 shadow-xl shadow-blue-500/25"
            : "border-gray-200 hover:border-blue-300 hover:shadow-xl"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Name */}
          <div className="flex items-center space-x-3 mb-4">
            <div
              className={`text-3xl transition-transform duration-300 ${
                isSelected ? "scale-110" : "group-hover:scale-110"
              }`}
            >
              {skill.icon}
            </div>
            <h3
              className={`text-lg font-bold transition-colors duration-300 ${
                isSelected
                  ? "text-blue-600"
                  : "text-gray-800 group-hover:text-blue-600"
              }`}
            >
              {skill.name}
            </h3>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
                isSelected
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700"
              }`}
            >
              {skill.category}
            </span>
          </div>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed transition-colors duration-300 ${
              isSelected
                ? "text-gray-700"
                : "text-gray-600 group-hover:text-gray-700"
            }`}
          >
            {skill.description}
          </p>
        </div>

        {/* Hover Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 ${
            isSelected ? "opacity-100" : "group-hover:opacity-100"
          }`}
        ></div>

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-3 right-3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        )}
      </div>
    </div>
  );
}
