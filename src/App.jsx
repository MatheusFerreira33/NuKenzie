import { useState } from 'react'
import './App.css'
import { Home } from './pages/home';
import { DashBoard } from './pages/dashBoard';


function App() {
  const [atual, newValue] = useState(true);
  return (
    <>
      {atual ? (
        <>
          <Home>
          <button onClick={() => newValue(false)}>Inicio</button>
          </Home>

        </>

      ) : (
        <div>
          
          <DashBoard>
            <button onClick={() => newValue(true)}>Inicio</button>
          </DashBoard>
        </div>

      )}
    </>
  )

}

export default App
