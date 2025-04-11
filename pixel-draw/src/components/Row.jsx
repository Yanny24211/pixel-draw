import Pixel from './Pixel'
import './components.css'

function Row(props){
    const { width, color } = props
    const pixels = []
    for(let i = 0; i < width ; i++){
        pixels.push(<Pixel key={i} color={color} />)
    }
    return(
        <div className="row">
            {pixels}
        </div>
    )
}

export default Row;