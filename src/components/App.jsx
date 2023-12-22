import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import CVEditor from './CVEditor.jsx'
import '../styles/App.css'
import { useState } from 'react'

function App() {

  // State for the current section
  const [currentSection, setCurrentSection] = useState(0);

  // State for the previous section
  const [previousSection, setPreviousSection] = useState(0);

  // State for the visibility of the form div
  const [formDivVisibility, setFormDivVisibility] = useState('flex');

  // State for the visibility of 'Edit' 'Save JSON' and 'Generate PDF' buttons
  const [editButtonVisibility, setEditButtonVisibility] = useState('none');
  const [saveButtonVisibility, setSaveButtonVisibility] = useState('none');
  const [pdfButtonVisibility, setPdfButtonVisibility] = useState('none');

  // Function to handle the next button click
  const handleNextClick = () => {
      setPreviousSection(currentSection);
      setCurrentSection(currentSection + 1);
  }

  // Function to handle the previous button click
  const handlePreviousClick = () => {
      setPreviousSection(currentSection);
      setCurrentSection(currentSection - 1);
  }

  // Function to handle the Save button click
  const handleFinishClick = () => {
    setCurrentSection(currentSection + 1);
    setFormDivVisibility('none');
    setEditButtonVisibility('flex');
    setSaveButtonVisibility('flex');
    setPdfButtonVisibility('flex');
  }

  // Function to handle the Edit button click
  const handleEditClick = () => {
    setCurrentSection(0);
    setFormDivVisibility('flex');
    setEditButtonVisibility('none');
    setSaveButtonVisibility('none');
    setPdfButtonVisibility('none');
  }

  return (
    <div className='app-container'>
      <Header />
      <NavBar cuSection={currentSection} />
      <CVEditor 
        previousSection={previousSection} 
        cuSection={currentSection} 
        formDivVisibility={formDivVisibility} 
        editButtonVisibility={editButtonVisibility} 
        saveButtonVisibility={saveButtonVisibility} 
        pdfButtonVisibility={pdfButtonVisibility} 
        onPreviousClick={handlePreviousClick} 
        onNextClick={handleNextClick} 
        onFinishClick={handleFinishClick} 
        onEditClick={handleEditClick} 
      />
    </div>
  )
}

export default App
