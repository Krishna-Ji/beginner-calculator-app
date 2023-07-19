import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setnumber] = useState("");

  const handleclick = (e) => {
    setnumber(number.concat(e.target.name));
  };

  const clear = () => {
    setnumber("");
  };

  const backslash = () => {
    setnumber(number.slice(0, -1));
  };

  const result = () => {
    setnumber(eval(number));
  };

  return (
    <>
      <div className="container">
        <form className="text">
          <input type="text" value={number} />
        </form>

        <div className="keypad">
          <button onClick={clear}>Clear</button>
          <button onClick={backslash}>C</button>
          <button name="/" onClick={handleclick}>
            &divide;
          </button>
          <button name="7" onClick={handleclick}>
            7
          </button>
          <button name="8" onClick={handleclick}>
            8
          </button>
          <button name="9" onClick={handleclick}>
            9
          </button>
          <button name="*" onClick={handleclick}>
            &times;
          </button>
          <button name="4" onClick={handleclick}>
            4
          </button>
          <button name="5" onClick={handleclick}>
            5
          </button>
          <button name="6" onClick={handleclick}>
            6
          </button>
          <button name="-" onClick={handleclick}>
            &ndash;
          </button>
          <button name="1" onClick={handleclick}>
            1
          </button>
          <button name="2" onClick={handleclick}>
            2
          </button>
          <button name="3" onClick={handleclick}>
            3
          </button>
          <button name="+" onClick={handleclick}>
            +
          </button>
          <button name="0" onClick={handleclick}>
            0
          </button>
          <button>.</button>
          <button onClick={result}>=</button>
        </div>
      </div>
    </>
  );
}
