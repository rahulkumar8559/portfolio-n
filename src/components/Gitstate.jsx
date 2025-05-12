const Gitstate = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center  p-[20px] ">
        <a href="https://github.com/rahulkumar8559">
          <img className="rounded-[10px] hover:scale-105 transition-transform duration-300 border-2 border-[#15aac9]"
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=rahulkumar8559"
            alt="streak"
          />
        </a>
      </div>

      <div className="flex items-center justify-center gap-[20px]">
        <a href="https://github.com/rahulkumar8559">
          <img
           className="rounded-[10px] hover:scale-105 transition-transform duration-300 border-2 border-[#15aac9]"
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahulkumar8559"
            alt="stats"
          />
        </a>
        <a href="https://github.com/rahulkumar8559">
          <img 
          className="rounded-[10px] hover:scale-105 transition-transform duration-300 border-2 border-[#15aac9]"
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=rahulkumar8559&count_private=true&show_icons=true"
            alt="stats"
          />
        </a>
      </div>
    </div>
  )
}

export default Gitstate