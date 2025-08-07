import { SkillCard } from "./SkillCard";
import { type Skill } from "../../data/skills";

interface SkillsGridProps {
  skills: Skill[];
  selectedSkill: Skill | null;
  onSkillSelect: (skill: Skill) => void;
}

export function SkillsGrid({ skills, selectedSkill, onSkillSelect }: SkillsGridProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
        Principais Tecnologias
      </h3>

      <div className="h-96 overflow-y-auto pr-2 scrollbar-hide relative">
        <div className="grid grid-cols-2 gap-6 p-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              isSelected={selectedSkill?.name === skill.name}
              onClick={() => onSkillSelect(skill)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
