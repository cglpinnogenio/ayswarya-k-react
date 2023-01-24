import React from 'react'
import Article from '../../Components/Article/Article';
import { ArticleDetails } from '../../Models/ArticleDetails';
const ArticleContainer = () => {
  return (
    <div className="article-decor">
      {ArticleDetails.map((value: any) => { 
         return (<Article image={value.image} 
         title={value.title} /> ); })}
    </div>
  )
}

export default ArticleContainer
