import Link from "next/link";
import Image from "next/image";

import { ILink } from "../../@interfaces/ILink";

export default function Footer() {
  const links: Array<ILink> = [
    {
      name: "Github",
      key: "github",
      path: "https://github.com/nzhuromskaya?tab=repositories",
      icon: "/github-mark.png",
      iconAlt: "github logo",
    },
  ];

  return (
    <footer className="flex flex-row content-between">
      {links.map((link) => (
        <Link href={link.path} key={link.key}>
          {link.icon && link.iconAlt ? (
            <Image
              src={link.icon}
              alt={link.iconAlt ?? "image"}
              width={50}
              height={50}
            />
          ) : (
            <></>
          )}
          {link.name}
        </Link>
      ))}
    </footer>
  );
}
