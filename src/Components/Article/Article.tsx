import React, { FC } from "react";
import "./Article.css";


const Article : FC<{ image: any; title: any;}> = (
  props: any
) => {
  return (
      <div className="decor-first" id="decor-images">
        <img src={props.image} alt="" id="decor-pictureone" />
        <div className="decor-item">
          <div className="decor-head">{props.title}</div>
          <div className="decor-para">
          I would follow Jessica to the end of the Earth,” Johanna Hynes
    says, referring to her designer, Jessica Stambaugh. The
    Nashville-based principal of JS Interiors designed Hynes’ Boston
    wellness studio, Asana Charlestown, her family’s townhouse—and
    most recently, their beach chalet in Katama on Martha’s
    Vineyard.           </div>
          <div className="decor-botton">READ ARTICLE</div>
        </div>
      </div>
  );
};

export default Article;
