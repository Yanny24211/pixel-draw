import { useState } from 'react'
import DrawingPanel from './DrawingPanel';
import { TwitterPicker, CirclePicker } from 'react-color';
import './components.css'
function Editor(){
    const [width, setWidth] = useState(16);
    const [height, setHeight] = useState(16);
    const [buttonText, setButtonText] = useState("Create Pixelated Glory")
    const [showOptions, setShowOptions] = useState(true)
    const [showDrawingPanel, setShowDrawingPanel] = useState(false)
    const [selectedColor, setSelectedColor] = useState('#000000')

    const handleHeightChange = (newHeight) => {
        setHeight(newHeight)
    }
    const handleWidthChange = (newWidth) => {
        setWidth(newWidth)
    }

    function handleButtonClick(){
        setShowOptions(!showOptions);
        setShowDrawingPanel(!showDrawingPanel)
        buttonText==='Create Pixelated Glory' ? setButtonText('Reset') : setButtonText('Create Pixelated Glory')
    }
    
    function changeColor(color){
        setSelectedColor(color.hex)
    }

    return(
        <div className="editor">
            {showOptions && <div className="options">
                <div className='options-header'>LE ART</div>
                <div className="text">Canvas Dimensions</div>
                <div className="options-inputbox">
                    <div className="options-input"><input type="number" id="width" name="width" defaultValue={width} onChange={(e)=>{
                        handleWidthChange(e.target.value)
                    }}/>
                    <span className="text">Width</span></div>
                    <div className="options-input"><input type="number" id="height" name="height" defaultValue={height} onChange={(e)=>{
                        handleHeightChange(e.target.value)
                    }}/>
                    <span className="text">Height</span></div>
                    
                    
                </div>   
            </div>}
            <button onClick={handleButtonClick} className="button">{buttonText}</button>
            {showDrawingPanel && <TwitterPicker color={selectedColor} onChangeComplete={changeColor}/>}
            {showDrawingPanel && <CirclePicker color={selectedColor} onChangeComplete={changeColor}/>}
            {showDrawingPanel && <DrawingPanel width={width}  height={height} color={selectedColor}/>}
        </div>
    )
}

export default Editor;