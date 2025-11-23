"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "Shopping Website",
        description: "Integrated a responsive design using Tailwind CSS for consistent user experience across devices. Incorporated product catalog, shopping cart, and checkout functionalities. Technologies Used: React.js, Tailwind CSS, JavaScript, HTML, CSS",
        image: "/images/projects/shopping-website.jpeg",
        tag:["All","Web"],
        gitUrl: "https://github.com/deepak0103gupta/Shopping-Website"
    },
    {
        id: 2,
        title: "Password Manager",
        description: "Developed a secure password management application using React.js. Implemented features for generating, storing, and retrieving passwords. Technologies Used: React.js, JavaScript, HTML, CSS",
        image: "/images/projects/Password-Manager.png",
        tag:["All","Web"],
        gitUrl: "https://github.com/deepak0103gupta/Password-Manager"
    },
    {
        id: 3,
        title: "E-Learning Platform",
        description: "Developed a E-Learning Platform using Angular for front-end and Spring Boot for back-end. Implemented features for course management, user authentication, and progress tracking. Technologies Used: Angular, Spring Boot, Java, MySQL",
        image: "/images/projects/E-Learning.jpg",
        tag:["All","Web"],
        gitUrl: "https://github.com/deepak0103gupta"
    },
    {
        id: 4,
        title: "YouTube Layout",
        description: " Replicated the user interface of the YouTube platform. Demonstrated proficiency in front-end web development. Focused on pixel-perfect design and attention to detail.Technologies Used: HTML, CSS",
        image: "/images/projects/youtube-layout.jpeg",
        tag:["All","Web"],
        gitUrl: "https://github.com/deepak0103gupta/YouTube-Layout"
    },
    {
        id: 5,
        title: "Discord Login Page",
        description: "Created a dynamic and visually engaging login interface. Emulated the design aesthetics of the Discord platform. Developed a Discord Login page using HTML, CSS, and JavaScript. Technologies Used: HTML, CSS, JavaScript",
        image: "/images/projects/discord-login.jpeg",
        tag:["All","Web"],
        gitUrl: "https://github.com/deepak0103gupta/Discord-Login-Page"
    },
    {
        id: 6,
        title: "Heart Disease Prediction",
        description: "Utilized a Logistic Regression algorithm to determine the presence of heart disease in individuals.Applied data analysis and machine learning techniques to contribute to decision-making processes. Demonstrated strong analytical skills and the ability to derive actionable insights from data. ",
        image: "/images/projects/heart-disease.jpg",
        tag:["All","Machine Learning"],
        gitUrl: "https://github.com/deepak0103gupta/Heart_Disease_Prediction"
    },
    {
        id: 7,
        title: "K-Means Clustering Model",
        description: "Built a K-Means Clustering model to distinguish between public and private colleges. Achieved an accuracy of 78%, showcasing effective clustering and classification capabilities. Contributed to data-driven decision-making processes in the education sector.",
        image: "/images/projects/clustering.jpg",
        tag:["All","Machine Learning"],
        gitUrl: "https://github.com/deepak0103gupta/K-Means_Clustering_model_for_public_and_private_colleges"
    },
    {
        id: 8,
        title: "Tour Website",
        description: "Designed a dynamic and visually engaging tour interface reminiscent of real-world exploration. Developed an immersive Tour website, offering users seamless navigation and personalized experiences. Technologies employed:  CSS, JavaScript, React Js.",
        image: "/images/projects/tour-website.jpeg",
        tag:["All","Web"],
        gitUrl: "https://github.com/deepak0103gupta/Tour-Website"
    },
]


function ProjectSection() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

    const[tag,setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div id='projects' ref={ref}>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="text-white text-sm flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Machine Learning" isSelected={tag === "Machine Learning"} />
        </div>
        <div>
            {
                // projectsData.map((project) => (
                //     <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.image} gitUrl={project.gitUrl} />
                // ))
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 "> 
                    {
                    
                    filteredProjects.map((project,index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.image} gitUrl={project.gitUrl} />
                    </motion.li>

                    ))

                    }
                </ul>

                
            }
        </div>
    </div>
  )
}

export default ProjectSection