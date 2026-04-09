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
    </> }

      <form action="">
        <input type="radio" name='eva' value="1"/> <label htmlFor="1"> 1 </label>
        <input type="radio" name='eva' value="2"/> <label htmlFor="2"> 2 </label>
        <input type="radio" name='eva' value="3"/> <label htmlFor="3"> 3 </label>
        <input type="radio" name='eva' value="4"/> <label htmlFor="4"> 4 </label>
        <input type="radio" name='eva' value="5"/> <label htmlFor="5"> 5 </label>
        <input type="submit" value="Send evaluation" />
      </form>

      <br />

      <br />
      <br />
    
    </>
  )
}

export default App
