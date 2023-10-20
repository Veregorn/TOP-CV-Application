import { useState } from 'react'
import Header from './Header.jsx'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Header />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
