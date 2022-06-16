import React from 'react'
import "./Landing.css"
const LandingPage = () => {
  return (
    <div className='landing'>
       <h1 className='title'>get the <span className='color-change'>right job</span> you deserve</h1>
       <p className='desc'>1,0088,987 jobs listed here! your dream job is waiting!</p>
       <div className="input-fields">
           <input className='input-one' type='text' placeholder='Job title or keyword'/>
           <hr></hr>
           <input className='input-one' type='text' placeholder='Newyork, USA'/>
           <button type='submit' className='search-btn'>SEND</button>
       </div>
    </div>
  )
}

export default LandingPage