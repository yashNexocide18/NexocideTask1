import Image from "next/image";
import Link from "next/link";


const navItems = [
  "About us",
  "Services",
  "Use Cases",
  "Pricing",
  "Blog",
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 h-[17vh] w-[85vw] mx-auto font-space-grotesk mt-4">
      <Image
        src="/Frame 9.png"
        alt="Logo"
        width={150}
        height={60}
        className="h-15 w-auto"
        priority
      />

      <div className="flex items-center gap-8 text-lg">
        <ul className="flex gap-9">
          {navItems.map((label, index) => (
            <Link  href="/servicepage" key={index} className="cursor-pointer  font-space-grotesk hover:bg-[#B9FF66] px-4 py-2 rounded-[10px] ">
              {label}
            </Link>
          ))}
        </ul>

        <button className="border border-black rounded-[10px] px-8 py-4 text-[18px] font-medium hover:bg-black hover:text-white transition-all">
          Request a quote
        </button>
      </div>
    </nav>
  );
}
