import React from 'react'
import "../CSS/EquipmentCard.css"
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const EquipmentCard = ({data}) => {
  return (
    <div className="card-outer-container">
      <div className='card-container'>
        <div className="card-image">
          <img src={data.img} alt="Product Image" className="card-pic" />
        </div>
    </div>

      <div className="card-info">
        <div className="info-upper">
          <span className="info-upper-title">
            {data.title}
          </span>
          <span className="info-upper-description">
            {data.description}
          </span>
        </div>

        <div className="info-lower">
          <div className="info-lower-pricing">
            <span className='original-price'>
              ₹{data.price.regularPrice}
            </span>
            <span className="discount-price">
              ₹{data.price.discountPrice}
            </span>
          </div>

          <div className="info-lower-rating">
            <span className="rating-stars">
              <FaStar color='red'/>
              <FaStar color='red'/>
              <FaStar color='red'/>
              <FaStar color='red'/>
              <FaRegStarHalfStroke color='red'/>
            </span>
            <div className="percentage-off-container">
              {data.price.percentage}% OFF
            </div>
          </div>
        </div>
      </div>

      <div className="add-to-cart-container">
        <button className='add-to-cart'>Add To Cart</button>
      </div>
    </div>
  )
}

export default EquipmentCard