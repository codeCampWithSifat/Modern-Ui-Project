import React from 'react';
import './Brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
const Brand = () => {
  return (
    <div className='gpt3_brand section__padding'>
       <div className=''>
          <img src={google} alt="" />
       </div>
       <div className=''>
          <img src={slack} alt="" />
       </div>
       <div className=''>
          <img src={atlassian} alt="" />
       </div>
       <div className=''>
          <img src={dropbox} alt="" />
       </div>
       <div className=''>
          <img src={shopify} alt="" />
       </div>
    </div>
  )
}

export default Brand
