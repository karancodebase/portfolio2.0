"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent md:bg-neutral-900/50 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Profile Section */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            onClick={closeMenu}
          >
            <Image
              src="/avatar.png"
              alt="name"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <h1 className="font-semibold text-gray-50">Jaydatt Karan</h1>
              <p className="text-xs text-zinc-400">Web Developer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem
              href="/"
              label="Dashboard"
              isActive={pathname === "/"}
              onClick={closeMenu}
            />
            <NavItem
              href="/about"
              label="About"
              isActive={pathname === "/about"}
              onClick={closeMenu}
            />
            <NavItem
              href="/projects"
              label="Projects"
              isActive={pathname === "/projects"}
              onClick={closeMenu}
            />
            <NavItem
              href="/contact"
              label="Contact"
              isActive={pathname === "/contact"}
              onClick={closeMenu}
            />
            <NavItem
              href="/work"
              label="Work"
              isActive={pathname === "/work"}
              onClick={closeMenu}
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <NavItem
                href="/"
                label="Dashboard"
                isActive={pathname === "/"}
                onClick={closeMenu}
              />
              <NavItem
                href="/about"
                label="About"
                isActive={pathname === "/about"}
                onClick={closeMenu}
              />
              <NavItem
                href="/projects"
                label="Projects"
                isActive={pathname === "/projects"}
                onClick={closeMenu}
              />

              <NavItem
                href="/contact"
                label="Contact"
                isActive={pathname === "/contact"}
                onClick={closeMenu}
              />
              <NavItem
                href="/work"
                label="Work"
                isActive={pathname === "/work"}
                onClick={closeMenu}
              />
              <div className="pt-4 border-t border-gray-700">
                <div className="flex space-x-4">
                  <NavItem
                    href="https://twitter.com/jaydattkaran"
                    label="Twitter"
                    onClick={closeMenu}
                  />
                  <NavItem
                    href="https://github.com/jaydattkaran"
                    label="Github"
                    onClick={closeMenu}
                  />
                  <NavItem
                    href="https://www.linkedin.com/in/jaydattkaran"
                    label="LinkedIn"
                    onClick={closeMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`
        px-3 py-2 text-sm font-medium relative inline-block
        ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-0 after:h-0.5 after:bg-white 
        after:transition-all after:duration-300
        hover:after:w-3/4
      `}
      onClick={onClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </Link>
  );
}

export default Navbar;
