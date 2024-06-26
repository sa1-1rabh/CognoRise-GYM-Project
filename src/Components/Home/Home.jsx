import React from 'react'
import "./Home.css"
import HomeCard from './HomeCard'
import { cardInfo } from './HomeCardList'
import Timings from './Timings'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-background"/>
      <div className="home-content">
        <div className="packages-container">
          {cardInfo.map( (card,index) => {
            return <HomeCard key={index} data={card}/>
          })}
        </div>
        <div className="timings-container">
          <Timings/>
        </div>
      </div>
    </div>
  )
}
