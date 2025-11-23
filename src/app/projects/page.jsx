import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectSection from '../components/ProjectSection'

function page() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
        <NavBar />
        <div className="container mx-auto mt-16 px-12 py-4">
            <ProjectSection />
        </div>
        <Footer />
    </main>

  )
}

export default page