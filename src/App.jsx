import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  //Helper function

  const isOperator = (char) => /[+\-×÷]/.test(char);

  function handleDisplay(value) {
    setDisplay((prev) => {
      const lastChar = prev.slice(-1);

      if (isOperator(value) && isOperator(lastChar)) {
        return prev.slice(0, -1) + value;
      }

      return prev + value;
    });
  }

  function calculate() {
    let expression = display.replace(/×/g, "*").replace(/÷/g, "/");

    try {
      setDisplay(eval(expression).toString());
    } catch {
      setDisplay("Error");
    }
  }

  function clearDisplay() {
    setDisplay("");
  }

  function toggleSign() {
    setDisplay((prev) => {
      if (!prev) return "";

      // Split expression into parts (numbers and operators)
      let parts = prev.match(/[-+]?\d*\.?\d+|\D/g);
      if (!parts) return prev;

      // Toggle the last number's sign
      let last = parts.pop();
      if (!isNaN(last)) {
        last = last.startsWith("-") ? last.substring(1) : "-" + last;
      }
      parts.push(last);

      return parts.join("");
    });
  }

  return (
    <>
      <div
        className="bg-[hsl(0,0%,15%)] rounded-xl max-w-lg overflow-hidden "
        id="calculator"
      >
        <input
          className="w-full p-5 text-6xl bg-[hsl(0,0%,20%)] text-white "
          type="text"
          value={display}
        />
        <div className="grid grid-cols-4 gap-2 p-6" id="keys">
          <button className="lighter-buttons" onClick={clearDisplay}>
            AC
          </button>
          <button className="lighter-buttons" onClick={toggleSign}>
            ±
          </button>
          <button
            className="lighter-buttons"
            onClick={() => handleDisplay("%")}
          >
            %
          </button>
          <button className="operator" onClick={() => handleDisplay("÷")}>
            ÷
          </button>
          <button onClick={() => handleDisplay("7")}>7</button>
          <button onClick={() => handleDisplay("8")}>8</button>
          <button onClick={() => handleDisplay("9")}>9</button>
          <button className="operator" onClick={() => handleDisplay("×")}>
            ×
          </button>
          <button onClick={() => handleDisplay("4")}>4</button>
          <button onClick={() => handleDisplay("5")}>5</button>
          <button onClick={() => handleDisplay("6")}>6</button>
          <button className="operator" onClick={() => handleDisplay("-")}>
            -
          </button>
          <button onClick={() => handleDisplay("1")}>1</button>
          <button onClick={() => handleDisplay("2")}>2</button>
          <button onClick={() => handleDisplay("3")}>3</button>
          <button className="operator" onClick={() => handleDisplay("+")}>
            +
          </button>
          <button>🖩</button>
          <button onClick={() => handleDisplay("0")}>0</button>
          <button onClick={() => handleDisplay(".")}>.</button>
          <button className="operator" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
