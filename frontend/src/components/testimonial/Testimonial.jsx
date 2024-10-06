import React from 'react'
import Slider from 'react-slick'
import ava01 from  '../../assets/images/ava-1.jpg'
import ava02 from  '../../assets/images/ava-2.jpg'
import ava03 from  '../../assets/images/ava-3.jpg'

const Testimonial = () => {
    const settings={
        dots:true,
        Infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    Infinite:true,
                    dots:true
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                }
            },
        ]
    }
  return (
    <>
     <Slider {...settings}>
        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Et ex dolores officia possimus accusamus maxime 
                 dignissimos deleniti fugit ad praesentium earum 
                 explicabo pariatur dolorum, quisquam ut obcaecati 
                 magni libero. Corrupti!
            </p>

            <div className="testimonial__detail">
                <img src={ava01} alt="" />
                <div>
                    <h5 className='mb-0 mt-3'>John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Et ex dolores officia possimus accusamus maxime 
                 dignissimos deleniti fugit ad praesentium earum 
                 explicabo pariatur dolorum, quisquam ut obcaecati 
                 magni libero. Corrupti!
            </p>

            <div className="testimonial__detail">
                <img src={ava02} alt="" />
                <div>
                    <h5 className='mb-0 mt-3'>Lia Franklin</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Et ex dolores officia possimus accusamus maxime 
                 dignissimos deleniti fugit ad praesentium earum 
                 explicabo pariatur dolorum, quisquam ut obcaecati 
                 magni libero. Corrupti!
            </p>

            <div className="testimonial__detail">
                <img src={ava03} alt="" />
                <div>
                    <h5 className='mb-0 mt-3'>John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Et ex dolores officia possimus accusamus maxime 
                 dignissimos deleniti fugit ad praesentium earum 
                 explicabo pariatur dolorum, quisquam ut obcaecati 
                 magni libero. Corrupti!
            </p>

            <div className="testimonial__detail">
                <img src={ava02} alt="" />
                <div>
                    <h5 className='mb-0 mt-3'>John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
     </Slider>
    </>
  )
}

export default Testimonial