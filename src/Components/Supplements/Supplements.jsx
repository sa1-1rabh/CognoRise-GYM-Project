import React from 'react'
import { supplementList } from './SupplementsList'
import SupplementCard from './SupplementCard'

const Supplements = () => {
  return (<div style={{flex:"1"}}>
    <h2 style={{
      padding:"23px 0 0 30px"
      }}>FITNESS STACK</h2>
    <div className='supplements-container' style={
      { display:"grid", 
        gridTemplateColumns:"1fr 1fr 1fr 1fr",
        padding:"20px 50px 50px 50px",
        columnGap:"25px"
      }}>
      {supplementList.map((supp,index) => {
          return (<SupplementCard key={index} data={supp}/>)
      })}
    </div>
  </div>)
}

export default Supplements