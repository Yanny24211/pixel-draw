import Row from './Row'
import { useRef } from 'react'
import './components.css'
import html2canvas from 'html2canvas'
import { exportComponentAsPNG } from 'react-component-export-image'


function DrawingPanel(props){
    const { width, height, color } = props
    const rows = []
    for(let i = 0; i < height; i++){
        rows.push(<Row key={i} width={width} color={color}/>)
    }
    const panelRef = useRef()

    const handleExportAsPNG = async (component) => {
        if (component.current) {
          const canvas = await html2canvas(component.current, {
            backgroundColor: null, 
          });
          const link = document.createElement("a");
          link.download = "my-masterpeice.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        }
    };
    
    return(
        <div className="drawing-panel">
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