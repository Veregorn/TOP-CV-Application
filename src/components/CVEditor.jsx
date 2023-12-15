import '../styles/CVEditor.css'
import CVForm from './CVForm'
import CVPreview from './CVPreview'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer'

function CVEditor(props) {

    // Ideally, state variables would be generated dynamically from the SECTION_DATA array, but I don't know how to do that yet
    
    // General information state variables
    const [nameInputText, setNameInputText] = useState(''); // State for the name input
    const [emailInputText, setEmailInputText] = useState(''); // State for the email input
    const [phoneInputText, setPhoneInputText] = useState(''); // State for the phone input
    const [addressInputText, setAddressInputText] = useState(''); // State for the address input
    const [postalCodeInputText, setPostalCodeInputText] = useState(''); // State for the postal code input
    const [cityInputText, setCityInputText] = useState(''); // State for the city input
    const [countryInputText, setCountryInputText] = useState(''); // State for the country input
    const [birthDateInputText, setBirthDateInputText] = useState(''); // State for the birth date input
    const [genderInputText, setGenderInputText] = useState(''); // State for the gender input
    const [photo, setPhoto] = useState(''); // State for the photo input
    
    // Education state variables
    const [schoolInputText, setSchoolInputText] = useState(''); // State for the school input
    const [studiesTitleInputText, setStudiesTitleInputText] = useState(''); // State for the studies title input
    const [studiesStartDateSelect, setStudiesStartDateSelect] = useState(''); // State for the studies start date input
    const [studiesEndDateSelect, setStudiesEndDateSelect] = useState(''); // State for the studies end date input
    const [studiesDescriptionInputText, setStudiesDescriptionInputText] = useState(''); // State for the studies description input
    const [studies, setStudies] = useState([]); // State for the studies array
    const [studiesId, setStudiesId] = useState(0); // State for the studies id
    const [moreStudiesClicked, setMoreStudiesClicked] = useState(false); // State for the more studies button clicked
    
    // Experience state variables
    const [companyInputText, setCompanyInputText] = useState(''); // State for the company input
    const [jobPositionInputText, setJobPositionInputText] = useState(''); // State for the job title input
    const [jobStartDateSelect, setJobStartDateSelect] = useState(''); // State for the job start date input
    const [jobEndDateSelect, setJobEndDateSelect] = useState(''); // State for the job end date input
    const [jobDescriptionInputText, setJobDescriptionInputText] = useState(''); // State for the job description input
    const [jobs, setJobs] = useState([]); // State for the jobs array
    const [jobsId, setJobsId] = useState(0); // State for the jobs id
    const [moreJobsClicked, setMoreJobsClicked] = useState(false); // State for the more jobs button clicked

    // Skills state variables
    const [skillNameInputText, setSkillNameInputText] = useState(''); // State for the skill name input
    const [skillLevelRadio, setSkillLevelRadio] = useState(''); // State for the skill level radio buttons
    const [skills, setSkills] = useState([]); // State for the skills array
    const [skillsId, setSkillsId] = useState(0); // State for the skills id
    const [moreSkillsClicked, setMoreSkillsClicked] = useState(false); // State for the more skills button clicked

    // Contact state variables
    const [xInputText, setXInputText] = useState(''); // State for the X input
    const [xInputEnabled, setXInputEnabled] = useState(false); // State for the X input enabled/disabled
    const [instagramInputText, setInstagramInputText] = useState(''); // State for the Instagram input
    const [instagramInputEnabled, setInstagramInputEnabled] = useState(false); // State for the Instagram input enabled/disabled
    const [linkedinInputText, setLinkedinInputText] = useState(''); // State for the LinkedIn input
    const [linkedinInputEnabled, setLinkedinInputEnabled] = useState(false); // State for the LinkedIn input enabled/disabled
    const [githubInputText, setGithubInputText] = useState(''); // State for the GitHub input
    const [githubInputEnabled, setGithubInputEnabled] = useState(false); // State for the GitHub input enabled/disabled
    const [youtubeInputText, setYoutubeInputText] = useState(''); // State for the YouTube input
    const [youtubeInputEnabled, setYoutubeInputEnabled] = useState(false); // State for the YouTube input enabled/disabled
    const [dribbbleInputText, setDribbbleInputText] = useState(''); // State for the Dribbble input
    const [dribbbleInputEnabled, setDribbbleInputEnabled] = useState(false); // State for the Dribbble input enabled/disabled
    const [behanceInputText, setBehanceInputText] = useState(''); // State for the Behance input
    const [behanceInputEnabled, setBehanceInputEnabled] = useState(false); // State for the Behance input enabled/disabled
    const [twitchInputText, setTwitchInputText] = useState(''); // State for the Twitch input
    const [twitchInputEnabled, setTwitchInputEnabled] = useState(false); // State for the Twitch input enabled/disabled

    // Hobbies state variables
    const [travelingInputChecked, setTravelingInputChecked] = useState(false); // State for the traveling input checked/unchecked
    const [musicInputChecked, setMusicInputChecked] = useState(false); // State for the music input checked/unchecked
    const [readingInputChecked, setReadingInputChecked] = useState(false); // State for the reading input checked/unchecked
    const [gamingInputChecked, setGamingInputChecked] = useState(false); // State for the gaming input checked/unchecked
    const [bicyclingInputChecked, setBicyclingInputChecked] = useState(false); // State for the bicycling input checked/unchecked
    const [runningInputChecked, setRunningInputChecked] = useState(false); // State for the running input checked/unchecked
    const [cookingInputChecked, setCookingInputChecked] = useState(false); // State for the cooking input checked/unchecked
    const [shoppingInputChecked, setShoppingInputChecked] = useState(false); // State for the shopping input checked/unchecked
    const [dancingInputChecked, setDancingInputChecked] = useState(false); // State for the dancing input checked/unchecked
    const [swimmingInputChecked, setSwimmingInputChecked] = useState(false); // State for the swimming input checked/unchecked
    const [paintingInputChecked, setPaintingInputChecked] = useState(false); // State for the painting input checked/unchecked
    const [photographyInputChecked, setPhotographyInputChecked] = useState(false); // State for the photography input checked/unchecked
    const [fishingInputChecked, setFishingInputChecked] = useState(false); // State for the fishing input checked/unchecked
    const [hikingInputChecked, setHikingInputChecked] = useState(false); // State for the hiking input checked/unchecked
    const [yogaInputChecked, setYogaInputChecked] = useState(false); // State for the yoga input checked/unchecked
    const [surfingInputChecked, setSurfingInputChecked] = useState(false); // State for the surfing input checked/unchecked
    const [skiingInputChecked, setSkiingInputChecked] = useState(false); // State for the skiing input checked/unchecked
    const [gymInputChecked, setGymInputChecked] = useState(false); // State for the gym input checked/unchecked

    // State variable that controls if the document has been saved
    const [documentSaved, setDocumentSaved] = useState(false);

    // PDF button click handler
    const handlePDFClick = () => {
        // Create the document component
        const CVDocument = () => (
            <Document>
                <Page size='A4'>
                    <View>
                        <Text>{nameInputText}</Text>
                    </View>
                </Page>
            </Document>
        )

        // Save it to a file
        ReactPDF.render(<CVDocument />, `${window.location.pathname}/example.pdf`);
    }
    
    // Save button click handler
    const handleSaveClick = () => {
            // Create the CV data object
            const cvData = {
                // General information data
                name: nameInputText,
                email: emailInputText,
                phone: phoneInputText,
                address: addressInputText,
                postalCode: postalCodeInputText,
                city: cityInputText,
                country: countryInputText,
                birthDate: birthDateInputText,
                gender: genderInputText,
                photo: photo,
                // Education data
                studies: studies,
                // Experience data
                jobs: jobs,
                // Skills data
                skills: skills,
                // Contact data
                x: xInputText,
                instagram: instagramInputText,
                linkedin: linkedinInputText,
                github: githubInputText,
                youtube: youtubeInputText,
                dribbble: dribbbleInputText,
                behance: behanceInputText,
                twitch: twitchInputText,
                // Hobbies data
                traveling: travelingInputChecked,
                music: musicInputChecked,
                reading: readingInputChecked,
                gaming: gamingInputChecked,
                bicycling: bicyclingInputChecked,
                running: runningInputChecked,
                cooking: cookingInputChecked,
                shopping: shoppingInputChecked,
                dancing: dancingInputChecked,
                swimming: swimmingInputChecked,
                painting: paintingInputChecked,
                photography: photographyInputChecked,
                fishing: fishingInputChecked,
                hiking: hikingInputChecked,
                yoga: yogaInputChecked,
                surfing: surfingInputChecked,
                skiing: skiingInputChecked,
                gym: gymInputChecked
            }

            // Convert the CV data object to JSON
            const cvDataJSON = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvData));

            // Create the download link
            const downloadLink = document.createElement('a');
            downloadLink.setAttribute('href', cvDataJSON);
            downloadLink.setAttribute('download', 'cv-data.json');
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);

            // Click the download link
            downloadLink.click();

            // Remove the download link
            document.body.removeChild(downloadLink);

            // Set the setDocumentSaved state variable to true
            setDocumentSaved(true);
    }

    // General information fields change handlers
    const handleNameInputChange = (event) => {
        setNameInputText(event.target.value);
    }

    const handleEmailInputChange = (event) => {
        setEmailInputText(event.target.value);
    }

    const handlePhoneInputChange = (event) => {
        setPhoneInputText(event.target.value);
    }

    const handleAddressInputChange = (event) => {
        setAddressInputText(event.target.value);
    }

    const handlePostalCodeInputChange = (event) => {
        setPostalCodeInputText(event.target.value);
    }

    const handleCityInputChange = (event) => {
        setCityInputText(event.target.value);
    }

    const handleCountryInputChange = (event) => {
        setCountryInputText(event.target.value);
    }

    const handleBirthDateInputChange = (event) => {
        setBirthDateInputText(event.target.value);
    }

    const handleGenderInputChange = (event) => {
        setGenderInputText(event.target.value);
    }

    const handlePhotoInputChange = (event) => {
        const image = event.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setPhoto(reader.result);
        }

        if (image) {
            reader.readAsDataURL(image);
        }
    }

    // Education fields change handlers
    const handleSchoolInputChange = (event) => {
        setSchoolInputText(event.target.value);
    }

    const handleStudiesTitleInputChange = (event) => {
        setStudiesTitleInputText(event.target.value);
    }

    const handleStudiesStartDateSelectChange = (event) => {
        setStudiesStartDateSelect(event.target.value);
    }

    const handleStudiesEndDateSelectChange = (event) => {
        setStudiesEndDateSelect(event.target.value);
    }

    const handleStudiesDescriptionInputChange = (event) => {
        setStudiesDescriptionInputText(event.target.value);
    }

    const handleAddStudiesClick = () => {
        setMoreStudiesClicked(true);
    }

    const onSaveStudiesClick = () => {
        const newStudies = [...studies, {id: studiesId, school: schoolInputText, title: studiesTitleInputText, startDate: studiesStartDateSelect, endDate: studiesEndDateSelect, description: studiesDescriptionInputText}];
        newStudies.sort((a, b) => a.startDate - b.startDate);
        setStudies(newStudies);
        setStudiesId(studiesId + 1);
        setSchoolInputText('');
        setStudiesTitleInputText('');
        setStudiesStartDateSelect('');
        setStudiesEndDateSelect('');
        setStudiesDescriptionInputText('');
        setMoreStudiesClicked(false);
    }

    const handleDeleteStudiesClick = (id) => {
        const newStudies = studies.filter(study => study.id != id);
        setStudies(newStudies);
    }

    const handleEditStudiesClick = (id) => {
        const study = studies.find(study => study.id == id);
        setSchoolInputText(study.school);
        setStudiesTitleInputText(study.title);
        setStudiesStartDateSelect(study.startDate);
        setStudiesEndDateSelect(study.endDate);
        setStudiesDescriptionInputText(study.description);
        setMoreStudiesClicked(true);
        handleDeleteStudiesClick(id);
    }

    // Experience fields change handlers
    const handleCompanyInputChange = (event) => {
        setCompanyInputText(event.target.value);
    }

    const handleJobPositionInputChange = (event) => {
        setJobPositionInputText(event.target.value);
    }

    const handleJobStartDateSelectChange = (event) => {
        setJobStartDateSelect(event.target.value);
    }

    const handleJobEndDateSelectChange = (event) => {
        setJobEndDateSelect(event.target.value);
    }

    const handleJobDescriptionInputChange = (event) => {
        setJobDescriptionInputText(event.target.value);
    }

    const handleAddJobClick = () => {
        setMoreJobsClicked(true);
    }

    const onSaveJobsClick = () => {
        const newJobs = [...jobs, {id: jobsId, company: companyInputText, position: jobPositionInputText, startDate: jobStartDateSelect, endDate: jobEndDateSelect, description: jobDescriptionInputText}];
        newJobs.sort((a, b) => a.startDate - b.startDate);
        setJobs(newJobs);
        setJobsId(jobsId + 1);
        setCompanyInputText('');
        setJobPositionInputText('');
        setJobStartDateSelect('');
        setJobEndDateSelect('');
        setJobDescriptionInputText('');
        setMoreJobsClicked(false);
    }

    const handleDeleteJobClick = (id) => {
        const newJobs = jobs.filter(job => job.id != id);
        setJobs(newJobs);
    }

    const handleEditJobClick = (id) => {
        const job = jobs.find(job => job.id == id);
        setCompanyInputText(job.company);
        setJobPositionInputText(job.position);
        setJobStartDateSelect(job.startDate);
        setJobEndDateSelect(job.endDate);
        setJobDescriptionInputText(job.description);
        setMoreJobsClicked(true);
        handleDeleteJobClick(id);
    }

    // Skills fields change handlers
    const handleSkillNameInputChange = (event) => {
        setSkillNameInputText(event.target.value);
    }

    const handleSkillLevelRadioChange = (event) => {
        setSkillLevelRadio(event.target.value);
    }

    const handleAddSkillClick = () => {
        setMoreSkillsClicked(true);
    }

    const onSaveSkillClick = () => {
        const newSkills = [...skills, {id: skillsId, name: skillNameInputText, level: skillLevelRadio}];
        newSkills.sort((a, b) => a.name.localeCompare(b.name));
        setSkills(newSkills);
        setSkillsId(skillsId + 1);
        setSkillNameInputText('');
        setSkillLevelRadio('');
        setMoreSkillsClicked(false);
    }

    const handleDeleteSkillClick = (id) => {
        const newSkills = skills.filter(skill => skill.id != id);
        setSkills(newSkills);
    }

    const handleEditSkillClick = (id) => {
        const skill = skills.find(skill => skill.id == id);
        setSkillNameInputText(skill.name);
        setSkillLevelRadio(skill.level);
        setMoreSkillsClicked(true);
        handleDeleteSkillClick(id);
    }

    // Contact fields change handlers
    const handleXInputChange = (event) => {
        setXInputText(event.target.value);
    }

    const handleXCheckboxChange = (event) => {
        setXInputEnabled(event.target.checked);
        setXInputText('');
    }

    const handleInstagramInputChange = (event) => {
        setInstagramInputText(event.target.value);
    }

    const handleInstagramCheckboxChange = (event) => {
        setInstagramInputEnabled(event.target.checked);
        setInstagramInputText('');
    }

    const handleLinkedinInputChange = (event) => {
        setLinkedinInputText(event.target.value);
    }

    const handleLinkedinCheckboxChange = (event) => {
        setLinkedinInputEnabled(event.target.checked);
        setLinkedinInputText('');
    }

    const handleGithubInputChange = (event) => {
        setGithubInputText(event.target.value);
    }

    const handleGithubCheckboxChange = (event) => {
        setGithubInputEnabled(event.target.checked);
        setGithubInputText('');
    }

    const handleYoutubeInputChange = (event) => {
        setYoutubeInputText(event.target.value);
    }

    const handleYoutubeCheckboxChange = (event) => {
        setYoutubeInputEnabled(event.target.checked);
        setYoutubeInputText('');
    }

    const handleDribbbleInputChange = (event) => {
        setDribbbleInputText(event.target.value);
    }

    const handleDribbbleCheckboxChange = (event) => {
        setDribbbleInputEnabled(event.target.checked);
        setDribbbleInputText('');
    }

    const handleBehanceInputChange = (event) => {
        setBehanceInputText(event.target.value);
    }

    const handleBehanceCheckboxChange = (event) => {
        setBehanceInputEnabled(event.target.checked);
        setBehanceInputText('');
    }

    const handleTwitchInputChange = (event) => {
        setTwitchInputText(event.target.value);
    }

    const handleTwitchCheckboxChange = (event) => {
        setTwitchInputEnabled(event.target.checked);
        setTwitchInputText('');
    }

    // Hobbies fields change handlers
    const handleTravelingCheckboxChange = (event) => {
        setTravelingInputChecked(event.target.checked);
    }

    const handleMusicCheckboxChange = (event) => {
        setMusicInputChecked(event.target.checked);
    }

    const handleReadingCheckboxChange = (event) => {
        setReadingInputChecked(event.target.checked);
    }

    const handleGamingCheckboxChange = (event) => {
        setGamingInputChecked(event.target.checked);
    }

    const handleBicyclingCheckboxChange = (event) => {
        setBicyclingInputChecked(event.target.checked);
    }

    const handleRunningCheckboxChange = (event) => {
        setRunningInputChecked(event.target.checked);
    }

    const handleCookingCheckboxChange = (event) => {
        setCookingInputChecked(event.target.checked);
    }

    const handleShoppingCheckboxChange = (event) => {
        setShoppingInputChecked(event.target.checked);
    }

    const handleDancingCheckboxChange = (event) => {
        setDancingInputChecked(event.target.checked);
    }

    const handleSwimmingCheckboxChange = (event) => {
        setSwimmingInputChecked(event.target.checked);
    }

    const handlePaintingCheckboxChange = (event) => {
        setPaintingInputChecked(event.target.checked);
    }

    const handlePhotographyCheckboxChange = (event) => {
        setPhotographyInputChecked(event.target.checked);
    }

    const handleFishingCheckboxChange = (event) => {
        setFishingInputChecked(event.target.checked);
    }

    const handleHikingCheckboxChange = (event) => {
        setHikingInputChecked(event.target.checked);
    }

    const handleYogaCheckboxChange = (event) => {
        setYogaInputChecked(event.target.checked);
    }

    const handleSurfingCheckboxChange = (event) => {
        setSurfingInputChecked(event.target.checked);
    }

    const handleSkiingCheckboxChange = (event) => {
        setSkiingInputChecked(event.target.checked);
    }

    const handleGymCheckboxChange = (event) => {
        setGymInputChecked(event.target.checked);
    }

    return (
        <div className='book-style'>
            <CVForm 
                cuSection={props.cuSection} 
                formDivVisibility={props.formDivVisibility} 
                onPreviousClick={props.onPreviousClick} 
                onNextClick={props.onNextClick} 
                onFinishClick={props.onFinishClick} 
                editButtonVisibility={props.editButtonVisibility} 
                saveButtonVisibility={props.saveButtonVisibility} 
                // General information props
                nameInputText={nameInputText} 
                onNameChange={handleNameInputChange} 
                emailInputText={emailInputText} 
                onEmailChange={handleEmailInputChange} 
                phoneInputText={phoneInputText} 
                onPhoneChange={handlePhoneInputChange} 
                addressInputText={addressInputText} 
                onAddressChange={handleAddressInputChange} 
                postalCodeInputText={postalCodeInputText} 
                onPostalCodeChange={handlePostalCodeInputChange} 
                cityInputText={cityInputText} 
                onCityChange={handleCityInputChange} 
                countryInputText={countryInputText} 
                onCountryChange={handleCountryInputChange} 
                birthDateInputText={birthDateInputText} 
                onBirthDateChange={handleBirthDateInputChange} 
                genderInputText={genderInputText} 
                onGenderChange={handleGenderInputChange} 
                photoImage={photo} 
                onPhotoChange={handlePhotoInputChange} 
                // Education props
                schoolInputText={schoolInputText} 
                onSchoolChange={handleSchoolInputChange} 
                studiesTitleInputText={studiesTitleInputText} 
                onStudiesTitleChange={handleStudiesTitleInputChange} 
                studiesStartDateSelect={studiesStartDateSelect} 
                onStudiesStartDateChange={handleStudiesStartDateSelectChange} 
                studiesEndDateSelect={studiesEndDateSelect} 
                onStudiesEndDateChange={handleStudiesEndDateSelectChange} 
                studiesDescriptionInputText={studiesDescriptionInputText} 
                onStudiesDescriptionChange={handleStudiesDescriptionInputChange} 
                studies={studies} 
                onAddStudiesClick={handleAddStudiesClick} 
                moreStudiesClicked={moreStudiesClicked} 
                onSaveStudiesClick={onSaveStudiesClick} 
                onDeleteStudiesClick={handleDeleteStudiesClick} 
                onEditStudiesClick={handleEditStudiesClick} 
                // Experience props
                companyInputText={companyInputText} 
                onCompanyChange={handleCompanyInputChange} 
                jobPositionInputText={jobPositionInputText} 
                onJobPositionChange={handleJobPositionInputChange} 
                jobStartDateSelect={jobStartDateSelect} 
                onJobStartDateChange={handleJobStartDateSelectChange} 
                jobEndDateSelect={jobEndDateSelect} 
                onJobEndDateChange={handleJobEndDateSelectChange} 
                jobDescriptionInputText={jobDescriptionInputText} 
                onJobDescriptionChange={handleJobDescriptionInputChange} 
                jobs={jobs} 
                onAddJobClick={handleAddJobClick} 
                moreJobsClicked={moreJobsClicked} 
                onSaveJobClick={onSaveJobsClick} 
                onDeleteJobClick={handleDeleteJobClick} 
                onEditJobClick={handleEditJobClick} 
                // Skills props
                skillNameInputText={skillNameInputText} 
                onSkillNameChange={handleSkillNameInputChange} 
                skillLevelRadio={skillLevelRadio} 
                onSkillLevelChange={handleSkillLevelRadioChange} 
                skills={skills} 
                onAddSkillClick={handleAddSkillClick} 
                moreSkillsClicked={moreSkillsClicked} 
                onSaveSkillClick={onSaveSkillClick} 
                onDeleteSkillClick={handleDeleteSkillClick} 
                onEditSkillClick={handleEditSkillClick} 
                // Contact props
                xInputText={xInputText}
                onXChange={handleXInputChange} 
                xInputEnabled={xInputEnabled} 
                onXCheckboxChange={handleXCheckboxChange} 
                instagramInputText={instagramInputText} 
                onInstagramChange={handleInstagramInputChange} 
                instagramInputEnabled={instagramInputEnabled} 
                onInstagramCheckboxChange={handleInstagramCheckboxChange} 
                linkedinInputText={linkedinInputText} 
                onLinkedinChange={handleLinkedinInputChange} 
                linkedinInputEnabled={linkedinInputEnabled} 
                onLinkedinCheckboxChange={handleLinkedinCheckboxChange} 
                githubInputText={githubInputText} 
                onGithubChange={handleGithubInputChange} 
                githubInputEnabled={githubInputEnabled} 
                onGithubCheckboxChange={handleGithubCheckboxChange} 
                youtubeInputText={youtubeInputText} 
                onYoutubeChange={handleYoutubeInputChange} 
                youtubeInputEnabled={youtubeInputEnabled} 
                onYoutubeCheckboxChange={handleYoutubeCheckboxChange} 
                dribbbleInputText={dribbbleInputText} 
                onDribbbleChange={handleDribbbleInputChange} 
                dribbbleInputEnabled={dribbbleInputEnabled} 
                onDribbbleCheckboxChange={handleDribbbleCheckboxChange} 
                behanceInputText={behanceInputText} 
                onBehanceChange={handleBehanceInputChange} 
                behanceInputEnabled={behanceInputEnabled} 
                onBehanceCheckboxChange={handleBehanceCheckboxChange} 
                twitchInputText={twitchInputText} 
                onTwitchChange={handleTwitchInputChange} 
                twitchInputEnabled={twitchInputEnabled} 
                onTwitchCheckboxChange={handleTwitchCheckboxChange} 
                // Hobbies props
                travelingInputChecked={travelingInputChecked} 
                onTravelingCheckboxChange={handleTravelingCheckboxChange} 
                musicInputChecked={musicInputChecked} 
                onMusicCheckboxChange={handleMusicCheckboxChange} 
                readingInputChecked={readingInputChecked} 
                onReadingCheckboxChange={handleReadingCheckboxChange} 
                gamingInputChecked={gamingInputChecked} 
                onGamingCheckboxChange={handleGamingCheckboxChange} 
                bicyclingInputChecked={bicyclingInputChecked} 
                onBicyclingCheckboxChange={handleBicyclingCheckboxChange} 
                runningInputChecked={runningInputChecked} 
                onRunningCheckboxChange={handleRunningCheckboxChange} 
                cookingInputChecked={cookingInputChecked} 
                onCookingCheckboxChange={handleCookingCheckboxChange} 
                shoppingInputChecked={shoppingInputChecked} 
                onShoppingCheckboxChange={handleShoppingCheckboxChange} 
                dancingInputChecked={dancingInputChecked} 
                onDancingCheckboxChange={handleDancingCheckboxChange} 
                swimmingInputChecked={swimmingInputChecked} 
                onSwimmingCheckboxChange={handleSwimmingCheckboxChange} 
                paintingInputChecked={paintingInputChecked} 
                onPaintingCheckboxChange={handlePaintingCheckboxChange} 
                photographyInputChecked={photographyInputChecked} 
                onPhotographyCheckboxChange={handlePhotographyCheckboxChange} 
                fishingInputChecked={fishingInputChecked} 
                onFishingCheckboxChange={handleFishingCheckboxChange} 
                hikingInputChecked={hikingInputChecked} 
                onHikingCheckboxChange={handleHikingCheckboxChange} 
                yogaInputChecked={yogaInputChecked} 
                onYogaCheckboxChange={handleYogaCheckboxChange} 
                surfingInputChecked={surfingInputChecked} 
                onSurfingCheckboxChange={handleSurfingCheckboxChange} 
                skiingInputChecked={skiingInputChecked} 
                onSkiingCheckboxChange={handleSkiingCheckboxChange} 
                gymInputChecked={gymInputChecked} 
                onGymCheckboxChange={handleGymCheckboxChange} 
            />
            <CVPreview 
                editButtonVisibility={props.editButtonVisibility} 
                saveButtonVisibility={props.saveButtonVisibility} 
                pdfButtonVisibility={props.pdfButtonVisibility} 
                onEditClick={props.onEditClick} 
                onSaveClick={handleSaveClick} 
                onPDFClick={handlePDFClick} 
                documentSaved={documentSaved} 
                // General information props
                namePreviewText={nameInputText} 
                emailPreviewText={emailInputText} 
                phonePreviewText={phoneInputText} 
                addressPreviewText={addressInputText} 
                postalCodeInputText={postalCodeInputText} 
                cityPreviewText={cityInputText} 
                countryPreviewText={countryInputText} 
                birthDatePreviewText={birthDateInputText} 
                genderPreviewText={genderInputText} 
                photoImage={photo} 
                // Education props
                schoolPreviewText={schoolInputText} 
                studiesTitlePreviewText={studiesTitleInputText} 
                studiesStartDatePreviewText={studiesStartDateSelect} 
                studiesEndDatePreviewText={studiesEndDateSelect} 
                studiesDescriptionPreviewText={studiesDescriptionInputText} 
                studies={studies}
                // Experience props
                companyPreviewText={companyInputText} 
                jobPositionPreviewText={jobPositionInputText} 
                jobStartDatePreviewText={jobStartDateSelect} 
                jobEndDatePreviewText={jobEndDateSelect} 
                jobDescriptionPreviewText={jobDescriptionInputText} 
                jobs={jobs} 
                // Skills props
                skills={skills} 
                skillNamePreviewText={skillNameInputText} 
                skillLevelPreviewText={skillLevelRadio} 
                // Contact props
                xPreviewText={xInputText} 
                instagramPreviewText={instagramInputText} 
                linkedinPreviewText={linkedinInputText} 
                githubPreviewText={githubInputText} 
                youtubePreviewText={youtubeInputText} 
                dribbblePreviewText={dribbbleInputText} 
                behancePreviewText={behanceInputText} 
                twitchPreviewText={twitchInputText} 
                // Hobbies props
                travelingPreviewChecked={travelingInputChecked} 
                musicPreviewChecked={musicInputChecked} 
                readingPreviewChecked={readingInputChecked} 
                gamingPreviewChecked={gamingInputChecked} 
                bicyclingPreviewChecked={bicyclingInputChecked} 
                runningPreviewChecked={runningInputChecked} 
                cookingPreviewChecked={cookingInputChecked} 
                shoppingPreviewChecked={shoppingInputChecked} 
                dancingPreviewChecked={dancingInputChecked} 
                swimmingPreviewChecked={swimmingInputChecked} 
                paintingPreviewChecked={paintingInputChecked} 
                photographyPreviewChecked={photographyInputChecked} 
                fishingPreviewChecked={fishingInputChecked} 
                hikingPreviewChecked={hikingInputChecked} 
                yogaPreviewChecked={yogaInputChecked} 
                surfingPreviewChecked={surfingInputChecked} 
                skiingPreviewChecked={skiingInputChecked} 
                gymPreviewChecked={gymInputChecked} 
            />
        </div>
    )
}

CVEditor.propTypes = {
    cuSection: PropTypes.number.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onFinishClick: PropTypes.func.isRequired,
    onPreviousClick: PropTypes.func.isRequired,
    formDivVisibility: PropTypes.string.isRequired,
    editButtonVisibility: PropTypes.string.isRequired,
    saveButtonVisibility: PropTypes.string.isRequired,
    pdfButtonVisibility: PropTypes.string.isRequired,
    onEditClick: PropTypes.func.isRequired
}

export default CVEditor