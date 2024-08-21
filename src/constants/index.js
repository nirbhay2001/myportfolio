import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  redis,
  nextjs,
  nodejs,
  mongodb,
  git,
  docker,
  iiits_image,
  ecommerce,
  masteryofmusic,
  amazonclone
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
  
  
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "IIITS",
    icon: iiits_image,
    iconBg: "#383E56",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designersand other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "IIITS",
    icon: iiits_image,
    iconBg: "#E6DEDD",
    date: "August 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using NodeJs and ExpressJs and other related technologies.",
      "Implementing many backend feature like payment gateway, mailing feature, redis, GraphQL, token authentication,protected route, CI/CD pipeline using Github action etc.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "IIITS",
    icon: iiits_image,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js,Redux, tailwind css, bootstrap css, NodeJs,ExpressJs and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];




const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



const projects = [
  {
    name: "E-Commerce",
    description:
      "Web-based platform that allows users to search, clothes, and ordr clothes from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react & redux",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name:"nodeJs",
        color: "blue-text-gradient",
      },
      {
        name:"payment gateway using strip",
        color: "green-text-gradient",
      },
      {
        name:"Nodemailer",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    website_link: "https://fullstack-ecommerce-allfea.vercel.app",
    source_code_link: "https://github.com/nirbhay2001/mern-amazon",
    
  },
  {
    name: "Mastery Of Music",
    description:
      "Web application that enables users to search for music course and teacher upload courses and sell music instruments.many featuer are available in this project . Going to website link and see all feature",
    tags: [
      {
        name: "React & Redux",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
      {
        name: "CI/CD PipeLine",
        color: "pink-text-gradient",
      },
      
    ],
    
    image: masteryofmusic,
    website_link: "https://musiclabs.vercel.app/",
    source_code_link: "https://github.com/H-C-21/MastersOfMusic-SPA",
    
  },
  {
    name: "Amazon Clone",
    description:
      "that project look like amazon . In this project user buy some product and seller sell own peoduct.In this project token authentication are available.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "RestApi",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDD",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "any other technology use",
        color: "blue-text-gradient",
      },
    ],
    image: amazonclone,
    website_link:"https://amazon-clone-ecommerce-fullstack.vercel.app/",
    source_code_link: "https://github.com/nirbhay2001/amazonecommerceclone",
    
  },
];

export { services, technologies, experiences, testimonials, projects };
