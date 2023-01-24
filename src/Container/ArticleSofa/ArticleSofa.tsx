import React from 'react'
import "./ArticleSofa.css"
const ArticleSofa = () => {
  return (
    <div>
       <div className="enjoy-input">Enjoy our articles</div>
        <div className="sofa-content">
          <div className="side-view">READER STORIES</div>
          <div className="content-label">
            <div className="header-sofa">
              Manhattan Pià-terre for a new Chicago apartment
            </div>
            <div className="paragraph-sofa">
              Interior designer Sarah Vaile remembers eyeing a New York City
              apartment—one with bold colors and a personality as distinct as
              its chic owner—in a 2014 issue of House Beautiful, and tucking it
              away for future design inspiration. Years later, in a
              serendipitous turn of events, the woman she’d seen in the
              magazine—a stylish figure now in her 30s—just moved to Chicago.
            </div>
            <div className="button-sofa">READ ARTICLE</div>
          </div>
          <div className="image-sofa" id="sofa-side"></div>
        </div>
        <div className="seemore">SEE ALL ARTICLES</div> 
    </div>
  )
}

export default ArticleSofa
