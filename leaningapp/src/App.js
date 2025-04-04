import CounterDisplay from "./components/CounterDisplay";
import { useState, useEffect, useRef } from "react";
import IsOnDisplay from "./components/IsOnDisplay";
import DigitalClock from "./components/DigitalClock";
import Calculator from "./components/Calculator";
import ThemeButton from "./components/ThemeButton";

function App() {
    const [counter, setCounter] = useState(0)
    const [isOn, setIsOn] = useState(true)
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [isDark, setIsDark] = useState(true)
    const count = useRef(0)
    const inputRef = useRef()

    function increaseCounter(){
        setCounter(counter+1)
    }

    useEffect(() => {
        count.current = count.current + 1
    }, [counter, isOn, num1, num2, isDark])

    function decreaseCounter(){
        setCounter(counter-1)
    }

    function toggleButton(){
        setIsOn(!isOn)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    function changeTheme(){
        if (isDark){
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        } else {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        }

        setIsDark(!isDark)
    }

    function handleClick(){
        inputRef.current.style.width = "200%"
    }

    return (
        <div className="App">
            <CounterDisplay counter={counter} />
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>

            <IsOnDisplay isOn={isOn} />
            <button onClick={toggleButton}>{isOn ? "On" : "Off"}</button>

            <DigitalClock time={time} />

            <input type="number"
                onChange={(e) => setNum1(e.target.value)} />
            <input type="number" 
                onChange={(e) => setNum2(e.target.value)} />
            <Calculator result={Number(num1)+Number(num2)} />


            <ThemeButton isDark={isDark} />
            <button onClick={changeTheme}>{isDark ? "Light" : "Dark"}</button>

            <p>Rendering count: {count.current}</p>

            <input ref={inputRef} />
            <button onClick={handleClick}>Make Changes</button>
        </div>
    );
}

export default App;
