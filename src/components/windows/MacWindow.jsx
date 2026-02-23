import React from 'react'
import {Rnd} from 'react-rnd'
import './window.scss'

const MacWindow = ({children,width="45vw",height="60vh",windowName,setWindowState}) => {
  return (
    <Rnd 
  bounds="window"
  default={{
    x: 200,
    y: 100,
    width: width,
    height: height,
  }}
  >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div
                    onClick={() =>
                      setWindowState(prev => ({
                        ...prev,
                        [windowName]: false
                      }))
                    }
                    className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title">
                    <p>suryapratapsingh -user</p>
                </div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
