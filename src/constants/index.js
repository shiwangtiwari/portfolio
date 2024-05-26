import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    nextjs,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mysql,
    git,
    jquery,
    githubico,
    meta,
    xrmlabs,
    deloitte,
    shopify,
    socio,
    nuox,
    tripguide,
    threejs,
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
        title: "Content Creator",
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Three JS",
        icon: threejs,
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
        name: "Python",
        icon: python,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "jQuery",
        icon: jquery,
    },
    {
        name: "Github",
        icon: githubico,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Microsoft xrmLabs",
        icon: xrmlabs,
        iconBg: "#383E56",
        date: "Dec 2021 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Deloitte",
        icon: deloitte,
        iconBg: "#E6DEDD",
        date: "March 2023 - Feb 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
   
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    
];

const projects = [
    {
        name: "Socio",
        description:
            "Created a dynamic, responsive website with JavaScript, React.js, Tailwind CSS, and Sanity.io. Utilized React.js for component-based architecture, Tailwind CSS for intuitive UI, and Sanity.io for content management, showcasing expertise in front-end development for a seamless user experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "sanity",
                color: "pink-text-gradient",
            },
        ],
        image: socio,
        source_code_link: "https://github.com/shiwangtiwari/socio-frontend",
        website_link: "https://socio-st.netlify.app/",
    },
    {
        name: "nuOx",
        description:
            "Developed dynamic e-commerce site using JavaScript, CSS, React.js, Next.js. Integrated Stripe for payments, Sanity.io for content management. Employed responsive design for cross-device compatibility. Demonstrated expertise in front-end, UI/UX, and API integration, ensuring user-friendly platform.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "next",
                color: "green-text-gradient",
            },
            {
                name: "stripe",
                color: "pink-text-gradient",
            },
        ],
        image: nuox,
        source_code_link: "https://github.com/shiwangtiwari/ecom-nuox",
        website_link: "https://nuox-olive.vercel.app/",
    },
];

export { services, technologies, experiences, projects };