import GitHubCalendar from "react-github-calendar";

const Github = () => {
    return (
        <div className="bg-black items-center flex flex-col justify-center ">
            <h2 className="text-[#15aac9] text-[20px] font-[500]">DAYS I CODE</h2>

            <div className="border-2 w-[80%] bg-[#15aac9] text-[white] hover:scale-105 transition-transform duration-300  rounded-[20px] border-[#15aac9] items-center flex justify-center">
                <GitHubCalendar
                
                    style={{ margin: "auto" }}
                    username="rahulkumar8559"

                />
            </div>
        </div>
    )
}

export default Github