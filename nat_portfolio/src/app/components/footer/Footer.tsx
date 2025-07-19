import Link from "next/link";
import { ILink } from "../../@interfaces/ILink";

export default function Footer() {
  const links: Array<ILink> = [
    {
      name: "Github",
      key: "github",
      path: "https://github.com/nzhuromskaya?tab=repositories",
    },
  ];

  return (
    <footer className="flex flex-row content-between">
      {links.map((link) => (
        <Link href={link.path} key={link.key}>
          {link.name}
        </Link>
      ))}
    </footer>
  );
}
