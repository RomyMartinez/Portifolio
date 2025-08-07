import { Title } from "./Title";

interface SectionHeaderProps {
  title: string;
  description: string;
  extraClass?: string;
}

export function SectionHeader({ title, description, extraClass = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${extraClass}`}>
      <Title title={title} extraClass="mb-4" />
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
