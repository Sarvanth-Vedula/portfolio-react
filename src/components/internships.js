import React from 'react'

const internships = () => {
  return (
    <div id='intern'>
        <h1 className=' ml-12 text-3xl mt-4 pt-2 '>Internships</h1> <hr className=' ml-12 mt-2 mr-12'></hr>
        <div className="flex flex-row pt-6">
            <div>
                <ol>
                    <li className="ml-12">
                       <strong className="font-medium">Data Science Intern</strong> at Yoshops.com <br/> 06/2022 - 08/2022 <br/> 
                        Verify - <a href="https://drive.google.com/file/d/1CNHvdiMIOBky2fHfNoSCBtRBOPW2iqHE/view?usp=sharing" target='_blank' rel='noreferrer'><strong class="font-medium hover:text-blue-800">Click here</strong>   </a>
                        <ol className="list-decimal ml-4">
                            <li>Created data visualization graphics, translating complex data sets into comprehensive visual representations.</li>
                            <li>Performed advanced data extraction and data manipulation. Explored Python to inspect large datasets</li>
                        </ol>
                    </li> <br/> </ol> 
            </div>
            <div>
                <ol>
                    <li className="ml-12">
                        <span className="font-medium">Web Development </span>and<span class="font-medium"> Designing Intern</span> at The Sparks Foundation <br/> 03/2022 - 04/2022 <br/> 
                        Verify - <a href="https://truecertificates.com/verified/2VTVGPXHGW" target='_blank' rel='noreferrer'><strong class="font-medium hover:text-blue-800">Click here</strong>   </a>
                        <ol className="list-decimal ml-4">
                            <li>Designed a website for donating money to a charity. Used JavaScript for validation.  </li>
                            <li>For payment gateway I have used "razorpay" test mode api. </li>
                        </ol>
                    </li>
                </ol>  </div> 
            </div>
        </div>
  )
}

export default internships