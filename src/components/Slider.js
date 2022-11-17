import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Slider = ({start}) => {
    console.log("the value of start is",start)
  return (
  
        <Carousel fade>


            {start?.map((item)=>(
                <Carousel.Item>
                    <img
                    className= "d-block w-100"
                    src={item}
              
                    />
                </Carousel.Item>

            ))}







   
    </Carousel>
   
  )
}

export default Slider