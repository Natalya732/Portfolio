// Projects constants
export const PROJECTS_DATA = [
  {
    id: "1",
    title: "Dashout Cricket App",
    description:
      "Built Cricket Fantasy app used by 1,000+ users, owning the frontend side. Developed the frontend for a cricket fantasy app and Implemented Google sign-in and real-time player drafts with Socket.io for smooth team selection. Designed and developed the frontend for an admin panel, including full CRUD functionality to manage tournaments, contests, and players.",
    technologies: [
      "ReactJS",
      "MongoDB",
      "Socket.io",
      "NodeJS",
      "ExpressJS",
      "TailwindCSS",
    ],
    date: "2024",
    githubUrl: null,
    deployedLink: "https://dashoutcricket.com/",
    image: "/images/dashoutCricket.png",
  },
  {
    id: "2",
    title: "Google NotebookLM Clone",
    description:
      "Built a web app that lets users upload large PDFs and interact with them through a chat interface. Features include PDF upload + in-app viewer, efficient retrieval-augmented generation (RAG) using vectorized PDF content, token-efficient AI responses, and in-response citation buttons that navigate to specific PDF pages.",
    technologies: [
      "Reactjs",
      "Next.js",
      "Node.js / Express",
      "pdf.js",
      "LlamaIndex (LlamaParse)",
      "OpenAI API",
      "MongoDB",
    ],
    date: "2025",
    githubUrl: "https://github.com/Natalya732/Pdf_Viewer",
    deployedLink: "https://chipper-dango-bbd5c6.netlify.app/",
    image: "/images/notebookllm.png",
  },
  {
    id: "3",
    title: "Sleeping Owl Music App",
    description:
      "Built the frontend for a social music-listening platform using React, with real-time song changes and interactions powered by Socket.io. Developed a chat feature for text communication in music rooms, ensuring smooth interaction between users.",
    technologies: ["ReactJS", "MongoDB", "Socket.io", "NodeJS", "ExpressJS"],
    date: "2023",
    githubUrl: null,
    deployedLink: "http://sleeping-owl.netlify.app/",
    image: "/images/sleepingOwl.png",
  },
  {
    id: "4",
    title: "Car Rental Admin Panel",
    description:
      "Developed a Next.js application with fake authentication and a simulated database using a local DB file. Implemented server-side rendering (SSR) and designed an admin panel for managing car rentals. The dashboard featured key statistics, audit trail, a data table with server-side pagination, sorting, and filtering by status (Pending, Approved, Rejected). Built with clean, maintainable code using Next.js, TypeScript, and TailwindCSS.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    date: "2025",
    githubUrl: "https://github.com/Natalya732/car-rental-assignment",
    deployedLink: "https://car-rental-assignment-weld.vercel.app/dashboard",
    image: "/images/carRental.png",
  },
  {
    id: "5",
    title: "Snake Game",
    description:
      "A fun classic Snake Game built using HTML5, Vanilla JavaScript, and CSS, enhanced with sound effects for immersive gameplay. Players control the snake to eat food, grow longer, and avoid collisions. Fully responsive and playable in any modern browser.",
    technologies: ["HTML5", "CSS", "Vanilla JavaScript"],
    date: "2023",
    githubUrl: "https://github.com/Natalya732/Snake-game",
    deployedLink: "https://funny-conkies-8e82ca.netlify.app",
    image: "/images/snakeGame.png",
  },
  {
    id: "6",
    title: "BearBook - Social Media App",
    description:
      "Built a feature-rich social media application using TypeScript, ShadCN, TailwindCSS, Supabase, and Vite. Includes profile creation with validation and editing, infinite scrolling, follow/unfollow functionality, and a responsive, user-friendly UI/UX. Focused on writing modular, scalable code to ensure maintainability and performance.",
    technologies: ["TypeScript", "ShadCN", "TailwindCSS", "Supabase", "Vite"],
    date: "2025",
    githubUrl: "https://github.com/Natalya732/Bearbook",
    deployedLink: "https://bearbook.netlify.app/",
    image: "/images/bearBook.png",
  },
  {
    id: "7",
    title: "Services Page Design Idea",
    description:
      "Designed a Services page to align with a brand system. Built a fully responsive mobile and desktop layout with a clear 4-pillar structure, interactive tabbed selector, grid-based pillar details, and smooth scroll-triggered transitions. Ensured visual and typographic alignment with the new brand style, improving clarity, polish, and strategic content hierarchy.",
    technologies: ["React", "TailwindCSS", "Framer Motion", "ShadCN"],
    date: "2025",
    githubUrl: "https://github.com/Natalya732/typshift-assignment",
    deployedLink: "https://gentle-syrniki-9c8087.netlify.app/",
    image: "/images/services.png",
  },
  {
    id: 8,
    title: "Personal Portfolio Website",
    description:
      "Built a personal portfolio using Next.js, TypeScript, TailwindCSS, ShadCN, and Framer Motion. Featured sections for hero, skills, experience, projects, and contact, all designed with modular and maintainable code. Implemented Static Site Generation (SSG) for performance and SEO optimization, ensuring a fast, responsive, and visually engaging experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "Framer Motion",
    ],
    date: "2025",
    githubUrl: "https://github.com/Natalya732/portfolio",
    deployedLink:
      "https://portfolio-5rmx.vercel.app/",
    image: "/images/portfolio.png",
  },
] as const;

export const PROJECT_CATEGORIES = {
  featured: ["1", "2", "5", "6"],
  web: ["2", "4", "6", "7"],
  mobile: ["1", "3"],
  games: ["5"],
} as const;
