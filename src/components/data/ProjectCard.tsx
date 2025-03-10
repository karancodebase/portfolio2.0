import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  tech: string[];
  description: string;
  github: string;
  website: string;
  image: string;
}

const Project = ({ title, tech, description, github, website, image, id }: SearchResult) => {
  return (
    <div className="relative border cardhover border-neutral-900 hover:border-neutral-400 glass-box duration-200 rounded-lg px-4 py-4 overflow-hidden group">
      {/* Background Image (Hidden by Default) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Image 
          src={image} 
          alt={`${title} Background`} 
          layout="fill" 
          objectFit="cover" 
          className="opacity-40"
        />
      </div>

      <Link href={`/projects/${id}`} className="relative z-10 block">
        <div className="flex flex-row lg:flex-col lg:gap-2 gap-4">
          <div>
            <div className="flex justify-between">
              <div className="font-semibold md:text-lg">{title}</div>
              <div className="flex gap-4 justify-end md:text-md text-sm">
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 duration-200">
                  <Github />
                </a>
                <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 duration-200">
                  <Globe />
                </a>
              </div>
            </div>
            <div className="md:text-md text-sm mb-4 mt-2">{description}</div>
            {tech.map((techItem) => (
              <Badge key={techItem} variant="default" className="mb-1 mr-2">
                {techItem}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
