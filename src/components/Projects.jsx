
import cultural from "../assets/culturalatlas.jpg";
import food from "../assets/food.jpg";



const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-[40px]">
          <div className="bg-gray-800 p-6 w-[70%] rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
            <img src={food} alt="food" className="rounded-lg mb-4 
              w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold mb-2">Food delivery</h3>
            <p className="text-gray-400 mb-4">Frontend</p>
            <p className="text-[14px]">A responsive and user-friendly food delivery web application built using React and Tailwind CSS. This project replicates the core functionality of modern food delivery platforms, allowing users to browse restaurants, view menus, and simulate placing orders.</p>
            <div className="flex items-center pt-[20px] justify-evenly">
              <a href="https://github.com/rahulkumar8559/food" className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">Code</a>
              <a href="https://rahulkumar8559.github.io/food/" className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">Go Live</a>
            </div>
          </div>
          <div className="bg-gray-800 p-6 w-[70%]  rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
            <img src={cultural} alt="food" className="rounded-lg mb-4 
              w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold mb-2">Cultural Atlas</h3>
            <p className="text-gray-400 mb-4">Frontend</p>
            <p className="text-[14px]"> The Cultural Atlas is an educational resource providing comprehensive information on the cultural background of All Country migrant populations. The aim is to improve social cohesion and promote inclusion in an increasingly culturally diverse society.</p>
            <div className="flex items-center pt-[20px] justify-evenly">
              <a href="https://github.com/rahulkumar8559/Cultural" className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">Code</a>
              <a href="https://github.com/rahulkumar8559" className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">Go Live</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
