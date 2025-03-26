import { useState } from "react"


function App() {

  const [display,setDisplay] = useState('')

  
  function handleDisplay(value) {
    setDisplay((prev) => prev + value)
  }

  function calculate() {
    
  }

  function clearDisplay() {
    
  }
  return (
    <>
  
     <div className="bg-[hsl(0,0%,15%)] rounded-xl max-w-lg overflow-hidden " id="calculator">
      <input className="w-full p-5 text-6xl bg-[hsl(0,0%,20%)] text-white " type="text" value={display} />
      <div className="grid grid-cols-4 gap-2 p-6" id="keys">
          <button className="lighter-buttons" onClick={clearDisplay}>AC</button>
          <button className="lighter-buttons" onClick={() => handleDisplay("±")}>±</button>
          <button className="lighter-buttons" onClick={() => handleDisplay("%")}>%</button>
          <button className="operator" onClick={() => handleDisplay("÷")}>÷</button>
          <button onClick={() => handleDisplay("7")}>7</button>
          <button onClick={() => handleDisplay("8")}>8</button>
          <button onClick={() => handleDisplay("9")}>9</button>
          <button className="operator" onClick={() => handleDisplay("×")}>×</button>
          <button onClick={() => handleDisplay("4")}>4</button>
          <button onClick={() => handleDisplay("5")}>5</button>
          <button onClick={() => handleDisplay("6")}>6</button>
          <button className="operator" onClick={() => handleDisplay("−")}>−</button>
          <button onClick={() => handleDisplay("1")}>1</button>
          <button onClick={() => handleDisplay("2")}>2</button>
          <button onClick={() => handleDisplay("3")}>3</button>
          <button className="operator" onClick={() => handleDisplay("+")}>+</button>
          <button>🖩</button>
          <button onClick={() => handleDisplay("0")}>0</button>
          <button onClick={() => handleDisplay(".")}>.</button>
          <button className="operator" onClick={calculate}>=</button>
        </div>
     </div>
    </>
  )
}

export default App
