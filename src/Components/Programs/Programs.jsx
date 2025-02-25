import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import our_program_1  from '../../assets/our_program_1.png'
import program_icon_1 from '../../assets/firstIcon.png'
import program_icon_2 from '../../assets/secondIcon.png'
import program_icon_3 from '../../assets/thirdIcon.png'
import about_1 from '../../assets/about_1.png'
import about_3 from '../../assets/about_3.png'
import about_4 from '../../assets/about_4.png'

const Programs = () => {
  return (
    <div className="programContainer">
    <div className="title">
    <p> EXPERIENCE EXCELLENCE</p>
    <h2>DISCOVER WHAT WE OFFER</h2>
  </div>
    <div className="programs">
     
      {/* <div className="program">
        <img src={about_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div> */}
      <div className="program">
        <img src={ about_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <h2 >Digital Growth Solutions</h2>
        </div>
      </div>

      <div className="program">
        <img src={about_3} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <h2>Web & Mobile Development</h2>
        </div>
      </div>
      <div className="program">
        <img src={about_4} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <h2>Lead & Sales Automation</h2>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Programs
