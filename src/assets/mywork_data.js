import dengue from "./project_images/dengue.jpeg"
import gec from "./project_images/gec.jpeg"
import ecommerce from "./project_images/ecommerceapp.jpeg"
import bookstore from "./project_images/bookstore.jpeg"
import jobapp from "./project_images/jobapp.jpeg"
import phishguard from "./project_images/phishguard.png"

const mywork_data = [
    {
        w_no: 1,
        w_title: "Dengue Outbreak Prediction",
        w_img: dengue, // Replace with a valid image URL
        w_desc: "Predicted dengue fever outbreaks in two cities by employing data analysis, feature creation, and cross-validated model selection, achieving optimal predictive power.",
        w_link: "https://github.com/skbiswas0509/Dengue-OutBreak-Prediction-For-499A"
    },
    {
        w_no: 2,
        w_title: "Grammatical Error Correction",
        w_img: gec, // Replace with a valid image URL
        w_desc: "Built a Grammar Correction tool leveraging T5 models and NLP techniques (N-gram analysis, POS tagging). Achieved significant accuracy in identifying and correcting grammatical errors.",
        w_link: "https://github.com/skbiswas0509/CSE499B-Grammatical-Error-Correction"
    },
    {
        w_no: 3,
        w_title: "Book Store",
        w_img: bookstore, // Replace with a valid image URL
        w_desc: "This project features a modern frontend built with React, utilizing Tailwind CSS for responsive design, and a robust backend powered by Express.js and MongoDB.",
        w_link: "https://github.com/skbiswas0509/Book-Store"
    },
    {
        w_no: 4,
        w_title: "Buzzer",
        w_img: ecommerce,
        w_desc: "The project features a modern frontend built with React, utilizing Redux Toolkit for state management and Tailwind CSS for responsive design. The backend is powered by Express.js and MongoDB, incorporating security best practices with bcryptjs, and JSON Web Tokens for authentication.",
        w_link: "https://github.com/skbiswas0509/meetup_connect"
    },
    {
        w_no: 5,
        w_title: "JobMarket",
        w_img: jobapp,
        w_desc: "A full-stack job portal web application with user authentication, built using JavaScript, React for the frontend client, Node.js for the backend server, and integrated with a database for managing job listings and user data.",
        w_link: "https://github.com/skbiswas0509/Job-Portal-New"
    },
    {
        w_no: 6,
        w_title: "PhishGuard",
        w_img: phishguard,
        w_desc: "A full-stack security awareness platform that enables organizations to simulate realistic phishing attacks, track user behavior in real-time, and identify security vulnerabilities through interactive dashboards. Built to help security teams train employees and measure improvement over time.",
        w_link: "https://github.com/skbiswas0509/Phishing-Email-Simulator"
    },
];

export default mywork_data; 