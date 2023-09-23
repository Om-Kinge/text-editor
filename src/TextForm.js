import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=> {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowererCase();
        setText(newText);
    }
    const handleReverse = ()=> {
        let strArr = text.split("");
        strArr=strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
    }
    const handleClear = ()=> {
        let newText ="";
        setText(newText);
    }
    const handleCopy = ()=> {
         let text = document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }
    const [text,setText] = useState(' ');  //'text' is a state variable and it's default value is 'Enter text here'
     // we can't change state directly we have to use function
    //  text = "new text";   // wrong way to change the state
    //  setText("new text");   // correct way to change the state
  return (  
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.Heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
     <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
     <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
     <button className='btn btn-primary mx-2' onClick={handleReverse}>Reverse the text</button>
     <button className='btn btn-primary mx-2' onClick={handleClear}>Clear the text</button>
     <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy the text</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h2>Your text summary:</h2>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}