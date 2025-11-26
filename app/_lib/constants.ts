import { m } from "framer-motion";

export const techCardsItems = [
  {
    name: "Java",
    description: "Programming Language",
    imageUrl: "/imgs/logos/java.svg",
    bgColor: "bg-[#ED8B00]/20",
  },
  {
    name: "Kotlin",
    description: "Android Development",
    imageUrl: "/imgs/logos/kotlin.svg",
    bgColor: "bg-[#7F52FF]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Spring Boot",
    description: "Java Framework",
    imageUrl: "/imgs/logos/spring-boot.svg",
    bgColor: "bg-[#6DB33F]/20",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "PostgreSQL",
    description: "Database system",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
  {
    name: "NodeJS",
    description: "Backend Runtime",
    imageUrl: "/imgs/logos/node-js.svg",
    bgColor: "bg-[#689F63]/30",
  },
];

export const portfolioProjects = [
  {
    id: "studycircle",
    heading: "StudyCircle",
    subheading: "web app focus on school management",
    description:
      "A comprehensive school management web application built with Next.js 15. Implemented secure authentication using NextAuth.js to validate user logins and manage JWT sessions. Engineered the application structure leveraging Next.js 15 App Router architecture, utilizing Server Actions for secure data mutation, and implementing Middleware with Route Groups for fine-grained authorization. Implemented TanStack React Query to manage server state, enabling stale-while-revalidate caching for up-to-date data and a highly responsive user interface.",
    imageUrl: "/imgs/projects/study-circle-mockup.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "NextAuth.js",
      "TanStack Query",
    ],
    liveDemoUrl: "#",
    sourceCodeUrl: "https://github.com/chuo-chhungsim",
  },
  {
    id: "rda-api",
    heading: "RDA API",
    subheading: "API for mobile app",
    description:
      "Developed a mobile app server for school checking attendance with location tracking. Implemented robust security using Spring Security and JWT for stateless authentication, complemented by BCrypt for secure password hashing. Deployed the API using Docker with multi-stage builds and Docker Compose for streamlined, containerized CI/CD processes.",
    imageUrl: "/imgs/projects/rda-api.png",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Docker",
      "Gradle",
    ],
    liveDemoUrl: "#",
    sourceCodeUrl: "https://github.com/chuo-chhungsim",
  },
  {
    id: "rda-mobile",
    heading: "Record Daily Attendance",
    subheading: "Android mobile app",
    description:
      "Developed a mobile attendance tracking application featuring location services and built with a scalable MVVM Clean Architecture pattern, utilizing Retrofit for efficient API communication. The app integrates with the RDA API backend for secure authentication and real-time attendance tracking with geolocation features.",
    imageUrl: "/imgs/projects/rda-mobile-app.png",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Compose Navigation",
      "Retrofit",
      "MVVM",
      "Material3",
    ],
    liveDemoUrl: "#",
    sourceCodeUrl: "https://github.com/chuo-chhungsim",
  },
];

export const tooltipItems = [
  {
    id: 1,
    name: "Bogdan Aleksic",
    designation: "Great job!",
    image: "/imgs/avatars/bogdan.svg",
  },
  {
    id: 2,
    name: "Djordje Djurovic",
    designation: "Incredibly responsible",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    name: "Anthony Sean",
    designation: "Highly recommended!",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    name: "Alex Finn",
    designation: "Enjoyable experience.",
    image: "/imgs/avatars/Alex.jpg",
  },
];

export const testimonialItems = [
  {
    id: 1,
    stars: 5,
    name: "Alex Finn",
    proffesion: "Lead Web Designer at knots.io",
    description:
      "“Working with Andrija was a very smooth experience from start to finish.  He not only brings strong technical skills to front-end development, but his attention to detail and commitment to delivering pixel-perfect  designs made a huge difference in our project. He is enthusiastic in  suggesting improvements. Always ready to answer questions or provide  updates. If you're looking for a reliable developer who brings  creativity and efficiency to the table, Andrija is the right person!”",
    image: "/imgs/avatars/Alex.jpg",
  },
  {
    id: 2,
    stars: 5,
    name: "Djordje Djurovic",
    proffesion: "CEO at DigitalityLab",
    description:
      "“Andrija is an outstanding frontend specialist and presents consistently high level of work. During our work together, he has demonstrated extraordinary skills in simplifying complex ideas into clean, functional, and visually appealing designs. His communication is to the point and time management is perfect, even for the most pressing deadlines. I would highly recommend him to any company looking to bring on a frontend developer with strong technical skills and an keen eye for design.”",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    stars: 5,
    name: "Anthony Sean",
    proffesion: "Chief Technology Officer at DealJet",
    description:
      "“On several occasions, I have had the privilege to work with Andrija, and he has never failed to impress. While he possesses a great level of knowledge in frontend development, what I find most remarkable about him is his obsession with getting every detail right in order to achieve perfection in the end-user experience. He always pays attention to the project requirements, raises up some pertinent issues, and most importantly delivers beyond the call of duty. Andrija is the kind of person who adds value to the team he's in!”",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    stars: 5,
    name: "Bogdan Aleksic",
    proffesion: "Investment Educator and Crypto Expert",
    description:
      "“I got on board Andrija from Upwork to help me develop a website for my course on blockchain, cryptocurrency, and investment techniques. Because of his effort, I was able to generate considerable sales from my course after launching it, and I have received good reviews about the design and functionality of the website. Andrija is someone I would highly recommend!”",
    image: "/imgs/avatars/bogdan.svg",
  },
];

export const mainNavigationLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "#work",
    label: "Work",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    url: "https://github.com/chuo-chhungsim",
    label: "Github",
  },
];
