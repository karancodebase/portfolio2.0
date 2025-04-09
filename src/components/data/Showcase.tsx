import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export const showcase = [
  // sengarbus
  {
    id: "sengarbus",
    image: "/sengarbus.jpeg",
    title: "SengarBus - Online Bus Booking Platform",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Clerk",
    ],
    description:
      "A web-based bus booking platform for Sengar Travels, allowing users to search, select seats, and book buses online.",
    overview:
      "SengarBus is an online ticket booking system designed for a seamless travel experience. Users can search for buses based on location and date, select seats dynamically, make online payments, and track buses in real-time.",
    problemStatement:
      "Traditional bus booking methods are inefficient and lack real-time tracking. SengarBus streamlines the process with an intuitive online platform.",
    architecture: {
      Frontend:
        "Built with Next.js and TypeScript for a scalable and responsive UI.",
      Backend: "Node.js and Express.js handle API requests efficiently.",
      Database: "PostgreSQL is used for structured data storage.",
      SessionManagement:
        "Redis is used for session storage with a hybrid approach.",
      Authentication: "Clerk is used for secure user authentication.",
    },
    keyFeatures: [
      "User authentication with Clerk",
      "Dynamic seat selection with real-time availability",
      "Live bus tracking during the journey",
      "Multi-vendor platform for different bus operators",
      "Secure online payment integration",
      "Search functionality for buses based on route and date",
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing session storage efficiently.",
        solution: "Implemented Redis for scalable session handling.",
      },
      {
        challenge: "Ensuring secure online transactions.",
        solution: "Integrated a secure payment gateway with encryption.",
      },
    ],
    learningOutcomes: [
      "Deepened understanding of full-stack web development.",
      "Enhanced knowledge of Redis for session management.",
      "Improved integration of real-time tracking features.",
    ],
    futureImprovements: [
      "Adding mobile app support for seamless access.",
      "Enhancing real-time tracking accuracy with GPS integration.",
      "Implementing a loyalty program for frequent travelers.",
    ],
    screenshots: ["/sengarbus1.jpg", "/sengarbus2.jpg"],
    useCases: [
      "Travelers booking buses online",
      "Bus operators managing their fleet and routes",
      "Admins tracking bookings and revenue in real-time",
    ],
    github: "https://github.com/karancodebase/sengarbus",
    website: "https://sengarbus.vercel.app",
  },

  // course-seller
  {
    id: "course-seller",
    image: "/course.jpg",
    title: "Course Seller Application",
    tech: ["JavaScript", "React.js", "MongoDB", "TailwindCSS"],
    description:
      "A course-selling application with separate dashboards for users and admins, providing a seamless online learning experience.",
    overview:
      "This platform enables instructors to create and sell online courses while students can purchase and learn at their own pace. It features separate dashboards for users and admins to manage content and track progress.",
    problemStatement:
      "Educators often lack a dedicated platform to create and sell courses efficiently. This application provides a structured solution with payment integration and course management features.",
    architecture: {
      Frontend: "Built with React.js for dynamic user interactions.",
      Backend: "Express.js and MongoDB for course data management.",
      Authentication: "JWT-based authentication for users and admins.",
      Payments: "Integrated Stripe for secure transactions.",
    },
    keyFeatures: [
      "Instructor dashboard for course creation and analytics",
      "Student dashboard with enrolled courses and progress tracking",
      "Secure payment integration for course purchases",
      "Responsive and modern UI with easy navigation",
    ],
    challengesAndSolutions: [
      {
        challenge: "Ensuring secure content management.",
        solution:
          "Implemented role-based access control for instructors and students.",
      },
      {
        challenge: "Handling high user engagement.",
        solution: "Optimized database queries for fast content delivery.",
      },
    ],
    learningOutcomes: [
      "Enhanced knowledge of e-commerce payment gateways.",
      "Improved database optimization for large-scale applications.",
    ],
    futureImprovements: [
      "Adding live session support for instructors.",
      "Implementing AI-based course recommendations.",
    ],
    screenshots: ["/course1.jpg", "/course2.jpg"],
    useCases: [
      "Independent educators and content creators",
      "Institutes looking for an online learning management system",
      "Students seeking a structured online learning experience",
    ],
    github: "https://github.com/karancodebase/course_seller",
    website: "https://github.com/karancodebase/course_seller",
  },

  // instasnap
  {
    id: "instasnap",
    image: "/social.jpg",
    title: "Instasnap",
    tech: ["React", "TypeScript", "Appwrite", "TailwindCSS"],
    description:
      "A social media application having features of create, edit, like & save post. Also a customised user profile dashboard.",
    overview:
      "InstaSnap is a real-time social media platform that allows users to instantly capture and share photos with their followers. With Firebase-powered real-time updates, users can experience instant social interactions.",
    problemStatement:
      "Many social media platforms delay updates or require manual refreshes for new content. InstaSnap bridges this gap by providing seamless, real-time photo sharing with instant visibility.",
    architecture: {
      Frontend: "React Native for cross-platform mobile compatibility.",
      Backend: "Node.js with Firebase for handling real-time interactions.",
      Storage: "Cloud storage integration to handle photo uploads securely.",
    },
    keyFeatures: [
      "Instant photo capture and sharing",
      "Live feed updates using Firebase Realtime Database",
      "Secure authentication with Google and email sign-in",
      "Story feature with auto-disappearing photos",
      "Interactive UI with smooth animations",
    ],
    challengesAndSolutions: [
      {
        challenge: " Managing high-speed data updates for multiple users.",
        solution:
          " Implemented Firebase's real-time syncing and lazy loading for optimized performance.",
      },
      {
        challenge: "Ensuring seamless media uploads",
        solution: "Integrated a background upload queue to prevent UI lag.",
      },
    ],
    learningOutcomes: [
      "Mastered real-time data synchronization using Firebase.",
      "Improved knowledge of React Native performance optimizations.",
    ],
    futureImprovements: [
      "Implementing AI-powered image filters and auto-captioning",
      "Introducing in-app messaging for user engagement.",
    ],
    screenshots: ["/course1.jpg", "/course2.jpg"],
    useCases: [
      "Influencers and content creators sharing instant updates",
      "Users wanting a fast and lightweight social media alternative",
      "Photography enthusiasts capturing spontaneous moments",
    ],
    github: "https://github.com/karancodebase/instasnap_",
    website: "https://social-instasnap.netlify.app/",
  },

  // aeris
  {
    id: "aibot",
    image: "/aibot.jpg",
    title: "Aeris – AI-Powered Chatbot",
    tech: ["TypeScript", "Next.js", "Gemini API", "Tailwind CSS"],
    description:
      "An AI chatbot using Google's Gemini API for real-time, context-aware responses.",
    overview:
      "Aeris is an AI-powered chatbot that enhances user interactions with natural language understanding. It leverages Google's Gemini API to deliver fast, accurate, and contextually relevant responses. Built with a modern tech stack, including Next.js and TypeScript, it ensures a scalable and responsive experience.",
    problemStatement:
      "Users often struggle to get precise, contextual AI responses in real-time. Aeris bridges this gap by integrating advanced AI capabilities with a robust frontend and backend architecture.",
    architecture: {
      Frontend:
        "Built with Next.js and TypeScript for fast rendering and scalability.",
      Backend:
        "Uses Node.js and Express.js for handling API requests efficiently.",
      Database:
        "PostgreSQL for user data persistence and Redis for temporary chat history.",
      "AI Integration": "Google's Gemini API for advanced AI-driven responses.",
      StateManagement:
        "Session-based storage to maintain context in conversations.",
    },
    keyFeatures: [
      "Real-time AI-powered responses with natural language processing.",
      "Context-aware conversations with session-based storage.",
      "High-performance, scalable architecture using Next.js.",
      "Supports various query types, from casual questions to technical assistance.",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "AI only responded to single messages, lacking conversation memory.",
        solution:
          "Implemented Redis session storage to maintain temporary chat history.",
      },
      {
        challenge: "Handling API rate limits and response delays.",
        solution:
          "Optimized API requests with caching mechanisms to reduce redundant calls.",
      },
      {
        challenge:
          "Deploying an AI chatbot with cost-effective infrastructure.",
        solution:
          "Used a free API version and efficient cloud hosting to minimize costs.",
      },
    ],
    learningOutcomes: [
      "Deepened knowledge of AI chatbot integrations and API handling.",
      "Improved understanding of session management and data storage.",
      "Enhanced frontend performance optimization with Next.js.",
    ],
    futureImprovements: [
      "Adding voice-based interaction capabilities.",
      "Expanding AI training for more personalized responses.",
      "Implementing user authentication for persistent chat history.",
    ],
    useCases: [
      "Automating customer support for businesses.",
      "Providing AI-driven instant assistance to users.",
      "Helping developers experiment with AI chatbot integrations.",
    ],
    screenshots: ["/screenshot1.jpg", "/screenshot2.jpg"],
    github: "https://github.com/karancodebase/assistant",
    website: "https://aeris.jaydatt.xyz/",
  },
];

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
  image,
  id,
}: SearchResult) => {
  const router = useRouter();

  return (
    <div className="relative border cardhover border-neutral-900 hover:border-neutral-400 glass-box duration-200 rounded-lg px-4 py-4 overflow-hidden group">
      {/* Background Image (Hidden by Default) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Image
          src={image}
          alt={`${title} Background`}
          fill
          priority
          className="opacity-40 object-cover"
        />
      </div>

      <div
        onClick={() => router.push(`/projects/${id}`)}
        className="relative z-10 block"
      >
        <div className="flex flex-row lg:flex-col lg:gap-2 gap-4">
          <div>
            <div className="flex justify-between">
              <div className="font-semibold md:text-lg">{title}</div>
              <div className="flex gap-3 justify-end md:text-md text-sm">
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-200 text-neutral-400 duration-200"
                >
                  <Github />
                </Link>
                <Link
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-200 text-neutral-400 duration-200"
                >
                  <Globe />
                </Link>
              </div>
            </div>
            <div className="md:text-md text-sm dark:text-neutral-400 text-neutral-600 mb-4 mt-2">
              {description}
            </div>
            {tech.map((techItem) => (
              <Badge key={techItem} variant="default" className="mb-1 mr-2">
                {techItem}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
