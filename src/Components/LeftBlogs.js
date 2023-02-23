import React, {useRef,useState } from "react";
import "../index.css";

function LeftBlogs (props){
    const [count , setCount] = useState(0)
    const [showInputField, setShowInputField] = useState(false);
    
    
    const inputRef = useRef("");

    const handleFormSubmit = (e) => {
      e.preventDefault();
     
      setShowInputField(false);
      setCount(count+1);
    };

    const addComments = () => setShowInputField(!showInputField);
    
    return (
        <div className="container">
        <img src={props.imageSrc} alt="nature image" />
        <div className="container-heading">
                <h3><b>{props.heading}</b></h3>
                <h5>{props.desc} <span className="w3-opacity">{props.date}</span></h5>
                <p>{props.content}</p>
                <div className="container-footer">
                    <button onClick={addComments}>
                    <p>{count} Comments</p>
                    </button>
                </div>
                {showInputField && (<>
                                    <form onSubmit={handleFormSubmit}>
                                    <input ref={inputRef} placeholder="Comment To Post" />
                                    <button type="submit">Post</button>
                                    </form>
                                    </>)}
            </div>
        </div>
    );


}

export default LeftBlogs;