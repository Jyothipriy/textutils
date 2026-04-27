import React, { useState } from 'react'

function TextForm(props) {
  const [text, setText] = useState("")

const handleOnchange = (e)=>{
    setText(e.target.value);
}

const handleUpClick = () =>{
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert('Converted to uppercase', 'success')
}

const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success')
}

const handleremspacClick = () =>{
    let newText = text.replace(/\s+/g, "");
    setText(newText);
    props.showAlert('Spaces removed', 'success')
}

const handleremxtraspacClick = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed', 'success')
}

const handleclearClick = () =>{
    let newText = ""
    setText(newText);
    props.showAlert('Text Cleared', 'success')
}

const handleCopy = () =>{
    let copyText = document.getElementById("myBox")
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
    props.showAlert('Copied to clipboard', 'success')
}

const wordCount = text.trim().split(/\s/).filter(Boolean).length
  return (
    <>
    <div className="container mb-3 my-3">
        <div className="container mb-3 my-3" style ={{color: props.mode === 'dark'? 'white':'black'}}>
            <h2 className='mb-2'>{props.heading}</h2>

            <style>
                {`#myBox::placeholder 
                {color: ${props.mode === 'dark' ? 'white' : 'black'};}`}
            </style>
            <textarea 
            className="form-control" 
            onChange={handleOnchange} 
            id="myBox" 
            rows="6" 
            value={text}
            placeholder='Enter text here' style ={{background: props.mode === 'dark'? '#030d4d': 'white', color: props.mode === 'dark'? 'white':'black'}}></textarea>
        </div>
        <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Uppercase</button>
        <button disabled= {text.length === 0}className="btn btn-primary mx-2" onClick={handleremspacClick}>Remove space</button>
        <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleremxtraspacClick}>Remove extra space</button>
        <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button disabled= {text.length === 0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className='container my-3' style ={{color: props.mode === 'dark'? 'white':'black'}}>
        <h3>Text Summary</h3>
        <p>{wordCount < 2? `${wordCount} word` : `${wordCount} words`} and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0? text:'Nothing to preview'}</p>
    </div>
    </>
  )
} 

export default TextForm
