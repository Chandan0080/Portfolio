import React from 'react'
import NavBar from '../components/NavBar'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'

function page() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
        <NavBar />
        <div className="container mx-auto mt-4 px-12 py-4">
            <EmailSection />
        </div>
        <Footer />
    </main>

  )
}

export default page