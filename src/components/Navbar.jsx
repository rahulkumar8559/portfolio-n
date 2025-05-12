import { useState } from "react";


const Navbar = () => {

  const [active,setActive]=useState(" ");
  console.log(active)
  return (
    <nav className='bg-black text-white px-8 py-[15px] md:px-16 lg:px-24 border-b fixed top-0 left-0 z-10 w-full  '>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline'>Rahul</div>
            <div className='space-x-6'>
                <a href="#hero" className={` ${active==="home"? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent border-blue-300 ' :""} hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent hover:border-blue-300 transition duration-300 `} onClick={()=>setActive("home")}>Home</a>
                <a href="#about" className={` ${active==="about"? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent border-blue-300 ' :""} hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent hover:border-blue-300 transition duration-300 `} onClick={()=>setActive("about")}>About Me</a>
                <a href="#tech" className={` ${active==="tech"? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent border-blue-300 ' :""} hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent hover:border-blue-300 transition duration-300 `} onClick={()=>setActive("tech")}>Tech Stacks</a>
                <a href="#project" className={` ${active==="project"? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent border-blue-300 ' :""} hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent hover:border-blue-300 transition duration-300 `} onClick={()=>setActive("project")}>Projects</a>
                <a href="#contact" className='hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border-b-2 border-transparent hover:border-blue-300 transition duration-300'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' onClick={ ()=>window.open('https://wa.me/917011118559', '_blank')} >Connect Me</button>
        </div>
    </nav>
  )
}

export default Navbar