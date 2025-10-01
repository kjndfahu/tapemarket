import Landing from "~/landing/landing";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="relative">
        <div aria-hidden className="fixed inset-0 -z-[1] pointer-events-none bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/img/bg-landing.png')" }} />
        <Landing />
      </div>
  );
}
