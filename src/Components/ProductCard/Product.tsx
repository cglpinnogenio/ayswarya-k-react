import React, {  useEffect } from "react";
import "./Product.css";

const Product = ({
  image,  title, price, click, select,
}: any) => {
  useEffect(() => {
    console.log("productmemo");
  }, []);
  return (
    <div
      className="product-input"
      style={{ backgroundColor: select ? "lightblue" : "" }}
    >
      <img
        onClick={click}
        src={image}
        alt=""
        id="product"
        className="image-input"
      />
      <div className="price-info1">
        <div className="product-name">{title}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
}
export default React.memo(Product);
