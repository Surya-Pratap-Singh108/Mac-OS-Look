import React from 'react'
import "./dock.scss"
const Dock = ({setWindowState}) => {
  return (
      <footer className='dock'>
        <div
        onClick={() => {
        setWindowState(prev => {
          return {
            ...prev,
            github: true
          };
        });
      }}
      //       onClick={() =>
      //   setwindowState({
      //     github: true,
      //     note: false,
      //     resume: false,
      //     spotify: false,
      //     cli: false,
      //   })
      // }
        className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>
        <div
        onClick={() => {
        setWindowState(prev => {
          return {
            ...prev,
            note: true
          };
        });
      }}
        className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
        <div
        onClick={() => {
        setWindowState(prev => {
          return {
            ...prev,
            resume: true
          };
        });
      }}
       className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
        <div
        onClick={() => {
        window.open(
          "https://calendar.google.com",
          "_blank"
        );
      }} 
        
        className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
        <div 
        onClick={() => {
        setWindowState(prev => {
          return {
            ...prev,
            spotify: true
          };
        });
      }}
      className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
        <div 
       onClick={() => {
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=suryachaudhary.8449@gmail.com",
          "_blank"
        );
      }}  
      className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>
        <div 
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/surya-pratap-singh-7ab190316",
            "_blank"
          )
        }  
        className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>
        <div
        onClick={() => {
        setWindowState(prev => {
          return {
            ...prev,
            cli: true
          };
        });
      }}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>
      </footer>
  )
}

export default Dock
