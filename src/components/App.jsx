import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import CVEditor from './CVEditor.jsx'
import '../styles/App.css'
import { useState } from 'react'

function App() {

  // State for the current section
  const [currentSection, setCurrentSection] = useState(0);

  // State for the visibility of the form div
  const [formDivVisibility, setFormDivVisibility] = useState('flex');

  // State for the visibility of 'Edit' and 'Save' buttons
  const [editButtonVisibility, setEditButtonVisibility] = useState('none');
  const [saveButtonVisibility, setSaveButtonVisibility] = useState('none');

  // State variable that controls if the edition has been finished
  const [editionFinished, setEditionFinished] = useState(false);

  // Function to handle the next button click
  const handleNextClick = () => {
      setCurrentSection(currentSection + 1);
  }

  // Function to handle the previous button click
  const handlePreviousClick = () => {
      setCurrentSection(currentSection - 1);
  }

  // Function to handle the Save button click
  const handleFinishClick = () => {
    setCurrentSection(currentSection + 1);
    setFormDivVisibility('none');
    setEditButtonVisibility('flex');
    setSaveButtonVisibility('flex');
    setEditionFinished(true);
  }

  // Function to handle the Edit button click
  const handleEditClick = () => {
    setCurrentSection(0);
    setFormDivVisibility('flex');
    setEditButtonVisibility('none');
    setSaveButtonVisibility('none');
    setEditionFinished(false);
  }

  return (
    <div className='app-container'>
      <Header />
      <NavBar cuSection={currentSection} />
      <CVEditor 
        cuSection={currentSection} 
        formDivVisibility={formDivVisibility} 
        editButtonVisibility={editButtonVisibility} 
        saveButtonVisibility={saveButtonVisibility} 
        onPreviousClick={handlePreviousClick} 
        onNextClick={handleNextClick} 
        onFinishClick={handleFinishClick} 
        onEditClick={handleEditClick} 
        editionFinished={editionFinished} 
      />
    </div>
  )
}

export default App
