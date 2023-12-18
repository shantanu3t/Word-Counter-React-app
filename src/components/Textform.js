import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text1.toUpperCase();
        setText(newText)
        props.showalert("Converted to uppercase!", "success")
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text1.toLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase!", "success")
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText)
        props.showalert("Text Cleared", "success")
    }
    const handleCapitalizeClick = () => {
        // console.log("Uppercase was clicked");
        let newText2 = "";
        for (let index = 0; index < text1.split(" ").length; index++) {
            let newText = text1.split(" ")[index].charAt(0).toUpperCase() + text1.split(" ")[index].substring(1);
            // console.log(newText)
            newText2 = newText2 + " " + newText;

        }
        setText(newText2);
        props.showalert("Text capitalized!", "success")
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text1, setText] = useState('');
    // text1 = "new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to change the state 
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#212121' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text1} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeClick}>Capitalize text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h1>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{wordCount} words and {text1.length} characters</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * wordCount} Minutes read</p>
            </div>
        </>
    )
}
