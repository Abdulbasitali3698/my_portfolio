"use client"
import Typewriter from 'typewriter-effect';

export default function Hero(){
    return(
      
            <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer', 'Graphic Designer','Virtual Assistant','Data Entry Operator'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[40px] h-[2px] bg-blue-700"></div>
      <p className="mb-8 leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae odio consequatur, placeat exercitationem voluptatibus, maxime unde velit ad eveniet itaque dolorum ratione accusantium, atque architecto. Temporibus cumque dolorem pariatur!
      </p>
      <div className="flex justify-center">
        <link  href="#Contact" />
        
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded mx-auto w-60 "
        alt="hero"
        src="/profile.png"
        height={500}
        width={500}
      />
      
    </div>
  </div>
</section>

    )
}