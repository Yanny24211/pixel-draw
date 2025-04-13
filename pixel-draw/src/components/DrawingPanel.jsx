import Row from './Row'
import { useRef, useState } from 'react'
import './components.css'
import html2canvas from 'html2canvas'

function DrawingPanel(props){
    const { width, height, color, pixelWidth, pixelHeight  } = props
    const [ canvasName, setCanvasName] = useState(null)
    const rows = []
    for(let i = 0; i < height; i++){
        rows.push(<Row pixelWidth={pixelWidth} pixelHeight={pixelHeight} key={i} width={width} color={color}/>)
    }
    const panelRef = useRef()

    const handleExportAsPNG = async (component) => {
        if (component.current) {
          const canvas = await html2canvas(component.current, {
            backgroundColor: null, 
          });
          const link = document.createElement("a");
          link.download = `${canvasName ?? "my-masterpeice"}.png`;
          link.href = canvas.toDataURL("image/png");
          link.click();
        }
    };
    
    return(
        <div className="drawing-panel">
            <input id="canvasName" type="text" placeholder={'Name Your Masterpeice'} value={canvasName} onChange={(e) => setCanvasName(e.target.value)}/>
            <div id='canvas' ref={panelRef}>
                {rows}
            </div>
            <button className="button" onClick={() => handleExportAsPNG(panelRef)}>
                Export as PNG
            </button>
        </div>
    )
}

export default DrawingPanel; 