import React, { PureComponent } from 'react'
import profile from '../images/avataaars.svg'
class Main extends PureComponent {
    
        state = {}
            
        

    render() {
        return <>
        
        <div className="main vh-100 d-flex align-items-center">
        <div className="container">
        <div className="row">
        <div className="col-lg-12 text-white d-flex flex-column">
        <div className="inner-main d-flex justify-content-center">  
        <img className='w-25 text-center' src= {profile} alt="human" />
        </div>    
        <h2 className='text-center fw-bold mt-3'>START FRAMEWORK</h2>
        <div className="shape d-flex justify-content-center align-items-center my-4">
        <div className='line'></div>
        <i class="fa-solid fa-star mx-2"></i>
        <div className='line'></div>  
        </div>
        <div className="categorys">
        <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>   
        </div> 
        </div>
        </div>    
        </div>   
        </div>
        
        
        </>
    }
}

export default Main