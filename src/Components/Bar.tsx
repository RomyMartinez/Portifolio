import { useState, useEffect } from "react";

interface LinkToSectionProps {
  section: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function LinkToSection({
  section,
  children,
  isActive,
  onClick,
}: LinkToSectionProps) {
  return (
    <a
      href={`#${section}`}
      className={`no-underline transition-all duration-300 relative group ${
        isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-500"
      }`}
      onClick={onClick}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
          isActive ? "w-full" : ""
        }`}
      ></span>
    </a>
  );
}

export function Bar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm w-full">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
            &lt;Romy /&gt;
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <LinkToSection
            section="home"
            isActive={activeSection === "home"}
            onClick={handleLinkClick}
          >
            Home
          </LinkToSection>
          <LinkToSection
            section="about"
            isActive={activeSection === "about"}
            onClick={handleLinkClick}
          >
            About Me
          </LinkToSection>
          <LinkToSection
            section="skills"
            isActive={activeSection === "skills"}
            onClick={handleLinkClick}
          >
            Skills
          </LinkToSection>
          <LinkToSection
            section="projects"
            isActive={activeSection === "projects"}
            onClick={handleLinkClick}
          >
            Projects
          </LinkToSection>
          <LinkToSection
            section="contact"
            isActive={activeSection === "contact"}
            onClick={handleLinkClick}
          >
            Contact
          </LinkToSection>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 w-full">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <LinkToSection
              section="home"
              isActive={activeSection === "home"}
              onClick={handleLinkClick}
            >
              Home
            </LinkToSection>
            <LinkToSection
              section="about"
              isActive={activeSection === "about"}
              onClick={handleLinkClick}
            >
              About Me
            </LinkToSection>
            <LinkToSection
              section="skills"
              isActive={activeSection === "skills"}
              onClick={handleLinkClick}
            >
              Skills
            </LinkToSection>
            <LinkToSection
              section="projects"
              isActive={activeSection === "projects"}
              onClick={handleLinkClick}
            >
              Projects
            </LinkToSection>
            <LinkToSection
              section="contact"
              isActive={activeSection === "contact"}
              onClick={handleLinkClick}
            >
              Contact
            </LinkToSection>
          </nav>
        </div>
      )}
    </header>
  );
}
