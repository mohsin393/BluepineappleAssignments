import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [realFirst, setRealFirst] = useState()
  const [imagFirst, setImagFirst] = useState()
  const [realSecond, setRealSecond] = useState()
  const [imagSecond, setImagSecond] = useState()
  const [real, setReal] = useState()
  const [imag, setImag] = useState()
  const addition = () => {
    const r = parseInt(realFirst) + parseInt(realSecond)
    const i = parseInt(imagFirst) + parseInt(imagSecond)
    setReal(r)
    setImag(i)
  }
  const subtraction = () => {
    const r = parseInt(realFirst) - parseInt(realSecond)
    const i = parseInt(imagFirst) - parseInt(imagSecond)
    setReal(r)
    setImag(i)
  }
  const multiplication = () => {
    setReal(realFirst * realSecond - imagFirst * imagSecond)
    setImag(realFirst * imagSecond - imagFirst * realSecond)
  }
  return (
    <div className="Apps">
      <p>Enter Real Number</p>
      <input
        type="number"
        value={realFirst}
        onChange={(e) => setRealFirst(e.target.value)}
      />
      <p>Enter imaginary Number</p>
      <input
        type="number"
        value={imagFirst}
        onChange={(e) => setImagFirst(e.target.value)}
      />
      <p>Enter Real Number</p>
      <input
        type="number"
        value={realSecond}
        onChange={(e) => setRealSecond(e.target.value)}
      />
      <p>Enter imaginary Number</p>
      <input
        type="number"
        value={imagSecond}
        onChange={(e) => setImagSecond(e.target.value)}
      />
      <br />
      <button id="btn" onClick={addition}>Addition</button>
      <button  id="btn" onClick={subtraction}>Substarction</button>
      <button  id="btn" onClick={multiplication}>Multiplication</button>
      <button  id="btn" onClick={multiplication}>Division</button>
      {/* <button onClick={division}>Add</button> */}
      <p>
        Result: {real}+ i{imag}
      </p>
    </div>
  )
}

export default App