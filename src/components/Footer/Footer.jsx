import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="liste">
            <div className="footer_bloc footer_bloc1">
                <div className="footer_link">travaux</div>
            </div>
            <div className="footer_bloc footer_bloc2">
                <div className="footer_link">contact</div>
            </div>
            <div className="footer_bloc footer_bloc3">
                <div className="footer_link">random</div>
            </div>
        </div>
        <div className="footer_link_ext">
            <ul>
                <li>github</li>
                <li>linkedin</li>
                <li>github</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer