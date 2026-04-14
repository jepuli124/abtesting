import { useRef } from 'react'
import './App.css'

function App() {
  const count = useRef(Math.round(Math.random()))

  return (

    
    <>
    
    <h1>WELCOME TO EVALUATION, see photos and rate our prototype</h1>
    {count.current == 0 ?
    
    <>
    <p>A</p>
    <img src="./A1.png" alt="" />
    <img src="./A2.png" alt="" />
    <img src="./A3.png" alt="" />
    <img src="./A4.png" alt="" />
    <img src="./A5.png" alt="" />
    <img src="./A6.png" alt="" />
    <img src="./A7.png" alt="" />
    <img src="./A8.png" alt="" />
    <img src="./A9.png" alt="" />

    <br></br>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSdHwivnu3OlWTdcWZr_BdZOgnPsiLfLbNNGI8HhCu1kwojiQw/viewform?usp=publish-editor'> Rate our prototype here </a>
    
    </>
    
    : 
    
    <>
    <p>B</p>
    <img src="./b1.png" alt="" />
    <img src="./b2.png" alt="" />
    <img src="./b3.png" alt="" />
    <img src="./b4.png" alt="" />
    <img src="./b5.png" alt="" />
    <img src="./b6.png" alt="" />
    <img src="./b7.png" alt="" />
    <img src="./b8.png" alt="" />
    <img src="./b9.png" alt="" />

    <a href='https://docs.google.com/forms/d/e/1FAIpQLSd3mug-0bwhaxMTJRbD6TsQRp-Qxq2AQDboZpBLJO0Clxia5Q/viewform?usp=publish-editor'> Rate our prototype here </a>
    </> }
    
    <p>Please rate our prototype on scale 1-5 (1 worst, 5 best)</p>

      <br />

      <br />
      <br />
    
    </>
  )
}

export default App
