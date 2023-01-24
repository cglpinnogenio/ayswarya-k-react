import React from "react";
import { Button } from "../../Components/Button/Button";
import "./Arusa.css";
import ImageConstants from "../../Components/ImageConstants/ImagesConstants";

const Arusa = (props: any) => {
  return (
    <div className="second-container">
      <div className="content">
        <div className="header-content">
          Creating <em className="em3-input">perfect</em> lines and imposing
          presence
        </div>
        <div className="paragraph-content">
          Developed the concept of exclusivity, a Arusa features timeless
          furniture, with natural fabrics, curved lines, plenty of mirrors and
          classic design, which can be incorporated into any decor project. The
          pieces enchant for their sobriety, to last for generations, faithful
          to the shapes of each period, with a touch of the present.
        </div>
        <Button
          name="READ ABOUT US"
          class="image-readme"
          handleclick={() => {
            console.log("Button Clicked");
          }}
        />
      </div>
      <div className="top-image">
        <div className="image-figma-top">
          <img
            src={ImageConstants.Product20}
            alt=""
            className="second-padding"
            id="topimage"
          />
        </div>
      </div>
      <div className="top-right-image">
        <div className="image-figma-top-right">
          <img
            src={ImageConstants.Product21}
            alt=""
            id="toprightimage"
            className="second-padding"
          />
        </div>
      </div>
      <div className="right-image">
        <div className="image-figma-right">
          <img
            src={ImageConstants.Product19}
            alt=""
            id="rightmiddle"
            className="second-padding"
          />
        </div>
      </div>
      <div className="right-bottom-image">
        <div className="image-figma-right-bottom">
          <img
            src={ImageConstants.Product18}
            alt=""
            id="rightdown"
            className="second-padding"
          />
        </div>
      </div>
      <div className="left-image">
        <div className="image-figma-left">
          <img
            src={ImageConstants.Product16}
            alt=""
            id="left"
            className="second-padding"
          />
        </div>
      </div>
      <div className="left-top-image">
        <div className="image-figma-left-top">
          <img
            src={ImageConstants.Product17}
            alt=""
            id="lefttop"
            className="second-padding"
          />
        </div>
      </div>
    </div>
  );
};

export default Arusa;
