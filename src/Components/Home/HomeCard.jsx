import React from 'react'

const HomeCard = ({data}) => {
  return (
    <div className='home-card-container' style={{backgroundImage:`${data.background}`,color:`${data.textColor}`}}>
      <div className="card-header">
        <div className="package-name">
          {data.packageName}          
        </div>
        {data.isBestValue?<div className="optional-tag" style={{backgroundColor:`${data.priceColor}`}}>
          <span className="best-value" style={{background:`${data.background}`,
                                                  webkitBackgroundClip: "text",
                                                  webkitTextFillColor: "transparent"}}>Best Value</span>
        </div>:null}
      </div>
        <div className="middle-container">

          <div className="common-line">Starting at</div>

          <div className="price-container" style={{color:`${data.priceColor}`}}>
          ₹{data.price}
            <span className='common-line' style={{color:`${data.textColor}`}}>/mo*</span>
          </div>

          <div className="common-line">Plus tax and fee</div>

          <div className="package-description">
            {data.description}
          </div>
        </div>

        <div className="bottom-container">
          <div className="learn-more">Learn More</div>
          <button className='join-button' style={{backgroundColor:`${data.priceColor}`}}>Join Now</button>
        </div>

    </div>
  )
}

export default HomeCard