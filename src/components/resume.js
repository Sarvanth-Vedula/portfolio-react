import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const resume = () => {
  return (
    <div id='resume' className=' bg-orange-50'>
        <div>
            <h1 className=" ml-12 text-3xl mt-4 sm:ml-8">Resume</h1> <hr className=' ml-12 mt-2 mr-12'></hr> <br/>
            <a href='https://drive.google.com/file/d/1hJdZWa9r7luIcdLPv2HIoU-FgZQlGFXW/view?usp=sharing' className=' ml-24' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFile} color="#271f51" size='2xl'/>  <span className=' pl-4'>Download . . .</span>    </a>
            
        </div>
        <div className=' lg:visible'>
            <h1 className=" ml-12 text-3xl mt-6">Technical Skills</h1> <hr className=' ml-12 mt-2 mr-12'></hr> <br/>
            <div className=" lg:flex text-lg lg:ml-14">
                <div>
                    <ol class="ml-12 space-y-3 text-white">
                        <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">C</li> <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">Java</li><li class="bg-zinc-600 rounded hover:rounded-xl p-1">Python</li>
                     </ol> 
                </div>
                <div>
                    <ol class="ml-12 space-y-3 text-white">
                        <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">HTML</li> <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">CSS</li><li class="bg-zinc-600 rounded hover:rounded-xl p-1">JavaScript</li>
                    </ol>
                </div>

                <div>
                    <ol class="ml-12 space-y-3 text-white">
                         <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">TailwindCSS</li><li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">ReactJS</li><li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">SQL</li>
                    </ol> 
                </div>
            </div> <br/>
        </div>
    </div>
  )
}

export default resume