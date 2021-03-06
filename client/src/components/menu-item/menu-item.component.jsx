import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title,imageUrl,size,linkUrl}) => (

  <div className={`${size?size:''} menu-item`}>
    <div className="background-image"
      style={{
        backgroundImage:`url(${imageUrl})`
    }} 
    />
    <div className="content" onClick={()=>window.location.pathname = linkUrl}>
      <h1 className="title"> {title.toUpperCase()} </h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);


export default MenuItem;
