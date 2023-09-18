import React from 'react'
import About from './about'
import Education from './education'
import Projects from './projects'
import Internships from './internships'
import Resume from './resume'
import { Link } from 'react-scroll'


const navbar = () => {
  return (
    <div className=' flex relative'>
        <div className=' flex h-screen justify-center sticky top-0 left-0 bg-zinc-200 font-mono font-semibold'>
            <ul className=' flex flex-col justify-evenly text-xl w-fit px-6 h-screen border items-center relative'>
                <li className=' cursor-pointer hover:text-cyan-950'><Link activeClass='active' to='aboutID' spy={true} smooth={true}>About</Link></li>
                <li className=' cursor-pointer hover:text-cyan-950'><Link activeClass='active' to='resume' spy={true} smooth={true}>Resume</Link></li>
                <li className=' cursor-pointer hover:text-cyan-950'><Link activeClass='active' to='edu' spy={true} smooth={true}>Education</Link></li>
                <li className=' cursor-pointer hover:text-cyan-950'><Link activeClass='active' to='project' spy={true} smooth={true}>Projects</Link></li>
                <li className=' cursor-pointer hover:text-cyan-950'><Link activeClass='active' to='intern' spy={true} smooth={true}>Internships</Link></li>
            </ul>
        </div>
        <div className=' overflow-hidden bg-stone-200'>
            <About/>
            <Resume />
            <Education/>
            <Projects/>
            <Internships/>
        </div>
    </div>
  )
}

export default navbar   