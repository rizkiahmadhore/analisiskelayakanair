import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/cara-penggunaan", label: "Cara Penggunaan" },
    { href: "/pengaturan", label: "Pengaturan" },
    { href: "/tentang", label: "Tentang" },
  ];

  return (
    <nav className="flex absolute flex-col sm:flex-row top-0 left-0 w-full bg-[#1a2a80] border-b border-cyan-400 neon-flicker-only items-center justify-between gap-4 py-4 px-8 text-white z-50">
      <h1 className="text-3xl text-center font-semibold">
        Analisis Kelayakan Sumber Air Budidaya Udang Vaname
      </h1>
      <ul className="flex flex-wrap max-w-lg justify-around gap-4 text-lg">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="cursor-pointer hover:font-bold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
