import React from 'react';
import VideoCard from "./VideoCard.js"
import "../styles/Videos.css"

const Videos = ({Videos}) => {
  return (
    <div className="Videos">
      {Videos?.map((item,index)=>(
        <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>

      ))}

      

      

    </div>
  )
}

export default Videos;