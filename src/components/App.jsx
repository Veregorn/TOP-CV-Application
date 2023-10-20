import { useState } from 'react'
import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Header />
      <NavBar />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
