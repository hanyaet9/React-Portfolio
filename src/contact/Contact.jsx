import React, { PureComponent } from 'react'

class Contact extends PureComponent {

       state = {}
            
        
    

    render() {
        return <>
        
        <div className="contact vh-100  container">
        <h3 className='text-center display-5 fw-bold mt-5 pt-5'>CONTACT SECTION</h3>  
        <div className="shape d-flex justify-content-center align-items-center my-3">
        <div className='line border-bottom border-black border-4'></div>
        <i class="fa-solid fa-star mx-2"></i>
        <div className='line border-bottom border-black border-4'></div>  
        </div>

        <div className="row">
        <div className="col-lg-6 mx-auto">
        <div className="form">
        <input className='form-control border-0 border-bottom my-5' type="text" placeholder='userName' />
        <input className='form-control border-0 border-bottom my-5' type="text" placeholder='userAge' />
        <input className='form-control border-0 border-bottom my-5' type="email" placeholder='userEmail' />
        <input className='form-control border-0 border-bottom my-5' type="password" placeholder='userPassword' />
        <button className='btn btn-success'>Send Message</button>

        </div>   
        </div>    
        </div>    
        </div>
        
        
        
        </>
    }
}

export default Contact