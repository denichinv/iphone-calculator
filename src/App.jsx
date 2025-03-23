

function App() {
  
  function appendToDisplay() {
    
  }

  function calculate() {
    
  }

  function clearDisplay() {
    
  }
  return (
    <>
  
     <div className="bg-[hsl(0,0%,15%)] rounded-xl max-w-lg overflow-hidden " id="calculator">
      <input className="w-full p-5 text-6xl bg-[hsl(0,0%,20%)] text-white " type="text" placeholder="0"/>
      <div className=" grid grid-cols-4 gap-2 p-6" id="keys">
        <button onClick={appendToDisplay('+')}>+</button>
        <button onClick={appendToDisplay('7')}>7</button>
        <button onClick={appendToDisplay('8')}>8</button>
        <button onClick={appendToDisplay('9')}>9</button>
        <button onClick={appendToDisplay('−')}>−</button>
        <button onClick={appendToDisplay('4')}>4</button>
        <button onClick={appendToDisplay('5')}>5</button>
        <button onClick={appendToDisplay('6')}>6</button>
        <button onClick={appendToDisplay('×')}>×</button>
        <button onClick={appendToDisplay('1')}>1</button>
        <button onClick={appendToDisplay('2')}>2</button>
        <button onClick={appendToDisplay('3')}>3</button>
        <button onClick={appendToDisplay('÷')}>÷</button>
        <button onClick={appendToDisplay('0')}>0</button>
        <button onClick={appendToDisplay('.')}>.</button>
        <button onClick={calculate()}>=</button>
        <button onClick={clearDisplay()}>AC</button>
        <button onClick={clearDisplay()}>%</button>
        <button onClick={clearDisplay()}>±</button>
        <button onClick={clearDisplay()}>🖩</button>




      </div>
     </div>
    </>
  )
}

export default App
