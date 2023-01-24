import React from 'react'
import "./Lookbook.css"
import ImageConstants from '../../Components/ImageConstants/ImagesConstants'

const Lookbook = () => {
  return (
      <div className="fourth-container">
          <div className="before-container">LOOKBOOK</div>
          <div className="border1"></div>
          <div className="middle-container">
            <div className="middle-header">Lookbook</div>
            <div className="middle-paragraph">
              The pieces stand out for their contemporary straight lines and
              imposing presence. Current, following the world trend of the great
              masters, the furniture stands out for its noble and innovative
              materials, composing sophisticated and exclusive environments.
            </div>
          </div>
          <div className="after-container">
            <div className="item-description item-header">
              <div>ITEM</div>
              <div>DESCRIPTION</div>
            </div>
            <div className="lookbook-image">
              <img src={ImageConstants.Product24} alt="" id="image-lookup" />
              <div className="price-info1">
                <div className="name-product2">SEE LOOKBOOK</div>
                <div className="price-product2">SHOP ALL</div>
              </div>
            </div>
            <div className="material-col">
              <div className="lookbook-material">
                <div>MATERIALS:</div>
                <div>CERAMIC, GLASS, IRON, WOOD</div>
              </div>
              <div className="lookbook-produced">
                <div>PRODUCED IN:</div>
                <div>CANADA, ITALY, UNITED STATES</div>
              </div>
              <div className="lookbook-categories">
                <div>CATEGORIES:</div>
                <div>DECORATION, LAMP, FURNITURE</div>
              </div>
            </div>
          </div>
      
        </div>
      
  )
}

export default Lookbook

