import React, { FC } from 'react'
import ImageConstants from '../../Components/ImageConstants/ImagesConstants'
import "./ProductTwo.css"
const ProductTwo:FC = (props:any) => {
  return (
    <div className="images-container" id="image-container">
          <div className="image-right">
            <img
              src={ImageConstants.Product22}
              alt=""
              id="subimage"
            />
            <div className="price-info1">
              <div className="product-sname">ATAJUX LAMP</div>
              <div className="product-sprice">$2,399</div>
            </div>
          </div>
          <div className="image-left-small">
            <img
              src={ImageConstants.Product23}
              alt=""
              id="subimage"
            />
            <div className="price-info1">
              <div className="product-sname">IGLENIX VASE</div>
              <div className="product-sprice">$4,990</div>
            </div>
          </div>
        </div>
  )
}

export default ProductTwo

