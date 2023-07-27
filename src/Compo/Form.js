import React, { useState } from 'react'
import { useContext } from 'react'
import Notecontext from '../context/Notecontext'
import { useSelector } from 'react-redux'

export default function Form(props) {
    var ca = useSelector(state => state.cart)
    var a = useContext(Notecontext)
    const [mystyle, setstyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const togglestyle = () => {
        if (mystyle.color === 'white') {
            setstyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
        else {
            setstyle({
                color: 'white',
                backgroundColor: 'grey'
            })
        }
    }
    const [text, setText] = useState("");
    // text="new text"  ...wrong way to change the text
    // setText("new text")//Correct way to change the text
    const handleupClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converting the text to Uppercase", "success")
    }
    const handlelClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converting the text to Lowercase", "success")
    }
    const handleChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handlecClick = (event) => {
        setText("");
        props.showAlert("Clearing the text..", "success")
    }
    const handlecoClick = (event) => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Triming the spaces in the text....", "success")
    }
    return (
        <>
            <div style={{ color: props.mode == 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Enter the Text</label>
                    <textarea style={{ backgroundColor: props.mode == 'dark' ? 'grey' : 'white', color: props.mode == 'dark' ? 'white' : 'black' }} className="form-control my-3" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleupClick}>Covert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handlelClick}>Covert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handlecClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handlecoClick}>RemoveSpaces</button>

            </div>
            <div style={{ backgroundColor: props.mode == 'dark' ? 'grey' : 'white', color: props.mode == 'dark' ? 'white' : 'black' }} className='container my-3'>
                <h1 >Your Text Summary: </h1>
                <p>{text.split(" ").filter((element) => { return element.length != 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes used</p>
                <h3>Preview</h3>
                <p>Here you can add the preview related to your text also</p>
            </div>
            {/* <div>
                <h1>The values in the array is: </h1>
                {a.state}
            </div> */}
            {/* <div className='darkmode my-10' >
    <button  onClick={togglestyle} className='btn btn-dark mx-10'>Dark Mode</button>
  </div> */}
            <div>
                {ca.map((element) => {
                    console.log(element.id)
                })}
            </div>
        </>
    )
}
