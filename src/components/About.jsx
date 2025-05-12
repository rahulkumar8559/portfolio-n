import img from '../assets/web-dev.jpg';

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col justify-between gap-[40px] item-center md:flex-row items-center md:space-x-12">
          <img
            src={img}
            alt=""
            className="w-60 h-80 rounded-[50%] object-cover mb-8 md:mb-0"
          />
          <div className="flex-1 justify-between gap-[40px] text-[15px] ">
            <h4>
              Hi Everyone 👋 My name is{" "}
              <span className="font-[500] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-[17px]"  >Rahul Kumar </span> from{" "}
              <span className="text-[#5094f0]"> Faridabad, Haryana (India)</span>.
              I completed my intermediate in july 2021{" "}
              <span className="different">
                Kurushetra <span className="text-lg text-[#5094f0] font-[500]">Senior Secondary School </span> Faridbad (Haryana) and <span className="text-lg text-[#5094f0] font-[500]" > bachelor's degree (BCA)- </span> (2021-2024) from Maharaja Agrasen Himalayan Garhwal University -UTTARAKHAND
              </span>
              . In June 2022 I Joined{" "}
              <span className="text-[#5094f0]">DICS COMPUTER EDUCATION</span> a military type
              coding school. I got hand on experience in frontend
              technologies , HTML, CSS, JavaScript.{" "}
              <span className="text-[#5094f0]">1000+ hours of Coding</span>
            </h4>
            {/* <div className="space-y-4 mt-[20px]">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div> */}
            {/* <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
