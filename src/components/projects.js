import React from 'react'

const projects = () => {
  return (
    <div id='project' className=' bg-orange-50'> 
        <h1 className=' ml-12 text-3xl mt-4'>Projects</h1> <hr className=' ml-12 mt-2 mr-12'></hr>
        <div className=' flex flex-col md:flex-row pt-6'>
            <div className=' max-w-sm border-2 shadow-xl lg:ml-10 bg-stone-200'>
                <ol className=' m-4'>
                    <li className=' m-4'>
                        <span className="font-medium">Assiduous Study of the Hyper-parameters' Influence on CNN using COVID-19 CT Images</span> <br/> 08/2022 - 09/2022 <br/>
                        Verify - <a href="https://shorturl.at/wBWYZ" target='_blank' rel='noreferrer'><strong class="font-medium hover:text-blue-800">Click here</strong>   </a>
                        <ol className="list-decimal m-4 space-y-2">
                            <li>Conducted studies on deep learning and how CT images might be used for diagnosis. This is a group project in which I continuously contributed. </li>
                            <li>We trained a CNN model by changing different Hyper-parameters and obsereved its behaviour.   </li>
                            <li>I personally worked on Activation functions. We also published our project in a research paper at ICISC conference.</li>
                        </ol>
                    </li> <br/> 
                </ol>
            </div>

            <div className=' max-w-sm border-2 shadow-xl lg:ml-10 bg-stone-200'>
                <ol className=' pt-8'>
                    <li class="ml-8">
                        <span class="font-medium">Created a full stack blog website</span> <br/> 09/2022 - 10/2022 <br/> 
                        Verify - <a href="https://sarvanthvedula-blogsite.netlify.app/" target='_blank' rel='noreferrer'><strong class="font-medium hover:text-blue-800">Click here</strong>   </a>
                        <ol class="list-decimal m-4 space-y-4">
                            <li>Created a blog website using React, CSS, and Firebase(for authentication, storage, and database) where people can read blogs.</li>
                            <li>Only authorized users can create or edit the blogs. </li>
                        </ol>
                    </li>
                </ol> 
            </div>

            <div className=' max-w-sm border-2 shadow-xl lg:ml-10 bg-stone-200'>
                <ol className=' m-4'>
                    <li class=" m-4">
                        <span class="font-medium">A Study on Pragmatic Performance and Analysis of CNN and QNN Algorithms on Various Computing Machines using COVID-19 Images</span> <br/> 02/2023 - 04/2023 <br/> 
                        <ol class="list-decimal m-4 space-y-2">
                            <li>In this study, we presented the analysis of CT images using deep learning to identify COVID-19 on CPU, GPU, HPC, and quantum machines.</li>
                            <li>In this study, performance comparisons based on training duration were also made. </li>
                            <li>The effect of modifying the values of various hyper-parameters in the model on various computers has also been investigated.</li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default projects