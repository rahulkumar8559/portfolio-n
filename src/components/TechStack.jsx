import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const TechStack = () => {
  return (
    <div className='flex items-center p-[30px] bg-black justify-center' id="tech" >
        <div className='flex flex-col w-full items-center gap-[40px] text-[] mx-[50px] ' >
            <h2 className='font-[500] text-[50px]  text-white '>TECH STACKS</h2>
            <div className='flex flex-wrap w-full items-center gap-[30px] justify-evenly  '>
                <div className='flex flex-col w-[120px] items-center rounded-[10px] hover:scale-105 border-2 py-[10px] px-[10px] justify-center'>
                    <FaHtml5 className='  h-[30px] text-red-300'/>
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>HTML</h5>
                </div>
                <div className='flex flex-col w-[120px] items-center hover:scale-105 justify-center border-2 py-[10px] px-[10px] rounded-[10px] '>
                    <FaCss3Alt className='text-[#B56ACB] h-[30px]'/>
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>CSS</h5>
                </div>
                <div className='flex flex-col w-[120px] items-center justify-center hover:scale-105 border-2 py-[10px] px-[10px] rounded-[10px] '>
                    <IoLogoJavascript className='text-[#FFDE59] h-[30px]'/>
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>Javascript</h5>
                </div>
                <div className='flex flex-col w-[120px] items-center justify-center border-2 hover:scale-105 py-[10px] px-[10px] rounded-[10px] '>
                    <FaReact className='text-[#5B77FF] h-[30px]'/>
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>React</h5>
                </div>
                <div className='flex flex-col w-[120px] items-center justify-center border-2 hover:scale-105 py-[10px] px-[10px] rounded-[10px] '>
                    <SiRedux className='text-[#641478] h-[30px]'/>
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>Redux</h5>
                </div>
                <div className='flex flex-col w-[120px] items-center justify-center border-2 py-[10px] hover:scale-105 px-[10px] rounded-[10px] '>
                    <FaGithub className='bg-white rounded font-[500] h-[30px] rounded w-[20px]'/>
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>Github</h5>
                </div>
                <div className='flex flex-col items-center w-[120px] justify-center border-2 py-[10px] px-[10px] hover:scale-105 rounded-[10px] '>
                    < FaBootstrap className='text-[#9119C9] h-[30px] font-[500]'/>
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>Bootstrap</h5>
                </div>
                <div className='flex flex-col hover:scale-105 items-center justify-center w-[120px] border-2 py-[10px] px-[10px] rounded-[10px] '>
                    <RiTailwindCssFill className='text-[#81E8DE] h-[30px]' />
                    <h5 className='font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]'>Tailwind</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechStack