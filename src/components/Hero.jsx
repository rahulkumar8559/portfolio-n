import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdDownload, MdOutlineMailOutline, MdPhone } from "react-icons/md";
import HeroImage from '../assets/Rahul.png';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center mt-[80px]  py-16' id="hero">
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Rahul Kumar</span>
        , Frontend Developer
      </h1>
      <div className="flex items-center justify-center">
        <p className='mt-4 w-[80%]   text-[17px] text-gray-300'>
          <span className='font-[500] text-[25px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500' > Aspiring Frontend React Developer - </span> Team player with leadership qualities and a quick learner, passionate about building dynamic and user-friendly interfaces. Proficient in React, JavaScript, HTML, and CSS, with hands-on experience in modern frontend development practices. Enthusiastic about working in a product-based company and eager to explore and master new tools and technologies to deliver high-quality solutions.


        </p>
      </div>
      <div className='mt-8 flex flex-wrap items-center justify-center  space-x-4'>
        <a href="https://github.com/rahulkumar8559"
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className='bg-gradient-to-r from-green-400 to-blue-500  text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> <FaGithub /> </a>
        <a href="mailto:rk681253@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="mail"
          className='bg-gradient-to-r from-green-400 mt-[10px] to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <MdOutlineMailOutline />
        </a>
        <a href="tel:+91-7011118559"
          target="_blank"
          rel="noreferrer"
          aria-label="phone"
          className='bg-gradient-to-r from-green-400 mt-[10px] to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          <MdPhone />
        </a>
        <a href="https://www.linkedin.com/in/rahul-kumar-6b6275227/"
          aria-label="linkedin"
          target="_blank"
          rel="noreferrer"
          className='bg-gradient-to-r mt-[10px] from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          <FaLinkedin />
        </a>
        <a href="https://x.com/RahulKu43069608"
          aria-label="twitter"
          target="_blank"
          rel="noreferrer"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform mt-[10px] duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          <FaXTwitter />

        </a>
        <br />

        <a href="/RahulKumar.pdf"
          download

          target='_blank'
          className='bg-gradient-to-r flex mt-[10px] items-center from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        > <MdDownload />  Resume</a>


      </div>

    </div>
  )
}

export default Hero