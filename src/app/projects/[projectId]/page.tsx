import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/components/data/projects";

type Params = Promise<{ projectId: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { projectId } = await params; // Resolve the promise to get projectId

  const project = projects.find((p) => p.id === projectId) || null;

  if (!project) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg mt-4"
      />
      <p className="mt-4">{project.overview}</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Key Features:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Use Cases:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
          {project.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-4 py-2 rounded-lg"
        >
          GitHub Repo
        </Link>
        <Link
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}
