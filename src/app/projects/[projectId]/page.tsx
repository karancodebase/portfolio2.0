import { notFound } from "next/navigation";
// import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/project";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Heart,
  Zap,
  Users,
  Shield,
  Sparkles,
  Rocket,
  Code,
  Database,
  Wallet,
  Globe,
  TrendingUp,
  PieChart,
  Bell,
  Monitor,
  Server,
  History,
  Smartphone,
  Brain,
  CreditCard,
  PenTool,
  BookOpen,
  Edit,
  Save,
  Share,
  Download,
  Mic,
  ImageIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const iconMap = {
  Wallet,
  Users,
  Database,
  Sparkles,
  Globe,
  Shield,
  Rocket,
  Code,
  Zap,
  Heart,
  TrendingUp,
  PieChart,
  Bell,
  Monitor,
  Server,
  History,
  Smartphone,
  Brain,
  CreditCard,
  PenTool,
  BookOpen,
  Edit,
  Save,
  Share,
  Download,
  Mic,
  Image: ImageIcon,
};
type Params = Promise<{ projectId: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId) || null;

  if (!project) {
    return notFound();
  }

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent || Code;
  };

  return (
    <div
    className={`min-h-screen bg-gradient-to-br text-white overflow-hidden`}
  >
    <div className="relative z-10 mx-auto md:px-4 px-2 md:py-8">
      {/* Header */}
      <div
        className={`transition-all duration-1000`}
      >
        <Link href="/">
        <Button
          variant="ghost"
          className="mb-6 text-purple-300 hover:text-white hover:bg-blue-800/50 transition-all duration-300"
          
          >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back!
        </Button>
          </Link>

        <div className="text-center mb-12">
          <h1 className={`text-5xl md:text-7xl font-black mb-4`}>
            {project.title}
          </h1>
          <p className="text-sm md:text-2xl text-blue-200 font-medium">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Section with Mockup */}
      <div
        className={`grid lg:grid-cols-1 gap-12 items-center mb-16 transition-all duration-1000 delay-300 `}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {project.features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br from-blue-800/30 to-neutral-800/30 border-blue-500/30 backdrop-blur-sm transition-all duration-500 hover:scale-105`}
                >
                  <CardContent className="p-4 text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-purple-300" />
                    <h3 className="font-bold text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-purple-200">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div
        className={`mb-16 transition-all duration-1000 delay-500`}
      >
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <Code className="w-6 h-6" />
          Tech Stack That Rocks
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {project.techStack.map((tech, index) => (
            <Badge
              key={index}
              className={` md:px-4 md:py-2 text-sm font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Problem Statement */}
      <Card className="mb-12 bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/30 backdrop-blur-sm">
        <CardContent className="md:p-8 p-4">
          <h2 className="md:text-3xl text-2xl font-bold mb-4 flex items-center gap-3">
            {project.problemStatement.emoji} {project.problemStatement.title}
          </h2>
          <p className="md:text-lg text-orange-100 leading-relaxed">
            {project.problemStatement.content}
          </p>
        </CardContent>
      </Card>

      {/* Architecture */}
      <Card className="mb-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 backdrop-blur-sm">
        <CardContent className="md:p-8 p-4">
          <h2 className="md:text-3xl text-2xl font-bold mb-6 flex items-center gap-3">
            {project.architecture.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.architecture.sections.map((section, index) => {
              const IconComponent = getIcon(section.icon);
              return (
                <div key={index} className="flex items-start gap-3">
                  <IconComponent
                    className={`w-6 h-6 mt-1`}
                  />
                  <div>
                    <h3
                      className={`font-semibold `}
                    >
                      {section.title}
                    </h3>
                    <p className="md:text-md text-sm">
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="mb-12 bg-gradient-to-r from-green-900/30 to-teal-900/30 border-green-500/30 backdrop-blur-sm">
        <CardContent className="md:p-8 p-4">
          <h2 className="md:text-3xl text-2xl  font-bold mb-6 flex items-center gap-3">
            {project.keyFeatures.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {project.keyFeatures.features
                .slice(0, Math.ceil(project.keyFeatures.features.length / 2))
                .map((feature, index) => {
                  const IconComponent = getIcon(feature.icon);
                  return (
                    <li key={index} className="flex md:text-md text-sm items-center gap-3">
                      <IconComponent className={`w-5 h-5`} />
                      <span>{feature.text}</span>
                    </li>
                  );
                })}
            </ul>
            <ul className="space-y-3">
              {project.keyFeatures.features
                .slice(Math.ceil(project.keyFeatures.features.length / 2))
                .map((feature, index) => {
                  const IconComponent = getIcon(feature.icon);
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5`} />
                      <span>{feature.text}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Challenges & Solutions */}
      <Card className="mb-12 bg-gradient-to-r from-yellow-900/30 to-red-900/30 border-yellow-500/30 backdrop-blur-sm">
        <CardContent className="md:p-8 p-4">
          <h2 className="md:text-3xl text-2xl font-bold mb-6 flex items-center gap-3">
            {project.challenges.title}
          </h2>
          <div className="space-y-4">
            {project.challenges.items.map((item, index) => (
              <div key={index}>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <span className="text-red-300 font-semibold">
                      Challenge:{" "}
                    </span>
                    <span className="md:ml-2 md:text-md text-sm">{item.challenge}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:ml-5">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                  <div>
                    <span className="text-green-300 font-semibold">
                      Solution:{" "}
                    </span>
                    <span className="md:ml-2 md:text-md text-sm">{item.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Outcomes */}
      <Card className="mb-12 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-500/30 backdrop-blur-sm">
        <CardContent className="md:p-8 p-4">
          <h2 className="md:text-3xl text-2xl font-bold mb-6 flex items-center gap-3">
            {project.learningOutcomes.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.learningOutcomes.outcomes.map((outcome, index) => {
              const IconComponent = getIcon(outcome.icon);
              return (
                <div key={index} className="text-center">
                  <IconComponent
                    className={`w-12 h-12 mx-auto mb-3`}
                  />
                  <h3 className="font-semibold mb-2">{outcome.title}</h3>
                  <p
                    className={`text-sm`}
                  >
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Future Plans */}
      <Card className="mb-12 bg-gradient-to-r from-pink-900/30 to-purple-900/30 border-pink-500/30 backdrop-blur-sm">
       <CardContent className="md:p-8 p-4">
          <h2 className="md:text-3xl text-2xl font-bold mb-6 flex items-center gap-3">
            {project.futurePlans.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {project.futurePlans.plans
                .slice(0, Math.ceil(project.futurePlans.plans.length / 2))
                .map((plan, index) => {
                  const IconComponent = getIcon(plan.icon);
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5`} />
                      <span className="md:text-md text-sm">{plan.text}</span>
                    </li>
                  );
                })}
            </ul>
            <ul className="space-y-3">
              {project.futurePlans.plans
                .slice(Math.ceil(project.futurePlans.plans.length / 2))
                .map((plan, index) => {
                  const IconComponent = getIcon(plan.icon);
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5`} />
                      <span className="md:text-md text-sm">{plan.text}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* CTA Buttons */}
      <div className="my-6 flex gap-4 justfiy-center">
        {project.links.github && (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"outline"}>
              <Github />
              GitHub Repo
            </Button>
          </Link>
        )}
        {project.links.demo && (
          <Link
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"secondary"}>
              <ExternalLink />
              Live Demo
            </Button>
          </Link>
        )}
      </div>
    </div>
  </div>
  );
}