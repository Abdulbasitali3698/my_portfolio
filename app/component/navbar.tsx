import Link from "next/link";
import { FaBeer, FaCloudDownloadAlt } from 'react-icons/fa';
export default function Navbar(){
    return(
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg> */}
     
      <img src="/logo.png" alt="Logo Image" width={100} height={100}  className="w-[50px]"/>
      <span className="ml-3 text-xl">Portfolio Web</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        
      <a href="/" className="mr-5 hover:text-blue-600">Home</a>
      <a href="#" className="mr-5 hover:text-blue-600">About</a>
      <a href="#" className="mr-5 hover:text-blue-600">Skills</a>
      <a href="#" className="mr-5 hover:text-blue-600">Projects</a>
      <a href="#" className="mr-5 hover:text-blue-600">ontact Us</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Download CV
      <FaCloudDownloadAlt  className="text-xl ml-2"/>

      {/* <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg> */}
    </button>
  </div>
</header>


        </div>
    )
}