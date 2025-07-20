import { GithubLinkendin } from "./UI/GithubLinkedin";

export function Introduction() {
  return (
    <section className="flex flex-col justify-self-center w-screen h-svh justify-center items-center gap-4 ">
      <div className="h-min rounded-md">
        <h1 className=" text-6xl text-slate-700 text-center bg-clip-text font-bold uppercase">
          Desenvolvedor Full-Stack <br />
          Romy Manuel Martinez Nava
        </h1>
      </div>
      <GithubLinkendin />
    </section>
  );
}
