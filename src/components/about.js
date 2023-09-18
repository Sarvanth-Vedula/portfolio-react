import React from 'react';
import img1 from '../images/self-2.jpg';
import  Typewriter from "typewriter-effect";

const about = () => {
  return (
    <div id='aboutID' className=' bg-stone-200'>
        <div className=' text-center mt-2'>
            <h1 className=' font-mono text-5xl mt-4'>Sai Sarvanth Vedula</h1> 
            <h1 className=" font-mono text-3xl">Software Developer</h1>
        </div> <div>
        <h1 className=' ml-12 text-3xl mt-4'>About</h1> <hr className=' ml-12 mt-2 mr-12'></hr>
        <div>
            <p className=' mx-12 mb-10 mt-6'>
                I am a <strong>meticulous</strong>and enthusiastic individual who consistently believes in the power of self.  
                Whether it's tackling complex challenges or bringing creative ideas to life, I approach each task with enthusiasm and a strong belief in my abilities. I am a <strong>programmer</strong> with extensive coding knowledge. 
            </p>
        </div>
        <div className=' lg:flex justify-around'>
        <div>
            <ul className=' space-y-3'>
                <li><strong class="font-medium">Age</strong>:21</li>
                <li><strong class="font-medium">Degree</strong>: B.Tech</li>
                <li><strong class="font-medium">Email</strong>: sarvanthvedula@gmail.com</li>
                <li><strong class="font-medium">Phone</strong>: +1 571-789-7311</li>
                <li><strong class="font-medium">Location</strong>: Arlington, Virginia</li>
                <li><strong class="font-medium">LinkedIn</strong>: https://www.linkedin.com/in/sarvanth-vedula</li>
            </ul>
        </div>
        <div className=' flex'>
            <div> <img src={img1} height={10} width={150} className=' mr-10 rounded-3xl' alt='sarvanthImage'></img> </div>
            <div className=' mt-14 leading-10'>
            <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('<a href="https://github.com/Sarvanth-Vedula" target="_blank"><strong>GitHub</strong></a> <br>') 
            typewriter.typeString('<a href="https://www.linkedin.com/in/sarvanth-vedula" target="_blank"><strong>LinkedIn</strong></a>')
            .callFunction(() => {
            console.log('String typed out!');
            })
            .pauseFor(2500)
            .callFunction(() => {
            console.log('All strings were deleted');
        })
        .start();
  }}
/>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default about
