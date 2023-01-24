import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="arusa">
    <div className="arusa-menu">
      <div className="input-award">
        STORE
        <div className="input-store">
          <div className="input-nav">
            <a href="#" target="blank" id="STORE">Home</a>
            <a href="#" target="blank" id="STORE">About</a>
            <a href="#" target="blank" id="STORE">Journal</a>
            <a href="#" target="blank" id="STORE">Contact</a>
          </div>
        </div>
      </div>
      <div className="input-award">
        SHOP
        <div className="input-shop">
          <div className="input-nav">
            <a href="#" target="blank" id=" SHOP">All</a>
            <a href="#" target="blank" id=" SHOP">Lookbook</a>
            <a href="#" target="blank" id=" SHOP">Collections</a>
            <a href="#" target="blank" id=" SHOP">Featured</a>
          </div>
        </div>
      </div>
      <div className="input-award">
        COLLECTIONS
        <div className="input-collection">
          <div className="input-nav">
            <a href="#" target="blank" id="COLLECTIO">Decors</a>
            <a href="#" target="blank" id="COLLECTIONS">furnitures</a>
            <a href="#" target="blank" id="COLLECTIONS">ceramio</a>
            <a href="#" target="blank" id="COLLECTIONS">lamps</a>
          </div>
        </div>
      </div>
      <div className="input-award">
        HELP
        <div className="input-help">
          <div className="input-nav">
            <a href="#" target="blank" id="HELP">Contact</a>
            <a href="#" target="blank" id="HELP">Login & Account</a>
            <a href="#" target="blank" id="HELP">Privacy Policy</a>
            <a href="#" target="blank" id="HELP">Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
    <div className="name-input">arusa</div>
    <div className="footer-arusa">@ ARUSA 2022 I AGATHA SAKOWICZ</div>
  </div>
  )
}

export default Footer
