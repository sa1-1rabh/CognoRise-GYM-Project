import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <div className='app-container'>
      <div className="left-container">
        <Sidebar/>
      </div>
      <div className="right-container">
        <Header/>
        <div className='outlet-container'>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
