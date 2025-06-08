import { Badge } from "../ui/badge";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Poppins } from "next/font/google";
import { Edu_SA_Beginner } from 'next/font/google'
const poppinBold = Poppins({
  weight: "600",
  preload: false,
});
const eduBeginner = Edu_SA_Beginner({
  weight: '400',
  subsets: ['latin'],
})

export const showcase = [
  //buddyfi
  {
    id: "buddyfi",
    image: "/buddyfi.png",
    title: "BuddyFi – Decentralized Hackathon Team Matching Platform",
    tech: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Solana Web3",
      "Rust",
      "IPFS (Pinata)",
    ],
    description:
      "A Web3-powered matchmaking platform for hackathon developers to find teammates based on skills, interests, and availability using Solana blockchain.",
    overview:
      "BuddyFi connects developers for hackathons by matching profiles stored on-chain and on IPFS. Users authenticate with Phantom wallet, create profiles with skills and interests, and swipe to find compatible team members. The platform leverages Solana smart contracts to store references and create a decentralized social graph.",
    problemStatement:
      "Finding compatible hackathon teammates is often difficult and centralized, lacking transparency and trust. BuddyFi decentralizes team formation with on-chain profile storage and verifiable matchmaking.",
    architecture: {
      Frontend: "Next.js + TailwindCSS for smooth, responsive user experience.",
      WalletIntegration:
        "Phantom wallet connection to sign transactions and authenticate users.",
      OnChain:
        "Solana smart contracts (written in Rust) handle profile references, matchmaking, and team formation logic.",
      Storage:
        "IPFS (via Pinata) stores user profile metadata like skills, interests, and bio.",
    },
    keyFeatures: [
      "Wallet-based login and profile creation",
      "Decentralized storage of profile metadata on IPFS",
      "Swipe-based team matching algorithm",
      "On-chain recording of social graph connections",
      "Dashboard displaying matched teammates and badges",
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Handling user data storage in a decentralized way while maintaining fast UX.",
        solution:
          "Split metadata storage on IPFS with on-chain references for lightweight, trustable data.",
      },
      {
        challenge:
          "Building a seamless wallet connection flow with transaction signing.",
        solution:
          "Integrated Phantom wallet SDK with clear UI feedback for users during sign steps.",
      },
    ],
    learningOutcomes: [
      "In-depth experience with Solana Rust smart contract development.",
      "Practical knowledge of integrating IPFS with blockchain metadata references.",
      "Improved understanding of Web3 UX patterns and wallet integration.",
    ],
    futureImprovements: [
      "Add gamification with cNFT badges for contributions",
      "Enable public profiles and reputation scores",
      "Mobile app support and multi-wallet integration",
    ],
    screenshots: ["/buddyfi1.jpg", "/buddyfi2.jpg"],
    useCases: [
      "Hackathon participants seeking teammates",
      "Developer communities organizing team formation",
      "Decentralized social graph and collaboration",
    ],
    github: "https://github.com/karancodebase/buddyfi",
    website: "https://buddyfi.xyz",
  },

  //devira
  {
    id: "devira",
    image: "/devira.png",
    title: "Devira – GitHub Streak to NFT Reward System",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Arbitrum Stylus",
      "Rust",
      "GitHub API",
      "NFT.Storage",
    ],
    description:
      "A Web3 reward platform that converts developer GitHub streaks into collectible NFTs using Arbitrum and Rust-based smart contracts.",
    overview:
      "Devira tracks developers' GitHub streaks and milestones. When a milestone is achieved, the system mints and airdrops a custom NFT to the user's wallet. It gamifies coding consistency using Arbitrum Stylus smart contracts and stores metadata on decentralized platforms like NFT.Storage.",
    problemStatement:
      "While developers consistently contribute to open-source, there's rarely a tangible reward for daily commitment. Devira turns that effort into permanent digital collectibles.",
    architecture: {
      Frontend:
        "Built with Next.js and TypeScript for responsive UI and GitHub heatmap visualization.",
      Backend:
        "Minimal backend for fetching streak data and managing claim logic.",
      SmartContracts:
        "Arbitrum Stylus with Rust handles badge minting and eligibility verification.",
      DataFetch: "GitHub API used to track contribution streaks.",
      Storage:
        "NFT.Storage is used to store badge metadata in a decentralized way.",
    },
    keyFeatures: [
      "GitHub heatmap streak analysis",
      "Custom NFT airdrop on milestone achievements",
      "On-chain badge minting via Arbitrum Stylus",
      "Wallet-based claim flow for dev rewards",
      "Public developer dashboard with streak data",
    ],
    challengesAndSolutions: [
      {
        challenge: "Parsing and analyzing GitHub activity accurately.",
        solution: "Built a GitHub heatmap parser with caching and edge cases.",
      },
      {
        challenge: "Efficient on-chain NFT minting from frontend triggers.",
        solution:
          "Used lightweight Rust-based contracts and conditional claim logic to keep costs low.",
      },
    ],
    learningOutcomes: [
      "Learned how to integrate GitHub API with on-chain reward systems.",
      "Built efficient Rust smart contracts on Arbitrum Stylus.",
      "Improved UX around NFT claiming from milestone logic.",
    ],
    futureImprovements: [
      "Add leaderboards and developer profiles",
      "Enable off-chain badge previews before claim",
      "Support POAP or soulbound badge formats",
    ],
    screenshots: ["/devira1.jpg", "/devira2.jpg"],
    useCases: [
      "Developers celebrating open-source consistency",
      "Communities gamifying contributions",
      "Hackathon or OSS organizers rewarding activity",
    ],
    github: "https://github.com/karancodebase/devira",
    website: "https://devira.xyz",
  },
  // aeris
  {
    id: "aeris",
    image: "/aeris.png",
    title: "Aeris – AI Chatbot Using Gemini API",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API", "Gemini API"],
    description:
      "A conversational AI chatbot that uses the Gemini API for advanced natural language understanding and generation, tailored for personalized user interactions.",
    overview:
      "Aeris is a next-gen AI chatbot built to leverage the Gemini API’s capabilities to provide contextual, human-like conversations. The platform is designed for seamless integration with web interfaces and delivers intelligent responses in real-time.",
    problemStatement:
      "Current chatbots lack contextual awareness and natural conversational flow. Aeris addresses these issues by harnessing Gemini API’s advanced AI models to enhance chat quality.",
    architecture: {
      Frontend:
        "Next.js and TailwindCSS provide a smooth UI with real-time message streaming.",
      Backend:
        "API routes proxy requests securely to Gemini API with rate limiting and session management.",
      AIIntegration:
        "Gemini API handles the conversational intelligence and contextual response generation.",
    },
    keyFeatures: [
      "Real-time chat interface with typing indicators",
      "Context-aware AI responses powered by Gemini API",
      "Session management for ongoing conversations",
      "Customizable prompts and conversation flow",
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing latency and rate limits of external AI APIs.",
        solution:
          "Implemented efficient request queueing and caching strategies.",
      },
      {
        challenge:
          "Providing natural conversational context over multiple turns.",
        solution:
          "Maintained session context with prompt engineering and stateful backend.",
      },
    ],
    learningOutcomes: [
      "Hands-on experience integrating Gemini API into a React app.",
      "Improved skills in managing API rate limits and latency.",
      "Built robust chat UI with real-time updates and smooth UX.",
    ],
    futureImprovements: [
      "Add voice interaction support",
      "Integrate with messaging platforms (Slack, Discord)",
      "Enable multi-language support",
    ],
    screenshots: ["/aeris1.jpg", "/aeris2.jpg"],
    useCases: [
      "Customer support chatbots",
      "Personal AI assistants",
      "Interactive educational tools",
    ],
    github: "https://github.com/karancodebase/aeris",
    website: "https://aeris.jaydatt.xyz",
  },
  // instasnap
  {
    id: "instasnap",
    image: "/instasnap.png",
    title: "InstaSnap – Instagram-like UI Clone",
    tech: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "Zustand"],
    description:
      "A responsive, performance-optimized clone of Instagram’s core UI — built for experimenting with design systems, transitions, and feed mechanics.",
    overview:
      "InstaSnap is a front-end experiment that recreates key Instagram features like posts, stories, and profiles using modern tooling. It’s a sandbox project to explore responsive layouts, state management, animation with Framer Motion, and component composition using Zustand.",
    problemStatement:
      "Social app interfaces are often performance-heavy and design-complex. InstaSnap simplifies and replicates these flows for prototyping and learning.",
    architecture: {
      Frontend:
        "Next.js and TailwindCSS power the structure and styling for rapid iteration.",
      StateManagement:
        "Zustand is used for local app state like feed, likes, and views.",
      Animation:
        "Framer Motion handles transitions, modals, and scroll animations.",
      Routing:
        "App router structure allows clean route-based component loading.",
    },
    keyFeatures: [
      "Mock post feed and like/save interactions",
      "Story bar with animations and modals",
      "Responsive layout for mobile and desktop",
      "Framer Motion-powered transitions",
      "Local state management with Zustand",
    ],
    challengesAndSolutions: [
      {
        challenge: "Recreating Instagram-like UI with minimal bundle size.",
        solution:
          "Used Tailwind and component-level optimization with Zustand.",
      },
      {
        challenge: "Smooth animations without UI jank.",
        solution: "Used Framer Motion variants and lazy loading.",
      },
    ],
    learningOutcomes: [
      "Improved understanding of atomic UI design patterns.",
      "Mastered Framer Motion’s variants and layout transitions.",
      "Experimented with state management patterns in component libraries.",
    ],
    futureImprovements: [
      "Add story creation and upload flow",
      "Integrate mock authentication for user profiles",
      "Explore decentralized media storage using Arweave",
    ],
    screenshots: ["/instasnap1.jpg", "/instasnap2.jpg"],
    useCases: [
      "Front-end devs exploring Instagram’s UX patterns",
      "UI/UX experimentation for design systems",
      "Showcase app for animations and responsive UI",
    ],
    github: "https://github.com/karancodebase/instasnap",
    website: "https://instasnap.vercel.app",
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
