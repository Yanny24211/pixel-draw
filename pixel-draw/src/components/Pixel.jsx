import { useState } from 'react'
import './components.css'

function Pixel(props){
    const { color, pixelWidth, pixelHeight} = props
    const [isMouseDrag, setIsMouseDrag] = useState(false)
    const [pixelColor, setPixelColor] = useState('#fff');
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true);

    useState(()=>{
        const handleMouseDown = () => {
            setIsMouseDrag(true);
        }
        const handleMouseUp = () => setIsMouseDrag(false);

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [])

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
        <div className="pixel" onMouseDown={changeColor} onMouseEnter={isMouseDrag ? changeColor :showNewColor } onMouseLeave={handleReset} style={{ width: `${pixelWidth}px`, height:`${pixelHeight}px`, backgroundColor: pixelColor}}></div>
    )
}

export default Pixel;
