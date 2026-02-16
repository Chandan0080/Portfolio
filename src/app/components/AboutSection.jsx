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
        </ul>
        <ul className="list-disc pl-2">
          <li>Angular</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
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
          <p className="text-[#ADB7BE]">Vidyavardhini's College of Engineering and Technology</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Higher Secondary Education</li>
          <p className="text-[#ADB7BE]">Thakur college of Science and Commerce</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Secondary Education</li>
          <p className="text-[#ADB7BE]">Oxford Public School</p>
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
          <li>Associate Engineer</li>
          <p className="text-[#ADB7BE]">Rexel India Pvt Ltd (August 2023 to April 2023)</p>
        </ul>
        <ul className="list-disc pl-2">
          <li>Intern</li>
          <p className="text-[#ADB7BE]">
            LTIMINDTREE (February 2023 to April 2023)
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
          I’m Chandankumar Gupta, a passionate software developer and tech enthusiast dedicated to continuous learning and professional growth.
          I maintain a positive, flexible, and detail-oriented mindset, consistently delivering high-quality work with accuracy and accountability.
          I am a quick learner with strong problem-solving abilities, and I thrive in environments that challenge me to adopt new technologies. My expertise spans Java, SQL, database concepts, backend and frontend technologies, and OOP principles, with hands-on experience in designing, integrating, and deploying applications.
          I love working on new ideas and bringing projects to life—from concept to implementation.
          Let’s connect to collaborate, discuss opportunities, or share innovative ideas.
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
