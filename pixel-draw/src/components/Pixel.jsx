import { useState } from 'react'
import './components.css'

function Pixel(props){
    const { color } = props
    const [pixelColor, setPixelColor] = useState('#fff');
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true);

    function changeColor(){
        setPixelColor(color);
        setCanChangeColor(false)
    }

    function showNewColor(){
        setOldColor(pixelColor)   
        setPixelColor(color)
    }

    function handleReset(){
        if(canChangeColor){
            setPixelColor(oldColor);
        }
        setCanChangeColor(true)
    }

    return( 
        <div className="pixel" onClick={changeColor} onMouseEnter={showNewColor} onMouseLeave={handleReset} style={{ backgroundColor: pixelColor}}></div>
    )
}

export default Pixel;
