import React from 'react'
import Contact from './components/Contact'
import CoxsBazar from './components/CoxsBazar'
import Rangamati from './components/Rangamati'
import Sylhet from './components/Sylhet'
import Dhaka from './components/Dhaka'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'




class App extends React.Component{
    render() {
      return(
        <div>
            
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/CoxsBazar' element={<CoxsBazar/>} />
              <Route path='/Rangamati' element={<Rangamati/>} />
              <Route path='/Sylhet' element={<Sylhet/>} />
              <Route path='/Dhaka' element={<Dhaka/>} />
              <Route path='/Contact' element={<Contact/>} />
            
            </Routes>
        </div>
        
      );
    }
}

export default App;