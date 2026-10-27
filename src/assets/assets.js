import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaReact,
  FaServer,
  FaMobile,
  FaTools, 
  FaNodeJs,
  FaStripe,
  FaDownload,
  FaJava,
  FaJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaBrain
} from 'react-icons/fa';
import { 
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiRedis
} from 'react-icons/si';
import profileImg from './profile.jpeg';
import cv from './Bhoomika.pdf'

export const assets = {
  profileImg,
  cv
};

export const skills = [
  {
    title: "Languages",
    icon: FaCode,
    tags: [
      "Core Java",
      "Javascript"
    ]
  },
  {
    title: "Frontend Development",
    icon: FaReact,
    tags: [
      "React.js",
      "Redux",
      "Bootstrap",
      "HTML5",
      "CSS3"
    ]
  },
  {
    title: "Backend Development",
    icon: FaNodeJs,
    tags: [
      "Node.js",
      "Express.js"
    ]
  },
  {
    title: "Databases & Caching",
    icon: FaDatabase,
    tags: [
      "SQL",
      "Mongo DB",
      "Mongoose",
      "Redis"
    ]
  },
  {
    title: "AI & LLM",
    icon: FaBrain,
    tags: [
      "AI",
      "LLM",
      "RAG"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: FaDocker,
    tags: [
      "Docker"
    ]
  },
];

export const projects = [
  {
    title: "VIBE — Support Ticket Portal",
    points: [
      "Developed a **full-stack MERN application** for ticket creation, assignment, workflow transitions, and real-time tracking, reducing manual data input time by **30%**",
      "Built interactive dashboards with **dynamic Excel report generation** and advanced filters (date, status, assignee); integrated **third-party verification APIs** with email notification triggers for ticket lifecycle events, improving data accuracy by **25%**",
      "Optimized application performance through **MongoDB query tuning** and efficient API handling, reducing latency and ensuring scalability across frontend and backend"
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, SiExpress, SiMongodb]
  },
  {
    title: "ShopHappily — E-Commerce Platform",
    points: [
      "Built a **full-stack MERN e-commerce application** with **role-based Admin and Customer portals**: admins manage the product catalog (add, update, delete), while customers browse, search, and purchase products",
      "Developed an **AI shopping chatbot** using **RAG and LLMs** that answers customer queries on product availability and return policy using store data as context, reducing hallucinated responses",
      "Implemented **Redis caching** to speed up frequently accessed product data and containerized the application with **Docker Desktop** for consistent development and deployment environments"
    ],
    stack: ["MERN", "Redis", "Docker", "RAG", "LLM"],
    icons: [FaReact, FaNodeJs, SiRedis, FaDocker, FaBrain],
    liveLink: "https://shophappily.vercel.app/"
  },
];

export const workdetails = [
  {
    position: "Software Developer",
    company: "Verifacts Services Private Limited",
    duration: "May 2024-Present",
    description: [
      "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js",
      "Designed and implemented RESTful APIs using Node.js and Express.js for seamless frontend-backend communication",
      "Integrated MongoDB with Mongoose for efficient schema design, data validation, and CRUD operations",
      "Built dynamic and responsive UIs using React.js and React Hooks for state management",
      "Implemented user authentication and authorization using JWT and bcrypt for secure access",
      "Enhanced application features and optimized performance",
      "Managed version control and code collaboration using Git"
    ]
  }
];