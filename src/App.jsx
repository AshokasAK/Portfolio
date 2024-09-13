import './App.css'
import Home from './components/Home'
import SimpleFormPage from './components/projectPages/SimpleFormPage'
import SwiggyPage from './components/projectPages/SwiggyPage'
import TodoListPage from './components/projectPages/TodoListPage'
import WeatherPage from './components/projectPages/WeatherPage'
import WhatsAppPage from './components/projectPages/WhatsAppPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Summary from './components/Summary'
import Skill from './components/Skill'
import Header from './components/Header'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Project from './components/Project'


function App() {

  return (
    <>
    <BrowserRouter>
      <div className="container">
      <Header/>
        <hr 
        />
    <Routes>
      <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<Summary/>}/> 
        <Route path='/skill' element={<Skill/>}/> 
        <Route path='/achive' element={<Certificate/>}/> 
        <Route path='/project' element={<Project/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/whatsAppProject' element={<WhatsAppPage/>}/> 
        <Route path='/swiggyProject' element={<SwiggyPage/>}/> 
        <Route path='/weatherProject' element={<WeatherPage/>}/> 
        <Route path='/simpleformProject' element={<SimpleFormPage/>}/> 
        <Route path='/todolistProject' element={<TodoListPage/>}/> 
    </Routes>
        <div className="shape1">
    </div>
    <div className="shape2">
    </div>

      </div>
        
         
    </BrowserRouter>
    </>
  )
}

export default App
