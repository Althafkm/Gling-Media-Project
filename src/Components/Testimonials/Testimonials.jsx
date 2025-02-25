import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/* <img src={user_1} alt="" /> */}
                        <div>
                            <h3>Shreyas Shetty</h3>
                        </div>
                    </div>
                    <p>Choosing Gling Media for our digital marketing needs was one of the best business decisions we made. Their expertise in SEO, social media, and content marketing helped our brand gain tremendous visibility. The team's dedication and innovative approach truly set them apart!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/* <img src={user_2} alt="" /> */}
                        <div>
                            <h3>Ismail Malaar</h3>
                        </div>
                    </div>
                    <p> Partnering with Gling Media was the best decision for our brand’s online growth. Their expertise in SEO and social media marketing helped us connect with the right audience effortlessly. Highly recommend their services</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/* <img src={user_3} alt="" /> */}
                        <div>
                            <h3>Disha D</h3>
                        </div>
                    </div>
                    <p>I was amazed by the creativity and professionalism of the Gling Media team. They truly understand digital marketing and customized strategies that worked wonders for our brand. We saw visible improvements in just a few months!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        {/* <img src={user_4} alt="" /> */}
                        <div>
                            <h3>Mithun Mohan</h3>
                        </div>
                    </div>
                    <p> Gling Media helped us navigate the complexities of digital marketing with ease. Their data-driven approach and innovative campaigns gave our brand the online boost it needed. Super satisfied with their work!</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
