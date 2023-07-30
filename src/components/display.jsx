import React from "react";
import "./display.css";
import { useState } from "react";
import { Button } from 'react-bootstrap';


function DisplayText() {

    const [name, setName] = useState("");
    console.log(name);
    const storeName = (e) => {
        e.preventDefault();
        localStorage.setItem("Name: ", name);
        window.location.reload();
    }

    return (
        <div className="container mt-5">
            <div className="top-div">
                <input style={{height: 50, width: 400, padding: 10}} 
                    type="text" 
                    placeholder="Enter Your Name" 
                    value={name} 
                    onChange={e=>setName(e.target.value)}
                />

                <Button style={{height: 50, width: 400}}
                    onClick={storeName}
                    variant="dark" 
                    className="mt-2">Submit
                </Button>
            </div>

            <div className="bottom-div">
                <h1 className="bottom-div-heading">Your Name is: </h1>
                <h1 className="dispaly-name">{localStorage.getItem("Name: ")}</h1>
            </div>
        </div>
    );
}

export default DisplayText;