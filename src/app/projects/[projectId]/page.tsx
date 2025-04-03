import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/components/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Params = Promise<{ projectId: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId) || null;

  if (!project) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <Link href="/">
        <Button
          variant="destructive"
          className="group flex items-center"
        >
          <ArrowLeft className=" group-hover:translate-x-0 transition-all duration-300 ease-in-out translate-x-[-5px]" />
          Go Back!
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg mt-4"
      />

      <div className="mt-4">
        {project.tech.map((tech, index) => (
          <Badge key={index} variant="default" className="mb-1 mr-2">
            {tech}
          </Badge>
        ))}
      </div>

      <p className="mt-4 text-lg dark:text-neutral-400 text-neutral-600">
        {project.overview}
      </p>

      {project.problemStatement && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold tracking-widest">
            🚨 Problem Statement:
          </h3>
          <p className="text-gray-800 dark:text-gray-400 mt-2">
            {project.problemStatement}
          </p>
        </div>
      )}

      {project.architecture && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold tracking-widest">
            🏗️ Architecture:
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
            {Object.entries(project.architecture).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold tracking-widest">
          ✨ Key Features:
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold tracking-widest">🎯 Use Cases:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
          {project.useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </div>

      {project.challengesAndSolutions && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold tracking-widest">
            🛠️ Challenges and Solutions:
          </h3>
          <div className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
            {project.challengesAndSolutions.map(
              ({ challenge, solution }, index) => (
                <div key={index} className="mb-2">
                  <div>
                    <strong>🔴 {challenge}:</strong>
                  </div>
                  <div>✅ {solution}</div>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {project.learningOutcomes && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold tracking-widest">
            🎓 Learning Outcomes:
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
            {project.learningOutcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}

      {project.futureImprovements && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold tracking-widest">
            🚀 Future Improvements:
          </h3>
          <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-400">
            {project.futureImprovements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>
      )}

      {/* {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Screenshots:</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {project.screenshots.map((screenshot, index) => (
              <Image
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                width={400}
                height={250}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      )} */}

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
