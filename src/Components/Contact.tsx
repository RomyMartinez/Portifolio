import { useState } from "react";
import { Title } from "./UI/Title";
import { GithubLinkendin } from "./UI/GithubLinkedin";
export function Contact() {
  const [isCopy, setIsCopy] = useState(false);

  function handleCopy(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsCopy(true);
    navigator.clipboard.writeText("ngcsmrtnz@gmail.com");

    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  }

  return (
    <section
      id="contact"
      className="flex flex-col w-full justify-center h-svh items-center"
    >
      <Title title="Contact" extraClass=" text-center pb-5" />
      <div className="flex flex-col bg-slate-100 border-2 border-slate-800 rounded-xl justify-center items-center p-5 h-80 w-96 gap-2">
        <div>
          <p className="border-2 border-slate-800 rounded-t-md w-44 py-1 text-center">
            ngcsmrtnz@gmail.com
          </p>
          <button
            onClick={handleCopy}
            className=" bg-slate-800 text-slate-300 py-1 w-44 rounded-b-md hover:bg-slate-300 hover:text-slate-800 border-2 border-slate-800 transition duration-600 ease-in-out "
            disabled={isCopy ? true : false}
          >
            {isCopy ? "Email copied!" : "Copy email"}
          </button>
        </div>
        <p>Phone: +55 22 999371942</p>
        <GithubLinkendin />
      </div>
    </section>
  );
}
