import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from './Components/Home/Home.jsx';
import { Register, handleSubmit} from './Components/Register.jsx';
import Supplements from './Components/Supplements/Supplements.jsx';
import Equipment from './Components/Equipments/Equipments.jsx';

const router = createBrowserRouter([{
  path : "/",
  element : <App/>,
  children : [{
    path : "/",
    element : <Home/>
  },
  {
    path : "/register",
    element : <Register/>,
    action : handleSubmit,
  },
  {
    path : "/supplements",
    element : <Supplements/>,
  },
  {
    path : "/equipments",
    element : <Equipment/>,
  },
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
