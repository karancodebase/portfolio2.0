"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ui/theme";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Navbar() {
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
    <div className="pt-2 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b
        w-[95vw] flex flex-row 
        justify-between px-4 h-12 items-center z-500
        "
      >
        <div className="flex">
          <Link href="/">
            <svg
              width="50"
              height="50"
              viewBox="0 0 267 322"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M89.7959 137.5V137.5C89.7959 134.858 89.2834 132.242 88.2867 129.796L86.6259 125.719C85.1309 122.05 82.2736 119.101 78.6527 117.492V117.492C76.4461 116.511 74.5022 115.023 72.9794 113.149L72.5412 112.61C70.1072 109.614 68.6866 105.923 68.4837 102.069L67.7959 89L68.614 63.6403C68.735 59.8887 69.2147 56.1573 70.0466 52.4971V52.4971C70.8775 48.8407 72.0561 45.2722 73.5663 41.8401L73.6943 41.5491C75.7542 36.8676 78.3839 32.4582 81.524 28.421L83.7959 25.5L90.7959 18.5V18.5C96.443 14.1816 102.578 10.5414 109.074 7.65413L112.796 6L116.537 4.89975C119.703 3.96846 122.947 3.32313 126.228 2.97152V2.97152C132.233 2.3282 138.302 2.6748 144.194 3.9975L150.91 5.50511C156.795 6.82623 162.425 9.0964 167.581 12.2266V12.2266C171.707 14.7315 175.489 17.7632 178.831 21.2451L181.605 24.135C184.392 27.038 186.888 30.207 189.058 33.5965V33.5965C192.201 38.5073 194.635 43.8516 196.28 49.4452V49.4452C197.946 55.1108 198.796 60.9985 198.796 66.904V88V104.01C198.796 106.617 198.063 109.172 196.681 111.384L196.422 111.799C194.733 114.5 192.089 116.465 189.016 117.304V117.304C185.108 118.369 181.946 121.241 180.509 125.028L177.488 132.993C177.361 133.328 177.296 133.684 177.296 134.042V134.042C177.296 135.676 175.972 137 174.338 137H129.796H90.2959"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M93 137L42.6279 137C39.7662 137 36.9308 137.546 34.2738 138.609L32.9691 139.131C29.9149 140.352 27.2647 142.406 25.3195 145.059V145.059C23.6612 147.32 22.5677 149.945 22.1303 152.715L22.0283 153.361C21.5464 156.413 21.7683 159.535 22.677 162.488L25.2959 171L28.2959 181L31.7959 193L35.2959 206L38.2959 217M173 137H222.287C223.956 137 225.621 137.157 227.26 137.469L229.964 137.984C233.438 138.646 236.633 140.337 239.134 142.838V142.838C241.525 145.229 243.178 148.257 243.896 151.561L244.143 152.698C244.9 156.178 244.784 159.792 243.805 163.217L240.296 175.5L235.296 193L228.296 217M228.296 217V217C232.938 222.305 236.778 228.26 239.695 234.677L240.296 236L242.796 244.5M228.296 217V217C223.242 233.35 208.126 244.5 191.012 244.5H136.296L75.5796 244.5C58.4662 244.5 43.3496 233.35 38.2959 217V217M38.2959 217L36.3712 219.502C31.0111 226.47 26.5932 234.115 23.2319 242.238L22.2959 244.5"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M85 122.5L83.8931 89.4036C83.8347 87.6579 82.6962 86.1329 81.0391 85.5808V85.5808C79.9283 85.2106 78.7132 85.3237 77.6898 85.8925L68.5 91L69.065 90.5762C75.1894 85.983 82.6383 83.4999 90.2937 83.4994V83.4994C92.623 83.4992 94.9466 83.2691 97.2306 82.8123L100.777 82.1032C102.787 81.7011 104.765 81.1532 106.696 80.4636V80.4636C109.422 79.4901 112.041 78.2388 114.511 76.7294L115.858 75.9062C118.479 74.3045 120.968 72.4954 123.3 70.4962L126.796 67.4997L130.082 64.2143C130.553 63.743 131.115 63.3724 131.734 63.1249V63.1249C132.746 62.7199 133.865 62.6627 134.914 62.9623L135.231 63.053C136.255 63.3455 137.181 63.9104 137.909 64.6873L142.412 69.4908C143.665 70.8275 145.039 72.0454 146.517 73.1289L147.539 73.8788C150.367 75.952 153.435 77.6749 156.677 79.0098L160.296 80.5001L160.533 80.5634C165.368 81.8527 170.293 82.7773 175.267 83.3294L176.796 83.4992L182 84.5M182.791 121L182 84.5M182 84.5V84.5C186.779 85.0715 191.323 86.8935 195.173 89.7822L198.796 92.5002"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M124 97.5L117.209 92.6012C115.327 91.2437 113.028 90.5906 110.713 90.7559V90.7559C108.499 90.914 106.403 91.8117 104.761 93.3047L104.468 93.5713C102.742 95.1397 101.624 97.2887 101.316 99.6V99.6C100.984 102.089 101.62 104.633 103.097 106.663V106.663C104.206 108.189 105.732 109.36 107.493 110.037L107.621 110.086C109.986 110.996 112.605 110.996 114.971 110.086L115.145 110.02C116.882 109.351 118.416 108.242 119.594 106.802L121.451 104.532C122.012 103.847 122.48 103.091 122.844 102.284V102.284C124.196 99.2845 126.922 97.1302 130.153 96.5086L130.95 96.3551C132.173 96.1199 133.425 96.0817 134.66 96.2419L134.802 96.2604C138.42 96.7301 141.656 98.7495 143.668 101.794L144.796 103.5L145.429 104.512C146.652 106.47 148.365 108.076 150.398 109.17L151.198 109.601C152.895 110.515 154.817 110.927 156.739 110.79L157.024 110.769C159.445 110.596 161.707 109.498 163.34 107.702V107.702C164.92 105.963 165.796 103.698 165.796 101.349V101.198C165.796 99.1196 165.137 97.0946 163.915 95.4137L163.649 95.0478C162.437 93.3815 160.79 92.0808 158.888 91.2883L158.707 91.2129C156.807 90.4212 154.718 90.1959 152.693 90.5641V90.5641C151.115 90.851 149.622 91.4899 148.325 92.4331L146.898 93.4714C145.508 94.4819 143.945 95.2284 142.286 95.6738V95.6738C141.1 95.992 139.878 96.1531 138.651 96.1531H132L121.5 96"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M97.2959 197.809L107.92 183.666C108.498 182.896 108.916 182.019 109.149 181.086V181.086C109.567 179.417 109.373 177.654 108.604 176.116L108.181 175.27C107.612 174.133 106.633 173.253 105.442 172.81V172.81C104.061 172.296 102.525 172.414 101.24 173.133L100.124 173.757C99.2469 174.248 98.4731 174.903 97.8453 175.688L94.7959 179.5L91.2959 184L87.2959 189V189C83.4572 194.02 83.4488 200.987 87.2753 206.016L96.7582 218.479C97.76 219.796 99.1355 220.78 100.705 221.303L101.608 221.604C103.314 222.173 105.183 221.968 106.725 221.043L107.075 220.832C108.477 219.991 109.414 218.552 109.617 216.93V216.93C109.734 215.994 109.6 215.043 109.228 214.175L108.785 213.142C108.461 212.384 108.038 211.671 107.528 211.023L97.2959 198"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M168.5 198L158.239 210.941C157.617 211.727 157.169 212.636 156.926 213.608V213.608C156.52 215.238 156.709 216.959 157.461 218.461L157.912 219.363C158.481 220.5 159.46 221.379 160.652 221.822V221.822C162.032 222.335 163.569 222.217 164.854 221.497L165.969 220.873C166.846 220.382 167.62 219.726 168.247 218.941L171.296 215.129L174.794 210.628L178.793 205.627V205.627C182.63 200.606 182.636 193.639 178.808 188.611L169.259 176.068C168.298 174.805 166.978 173.862 165.472 173.36L164.784 173.131C162.892 172.501 160.814 172.786 159.162 173.902L158.663 174.239C157.475 175.042 156.682 176.311 156.482 177.732V177.732C156.353 178.648 156.478 179.583 156.843 180.434L157.35 181.616C157.64 182.292 158.006 182.932 158.441 183.525L168.79 197.63"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M131.301 178.397L126.294 197.551L123.296 212L122.927 216.054C122.841 217.004 122.981 217.962 123.335 218.848L123.361 218.914C123.648 219.631 124.077 220.281 124.622 220.827C125.692 221.898 127.144 222.5 128.658 222.5L128.905 222.5C129.82 222.5 130.722 222.287 131.54 221.878C132.68 221.308 133.604 220.384 134.174 219.244L134.8 217.991C135.13 217.332 135.386 216.64 135.565 215.925L137.296 209L139.296 200.5L141.296 191L142.796 184L143.17 179.13C143.253 178.064 143.043 176.995 142.565 176.038L142.464 175.837C142.028 174.964 141.351 174.234 140.515 173.732C139.717 173.254 138.805 173.001 137.875 173.001L137.693 173.001C136.158 173.002 134.686 173.611 133.601 174.696L133.181 175.117C132.274 176.024 131.625 177.156 131.301 178.397Z"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M74.5 244.5L16.7958 244.5L9.71125 244.5C7.28211 244.5 5.03108 245.774 3.78129 247.857V247.857C3.13642 248.932 2.79577 250.162 2.79577 251.415L2.79578 253.5L2.79578 256.285C2.79578 256.76 2.84277 257.235 2.93606 257.701L2.96071 257.825C3.18061 258.924 3.67178 259.951 4.3896 260.813V260.813C5.30333 261.909 6.54207 262.687 7.92675 263.033L8.70044 263.226C9.42793 263.408 10.175 263.5 10.9249 263.5L256.535 263.5C258.609 263.5 260.584 262.613 261.962 261.063V261.063C263.143 259.734 263.796 258.018 263.796 256.24L263.796 253.005C263.796 251.684 263.513 250.378 262.966 249.175L262.25 247.598C261.641 246.26 260.504 245.236 259.11 244.771V244.771C258.571 244.592 258.006 244.5 257.438 244.5L242.796 244.5L181 244.5"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </Link>
          {/* Desktop */}
        </div>
        <div className="flex flex-row gap-4 items-center">
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
          <Link
            href="https://twitter.com/jaydattkaran"
            target="_blank"
            className="hidden md:flex"
          >
            <Twitter className="w-6 h-6 hover:text-neutral-400 text-neutral-300 transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jaydattkaran"
            target="_blank"
            className="hidden md:flex"
          >
            <Linkedin className="w-6 h-6 hover:text-neutral-400 text-neutral-300 transition" />
          </Link>
          <Link
            href="https://github.com/jaydattkaran"
            target="_blank"
            className="hidden md:flex"
          >
            <Github className="w-6 h-6 hover:text-neutral-400 text-neutral-300 transition" />
          </Link>
          <ModeToggle />

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
          className="md:hidden mobile-menu absolute top-[4.1rem] left-4 w-[90vw] 
        backdrop-blur-3xl p-4 z-40 shadow-2xl transition-all duration-300
        border-neutral-600 border rounded-lg"
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
        px-2 text-sm relative inline-block
        ${
          isActive
            ? ""
            : "hover:text-neutral-600 dark:text-neutral-400 text-neutral-300 dark:hover:text-neutral-400 duration-200"
        }
        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-0 after:h-0.5 after:bg-neutral-500 
        after:transition-all after:duration-300
        hover:after:w-2/4
      `}
      onClick={onClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </Link>
  );
}

export default Navbar;
