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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    shopify,
    threejs,
    OpenAI,
    MetaGram,
    GoFood,
    tesla
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
      title: "React Native Developer",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Trainee",
      company_name: "SAP, India",
      icon: starbucks,
      iconBg: "#383E56",
      date: "February 2024 - March 2024",
      points: [
        "Gained experience in AI, ML, IoT, and SAP technologies.",
        "Collaborated with senior developers on tech solutions.",
        "Participated in training sessions and workshops.",
        "Team Collaboration on Capstone project.",
      ]
    },
    {
      title: "React Native Developer",
      company_name: "UpSkillLink",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React Native and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Cling MultiSolution",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Learned MERN Stack under the trainers.",
        "Integrating API's and testing API's using Postman agent.",
        "Worked on basic projects for company.",
        "Gained the knowledge on Redux, Node.Js.",
      ],
    },
    {
      title: "Trainee",
      company_name: "ByteXL",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        " Learned DSA, Advanced DSA, reasoning, Web Development, DBMS",
        "Worked on basic web projects for practice.",
        "Hands on experience on DSA and Advance DSA.",
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
      name: "GoFood",
      description:
        "Web-based platform that allows users to search, order, and manage their food items. A food delivery web page that is made up of MERN uses Epress.js for backend, React.js for frontend and stores data in mongoDB.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: GoFood,
      source_code_link: "https://github.com/Sahil-2703/GoFood.git",
    },
    {
      name: "MetaGram",
      description:
        "A social media web application that enables users to join across the world and connect with more and more people and share there there memories with each others.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: MetaGram,
      source_code_link: "https://github.com/Sahil-2703/MetaGram.git",
    },
    {
      name: "OpenAi",
      description:
        "A user friendly AI that allows users to create an AI image and share that image with community. This AI tool will generate an image according to your prompt that you had given to it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: OpenAI,
      source_code_link: "https://github.com/Sahil-2703/OpenAi.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };