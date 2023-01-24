import React from "react";

import { Input } from "../../Components/Input/Input";

import "./Promotion.css";

const Promotion = () => {
  return (
    <div className="outer">
      <div className="input-common">
        <div id="text-para">
          <label htmlFor="heading">Be part of our club for discount</label>
        </div>

        <Input value="YOUR EMAIL" handleChange={() => console.log()} />
      </div>
    </div>
  );
};

export default Promotion;
