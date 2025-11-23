import React from 'react'
import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

function page() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
        <NavBar />
        <div className="container mx-auto mt-16 px-12 py-4">
            <AboutSection />
        </div>
        <Footer />
    </main>

  )
}

export default page