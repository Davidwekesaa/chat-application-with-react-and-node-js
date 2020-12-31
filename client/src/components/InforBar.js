import React from 'react'
import closeIcon from '../components/icons/closeIcon.png'
import onlineIcon from '../components/icons/onlineIcon.png'
import './InforBar.css'
const InforBar = ({room}) => {
    return (
        <div className = "infoBar">
            <div className = "leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt=""/>
                <h3>{room}</h3>
            </div>
            <div className = "rightInnerContainer">
                 <a href="/"><img src={closeIcon} alt=""/></a>
            </div>
            
        </div>
    )
}

export default InforBar
