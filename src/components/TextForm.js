import React,{useState} from 'react';
import propTypes from 'prop-types';

export default function TextForm(props){
    const [text,setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space is removed","success");
    }

    return(
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{background: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text to preview here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = { heading: propTypes.string};