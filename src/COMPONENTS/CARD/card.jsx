import React from 'react'
import './card.css'
// import mern from '../../assets/mern.png'
function card(props) {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <div className='hovercard'>
          <img src={props.img} alt="mern" />
        </div>
    </div>
  )
}

export default card