import React from 'react'
import image from "../assets/jishupic.jpg"

const Intro = () => {
  return (
    <section className='intro' id='intro'>
        <div className="introcontent">
            <span id='hello'>Hello,</span>
            <span id='introtext'>I'm <span id="introname">Jishu Krishna Swain</span> <br />Web Developer</span>
            <p id="intropara">I'm a skilled web developer with expertise in creating responsive,<br /> user-friendly websites using HTML, CSS, JavaScript, and React.</p>
           <a href='./Jishu_Resume.pdf' download ><button className="button">Get my CV</button></a>
        </div>
        <img src={image} alt="Profile"  className='bg'/>

    </section>
  )
}

export default Intro
