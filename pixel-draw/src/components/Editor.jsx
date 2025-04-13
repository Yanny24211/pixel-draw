import { useState } from 'react'
import DrawingPanel from './DrawingPanel';
import { TwitterPicker, CirclePicker } from 'react-color';
import './components.css'
import zeMascot from '../assets/person.png'
import noBg from '../assets/remove-bg.svg'
function Editor(){
    const [width, setWidth] = useState(16);
    const [height, setHeight] = useState(16);
    const [pixelWidth, setPixelWidth] = useState(20);
    const [pixelHeight, setPixelHeight] = useState(20);
    const [buttonText, setButtonText] = useState("Create Pixelated Glory")
    const [showOptions, setShowOptions] = useState(true)
    const [showDrawingPanel, setShowDrawingPanel] = useState(false)
    const [selectedColor, setSelectedColor] = useState('#0693E3')

    const handleHeightChange = (newHeight) => {
        setHeight(newHeight)
    }
    const handleWidthChange = (newWidth) => {
        setWidth(newWidth)
    }

    const handlePixelHeightChange = (newHeight) => {
        setPixelHeight(newHeight)
    }
    const handlePixelWidthChange = (newWidth) => {
        setPixelWidth(newWidth)
    }

    function handleButtonClick(){
        setShowOptions(!showOptions);
        setShowDrawingPanel(!showDrawingPanel)
        if (buttonText === 'Create Pixelated Glory') {
            setButtonText('Reset');
        } else {
            setButtonText('Create Pixelated Glory');
            setHeight(16);
            setWidth(16);
            setPixelHeight(20);
            setPixelWidth(20);
        }
          
    }
    
    function changeColor(color){
        setSelectedColor(color.hex)
    }

    return(
        <div className="editor">
            {showOptions && <div className="options">
                <div className='options-header'>LE ART</div>
                <img style={{height: '150px'}} src={zeMascot} alt="Website Logo"/>
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
                <div className="text">Pixel Dimensions</div>
                <div className="options-inputbox">
                    <div className="options-input"><input type="number" id="width" name="width" defaultValue={pixelWidth} onChange={(e)=>{
                        handlePixelWidthChange(e.target.value)
                    }}/>
                    <span className="text">Width</span></div>
                    <div className="options-input"><input type="number" id="height" name="height" defaultValue={pixelHeight} onChange={(e)=>{
                        handlePixelHeightChange(e.target.value)
                    }}/>
                    <span className="text">Height</span></div>
                </div>   
            </div>}
            <button onClick={handleButtonClick} className="button">{buttonText}</button>
            {showDrawingPanel && <div id="canvasBox"><TwitterPicker color={selectedColor} onChangeComplete={changeColor}/><CirclePicker color={selectedColor} onChangeComplete={changeColor}/><div id="quickActions"><div id="black" onClick={()=>setSelectedColor('#000000')}></div><div id="white" onClick={()=>setSelectedColor('#FFFFFF')}></div><img id="transparent" onClick={()=>setSelectedColor('TRANSPARENT')} src={noBg} alt={"remove-bg"}/></div></div>}
            {showDrawingPanel && <DrawingPanel pixelHeight={pixelHeight} pixelWidth={pixelWidth} width={width}  height={height} color={selectedColor}/>}
        </div>
    )
} 

export default Editor;