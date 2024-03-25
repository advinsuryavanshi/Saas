import React from 'react';
import Lottie from 'lottie-react';
import animationData from  "./Anim.json"
import './Right.css'

const Right = () => {
  return (
    <div className='lolo'>
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: '600px', height: '600px'  }}
    />
  </div>
  )
}

export default Right