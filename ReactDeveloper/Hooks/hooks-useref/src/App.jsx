import { useRef } from "react";

import "./App.css";

function App() {
  const inputRef = useRef();

  const handleRef = () => {
    alert(`el campo input contiene el valor: ${inputRef.current.value}`);
  };

  return (
    <>
      <div>
        <h1>Hello InputRef</h1>
        <h3>Ejemplo simple del uso del Hook: useRef</h3>
        <input type="text" ref={inputRef} />
        <button onClick={handleRef}>useRef</button>
      </div>
    </>
  );
}

export default App;
