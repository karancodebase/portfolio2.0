"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Menu, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import useTheme from "./hooks/useTheme";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Navbar() {
  const { toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="py-6 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border border-neutral-600 hover:border-neutral-400 rounded-xl hover:rounded-none 
        duration-300 md:w-[80vw] w-[90vw] lg:w-[60vw] flex flex-row 
        justify-between px-4 py-4 h-14 items-center z-50
        backdrop-blur-3xl"
      >
        <div className="flex">
          <Link href="/">
            <svg
              width="50"
              height="50"
              viewBox="0 0 228 228"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M182.441 67.1909L180.941 67.1909L180.941 67.1961L182.441 67.1909ZM181.95 45.1909L183.448 45.1174L183.446 45.0712L183.441 45.0253L181.95 45.1909ZM173.95 21.1909L175.212 20.3798L175.198 20.3582L175.183 20.3371L173.95 21.1909ZM182.441 55.1909L183.941 55.1909L183.941 55.1541L183.939 55.1174L182.441 55.1909ZM181.336 39.6609L182.826 39.4953L181.336 39.6609ZM172.083 18.4942L173.316 17.6404L172.083 18.4942ZM131.117 18.0608L132.35 18.9146L131.117 18.0608ZM137.967 11.0205L137.021 9.8563L137.967 11.0205ZM180.941 67.1961L181.45 214.196L184.45 214.186L183.941 67.1857L180.941 67.1961ZM130.183 22.0447L132.35 18.9146L129.884 17.207L127.717 20.3371L130.183 22.0447ZM137.577 13.2704L138.913 12.1846L137.021 9.8563L135.685 10.9421L137.577 13.2704ZM155.763 8.44023L156.123 8.53025L156.851 5.61983L156.491 5.5298L155.763 8.44023ZM163.693 12.1769L164.864 13.0724L166.687 10.6893L165.516 9.79382L163.693 12.1769ZM179.845 39.8266L180.459 45.3566L183.441 45.0253L182.826 39.4953L179.845 39.8266ZM170.85 19.348L172.717 22.0447L175.183 20.3371L173.316 17.6404L170.85 19.348ZM172.688 22.0021L174.544 24.8886L177.067 23.2663L175.212 20.3798L172.688 22.0021ZM180.452 45.2645L180.943 55.2645L183.939 55.1174L183.448 45.1174L180.452 45.2645ZM180.941 55.1909L180.941 67.1909L183.941 67.1909L183.941 55.1909L180.941 55.1909ZM178.477 33.3059C179.141 35.4306 179.599 37.6142 179.845 39.8266L182.826 39.4953C182.559 37.0917 182.062 34.7194 181.34 32.4111L178.477 33.3059ZM164.864 13.0724C167.175 14.8391 169.194 16.9567 170.85 19.348L173.316 17.6404C171.483 14.9917 169.246 12.6462 166.687 10.6893L164.864 13.0724ZM146.171 8.49944C149.313 7.67278 152.612 7.65241 155.763 8.44023L156.491 5.5298C152.849 4.61951 149.037 4.64304 145.408 5.59821L146.171 8.49944ZM132.35 18.9146C133.817 16.7957 135.577 14.8955 137.577 13.2704L135.685 10.9421C133.465 12.7458 131.512 14.8551 129.884 17.207L132.35 18.9146ZM138.913 12.1846C141.043 10.4542 143.517 9.19782 146.171 8.49944L145.408 5.59821C142.341 6.40516 139.482 7.85681 137.021 9.8563L138.913 12.1846ZM156.123 8.53025C158.869 9.21668 161.445 10.4577 163.693 12.1769L165.516 9.79382C162.942 7.82599 159.993 6.40552 156.851 5.61983L156.123 8.53025ZM181.34 32.4111C180.332 29.1851 178.895 26.1093 177.067 23.2663L174.544 24.8886C176.226 27.5054 177.549 30.3366 178.477 33.3059L181.34 32.4111Z"
                fill="currentColor"
              />
              <rect
                x="176.95"
                y="101.691"
                width="11"
                height="11"
                rx="5.5"
                fill="black"
                stroke="currentColor"
                strokeWidth="3"
              />
              <rect
                x="109.95"
                y="116.691"
                width="11"
                height="11"
                rx="5.5"
                fill="black"
                stroke="currentColor"
                strokeWidth="3"
              />
              <rect
                x="109.95"
                y="157.691"
                width="11"
                height="11"
                rx="5.5"
                fill="black"
                stroke="currentColor"
                strokeWidth="3"
              />
              <mask id="path-5-inside-1_35_26" fill="currentColor">
                <rect x="67.45" y="96.1909" width="95" height="91" rx="1" />
              </mask>
              <rect
                x="67.45"
                y="96.1909"
                width="95"
                height="91"
                rx="1"
                stroke="currentColor"
                strokeWidth="2"
              />
              <mask id="path-6-inside-2_35_26" fill="currentColor">
                <rect x="72.45" y="100.191" width="85" height="40" rx="1" />
              </mask>
              <rect
                x="72.45"
                y="100.191"
                width="85"
                height="40"
                rx="1"
                stroke="currentColor"
                strokeWidth="2"
              />
              <mask id="path-7-inside-3_35_26" fill="currentColor">
                <rect x="72.45" y="143.191" width="85" height="40" rx="1" />
              </mask>
              <rect
                x="72.45"
                y="143.191"
                width="85"
                height="40"
                rx="1"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M68.6342 186.191H161.78L171.049 213.191H163.457L148.624 195.586C148.244 195.135 147.684 194.875 147.094 194.875H82.8517C82.2149 194.875 81.6161 195.178 81.2393 195.692L68.3976 213.191H59.828L68.6342 186.191Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M75.45 211.191H108.45"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M114.45 211.191H124.45"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M27.95 158.691L25.45 104.191L44.45 158.691"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M43.95 157.691L56.45 114.191L62.0085 158.799"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M37.95 140.191L44.45 93.1909L50.45 135.191"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M65.45 160.192C66.0023 160.192 66.45 159.744 66.45 159.192C66.45 158.639 66.0023 158.192 65.45 158.192L65.45 160.192ZM18.2308 159.192L18.2308 158.192L18.2308 159.192ZM17.2606 160.434L16.2905 160.677L17.2606 160.434ZM31.2308 213.192L31.2308 214.192L31.2308 213.192ZM30.2607 212.434L31.2308 212.192L30.2607 212.434ZM31.2308 214.192L59.95 214.192L59.95 212.192L31.2308 212.192L31.2308 214.192ZM65.45 158.192L18.2308 158.192L18.2308 160.192L65.45 160.192L65.45 158.192ZM16.2905 160.677L29.2905 212.677L31.2308 212.192L18.2308 160.192L16.2905 160.677ZM18.2308 158.192C16.9296 158.192 15.9749 159.414 16.2905 160.677L18.2308 160.192L18.2308 160.192L18.2308 158.192ZM31.2308 212.192L31.2308 212.192L29.2905 212.677C29.5131 213.567 30.3131 214.192 31.2308 214.192L31.2308 212.192Z"
                fill="currentColor"
              />
              <path
                d="M65.45 164.191C66.0023 164.191 66.45 163.743 66.45 163.191C66.45 162.639 66.0023 162.191 65.45 162.191V164.191ZM18.45 164.191H65.45V162.191H18.45V164.191Z"
                fill="currentColor"
              />
              <path
                d="M158.45 51.1909V57.1909H98.45V51.1909C98.45 34.6224 111.881 21.1909 128.45 21.1909C145.019 21.1909 158.45 34.6224 158.45 51.1909Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M114.45 62.1909L105.45 72.1909"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M128.45 63.1909V75.1909"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M143.45 63.1909L151.45 72.1909"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M111.45 50.6909C110.898 50.6909 110.45 51.1386 110.45 51.6909C110.45 52.2432 110.898 52.6909 111.45 52.6909V50.6909ZM111.45 52.6909H157.461V50.6909H111.45V52.6909Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-2 font-semibold">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
                onClick={closeMenu}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Link
            href="https://twitter.com/jaydattkaran"
            target="_blank"
            className="hidden md:flex"
          >
            <Twitter className="w-6 lg:w-8 h-6 lg:h-8 hover:text-neutral-400 transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jaydattkaran"
            target="_blank"
            className="hidden md:flex"
          >
            <Linkedin className="w-6 lg:w-8 h-6 lg:h-8 hover:text-neutral-400 transition" />
          </Link>
          <Link
            href="https://github.com/jaydattkaran"
            target="_blank"
            className="hidden md:flex"
          >
            <Github className="w-6 lg:w-8 h-6 lg:h-8 hover:text-neutral-400 transition" />
          </Link>
          <Switch onClick={toggleTheme} />
          {/* Mobile menu button */}
          <button
            className="md:hidden menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden mobile-menu absolute top-[77%] left-0 w-full 
        backdrop-blur-3xl p-4 z-40 shadow-2xl transition-all duration-300
        border-neutral-600 border-b border-r border-l"
        >
          <div className="flex flex-col space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
                onClick={closeMenu}
              />
            ))}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://twitter.com/jaydattkaran",
                    label: "Twitter",
                  },
                  { href: "https://github.com/jaydattkaran", label: "Github" },
                  {
                    href: "https://www.linkedin.com/in/jaydattkaran",
                    label: "LinkedIn",
                  },
                ].map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    onClick={closeMenu}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
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
        px-3 py-1 text-md relative inline-block
        ${
          isActive
            ? ""
            : "hover:text-neutral-600 dark:hover:text-neutral-400 duration-200"
        }
        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-0 after:h-0.5 after:bg-neutral-500 
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
