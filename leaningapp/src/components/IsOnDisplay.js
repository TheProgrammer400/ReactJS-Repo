import React from "react"

function IsOnDisplay(props){
    return (
        <h1>Status: {props.isOn ? "On" : "Off"}</h1>
    )
}

export default IsOnDisplay