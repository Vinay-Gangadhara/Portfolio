import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";
import notion from "../assets/projects/notion.png";
import byte from "../assets/projects/mern1.png";
import cafe from "../assets/projects/cafe.jpg";

export const ProjectList = [
    {
        id: 1,
        name: "ResQReach",
        description:
            "ResQReach is a Progressive Web Application aimed at enhancing disaster response and preparedness through active community engagement. This application empowers users to report emergencies, access preparedness resources and facilitate sharing of leftover food from restaurants, thus playing a crucial role in crisis management.",
        img: byte,
        //max 6 tech stack
        tech: ["React.js", "Tailwind CSS", "Mongo DB", "Node.js"],
        source: "https://github.com/Vinay-Gangadhara/ResQReach",
        demo: null,
    },
    {
        id: 2,
        name: "E-Commerce",
        description:
            "Our Flipkart Clone, built with MERN stack, revolutionizes online shopping. It provides secure user authentication, extensive product catalog, efficient cart management, and Stripe-powered payments. Users easily access order history, while admins have a dedicated dashboard. Responsive design, Bcrypt-secured passwords, and Cloudinary image storage ensure a seamless and secure shopping experience.",
        img: ecommerce,
        //max 6 tech stack
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Stripe",
        ],
        source: null,
        demo: "https://better-overcoat-fly.cyclic.cloud/",
    },
    {
        id: 3,
        name: "DineStream-Management",
        description:
            "The Cafe Management System is a Java-based application designed to streamline and automate the operations of a cafe. The system consists of three main modules: item management, cashier operations, and auditing. Users can manage the cafe's menu, process customer orders, and maintain a detailed audit log of transactions.",
        img: cafe,
        //max 6 tech stack
        tech: ["Java", "JavaFX", "OOPS"],
        source: "https://github.com/Vinay-Gangadhara/DineStream-Management-Solutions",
        demo: null,
    },
    {
        id: 4,
        name: "Discord UI",
        description:
            "Discord UI Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord UI. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness and furthermore, every link seamlessly connects to the official Discord site.",
        img: discord,
        //max 6 tech stack
        tech: ["React.js", "Tailwind CSS", "Material UI"],
        source: null,
        demo: "https://discord-aashish.vercel.app/",
    }
   
];
