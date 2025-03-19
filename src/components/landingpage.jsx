import React from 'react'
import Navbar from './Navbar'
import ImageSlider from './swipper'
import About from './about'
import Contact from './contact'
import Footer from './footer'

function LandingPage() {
  return (
    <>
     <Navbar/>
    <div id="Home" className='pt-16'> 
      <h1 className='text-5xl font-bold text-center mt-40'>Welcome to Wild Safari</h1>
    </div>
    <div id='gallery' className='mt-20'> 
    <ImageSlider/>
    <div className="flex justify-center space-x-6">
          <button className="bg-green-600 text-white font-bold py-3 px-8 text-lg rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300">
            Upload Your Safari
          </button>

          <button className="bg-blue-600 text-white font-bold py-3 px-8 text-lg rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
            Join Us
          </button>
        </div>
    </div>
   <div id='about'>
    <About/>
   </div>
   <div id='contact'>
    <Contact/>
   </div>
   <div id='footer'>
    <Footer/>
   </div>
    </>
  )
 
}

export default LandingPage
