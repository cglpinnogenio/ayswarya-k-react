import React from "react"
import { Button } from "../../Components/Button/Button";
import "./NavBar.css"
const NavBar = (props:any) => {
    return (

         <div className="living-image">
          <div className="navigation-container">
            <div className="menu-input">
              <div className="icon-menu">
                <div className="menu-lenght"></div>
                <div className="menu-lenght"></div>
                <div className="menu-lenght"></div>
              </div>
              <div className="space">SHOP</div>
            </div>
            <div className="menu-name">arusa</div>
            <div className="menu-bag">
              <div className="space">BAG</div>
              <div className="icon-x">0</div>
            </div>
          </div>
          <div className="living-content">
            <div className="living-paragraph">
              Seamless <em>furniture</em> with natural fabrics
            </div>
            <Button
        name="SHOP ALL"
        class="living-button"
        handleclick={() => {
          console.log("Button Clicked");
        }}
      />
          </div>
        </div>
    );
  };
  
  export default NavBar;
  