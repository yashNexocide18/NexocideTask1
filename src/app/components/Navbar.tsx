"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { Label: "About us", href: "/about" },
  { Label: "Services", href: "/service" },
  { Label: "Use Cases", href: "/use-cases" },
  { Label: "Pricing", href: "/pricing" },
  { Label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-6 py-4 h-[17vh] w-[85vw] mx-auto font-space-grotesk mt-4">
      <Link href="/">
        <Image
          src="/Frame 9.png"
          alt="Logo"
          width={150}
          height={60}
          className="h-[60px] w-auto"
          priority
        />
      </Link>

      <div className="flex items-center gap-8 text-lg">
        <ul className="flex gap-9">
          {navItems.map(({ Label, href }, index) => (
            <li key={index}>
              <Link
                href={href}
                className={`cursor-pointer px-4 py-2 rounded-[10px] transition-all font-space-grotesk ${
                  pathname === href
                    ? "bg-[#B9FF66]"
                    : "hover:bg-[#B9FF66]"
                }`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {Label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="border border-black rounded-[10px] px-8 py-4 text-[18px] font-medium hover:bg-black hover:text-white transition-all">
          Request a quote
        </button>
      </div>
    </nav>
  );
}
