import { useState } from "react";
import { SectionHeader } from "./UI/SectionHeader";
import { ContactInfo } from "./UI/ContactInfo";

export function Contact() {
  const [isCopy, setIsCopy] = useState(false);
  function handleCopy(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsCopy(true);
    navigator.clipboard.writeText("ngcsmrtnz@gmail.com");

    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  }

  return (
    <section
      id="contact"
      className="h-full w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full flex items-center">
        <div className="w-full">
          <SectionHeader
            title="Contact"
            description="Vamos trabalhar juntos! Entre em contato para discutir projetos e oportunidades."
          />

          <div className="flex justify-center">
            <ContactInfo isCopy={isCopy} handleCopy={handleCopy} />
          </div>
        </div>
      </div>
    </section>
  );
}
