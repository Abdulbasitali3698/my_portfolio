import Image from 'next/image'
import Hero from './component/hero'
import Contact from './component/contact'
import About from './component/about'
import Project from './component/project'

export default function Home() {
  return (
    <div>
     <Hero/>
     <Project/>
     <Contact/>  
      <About/>
      
    </div>
  )
}
