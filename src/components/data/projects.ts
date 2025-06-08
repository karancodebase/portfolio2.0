export const projects = [
  // buddyfi
  {
    id: "buddyfi",
    image: "/buddyfi.png",
    title: "BuddyFi - Web3 Hackathon Team Matching Platform",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Solana",
      "Rust",
      "IPFS",
      "Pinata",
      "Phantom Wallet",
    ],
    description:
      "A decentralized matching platform for developers to find hackathon teammates using Solana and wallet-based authentication.",
    overview:
      "BuddyFi is a Web3-native matchmaking platform tailored for hackathon participants. It leverages wallet login and on-chain data to create and match user profiles based on skills, interests, and availability. Profiles are stored on IPFS for decentralization, and core interactions are handled via Solana smart contracts.",
    problemStatement:
      "Finding compatible teammates for hackathons is often a manual, inefficient process. BuddyFi solves this by enabling decentralized, profile-based matching with on-chain transparency.",
    architecture: {
      Frontend: "Next.js and TypeScript provide a responsive and modern UI.",
      Backend:
        "Minimal backend; most logic is handled via Solana smart contracts written in Rust.",
      OnChainStorage:
        "Solana programs store minimal references and interaction metadata.",
      DecentralizedStorage:
        "IPFS (via Pinata) is used for storing detailed profile data.",
      Authentication:
        "Phantom wallet is used for secure Web3 login and transaction signing.",
    },
    keyFeatures: [
      "Wallet-based login via Phantom",
      "On-chain profile creation and linking",
      "IPFS-stored developer profiles (skills, interests, availability)",
      "Dashboard displaying user profile and GitHub streak data",
      "Milestone-based NFT badge rewards",
      "Foundation for swipe-based teammate matching",
    ],
    challengesAndSolutions: [
      {
        challenge: "Storing profile data on-chain affordably.",
        solution:
          "Used IPFS to store metadata and kept only minimal data on-chain.",
      },
      {
        challenge: "Integrating wallet-based auth with smooth UX.",
        solution: "Implemented Phantom wallet connect with fallback handling.",
      },
    ],
    learningOutcomes: [
      "Gained experience working with Solana smart contracts in Rust.",
      "Understood decentralized storage patterns using IPFS and Pinata.",
      "Built end-to-end dApp with wallet login and on-chain interactions.",
    ],
    futureImprovements: [
      "Swipe-based matching for team formation",
      "Gamified cNFTs for engagement and rewards",
      "Mobile wallet support including Okto",
      "Open-source contributor profiles and public dashboards",
    ],
    screenshots: ["/buddyfi1.jpg", "/buddyfi2.jpg"],
    useCases: [
      "Developers finding teammates for hackathons",
      "Hackathon organizers facilitating team formation",
      "Users building public developer identities on-chain",
    ],
    github: "https://github.com/karancodebase/buddyfi",
    website: "https://buddyfi.xyz",
  },

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

  // wallet
  {
    id: "wallet",
    image: "/eth.jpg",
    title: "Web Based Wallet",
    tech: ["Ethereum", "Solana", "Next.js", "TypeScript", "TailwindCSS"],
    description:
      "A web-based wallet that allows users to generate and manage multiple wallets for Ethereum and Solana.",
    overview:
      "The Web Based Wallet is a secure, non-custodial crypto wallet supporting Ethereum and Solana. Users can generate multiple wallets, manage their private keys, and perform transactions without relying on third-party custody services.",
    problemStatement:
      "Users often struggle with managing multiple wallets securely across different blockchains. This wallet provides a seamless solution for multi-chain wallet management.",
    architecture: {
      Frontend: "Built with Next.js and TypeScript for a fast and scalable UI.",
      Backend: "Node.js and Express.js for secure API handling.",
      Database: "NoSQL database for lightweight user wallet storage.",
      BlockchainIntegration:
        "Ethereum and Solana SDKs for transaction handling.",
    },
    keyFeatures: [
      "Multi-wallet generation for Ethereum and Solana",
      "Secure private key management",
      "Seamless integration with dApps",
      "User-friendly interface for easy wallet creation and transactions",
    ],
    challengesAndSolutions: [
      {
        challenge: "Ensuring secure private key storage.",
        solution: "Used encrypted local storage and mnemonic recovery.",
      },
      {
        challenge: "Integrating multiple blockchain SDKs.",
        solution:
          "Implemented abstraction layers for handling blockchain interactions.",
      },
    ],
    learningOutcomes: [
      "Deepened understanding of blockchain integration with web applications.",
      "Improved knowledge of cryptographic key management.",
    ],
    futureImprovements: [
      "Adding multi-chain support beyond Ethereum and Solana.",
      "Implementing social logins for easier onboarding.",
    ],
    screenshots: ["/wallet1.jpg", "/wallet2.jpg"],
    useCases: [
      "Developers testing blockchain integrations",
      "Traders managing multiple wallets",
      "Users looking for a secure, lightweight alternative to traditional wallets",
    ],
    github: "https://github.com/karancodebase/web_based_wallet",
    website: "https://github.com/karancodebase/web_based_wallet",
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

  //fichain
  {
    id: "fichain",
    image: "/fichain.jpg",
    title: "Fichain (decentralized fiverr)",
    tech: ["React.js", "TailwindCSS", "MongoDB", "JavaScript"],
    description:
      "Ecommerce application like fiverr has decentralized payment method",
    overview:
      "FiChain is a decentralized finance (DeFi) platform that allows users to lend and borrow cryptocurrencies securely using smart contracts. It ensures transparency and trust through blockchain-based lending mechanisms.",
    problemStatement:
      "Traditional financial systems often have high interest rates, middlemen, and delays in processing loans. FiChain removes intermediaries, providing a direct, transparent, and secure lending and borrowing experience.",
    architecture: {
      Frontend: "React.js with an intuitive UI for easy DeFi interactions.",
      Backend: "Node.js and MongoDB for gigs data management.",
      "Smart Contracts": "Solidity-based contracts deployed on Ethereum.",
      "Wallet Integration": "Web3.js integration for seamless transactions.",
    },
    keyFeatures: [
      "Decentralized lending and borrowing with smart contracts",
      "Secure and transparent transaction records on the blockchain",
      "Collateralized loans to prevent default risks",
      "Integrated wallet for direct Ethereum-based transactions",
    ],
    challengesAndSolutions: [
      {
        challenge: "Ensuring security in smart contracts.",
        solution: "Used OpenZeppelin security libraries and rigorous testing.",
      },
      {
        challenge: "High gas fees affecting usability.",
        solution: "Implemented Layer 2 scaling solutions to reduce costs.",
      },
    ],
    learningOutcomes: [
      "Strengthened understanding of smart contract security.",
      "Gained experience in integrating blockchain transactions in web applications.",
    ],
    futureImprovements: [
      "Expanding support for multiple blockchain networks beyond Ethereum",
      "Introducing an automated risk assessment for better lending security",
    ],
    screenshots: ["/course1.jpg", "/course2.jpg"],
    useCases: [
      "Users seeking decentralized loan solutions",
      "Investors looking for yield farming opportunities",
      "Developers exploring DeFi integrations",
    ],
    github: "https://github.com/karancodebase/fichain_fullstack",
    website: "https://github.com/karancodebase/fichain_fullstack",
  },

  // musicova
  {
    id: "musicova",
    image: "/musicova.jpg",
    title: "Musicova",
    tech: ["HTML/CSS", "JavaScript"],
    description:
      "Music application that allows user to enjoy music and can download to local storage",
    overview:
      "Musicova is a modern music streaming application that allows users to listen to their favorite tracks, create playlists, and discover new music using the Spotify API.",
    problemStatement:
      "Many music streaming services lack personalization and real-time playlist updates. Musicova offers a seamless experience with AI-powered recommendations.",
    architecture: {
      Frontend: "React.js with a smooth and responsive UI.",
      Backend:
        "Node.js for handling user authentication and playlist management.",
      "API Integration": "Spotify API for fetching music data",
    },
    keyFeatures: [
      "Search and stream music from Spotify’s vast library",
      "Create and save custom playlists",
      "AI-powered recommendations based on user history",
      "Dark and light mode for a personalized experience",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling rate limits of Spotify API.",
        solution: "Implemented request caching to reduce API calls.",
      },
      {
        challenge: "Providing real-time playlist updates.",
        solution: "Used WebSockets for instant synchronization.",
      },
    ],
    learningOutcomes: [
      "Gained expertise in API integrations for streaming services.",
      "Improved React.js performance optimizations for media-heavy applications.",
    ],
    futureImprovements: [
      "Introducing offline playback for downloaded songs",
      "AI-based music suggestions based on listening habits",
    ],
    screenshots: ["/course1.jpg", "/course2.jpg"],
    useCases: [
      "Users seeking an alternative to mainstream music apps",
      "Music enthusiasts creating and managing playlists",
      "Developers exploring music streaming integrations",
    ],
    github: "https://github.com/karancodebase/musicova",
    website: "https://musicova.netlify.app/",
  },

  // aeris
  {
    id: "aibot",
    image: "/aibot.jpg",
    title: "Aeris – AI-Powered Chatbot",
    tech: [
      "TypeScript",
      "Next.js",
      "Gemini API",
      "Tailwind CSS",
      "Redis",
      "PostgreSQL",
    ],
    description:
      "An intelligent chatbot designed to provide real-time, context-aware responses using Google's Gemini API, built for seamless and efficient communication.",
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
