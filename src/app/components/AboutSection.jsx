"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row gap-8 ">
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>Java Script</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>React Js</li>
          <li>Java</li>
          <li>C++</li>
          <li>Machine Learning</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Angular</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
          <li>Power Apps</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Bachelor&apos;s of Engineering</li>
          <p className="text-[#ADB7BE]">Terna Engineering College</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Higher Secodnary Education</li>
          <p className="text-[#ADB7BE]">Vani Vidyalaya</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Secodnary Education</li>
          <p className="text-[#ADB7BE]">Vani Vidyalaya</p>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Software Engineer</li>
          <p className="text-[#ADB7BE]">
            LTIMindtree (April 2024 to Working...)
          </p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Java Devlopment</li>
          <p className="text-[#ADB7BE]">LTIMindtree (March 2023 to May 2023)</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Machine Learning Intern</li>
          <p className="text-[#ADB7BE]">
            Knowledge Solutios India (June 2021 to August 2021)
          </p>
        </ul>
      </div>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m Deepak Gupta, a passionate Full Stack Developer currently
            working at LTIMindtree, where I build and maintain enterprise-grade
            web applications for global clients. My expertise lies in developing
            scalable, secure, and high-performing solutions using Java, Spring
            Boot, Angular, and Node.js. During my journey, I’ve led teams,
            collaborated across agile environments, and contributed to projects
            that blend functionality with great user experience. I enjoy
            crafting efficient RESTful APIs, integrating robust backend
            services, and implementing modern frontend designs that bring ideas
            to life. Beyond my professional work, I love exploring emerging
            technologies, optimizing code, and contributing to innovative
            projects such as E-Learning Platforms, Certification Management
            Systems, and Smart IoT Solutions. I’m driven by continuous learning,
            teamwork, and the desire to solve real-world problems through
            technology.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
