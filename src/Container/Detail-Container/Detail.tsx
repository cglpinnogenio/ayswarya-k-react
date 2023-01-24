import React from "react";
import "./Detail.css";
import ImageConstants from "../../Components/ImageConstants/ImagesConstants";
const Detail = () => {
  return (
    <div>
      <div className="content-container">
        <div className="heading-input">Every detail matter</div>
        <div className="subtitle-content">
          WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY ENVIRONMENT.
        </div>
        <div className="subtitle-paragraph">
          There are multiples of high quality pieces, with styles that
          transition from classNameic to contemporary. An exclusive selection of
          lampshades, vases, murals, pillows, paintings and many gifts to
          compose great projects. In order selection, a mix of basic style,
          stricter customization and more compact dimensions, composing
          sophisticated and exclusive environments.
        </div>
      </div>
      <div className="container-chairimage">
        <div className="text-imagepic">DETAILS</div>
        <div className="input-colum">
          <div className="left-picture">
            <img src={ImageConstants.Detail4} alt="" id="imageeight" />
          </div>
          <div className="subdivisionright">
            <div className="image-division">
              <img src={ImageConstants.Detail1} alt="" id="imagethree" />
            </div>
            <div className="image-subdivision">
              <img src={ImageConstants.Detail2} alt="" id="imagefour" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-picture" id="imagesix">
        <div>
          <img
            src={ImageConstants.Detail5}
            alt=""
            className="ab-picture"
            id="ab-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
