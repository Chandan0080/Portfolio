import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
      <main  className="flex min-h-screen flex-col bg-[#121212]">
          <ToastContainer />
          <NavBar />
          <div className="container mx-auto mt-24 px-12 py-4">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <EmailSection />
          </div>
          <Footer />
      </main>
  );
}
