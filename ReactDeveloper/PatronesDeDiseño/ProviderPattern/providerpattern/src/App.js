import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
      <ThemeContext value={darkMode}>

        <input type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          name="darkMode-name"
          id="darkMode-id" />
        <Form />
      </ThemeContext>

    </>
  );
}

export default App;
