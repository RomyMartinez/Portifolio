import { About } from "./Components/About";
import { Bar } from "./Components/Bar";
import { Contact } from "./Components/Contact";
import { Introduction } from "./Components/Introduction";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";

export function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Fullscreen */}
      <div className="h-screen w-full relative" id="home">
        <Bar />
        <Introduction />
      </div>

      {/* About Section - Fullscreen */}
      <div className="h-screen w-full">
        <About />
      </div>

      {/* Skills Section - Fullscreen */}
      <div className="h-screen w-full">
        <Skills />
      </div>

      {/* Projects Section - Fullscreen */}
      <div className="h-screen w-full">
        <Projects />
      </div>

      {/* Contact Section - Fullscreen */}
      <div className="h-screen w-full">
        <Contact />
      </div>
    </div>
  );
}
