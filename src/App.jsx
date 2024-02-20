import React, { PureComponent } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './home/Home';
import Main from './main/Main';
import About from './about/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './contact/Contact';
import P404 from './P404/P404';




let myRouter = createBrowserRouter([

  {path:'/' , element: <Home/>, children:[
  {path: '/' , element: <Main/>},
  {index:true, element: <Main/>},
  {path:'home' , element: <Main/>},
  {path:'about' , element: <About/>},
  {path:'portfolio' , element: <Portfolio/>},
  {path:'contact' , element: <Contact/>},
  {path: '*' , element: <P404/>}

  ]} 
  

  ])


class App extends PureComponent {
  
    state = {  }
      
  

  render() {
    return <>
    <RouterProvider router={myRouter}/>
    </>
    
  }
}

export default App
