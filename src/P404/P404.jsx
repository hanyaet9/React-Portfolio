import React, { PureComponent } from 'react'
import error from '../images/404-file-not-found-empty-state-single-isolated-icon-with-flat-style-free-vector.jpg'
class P404 extends PureComponent {
    

        state = {}
            
        
  

    render() {
        return <>
        
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <div className="notfound">
        <img src={error} alt="not found" />    
        </div>
        </div>   
        </div>    
        </div>
        
        </>
    }
}

export default 404