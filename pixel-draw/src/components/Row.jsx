import Pixel from './Pixel'
import './components.css'

function Row(props){
    const { width, color, pixelWidth, pixelHeight } = props
    const pixels = []
    for(let i = 0; i < width ; i++){
        pixels.push(<Pixel pixelWidth={pixelWidth} pixelHeight={pixelHeight} key={i} color={color} />)
    }
    return(
        <div className="row">
            {pixels}
        </div>
    )
}

export default Row;