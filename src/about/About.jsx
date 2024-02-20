import React, { PureComponent } from 'react'

class About extends PureComponent {
    state = {}
            
        
    

    render() {
        return <>
        <div className="aboutt vh-100 d-flex justify-content-center align-items-center">
        <div className=" container text-white ">
        <div className="inner-about row">
        <h2 className='text-center display-5 fw-bold'>ABOUT COMPONENT</h2>  
        <div className="shape d-flex justify-content-center align-items-center my-4">
        <div className='line'></div>
        <i class="fa-solid fa-star mx-2"></i>
        <div className='line'></div>  
        </div>
        <title className='row'>
        <div className="col-lg-6">
        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-lg-6">
        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>    
        </div>
        </title>
        <div className="about-component"></div>
        </div>

        </div>
        </div>
        
        </>
    }
}

export default About