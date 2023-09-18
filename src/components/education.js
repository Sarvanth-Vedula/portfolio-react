import React from 'react'

const education = () => {
  return (
    <div id='edu'>
        <div>
            <h1 className=' lg:ml-12 text-3xl mt-4'>Education</h1> <hr className=' ml-12 mt-2 mr-12'></hr>
            <div>
                <ol className="list-disc ml-6 mt-2">
                    <li className="lg:ml-12">
                        <strong className="font-medium">Masters Degree</strong> in <strong className="font-medium">Computer Science</strong><br/>The George Washington University, DC, USA
                        <br/><p className="text-sm">08/2023 - present </p> 
                    </li> <br/>
                    <li className="lg:ml-12">
                        <strong className="font-medium">Bachelor of Technology</strong> in <strong className="font-medium">Computer Science and Engineering</strong><br/>Gandhi Institute of Technology and Management, Visakhapatnam, India
                        <br/><p className="text-sm">06/2019 - 06/2023 </p> <br/>
                    </li>
                </ol>
            </div>
        </div>

    </div>
  )
}

export default education