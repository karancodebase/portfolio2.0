"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Sidebar({ closeSidebar }: { closeSidebar?: () => void }) {
    const pathname = usePathname();

    return (
        <div className="space-y-8">
            <nav className="space-y-4 px-6">
               <Section title="Explore">
                <NavItem 
                    href="/"
                    label="Dashboard"
                    isActive={pathname === "/"}
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="/about"
                    label="About"
                    isActive={pathname === "/about"}
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="/work"
                    label="Work"
                    isActive={pathname === "/work"}
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="/skills"
                    label="Skills"
                    isActive={pathname === "/skills"}
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="/contact"
                    label="Get in touch"
                    isActive={pathname === "/contact"}
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="/projects"
                    label="Projects"
                    isActive={pathname === "/projects"}
                    closeSidebar={closeSidebar}
                />
               </Section>

               <Section title="Quick Links">
                <NavItem 
                    href="https://twitter.com/jaydattkaran"
                    label="Twitter"
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="https://github.com/jaydattkaran"
                    label="Github"
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="https://www.linkedin.com/in/jaydattkaran"
                    label="LinkedIn"
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="https://bento.me/jaydatt"
                    label="Bento"
                    closeSidebar={closeSidebar}
                />
                <NavItem 
                    href="mailto:karanjaydatt03@gmail.com"
                    label="Email"
                    closeSidebar={closeSidebar}
                />
               </Section>
            </nav>

            <Link href="/" onClick={closeSidebar}>
                <div className="flex items-center rounded-lg space-x-3 px-4 mt-4 py-2 text-gray-50 hover:bg-gray-300 duration-300 hover:text-gray-800">
                    <Image
                        src="/vercel.svg"
                        alt="name"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="font-semibold">Jaydatt Karan</h1>
                        <p className="text-sm text-zinc-400">Web Developer</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div>
            <h2 className="text-s font-semibold uppercase text-gray-400 mb-2">{title}</h2>
            <div className="space-y-1">{children}</div>
        </div>
    );
}

function NavItem({
    href,
    label,
    newBadge,
    isActive,
    closeSidebar
}: {
    href: string;
    label: string;
    newBadge?: boolean;
    isActive?: boolean;
    closeSidebar?: () => void;
}) {
    const isExternal = href.startsWith("http"); // Detect external links

    return (
        <Link 
            href={href}
            className={`flex items-center justify-between text-md px-2 py-1 rounded
                ${
                isActive
                ? "bg-gray-700 text-zinc-50 font-medium"
                : "text-gray-50 hover:bg-gray-300 duration-300 hover:text-gray-800"}
            `}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} 
            onClick={closeSidebar} // Close sidebar when a link is clicked
        >
            <span>{label}</span>
            {newBadge && (
                <span className="text-sm bg-green-700 text-green-50 px-1.5 rounded">new</span>
            )}
        </Link>
    );
}

export default NavItem;
