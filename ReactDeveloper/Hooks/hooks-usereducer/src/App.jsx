import { useReducer } from "react";

import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>Uso del Hook useReducer</h1>
        <h3>
          Ejemplo práctico para entender cómo actualizar un estado globalmente
        </h3>
        <p>Contador: {state.count}</p>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
