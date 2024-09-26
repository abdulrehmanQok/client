import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };
const data = [
   "/image/slider1.jpg",
   "/image/slider2.jpg",
   "/image/slider3.jpg",
];
const items = data.map((x,i)=>{
    return <img key={i} src={x} alt={`Slide ${i+1}`}  className='img-fluid'/>  // Image must be served from public folder or an absolute path.
  });

const ProductSlider = () => {
  return (
    <div className='container'>
 <AliceCarousel
        // mouseTracking
        items={items}
        autoPlay
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlayInterval={2000}
        // responsive={responsive}
        // controlsStrategy="alternate"
    />
    </div>
  )
}

export default ProductSlider
