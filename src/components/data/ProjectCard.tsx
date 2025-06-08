import { Badge } from "../ui/badge";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import { Edu_SA_Beginner } from 'next/font/google'
import { Button } from "../ui/button";
const poppinBold = Poppins({
  weight: "600",
  preload: false,
});
const eduBeginner = Edu_SA_Beginner({
  weight: '400',
  subsets: ['latin'],
})

interface SearchResult {
  id: string;
  title: string;
  tech: string[];
  description: string;
  github: string;
  website: string;
  image: string;
}

const Project = ({
  title,
  tech,
  description,
  github,
  website,
  id,
}: SearchResult) => {
  const router = useRouter();

  return (
    <div className="relative border cardhover border-neutral-900 hover:border-neutral-400 glass-box duration-200 rounded-lg px-4 py-4 overflow-hidden group">
      <div
        onClick={() => router.push(`/projects/${id}`)}
        className="relative z-10 block"
      >
        <div className="flex flex-row lg:flex-col lg:gap-2 gap-4">
          <div>
            <div className="flex justify-between">
              <div className={`${poppinBold.className} md:text-lg`}>{title}</div>
            </div>
            <div className={`${eduBeginner.className} md:text-md dark:text-neutral-400 text-neutral-600 mb-4 mt-2`}>
              {description}
            </div>
            {tech.map((techItem) => (
              <Badge key={techItem} variant="outline" className="mb-1 mr-2">
                {techItem}
              </Badge>
            ))}
            <div className="flex gap-3 md:text-md text-sm mt-4">
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 text-neutral-400 duration-200"
              >
                <Button variant={"secondary"} className="flex items-center gap-1">
                  <Github className="h-5 w-5"/>
                  <span>GitHub</span>
                </Button>
              </Link>
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-200 text-neutral-400 duration-200"
              >
                <Button variant={"secondary"}  className="flex gap-1 items-center">
                  <Globe className="h-5 w-5"/>
                  <span>Live View</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
