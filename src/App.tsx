import { About } from "./Components/About";
import { Bar } from "./Components/Bar";
import { Contact } from "./Components/Contact";
import { Introduction } from "./Components/Introduction";
import { Projects } from "./Components/Projects";

export function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 text-slate-800 w-full">
      <div className="flex flex-col h-svh">
        <Bar />
        <Introduction />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
