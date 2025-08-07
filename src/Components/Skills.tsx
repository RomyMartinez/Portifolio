import { useState } from "react";
import { SectionHeader } from "./UI/SectionHeader";
import { CategoryFilter } from "./UI/CategoryFilter";
import { SkillsGrid } from "./UI/SkillsGrid";
import { OtherSkills } from "./UI/OtherSkills";
import { skills, categories, type Skill } from "../data/skills";
import { otherSkills } from "../data/otherSkills";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

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
          <SectionHeader
            title="Skills & Technologies"
            description="Tecnologias e ferramentas que utilizo para criar soluções inovadoras como Software Engineer Full-Stack"
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Main Content - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Skills */}
            <SkillsGrid
              skills={filteredSkills}
              selectedSkill={selectedSkill}
              onSkillSelect={setSelectedSkill}
            />

            {/* Right Column - Additional Skills */}
            <OtherSkills skills={otherSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}
