import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import CVEditor from './CVEditor.jsx'
import '../styles/App.css'
import { useState } from 'react'

function App() {

  // State for the current section
  const [currentSection, setCurrentSection] = useState(0);

  // State for CV data
  const [cvData, setCVData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      linkedIn: '',
      github: '',
      website: '',
      profilePicture: ''
    },
    education: [],
    experience: [],
    skills: [],
    projects: []
  });

  // Function to handle the next button click
  const handleNextClick = () => {
      setCurrentSection(currentSection + 1);
  }

  // Function to handle the Save button click
  const handleSaveClick = () => {
    setCVData(cvData);
  }

  return (
    <div className='app-container'>
      <Header />
      <NavBar cuSection={currentSection} />
      <CVEditor cuSection={currentSection} onNextClick={handleNextClick} onSaveClick={handleSaveClick} />
    </div>
  )
}

export default App
