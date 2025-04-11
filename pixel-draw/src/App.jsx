import { useState } from 'react'
import Editor from './components/Editor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', width: '100vw', height: '100vh'}}> 
      <Editor/>
    </div>
  )
}

export default App
