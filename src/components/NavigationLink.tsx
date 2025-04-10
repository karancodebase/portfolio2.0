"use client"; // Required for hooks in Next.js App Router
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-2 text-lg md:text-2xl tracking-wide relative inline-block
        ${
          isActive
            ? "text-cyan-700 font-bold"
            : "font-semibold social-link text-cyan-500 hover:text-cyan-700 duration-200"
        }
        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-0 after:h-0.5 after:bg-cyan-500 
        after:transition-all after:duration-300
        hover:after:w-3/4
      `}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
