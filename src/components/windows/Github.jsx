import React from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindow'
import './github.scss'


const GitCard=(data)=>{
  return <div className="card">
      <img src={data.image} alt="" />
    
    <div className="content">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
    <div className="tags">
      {data.tags.map(tag => {
       return  <p>{tag}</p>
      })}
    </div>
    <div className="bottom">
      <a href={data.repolink}>Repository</a>
      <a href={data.demolink}>Live Demo</a>
    </div>
  </div>
}
const Github = ({windowName,setWindowState}) => {
  return (
     <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((data)=>{
          return GitCard(data);
        })}
      </div>
    </MacWindow>
  )
}

export default Github
