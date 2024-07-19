import React, { useState } from "react";

const Textform = (props) => {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase!","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase!","success");
    }

    const handleClearClick = ()=>{
        let newText =('');
        setText(newText);
        props.showAlert("Clear Text!","success");
    }

    const handlecopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied Text!","success");
    }

    const handleExtraSpaces = ()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space!","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text , setText] = useState('Enter the Text Here');
    // setText("The upper case is ");
  return (
    <div>
      <div className="containers mb-3" style={{color : props.mode === 'dark'?'white': '#042743 '}}>
        <h1 className="mb-3">{props.heading}</h1>
      
        <textarea
          className="form-control"
          style={{backgroundColor : props.mode === 'dark'?'#13466e': 'white ' ,
             color:props.mode === 'dark'?'white': '#042743 '}}
          id="Textarea1"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary mt-1 mx-1" onClick={handleUpClick}> Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mt-1 mx-1" onClick={handleLoClick}> Convert to lowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mt-1 mx-1" onClick={handleClearClick}> Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mt-1 mx-1" onClick={handlecopy}> Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mt-1 mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
      </div>
      <div className="container" style={{color : props.mode === 'dark'?'white': '#042743 '}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} charaters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </div>
  );
};

export default Textform;
