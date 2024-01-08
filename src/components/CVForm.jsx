import '../styles/CVForm.css'
import FormSection from './FormSection'
import SECTION_DATA from '../assets/data'
import PropTypes from 'prop-types'

function CVForm({ 
    previousSection,
    cuSection,
    formDivVisibility,
    onPreviousClick,
    onNextClick,
    onFinishClick,
    // Hello
    helloTextarea,
    onHelloChange,
    // General Info
    nameInputText, 
    onNameChange, 
    emailInputText, 
    onEmailChange, 
    phoneInputText, 
    onPhoneChange, 
    addressInputText, 
    onAddressChange, 
    postalCodeInputText, 
    onPostalCodeChange,
    cityInputText, 
    onCityChange, 
    countryInputText, 
    onCountryChange, 
    birthDateInputText,
    onBirthDateChange, 
    genderInputText, 
    onGenderChange, 
    photoImage,
    onPhotoChange,
    // Education
    schoolInputText,
    onSchoolChange,
    studiesTitleInputText,
    onStudiesTitleChange,
    studiesStartDateSelect,
    onStudiesStartDateChange,
    studiesEndDateSelect,
    onStudiesEndDateChange,
    studiesDescriptionInputText,
    onStudiesDescriptionChange,
    studies,
    onAddStudiesClick,
    moreStudiesClicked,
    onSaveStudiesClick,
    onDeleteStudiesClick,
    onEditStudiesClick,
    // Experience
    companyInputText,
    onCompanyChange,
    jobPositionInputText,
    onJobPositionChange,
    jobStartDateSelect,
    onJobStartDateChange,
    jobEndDateSelect,
    onJobEndDateChange,
    jobDescriptionInputText,
    onJobDescriptionChange,
    jobs,
    onAddJobClick,
    moreJobsClicked,
    onSaveJobClick,
    onDeleteJobClick,
    onEditJobClick,
    // Skills
    skillNameInputText,
    onSkillNameChange,
    skillLevelRadio,
    onSkillLevelChange,
    skills,
    onAddSkillClick,
    moreSkillsClicked,
    onSaveSkillClick,
    onDeleteSkillClick,
    onEditSkillClick,
    // Contact
    xInputText,
    onXChange,
    xInputEnabled,
    onXCheckboxChange,
    instagramInputText,
    onInstagramChange,
    instagramInputEnabled,
    onInstagramCheckboxChange,
    linkedinInputText,
    onLinkedinChange,
    linkedinInputEnabled,
    onLinkedinCheckboxChange,
    githubInputText,
    onGithubChange,
    githubInputEnabled,
    onGithubCheckboxChange,
    youtubeInputText,
    onYoutubeChange,
    youtubeInputEnabled,
    onYoutubeCheckboxChange,
    dribbbleInputText,
    onDribbbleChange,
    dribbbleInputEnabled,
    onDribbbleCheckboxChange,
    behanceInputText,
    onBehanceChange,
    behanceInputEnabled,
    onBehanceCheckboxChange,
    twitchInputText,
    onTwitchChange,
    twitchInputEnabled,
    onTwitchCheckboxChange,
    // Hobbies
    travelingInputChecked,
    onTravelingCheckboxChange,
    musicInputChecked,
    onMusicCheckboxChange,
    readingInputChecked,
    onReadingCheckboxChange,
    gamingInputChecked,
    onGamingCheckboxChange,
    bicyclingInputChecked,
    onBicyclingCheckboxChange,
    runningInputChecked,
    onRunningCheckboxChange,
    cookingInputChecked,
    onCookingCheckboxChange,
    shoppingInputChecked,
    onShoppingCheckboxChange,
    dancingInputChecked,
    onDancingCheckboxChange,
    swimmingInputChecked,
    onSwimmingCheckboxChange,
    paintingInputChecked,
    onPaintingCheckboxChange,
    photographyInputChecked,
    onPhotographyCheckboxChange,
    fishingInputChecked,
    onFishingCheckboxChange,
    hikingInputChecked,
    onHikingCheckboxChange,
    yogaInputChecked,
    onYogaCheckboxChange,
    surfingInputChecked,
    onSurfingCheckboxChange,
    skiingInputChecked,
    onSkiingCheckboxChange,
    gymInputChecked,
    onGymCheckboxChange,
    moviesInputChecked,
    onMoviesCheckboxChange,
    ballSportsInputChecked,
    onBallSportsCheckboxChange
}) {
    
    const sections = SECTION_DATA.map((section, index) => {
        
        let classesToApply = ''

        if (index == cuSection) {
            if (index > previousSection) {
                classesToApply = 'section slide-in-right'
            } else if (index < previousSection) {
                classesToApply = 'section slide-in-left'
            } else {
                classesToApply = 'section'
            }
        } else if (index < cuSection) {
            classesToApply = 'section slide-out-left'
        } else if (index > cuSection) {
            classesToApply = 'section slide-out-right'
        }

        // If the section id is 'generalInfo', then we want to pass the nameInputText and onNameChange props to the FormSection component
        if (section.id == 'hello') {
            return (
                <FormSection
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={classesToApply} 
                    fields={section.fields} 
                    helloTextarea={helloTextarea} 
                    onHelloChange={onHelloChange} 
                    onNextClick={onNextClick} 
                />
            )
        } else if (section.id == 'generalInfo') {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={classesToApply} 
                    fields={section.fields} 
                    nameInputText={nameInputText}
                    onNameChange={onNameChange} 
                    emailInputText={emailInputText} 
                    onEmailChange={onEmailChange} 
                    phoneInputText={phoneInputText} 
                    onPhoneChange={onPhoneChange} 
                    addressInputText={addressInputText} 
                    onAddressChange={onAddressChange} 
                    postalCodeInputText={postalCodeInputText} 
                    onPostalCodeChange={onPostalCodeChange} 
                    cityInputText={cityInputText} 
                    onCityChange={onCityChange} 
                    countryInputText={countryInputText} 
                    onCountryChange={onCountryChange} 
                    birthDateInputText={birthDateInputText} 
                    onBirthDateChange={onBirthDateChange} 
                    genderInputText={genderInputText} 
                    onGenderChange={onGenderChange} 
                    photoImage={photoImage} 
                    onPhotoChange={onPhotoChange} 
                    onPreviousClick={onPreviousClick} 
                    onNextClick={onNextClick}
                />
            )
        } else if (section.id == 'education') {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={classesToApply} 
                    fields={section.fields} 
                    schoolInputText={schoolInputText} 
                    onSchoolChange={onSchoolChange} 
                    studiesTitleInputText={studiesTitleInputText} 
                    onStudiesTitleChange={onStudiesTitleChange} 
                    studiesStartDateSelect={studiesStartDateSelect} 
                    onStudiesStartDateChange={onStudiesStartDateChange} 
                    studiesEndDateSelect={studiesEndDateSelect} 
                    onStudiesEndDateChange={onStudiesEndDateChange} 
                    studiesDescriptionInputText={studiesDescriptionInputText} 
                    onStudiesDescriptionChange={onStudiesDescriptionChange} 
                    studies={studies} 
                    onPreviousClick={onPreviousClick} 
                    onNextClick={onNextClick} 
                    onAddStudiesClick={onAddStudiesClick} 
                    moreStudiesClicked={moreStudiesClicked} 
                    onSaveStudiesClick={onSaveStudiesClick} 
                    onDeleteStudiesClick={onDeleteStudiesClick} 
                    onEditStudiesClick={onEditStudiesClick} 
                />
            )
        } else if (section.id == 'practicalExp') {
            return ( 
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={classesToApply} 
                    fields={section.fields} 
                    companyInputText={companyInputText} 
                    onCompanyChange={onCompanyChange} 
                    jobPositionInputText={jobPositionInputText} 
                    onJobPositionChange={onJobPositionChange} 
                    jobStartDateSelect={jobStartDateSelect} 
                    onJobStartDateChange={onJobStartDateChange} 
                    jobEndDateSelect={jobEndDateSelect} 
                    onJobEndDateChange={onJobEndDateChange} 
                    jobDescriptionInputText={jobDescriptionInputText} 
                    onJobDescriptionChange={onJobDescriptionChange} 
                    jobs={jobs} 
                    onPreviousClick={onPreviousClick} 
                    onNextClick={onNextClick} 
                    onAddJobClick={onAddJobClick} 
                    moreJobsClicked={moreJobsClicked} 
                    onSaveJobClick={onSaveJobClick} 
                    onDeleteJobClick={onDeleteJobClick} 
                    onEditJobClick={onEditJobClick} 
                />
            )
        } else if (section.id == 'skills') {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={classesToApply} 
                    fields={section.fields} 
                    skillNameInputText={skillNameInputText} 
                    onSkillNameChange={onSkillNameChange} 
                    skillLevelRadio={skillLevelRadio} 
                    onSkillLevelChange={onSkillLevelChange} 
                    skills={skills} 
                    onPreviousClick={onPreviousClick} 
                    onNextClick={onNextClick} 
                    onAddSkillClick={onAddSkillClick} 
                    moreSkillsClicked={moreSkillsClicked} 
                    onSaveSkillClick={onSaveSkillClick} 
                    onDeleteSkillClick={onDeleteSkillClick} 
                    onEditSkillClick={onEditSkillClick} 
                />
            )
        } else if (section.id == 'contact') {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={classesToApply} 
                    fields={section.fields} 
                    xInputText={xInputText} 
                    onXChange={onXChange} 
                    xInputEnabled={xInputEnabled} 
                    onXCheckboxChange={onXCheckboxChange} 
                    instagramInputText={instagramInputText} 
                    onInstagramChange={onInstagramChange} 
                    instagramInputEnabled={instagramInputEnabled} 
                    onInstagramCheckboxChange={onInstagramCheckboxChange} 
                    linkedinInputText={linkedinInputText} 
                    onLinkedinChange={onLinkedinChange} 
                    linkedinInputEnabled={linkedinInputEnabled} 
                    onLinkedinCheckboxChange={onLinkedinCheckboxChange} 
                    githubInputText={githubInputText} 
                    onGithubChange={onGithubChange} 
                    githubInputEnabled={githubInputEnabled} 
                    onGithubCheckboxChange={onGithubCheckboxChange} 
                    youtubeInputText={youtubeInputText} 
                    onYoutubeChange={onYoutubeChange} 
                    youtubeInputEnabled={youtubeInputEnabled} 
                    onYoutubeCheckboxChange={onYoutubeCheckboxChange} 
                    dribbbleInputText={dribbbleInputText} 
                    onDribbbleChange={onDribbbleChange} 
                    dribbbleInputEnabled={dribbbleInputEnabled} 
                    onDribbbleCheckboxChange={onDribbbleCheckboxChange} 
                    behanceInputText={behanceInputText} 
                    onBehanceChange={onBehanceChange} 
                    behanceInputEnabled={behanceInputEnabled} 
                    onBehanceCheckboxChange={onBehanceCheckboxChange} 
                    twitchInputText={twitchInputText} 
                    onTwitchChange={onTwitchChange} 
                    twitchInputEnabled={twitchInputEnabled} 
                    onTwitchCheckboxChange={onTwitchCheckboxChange} 
                    onPreviousClick={onPreviousClick} 
                    onNextClick={onNextClick} 
                />
            )
        } else if (section.id == 'hobbies') {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={classesToApply} 
                    fields={section.fields} 
                    travelingInputChecked={travelingInputChecked} 
                    onTravelingCheckboxChange={onTravelingCheckboxChange} 
                    musicInputChecked={musicInputChecked} 
                    onMusicCheckboxChange={onMusicCheckboxChange} 
                    readingInputChecked={readingInputChecked} 
                    onReadingCheckboxChange={onReadingCheckboxChange} 
                    gamingInputChecked={gamingInputChecked} 
                    onGamingCheckboxChange={onGamingCheckboxChange} 
                    bicyclingInputChecked={bicyclingInputChecked} 
                    onBicyclingCheckboxChange={onBicyclingCheckboxChange} 
                    runningInputChecked={runningInputChecked} 
                    onRunningCheckboxChange={onRunningCheckboxChange} 
                    cookingInputChecked={cookingInputChecked} 
                    onCookingCheckboxChange={onCookingCheckboxChange} 
                    shoppingInputChecked={shoppingInputChecked} 
                    onShoppingCheckboxChange={onShoppingCheckboxChange} 
                    dancingInputChecked={dancingInputChecked} 
                    onDancingCheckboxChange={onDancingCheckboxChange} 
                    swimmingInputChecked={swimmingInputChecked} 
                    onSwimmingCheckboxChange={onSwimmingCheckboxChange} 
                    paintingInputChecked={paintingInputChecked} 
                    onPaintingCheckboxChange={onPaintingCheckboxChange} 
                    photographyInputChecked={photographyInputChecked} 
                    onPhotographyCheckboxChange={onPhotographyCheckboxChange} 
                    fishingInputChecked={fishingInputChecked} 
                    onFishingCheckboxChange={onFishingCheckboxChange} 
                    hikingInputChecked={hikingInputChecked} 
                    onHikingCheckboxChange={onHikingCheckboxChange} 
                    yogaInputChecked={yogaInputChecked} 
                    onYogaCheckboxChange={onYogaCheckboxChange} 
                    surfingInputChecked={surfingInputChecked} 
                    onSurfingCheckboxChange={onSurfingCheckboxChange} 
                    skiingInputChecked={skiingInputChecked} 
                    onSkiingCheckboxChange={onSkiingCheckboxChange} 
                    gymInputChecked={gymInputChecked} 
                    onGymCheckboxChange={onGymCheckboxChange} 
                    moviesInputChecked={moviesInputChecked} 
                    onMoviesCheckboxChange={onMoviesCheckboxChange} 
                    ballSportsInputChecked={ballSportsInputChecked} 
                    onBallSportsCheckboxChange={onBallSportsCheckboxChange} 
                    onPreviousClick={onPreviousClick} 
                    onFinishClick={onFinishClick} 
                />
            )
        }
    })

    return (
        <div className='form' style={{display: formDivVisibility}}>
            {sections}
        </div>
    )
}

CVForm.propTypes = {
    previousSection: PropTypes.number.isRequired,
    cuSection: PropTypes.number.isRequired,
    onPreviousClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onFinishClick: PropTypes.func.isRequired,
    formDivVisibility: PropTypes.string.isRequired,
    // Hello prop types
    helloTextarea: PropTypes.string.isRequired,
    onHelloChange: PropTypes.func.isRequired,
    // General Info prop types
    nameInputText: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    emailInputText: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    phoneInputText: PropTypes.string.isRequired,
    onPhoneChange: PropTypes.func.isRequired,
    addressInputText: PropTypes.string.isRequired,
    onAddressChange: PropTypes.func.isRequired,
    postalCodeInputText: PropTypes.string.isRequired,
    onPostalCodeChange: PropTypes.func.isRequired,
    cityInputText: PropTypes.string.isRequired,
    onCityChange: PropTypes.func.isRequired,
    countryInputText: PropTypes.string.isRequired,
    onCountryChange: PropTypes.func.isRequired,
    birthDateInputText: PropTypes.string.isRequired,
    onBirthDateChange: PropTypes.func.isRequired,
    genderInputText: PropTypes.string.isRequired,
    onGenderChange: PropTypes.func.isRequired,
    photoImage: PropTypes.string,
    onPhotoChange: PropTypes.func.isRequired,
    // Education prop types
    schoolInputText: PropTypes.string.isRequired,
    onSchoolChange: PropTypes.func.isRequired,
    studiesTitleInputText: PropTypes.string.isRequired,
    onStudiesTitleChange: PropTypes.func.isRequired,
    studiesStartDateSelect: PropTypes.string.isRequired,
    onStudiesStartDateChange: PropTypes.func.isRequired,
    studiesEndDateSelect: PropTypes.string.isRequired,
    onStudiesEndDateChange: PropTypes.func.isRequired,
    studiesDescriptionInputText: PropTypes.string.isRequired,
    onStudiesDescriptionChange: PropTypes.func.isRequired,
    studies: PropTypes.array.isRequired,
    onAddStudiesClick: PropTypes.func.isRequired,
    moreStudiesClicked: PropTypes.bool.isRequired,
    onSaveStudiesClick: PropTypes.func.isRequired,
    onDeleteStudiesClick: PropTypes.func.isRequired,
    onEditStudiesClick: PropTypes.func.isRequired,
    // Experience prop types
    companyInputText: PropTypes.string.isRequired,
    onCompanyChange: PropTypes.func.isRequired,
    jobPositionInputText: PropTypes.string.isRequired,
    onJobPositionChange: PropTypes.func.isRequired,
    jobStartDateSelect: PropTypes.string.isRequired,
    onJobStartDateChange: PropTypes.func.isRequired,
    jobEndDateSelect: PropTypes.string.isRequired,
    onJobEndDateChange: PropTypes.func.isRequired,
    jobDescriptionInputText: PropTypes.string.isRequired,
    onJobDescriptionChange: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired,
    onAddJobClick: PropTypes.func.isRequired,
    moreJobsClicked: PropTypes.bool.isRequired,
    onSaveJobClick: PropTypes.func.isRequired,
    onDeleteJobClick: PropTypes.func.isRequired,
    onEditJobClick: PropTypes.func.isRequired,
    // Skills prop types
    skillNameInputText: PropTypes.string.isRequired,
    onSkillNameChange: PropTypes.func.isRequired,
    skillLevelRadio: PropTypes.string.isRequired,
    onSkillLevelChange: PropTypes.func.isRequired,
    skills: PropTypes.array.isRequired,
    onAddSkillClick: PropTypes.func.isRequired,
    moreSkillsClicked: PropTypes.bool.isRequired,
    onSaveSkillClick: PropTypes.func.isRequired,
    onDeleteSkillClick: PropTypes.func.isRequired,
    onEditSkillClick: PropTypes.func.isRequired,
    // Contact prop types
    xInputText: PropTypes.string.isRequired,
    onXChange: PropTypes.func.isRequired,
    xInputEnabled: PropTypes.bool.isRequired,
    onXCheckboxChange: PropTypes.func.isRequired,
    instagramInputText: PropTypes.string.isRequired,
    onInstagramChange: PropTypes.func.isRequired,
    instagramInputEnabled: PropTypes.bool.isRequired,
    onInstagramCheckboxChange: PropTypes.func.isRequired,
    linkedinInputText: PropTypes.string.isRequired,
    onLinkedinChange: PropTypes.func.isRequired,
    linkedinInputEnabled: PropTypes.bool.isRequired,
    onLinkedinCheckboxChange: PropTypes.func.isRequired,
    githubInputText: PropTypes.string.isRequired,
    onGithubChange: PropTypes.func.isRequired,
    githubInputEnabled: PropTypes.bool.isRequired,
    onGithubCheckboxChange: PropTypes.func.isRequired,
    youtubeInputText: PropTypes.string.isRequired,
    onYoutubeChange: PropTypes.func.isRequired,
    youtubeInputEnabled: PropTypes.bool.isRequired,
    onYoutubeCheckboxChange: PropTypes.func.isRequired,
    dribbbleInputText: PropTypes.string.isRequired,
    onDribbbleChange: PropTypes.func.isRequired,
    dribbbleInputEnabled: PropTypes.bool.isRequired,
    onDribbbleCheckboxChange: PropTypes.func.isRequired,
    behanceInputText: PropTypes.string.isRequired,
    onBehanceChange: PropTypes.func.isRequired,
    behanceInputEnabled: PropTypes.bool.isRequired,
    onBehanceCheckboxChange: PropTypes.func.isRequired,
    twitchInputText: PropTypes.string.isRequired,
    onTwitchChange: PropTypes.func.isRequired,
    twitchInputEnabled: PropTypes.bool.isRequired,
    onTwitchCheckboxChange: PropTypes.func.isRequired,
    // Hobbies prop types
    travelingInputChecked: PropTypes.bool.isRequired,
    onTravelingCheckboxChange: PropTypes.func.isRequired,
    musicInputChecked: PropTypes.bool.isRequired,
    onMusicCheckboxChange: PropTypes.func.isRequired,
    readingInputChecked: PropTypes.bool.isRequired,
    onReadingCheckboxChange: PropTypes.func.isRequired,
    gamingInputChecked: PropTypes.bool.isRequired,
    onGamingCheckboxChange: PropTypes.func.isRequired,
    bicyclingInputChecked: PropTypes.bool.isRequired,
    onBicyclingCheckboxChange: PropTypes.func.isRequired,
    runningInputChecked: PropTypes.bool.isRequired,
    onRunningCheckboxChange: PropTypes.func.isRequired,
    cookingInputChecked: PropTypes.bool.isRequired,
    onCookingCheckboxChange: PropTypes.func.isRequired,
    shoppingInputChecked: PropTypes.bool.isRequired,
    onShoppingCheckboxChange: PropTypes.func.isRequired,
    dancingInputChecked: PropTypes.bool.isRequired,
    onDancingCheckboxChange: PropTypes.func.isRequired,
    swimmingInputChecked: PropTypes.bool.isRequired,
    onSwimmingCheckboxChange: PropTypes.func.isRequired,
    paintingInputChecked: PropTypes.bool.isRequired,
    onPaintingCheckboxChange: PropTypes.func.isRequired,
    photographyInputChecked: PropTypes.bool.isRequired,
    onPhotographyCheckboxChange: PropTypes.func.isRequired,
    fishingInputChecked: PropTypes.bool.isRequired,
    onFishingCheckboxChange: PropTypes.func.isRequired,
    hikingInputChecked: PropTypes.bool.isRequired,
    onHikingCheckboxChange: PropTypes.func.isRequired,
    yogaInputChecked: PropTypes.bool.isRequired,
    onYogaCheckboxChange: PropTypes.func.isRequired,
    surfingInputChecked: PropTypes.bool.isRequired,
    onSurfingCheckboxChange: PropTypes.func.isRequired,
    skiingInputChecked: PropTypes.bool.isRequired,
    onSkiingCheckboxChange: PropTypes.func.isRequired,
    gymInputChecked: PropTypes.bool.isRequired,
    onGymCheckboxChange: PropTypes.func.isRequired,
    moviesInputChecked: PropTypes.bool.isRequired,
    onMoviesCheckboxChange: PropTypes.func.isRequired,
    ballSportsInputChecked: PropTypes.bool.isRequired,
    onBallSportsCheckboxChange: PropTypes.func.isRequired
}

export default CVForm