import React from "react"

function ThemeButton(props){
    return (
        <h1>Theme: {props.isDark ? "Dark" : "Light"}</h1>
    )
}

export default ThemeButton