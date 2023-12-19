import React, { useState } from 'react'



export default function Textform(props) {
    const [extractedEmails, setExtractedEmails] = useState([]);
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
        let newText2 = "";
        for (let index = 0; index < text1.split(" ").length; index++) {
          let word = text1.split(" ")[index];
          let capitalizedWord = word.charAt(0).toUpperCase() + word.substring(1);
          newText2 += (index === 0 ? '' : ' ') + capitalizedWord;
        }
        setText(newText2.trim());
        props.showalert("Converted to Capitalize!", "success")
    };
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const extractEmails = () => {
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        const emails = text1.match(emailRegex) || [];
        setExtractedEmails(emails);
    };
    
    const [text1, setText] = useState('');
    const wordCount = text1.trim() ? text1.trim().split(/\s+/).length : 0;
    // text1 = "new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to change the state 
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#212121' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text1} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalizeClick}>Capitalize Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={extractEmails}>Extract Emails</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h1>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{wordCount} words and {text1.length} characters</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * wordCount} Minutes read</p>
                {extractedEmails.length > 0 && (
          <>
            <h2>Extracted Emails:</h2>
            <ul>
              {extractedEmails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </>
        )}
            </div>
        </>
    )
}
