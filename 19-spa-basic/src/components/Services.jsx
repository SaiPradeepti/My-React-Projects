import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.avif'
import img2 from '../assets/2.avif'
import img3 from '../assets/3.avif'
import img4 from '../assets/4.avif'

const Services = () => {
  return (
    <div>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={3000} showThumbs={false} className='carouselContainer'>
            <div>
                <img src={img1} alt="" />
                <p className="legend">Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <p className="legend">Peer-to-peer support</p>
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img4} alt="" />
            </div>
        </Carousel>
    </div>
  )
}

export default Services