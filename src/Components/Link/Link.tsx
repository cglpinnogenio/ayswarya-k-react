import React,{useState} from 'react';
type LinkProps={value: string;}

export const Link = (Props: LinkProps)=> {
  const [Link,setLink]=useState({});
  let url="";
  return (
    <div className="">
     <a href={url}>{Props.value}</a>
    </div>
  );
}


// import React from 'react';
// type Link ={value: string}
// export  function List() {
//   return <a>SHOP ALL</a>;
// }
