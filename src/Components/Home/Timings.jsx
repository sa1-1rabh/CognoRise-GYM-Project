import React from 'react'
import { PiCalendarDots } from "react-icons/pi";

const Timings = () => {
  return (
    <div className='timings-box'>
      <div className="heading">
        <PiCalendarDots/>
        Timings</div>
      <div className="content">
        <div className="days">
          Monday-Friday
        </div>
        <div className="time">
          6:00AM - 9:00PM
        </div>
      </div>
    </div>
  )
}

export default Timings