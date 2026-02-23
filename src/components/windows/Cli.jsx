import React from 'react'
import './cli.scss'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'


const Cli = ({windowName,setWindowState}) => {
const commands = {
  about: {
    description: "About me",
    usage: "about",
    fn: () => `
Surya Pratap Singh
Full Stack Developer | DSA Enthusiast
Logic-first, TypeScript-focused.
`
  },

  skills: {
    description: "Technical skills",
    usage: "skills",
    fn: () => `
TypeScript, JavaScript
React, Next.js
Node.js, Express
MongoDB, PostgreSQL
`
  },

  projects: {
    description: "My projects",
    usage: "projects",
    fn: () => `
DevTrack
ChatSphere
AlgoVisualizer
ExpenseX
SecureAuth
PortfolioForge
`
  },

  resume: {
    description: "Open resume",
    usage: "resume",
    fn: () => {
      window.open("/Resume.pdf", "_blank");
      return "Opening resume...";
    }
  },

  github: {
    description: "Open GitHub",
    usage: "github",
    fn: () => {
      window.open("https://github.com/Surya-Pratap-singh108", "_blank");
      return "Opening GitHub...";
    }
  },

  contact: {
    description: "Contact info",
    usage: "contact",
    fn: () => `
Email: suryachaudhary.8449@gmail.com
GitHub: github.com/Surya-Pratap-singh108
`
  }
};
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="cli-window">
             <Terminal
             commands={commands}
                welcomeMessage={`
                Welcome to Surya Pratap Singh's Portfolio

                Available commands:
                about
                skills
                projects
                resume
                github    
                contact
                `}
                promptLabel={'suryapratapsingh:~$'}
        promptLabelStyle={{color:' rgba(13, 154, 13, 0.63)',
        fontSize: '1.2rem'}}
      />
        </div>
    </MacWindow>
  )
}

export default Cli
