import React, { PureComponent } from 'react'
import img1 from '../images/poert1.png'
import img2 from '../images/port2.png'
import img3 from '../images/port3.png'

class Portfolio extends PureComponent {
   
    state = {}
    
    
          
    
    render() {
        return <>
        
        <div className=" container ">
        <div className="row">
        <div className="col-lg-12">
        <div className="portfolio-intro d-flex flex-column">
        <h3  className='text-center display-6 fw-bold mt-4'>PORTFOLIO COMPONENT</h3>
        <div className="shape d-flex justify-content-center align-items-center my-3">
        <div className='line border-bottom border-black border-4'></div>
        <i class="fa-solid fa-star mx-2"></i>
        <div className='line border-bottom border-black border-4'></div>  
        </div>
        </div>
        </div>    
        </div> 

        <div className="row g-4 py-5">
        <div className="col-lg-4">
        <div className="port-img">
        <img className='w-100 rounded-3' src= {img1} alt="project" />
        <div className="port-layer d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-plus display-1 fw-bold text-white"></i></div>
        </div>
        </div> 

        <div className="col-lg-4">
        <div className="port-img">
        <img className='w-100 rounded-3' src= {img2} alt="project" />
        <div className="port-layer d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-plus display-1 fw-bold text-white"></i></div>
        </div>
        </div>

        <div className="col-lg-4">
        <div className="port-img">
        <img className='w-100 rounded-3' src= {img3} alt="project" />
        <div className="port-layer d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-plus display-1 fw-bold text-white"></i></div>
        </div>
        </div>

        <div className="col-lg-4">
        <div className="port-img">
        <img className='w-100 rounded-3' src= {img1} alt="project" />
        <div className="port-layer d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-plus display-1 fw-bold text-white"></i></div>
        </div>
        </div>

        <div className="col-lg-4">
        <div className="port-img">
        <img className='w-100 rounded-3' src= {img2} alt="project" />
        <div className="port-layer d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-plus display-1 fw-bold text-white"></i></div>
        </div>
        </div>

        <div className="col-lg-4">
        <div className="port-img">
        <img className='w-100 rounded-3' src= {img3} alt="project" />
        <div className="port-layer d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-plus display-1 fw-bold text-white"></i></div>
        </div>
        </div>

        </div>

        </div>
        
        
        </>
    }
}

export default Portfolio