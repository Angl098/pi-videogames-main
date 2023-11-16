import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
// Views 
import { Home, Landing, Form, Detail } from './views';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Route exact path="/">
          <Landing /> 
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/create">
          <Form />
        </Route>
        
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
