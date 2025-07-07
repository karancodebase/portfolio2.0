export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mockupImage: string;
  techStack: Array<{
    name: string;
  }>;
  features: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
  problemStatement: {
    title: string;
    content: string;
    emoji: string;
  };
  architecture: {
    title: string;
    sections: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  keyFeatures: {
    title: string;
    features: Array<{
      icon: string;
      text: string;
    }>;
  };
  challenges: {
    title: string;
    items: Array<{
      challenge: string;
      solution: string;
    }>;
  };
  learningOutcomes: {
    title: string;
    outcomes: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  futurePlans: {
    title: string;
    plans: Array<{
      icon: string;
      text: string;
    }>;
  };
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "buddyfi",
    title: "BuddyFi",
    subtitle: "🚀 Where Web3 Devs Find Their Perfect Coding Soulmate",
    description:
      "A Web3-native matchmaking platform tailored for hackathon participants.",
    mockupImage: "/buddyfi.png",
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Solana" },
      { name: "Rust" },
      { name: "IPFS" },
      { name: "Phantom" },
      { name: "TailwindCSS" },
    ],
    features: [
      {
        icon: "Wallet",
        title: "Seamless Wallet Login",
        desc: "Connect your Phantom wallet & dive in",
      },
      {
        icon: "Users",
        title: "Skill-Based Matching",
        desc: "Find your ideal teammates based on dev stack & vibes",
      },
      {
        icon: "Database",
        title: "Decentralized Profiles",
        desc: "Stored on IPFS, secured by Solana",
      },
      {
        icon: "Sparkles",
        title: "Gamified Experience",
        desc: "Earn cNFTs and badges for your contributions",
      },
    ],
    problemStatement: {
      emoji: "🔥",
      title: "Why BuddyFi Exists",
      content:
        "Finding the right hackathon teammate is chaotic and centralized. BuddyFi flips the script by matching devs through wallet-authenticated, on-chain profiles, making team formation fast, fun, and trustless.",
    },
    architecture: {
      title: "🏗️ Under the Hood",
      sections: [
        {
          icon: "Globe",
          title: "Frontend Framework",
          description:
            "Next.js + TailwindCSS = blazing fast UI with dev-first DX.",
        },
        {
          icon: "Shield",
          title: "Smart Contracts",
          description:
            "Solana + Rust smart contracts build the decentralized social graph.",
        },
        {
          icon: "Database",
          title: "Storage Layer",
          description: "Profiles and metadata live forever on IPFS via Pinata.",
        },
        {
          icon: "Wallet",
          title: "Authentication",
          description:
            "Phantom wallet handles sign-ins and on-chain profile creation.",
        },
      ],
    },
    keyFeatures: {
      title: "💎 Killer Features",
      features: [
        { icon: "Zap", text: "Lightning-fast wallet login" },
        { icon: "Users", text: "Skill-based matching system" },
        { icon: "Heart", text: "Swipe to form your dream team" },
        { icon: "Database", text: "IPFS + On-chain profile sync" },
        { icon: "Sparkles", text: "NFT badges for active users" },
        { icon: "Shield", text: "Trustless matching and public social graph" },
      ],
    },
    challenges: {
      title: "🧠 Challenges Faced",
      items: [
        {
          challenge: "Storing profiles completely on-chain was costly",
          solution:
            "Hybrid approach — lightweight data on-chain + full metadata on IPFS",
        },
        {
          challenge: "Making wallet login intuitive for newcomers",
          solution:
            "UI prompts + Phantom SDK flow created a beginner-friendly experience",
        },
      ],
    },
    learningOutcomes: {
      title: "📚 What I Learned",
      outcomes: [
        {
          icon: "Rocket",
          title: "Solana Ecosystem",
          description:
            "Built and deployed Rust-based smart contracts for real users",
        },
        {
          icon: "Wallet",
          title: "Wallet UX",
          description:
            "Crafted seamless onboarding through wallet authentication",
        },
        {
          icon: "Database",
          title: "Decentralized Storage",
          description: "Mastered metadata flow between IPFS and blockchain",
        },
      ],
    },
    futurePlans: {
      title: "🔮 What’s Next?",
      plans: [
        { icon: "Heart", text: "AI-based smart matching" },
        { icon: "Sparkles", text: "cNFT badges for event participation" },
        { icon: "Users", text: "Reputation scores and public profiles" },
        {
          icon: "Smartphone",
          text: "Mobile support & Okto wallet integration",
        },
      ],
    },
    links: {
      github: "https://github.com/karancodebase/buddyfi",
      demo: "https://buddyfi.xyz",
    },
  },
  {
    id: "devira",
    title: "Devira",
    subtitle: "🔥 GitHub Streaks Meet Web3 Rewards",
    description: "Track your coding streaks and get rewarded with on-chain NFT badges — because consistency deserves more than just green squares.",
    mockupImage: "/devira.png",
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Arbitrum Stylus" },
      { name: "Rust" },
      { name: "GitHub API" },
      { name: "NFT.Storage" },
    ],
    features: [
      { icon: "Zap", title: "GitHub Streak Analyzer", desc: "Visualize your commit consistency" },
      { icon: "Sparkles", title: "Milestone NFT Drops", desc: "Earn personalized rewards for your dev grind" },
      { icon: "Shield", title: "On-Chain Proof", desc: "Badge minting on Arbitrum with Stylus" },
      { icon: "Wallet", title: "Wallet Claims", desc: "Claim NFTs with one click when you hit your streak goals" },
    ],
    problemStatement: {
      emoji: "💡",
      title: "What Devira Fixes",
      content: "Daily contributors to open-source projects rarely get recognized in a lasting way. Devira transforms GitHub streaks into permanent digital achievements using blockchain, giving every commit the value it deserves.",
    },
    architecture: {
      title: "🧩 Behind the Scenes",
      sections: [
        {
          icon: "Globe",
          title: "Frontend",
          description: "Next.js + Tailwind for a smooth streak dashboard and claim experience",
        },
        {
          icon: "Zap",
          title: "Backend",
          description: "Minimal logic to fetch GitHub data and validate claims",
        },
        {
          icon: "Shield",
          title: "Smart Contracts",
          description: "Arbitrum Stylus handles minting logic via Rust-based contracts",
        },
        {
          icon: "Database",
          title: "Storage",
          description: "NFT.Storage hosts badge metadata in a decentralized way",
        },
      ],
    },
    keyFeatures: {
      title: "🎯 Why Devs Love It",
      features: [
        { icon: "Zap", text: "Real-time GitHub streak tracking" },
        { icon: "Sparkles", text: "Auto airdrop NFTs for milestones" },
        { icon: "Wallet", text: "Wallet-based claiming flow" },
        { icon: "Database", text: "Decentralized badge metadata" },
        { icon: "Users", text: "Public dev dashboards (coming soon)" },
        { icon: "Trophy", text: "Gamified consistency builder" },
      ],
    },
    challenges: {
      title: "🛠️ What Got in the Way",
      items: [
        {
          challenge: "Parsing GitHub contribution data accurately",
          solution: "Built a custom heatmap parser with smart caching and edge case handling",
        },
        {
          challenge: "On-chain minting from frontend triggers",
          solution: "Used Rust smart contracts with optimized logic for conditional badge issuance",
        },
      ],
    },
    learningOutcomes: {
      title: "📘 Lessons from Devira",
      outcomes: [
        {
          icon: "Zap",
          title: "GitHub API Mastery",
          description: "Built custom streak analytics and milestone triggers",
        },
        {
          icon: "Shield",
          title: "Arbitrum Stylus",
          description: "Created lightweight contracts for NFT logic using Rust",
        },
        {
          icon: "Wallet",
          title: "Claim Flow UX",
          description: "Crafted a seamless, single-click airdrop experience",
        },
      ],
    },
    futurePlans: {
      title: "🚧 Coming Soon",
      plans: [
        { icon: "Users", text: "Public developer profiles & leaderboards" },
        { icon: "Eye", text: "Preview NFT badges before claiming" },
        { icon: "Lock", text: "Soulbound/POAP-style achievements" },
        { icon: "Trophy", text: "Hackathon & OSS collab integrations" },
      ],
    },
    links: {
      github: "https://github.com/karancodebase/devira",
      demo: "https://devira.xyz",
    },
  },
  {
    id: "aeris",
    title: "Aeris",
    subtitle: "🧠 Chat Smarter with AI Powered by Gemini",
    description: "An intelligent chatbot built using Gemini API that delivers personalized, human-like conversations — fast, contextual, and always learning.",
    mockupImage: "/aeris.png",
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "OpenAI API" },
      { name: "Gemini API" },
    ],
    features: [
      { icon: "MessageSquare", title: "Real-Time Chat", desc: "Smooth UI with streaming responses" },
      { icon: "Brain", title: "Context-Aware AI", desc: "Remembers session history for natural conversations" },
      { icon: "Settings", title: "Custom Prompts", desc: "Adjust tone and flow for different use cases" },
      { icon: "Loader", title: "Session Management", desc: "Handles ongoing chats with persistent context" },
    ],
    problemStatement: {
      emoji: "💬",
      title: "The Gap Aeris Bridges",
      content: "Most chatbots feel robotic and forgetful. Aeris solves this by using Gemini’s powerful LLMs to deliver smarter replies, carry context across turns, and behave more like a human assistant than a script reader.",
    },
    architecture: {
      title: "🔧 How It Works",
      sections: [
        {
          icon: "Globe",
          title: "Frontend",
          description: "Built with Next.js + TailwindCSS for a smooth and reactive chat experience",
        },
        {
          icon: "Server",
          title: "Backend API",
          description: "Proxy routes handle Gemini requests securely with rate limiting",
        },
        {
          icon: "Brain",
          title: "AI Integration",
          description: "Gemini API provides rich, contextual natural language responses",
        },
        {
          icon: "Clock",
          title: "Session Context",
          description: "Maintains stateful conversations for better continuity",
        },
      ],
    },
    keyFeatures: {
      title: "⚡ Features That Click",
      features: [
        { icon: "MessageSquare", text: "Streamed message responses" },
        { icon: "Brain", text: "Contextual chat with memory per session" },
        { icon: "Sliders", text: "Prompt customization support" },
        { icon: "Zap", text: "Typing indicators and real-time updates" },
        { icon: "Settings", text: "Session cleanup & rate handling" },
        { icon: "Repeat", text: "Restart or resume conversations easily" },
      ],
    },
    challenges: {
      title: "🧱 Hurdles We Jumped",
      items: [
        {
          challenge: "Latency spikes and Gemini rate limits",
          solution: "Used debounced API proxying and request queuing for smooth delivery",
        },
        {
          challenge: "Maintaining meaningful multi-turn conversations",
          solution: "Implemented prompt history stitching with session state management",
        },
      ],
    },
    learningOutcomes: {
      title: "📈 What We Took Away",
      outcomes: [
        {
          icon: "Brain",
          title: "AI API Integration",
          description: "Got deep hands-on with Gemini and OpenAI APIs for chat applications",
        },
        {
          icon: "Clock",
          title: "State Management",
          description: "Built dynamic session persistence in a stateless UI",
        },
        {
          icon: "MessageSquare",
          title: "Chat UX Design",
          description: "Learned to optimize chat flows for latency and clarity",
        },
      ],
    },
    futurePlans: {
      title: "🔭 Coming Soon to Aeris",
      plans: [
        { icon: "Mic", text: "Voice-based input and response" },
        { icon: "Globe", text: "Multi-language support for global reach" },
        { icon: "Users", text: "Team-based chats and shared sessions" },
        { icon: "Integration", text: "Slack & Discord bot integrations" },
      ],
    },
    links: {
      github: "https://github.com/karancodebase/aeris",
      demo: "https://aeris.jaydatt.xyz",
    },
  },
  {
    id: "instasnap",
    title: "InstaSnap",
    subtitle: "📸 Instagram UI Clone with a Developer Twist",
    description: "A responsive Instagram-like UI built from scratch — perfect for learning animations, state management, and modern frontend workflows.",
    mockupImage: "/instasnap.png",
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "Zustand" },
    ],
    features: [
      { icon: "Image", title: "Post Feed", desc: "Explore a dynamic UI with likes, saves, and comments" },
      { icon: "Camera", title: "Story Bar", desc: "Animated story previews with smooth transitions" },
      { icon: "Layout", title: "Responsive Layout", desc: "Optimized for both mobile and desktop" },
      { icon: "Zap", title: "Framer Motion", desc: "Fluid animations and interactive modals" },
    ],
    problemStatement: {
      emoji: "🎯",
      title: "Why InstaSnap Exists",
      content: "Social media UIs are complex and animation-heavy. InstaSnap simplifies this by reimagining Instagram’s experience using a minimal, performant React-based stack — great for frontend devs to learn and experiment.",
    },
    architecture: {
      title: "🧱 Under the Hood",
      sections: [
        {
          icon: "Monitor",
          title: "Frontend",
          description: "Next.js + TailwindCSS power the UI for layout and styling",
        },
        {
          icon: "Zap",
          title: "Animation",
          description: "Framer Motion handles smooth transitions, modals, and dynamic layouts",
        },
        {
          icon: "Settings",
          title: "State Management",
          description: "Zustand is used for managing likes, views, and story interactions",
        },
        {
          icon: "Route",
          title: "Routing",
          description: "App router structure for clean navigation and view isolation",
        },
      ],
    },
    keyFeatures: {
      title: "✨ Features for Fun & Flow",
      features: [
        { icon: "Image", text: "Post feed with like/save buttons" },
        { icon: "Camera", text: "Interactive story bar with animations" },
        { icon: "Smartphone", text: "Mobile-first layout and scaling" },
        { icon: "Zap", text: "Framer Motion transitions & modals" },
        { icon: "Sliders", text: "Lightweight local state with Zustand" },
        { icon: "Layout", text: "Component-based responsive UI" },
      ],
    },
    challenges: {
      title: "🧪 Lessons from the Lab",
      items: [
        {
          challenge: "Rebuilding a social app UI without bloating bundle size",
          solution: "Used utility-first CSS + Zustand for minimal and performant state",
        },
        {
          challenge: "Making animations feel native and smooth",
          solution: "Applied Framer Motion variants with lazy loading & timing tricks",
        },
      ],
    },
    learningOutcomes: {
      title: "📕 What I Learned",
      outcomes: [
        {
          icon: "Zap",
          title: "Animation Mastery",
          description: "Experimented deeply with Framer Motion for UX polish",
        },
        {
          icon: "Layout",
          title: "UI Design Systems",
          description: "Practiced atomic layout strategies for responsive web apps",
        },
        {
          icon: "Settings",
          title: "Frontend Architecture",
          description: "Improved understanding of state, transitions, and component logic",
        },
      ],
    },
    futurePlans: {
      title: "🛠️ What’s Cooking",
      plans: [
        { icon: "Upload", text: "Enable post/story creation flows" },
        { icon: "Lock", text: "Add mock auth for profile access" },
        { icon: "Cloud", text: "Explore decentralized media storage via Arweave" },
        { icon: "Video", text: "Add reels-style video previews" },
      ],
    },
    links: {
      github: "https://github.com/karancodebase/instasnap",
      demo: "https://instasnap.vercel.app",
    },
  }
    
  
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjects(): Project[] {
  return projects;
}
