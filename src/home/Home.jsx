import React, { PureComponent } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

class Home extends PureComponent {
    
        state = {}
            
        
   

    render() {
        return <>
    <Navbar/>
    
    <Outlet/>
        
    <Footer/>    
        </>
    }
}

export default Home