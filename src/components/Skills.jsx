import React from 'react';
import { MdExitToApp } from "react-icons/md";

const Skills = () => {
  return (
    <div className='flex flex-col items-center pt-[40px] bg-black justify-center '>
      <h2 className=" text-white text-[40px] font-[500]">SKILLS</h2>
      <div className='pt-[20px]'>
        <h4 className="flex items-center justify-start gap-[10px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-[500] text-[25px] ">
          <span >
            <MdExitToApp className='w-[25px] text-white h-[30px]' />
          </span>
          FrontEnd Development{" "}
        </h4>
        <h4 className="flex items-center justify-start gap-[10px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-[500] text-[25px]">
          <span className="icons skills-card-img">
            <MdExitToApp className='w-[25px] text-white h-[30px]' />
          </span>
          Online Collaboration{" "}
        </h4>
        <h4 className="flex items-center justify-start gap-[10px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-[500] text-[25px]">
          <span className="icons skills-card-img">
            <MdExitToApp className='w-[25px] text-white h-[30px]' />
          </span>
          Responsive Layouts{" "}
        </h4>
        <h4 className="flex items-center justify-start gap-[10px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-[500] text-[25px]">
          <span className="icons skills-card-img">
            <MdExitToApp className='w-[25px] text-white h-[30px]' />
          </span>
          Communication Skills{" "}
        </h4>
        <h4 className="flex items-center justify-start gap-[10px] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-[500] text-[25px]">
          <span className="icons skills-card-img">
            <MdExitToApp className='w-[25px] text-white h-[30px]' />
          </span>
          Individual & Team Player{" "}
        </h4>
      </div>

    </div>
  )
}

export default Skills