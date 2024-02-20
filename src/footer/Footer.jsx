import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    
        state = {}
            
        
    

    render() {
        return <>
        <footer className='footer pt-3 '>
        <div className='inner-footer container text-white mx-auto p-5'>
        
        <div className='win row d-flex justify-content-center align-items-center'>
        <div className='col-lg-4'>
        <div className='location text-center'>
        <h4 className='text-white'>LOCATION</h4>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
        </div>
        </div>

        <div className='col-lg-4'>
        <div className='middle-footer '>
        <h4 className=' text-center mb-4'>AROUND THE WEB</h4>   
        <div className='icons d-flex justify-content-center align-items-lg-center '>
        <div className='icon'><i class='fa-brands fa-facebook'></i></div>
        <div className='icon'><i class='fa-brands fa-twitter'></i></div>
        <div className='icon'><i class='fa-brands fa-linkedin'></i></div>
        <div className='icon'><i class='fa-solid fa-globe'></i></div>
        </div>    
        </div>    
        </div>

        <div className="col-lg-4">
        <div className='about text-center'>
        <h4 className='text-center'>ABOUT FREELANCER</h4>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>    
        </div>    
        </div>
    
        </div>
        <div className="copyright text-white text-center py-4 mt-4"><p className='mb-0'>Copyright © Your Website 2021</p></div>
        </footer>
        
        
        </>
    }
}

export default Footer