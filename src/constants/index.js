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
    chamaksaathi,
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
        title: "Software Developer",
        company_name: "Microsoft XRMLabs Pvt Ltd",
        icon: xrmlabs,
        iconBg: "#383E56",
        date: "Dec 2021 - Feb 2023",
        points: [
            "Worked professionally on JavaScript, React (UI Developement) and Backend using C# in CRM.",
            "Works on a Microsoft platform i.e. Microsoft Dynamics CRM, provides the following services to various stakeholders and consumers stretched over the globe",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Customer Relationship Management (CRM), Enterprise Resource Planning (ERP) and Content Management Services (CMS).",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Atarashi Denka Bijon Pvt Ltd",
        icon: deloitte,
        iconBg: "#E6DEDD",
        date: "March 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Chamak Saathi",
        icon: chamaksaathi,
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Feb 2024",
        points: [
            "Developed a house service subscription or rental website single-handedly for a startup company owned by friends.",
            "Designed and implemented all frontend components, ensuring a seamless user experience.",
            "Integrated login authentication features, enhancing website security and user privacy. Implemented robust authentication protocols to protect user data.",
            "Integrated the PhonePe payment gateway using JWT, enabling users to make secure payments for services offered on the website.",
            "Collaborated closely with the backend team to ensure seamless integration and functionality of frontend components",
        ],
    },
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
        source_code_link: "https://github.com/shiwangtiwari/socio",
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