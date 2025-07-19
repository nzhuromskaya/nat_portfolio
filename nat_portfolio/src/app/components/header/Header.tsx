import { ILink } from "@/app/@interfaces/ILink";
import Link from "next/link";
import { Anta } from "next/font/google";

const anta = Anta({ weight: "400" });

export default function Header() {
  const links: Array<ILink> = [
    { name: "Home", key: "home", path: "/" },
    { name: "Projects", key: "projects", path: "/projects" },
    { name: "About Me", key: "about-me", path: "/aboutme" },
  ];

  return (
    <header className={`w-full flex flex-row ${anta.className}`}>
      <h1 className=" text-5xl pl-8 flex-1">Nat's Portfolio</h1>
      <div>
        {links.map((link) => (
          <Link className="pr-8 text-3xl" href={link.path} key={link.key}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
