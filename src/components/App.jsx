import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import CVEditor from './CVEditor.jsx'
import '../styles/App.css'
import { useState } from 'react'

function App() {

  // State for the current section
  const [currentSection, setCurrentSection] = useState(0);

  const handleNextClick = () => {
      setCurrentSection(currentSection + 1);
  }

  return (
    <div className='app-container'>
      <Header />
      <NavBar cuSection={currentSection} />
      <CVEditor cuSection={currentSection} onNextClick={handleNextClick} />
    </div>
  )
}

export default App
