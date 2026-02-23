import React, { useEffect, useState } from 'react'
import MacWindow from './MacWindow'
import Markdown from "react-markdown";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './note.scss'

const Note = ({windowName,setWindowState}) => {
  const [markdown, setmarkdown] = useState(null);

  useEffect(()=>{
    fetch('/notes.txt')
    .then(res=>res.text())
    .then(text=>setmarkdown(text));
  },[]);
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <div className="notes">
          {(markdown)?<SyntaxHighlighter language="javascript" style={a11yDark}>{markdown}</SyntaxHighlighter>:<h1>Loading...</h1>}
        </div>
        
    </MacWindow>
  )
}

export default Note
