import React from 'react'
import "../CSS/SupplementCard.css"
import { LiaStarSolid } from "react-icons/lia";
import { IoCheckmarkCircle } from "react-icons/io5";

const SupplementCard = ({data}) => {
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
            <span className="rating-count">
              {data.review.count} reviews
            </span>
            <div className="rating-stars-container">
              <span className="icon-star">
                <LiaStarSolid color='yellow'/>
              </span>
              <span className="rating-stars">
                {data.review.stars}
              </span>
              <span className="icon-tick">
                <IoCheckmarkCircle color='blue'/>
              </span>
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

export default SupplementCard