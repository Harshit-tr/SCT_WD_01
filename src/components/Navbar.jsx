import { useState, useEffect } from "react";
import "../styles.css";
function Navbar() {
  const [scrolling, SetScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) SetScrolling(true);
      else SetScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  }
  return (
    <nav
      className={`fixed top-0 w-full p-4 z-50 transition-all duration-300 flex justify-between items-center px-6 ${
        scrolling
          ? "bg-gray-900 text-white shadow-lg"
          : "bg-transparent text-black"
      }`}
    >
      <h1 className="text-xl font-bold">Wild Safari</h1>
      <ul className="flex space-x-6">
        <li onClick={()=> scrollToSection("Home")} className="cursor-pointer hover:underline">Home</li>
        <li onClick={()=> scrollToSection("about")} className="cursor-pointer hover:underline">About</li>
        <li onClick={()=> scrollToSection("gallery")} className="cursor-pointer hover:underline">Gallery</li>
        <li onClick={()=> scrollToSection("contact")} className="cursor-pointer hover:underline">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
