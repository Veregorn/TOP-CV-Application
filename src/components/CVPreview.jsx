import '../styles/CVPreview.css'
import PreviewSection from './PreviewSection'
import PropTypes from 'prop-types'
import SECTION_DATA from '../assets/data'
import Button from './Button'

function CVPreview({ 
    editButtonVisibility,
    saveButtonVisibility,
    onEditClick,
    onSaveClick,
    documentSaved,
    // General information props
    namePreviewText, 
    emailPreviewText,
    phonePreviewText,
    addressPreviewText,
    postalCodeInputText,
    cityPreviewText,
    countryPreviewText,
    birthDatePreviewText,
    genderPreviewText,
    photoImage,
    // Education props
    schoolPreviewText,
    studiesTitlePreviewText,
    studiesStartDatePreviewText,
    studiesEndDatePreviewText,
    studiesDescriptionPreviewText,
    studies,
    // Experience props
    companyPreviewText,
    jobPositionPreviewText,
    jobStartDatePreviewText,
    jobEndDatePreviewText,
    jobDescriptionPreviewText,
    jobs,
    // Skills props
    skillNamePreviewText,
    skillLevelPreviewText,
    skills,
    // Contact props
    xPreviewText,
    instagramPreviewText,
    linkedinPreviewText,
    githubPreviewText,
    youtubePreviewText,
    dribbblePreviewText,
    behancePreviewText,
    twitchPreviewText,
    // Hobbies props
    travelingPreviewChecked,
    musicPreviewChecked,
    readingPreviewChecked,
    gamingPreviewChecked,
    bicyclingPreviewChecked,
    runningPreviewChecked,
    cookingPreviewChecked,
    shoppingPreviewChecked,
    dancingPreviewChecked,
    swimmingPreviewChecked,
    paintingPreviewChecked,
    photographyPreviewChecked,
    fishingPreviewChecked,
    hikingPreviewChecked,
    yogaPreviewChecked,
    surfingPreviewChecked,
    skiingPreviewChecked,
    gymPreviewChecked
}) {
    
    const sections = SECTION_DATA.map((section) => {
        
        // If the section id is 'generalInfo', then we want to pass the namePreviewText and onNameChange props to the PreviewSection component
        if (section.id == 'generalInfo') {
            return (
                <PreviewSection 
                    key={section.id + ('-preview')}
                    title={section.longTitle} 
                    fields={section.fields} 
                    namePreviewText={namePreviewText}
                    emailPreviewText={emailPreviewText}
                    phonePreviewText={phonePreviewText} 
                    addressPreviewText={addressPreviewText} 
                    postalCodeInputText={postalCodeInputText} 
                    cityPreviewText={cityPreviewText} 
                    countryPreviewText={countryPreviewText} 
                    birthDatePreviewText={birthDatePreviewText} 
                    genderPreviewText={genderPreviewText} 
                    photoImage={photoImage} 
                />
            )
        } else if (section.id == 'education') {
            return (
                <PreviewSection 
                    key={section.id + ('-preview')} 
                    title={section.longTitle} 
                    fields={section.fields} 
                    schoolPreviewText={schoolPreviewText} 
                    studiesTitlePreviewText={studiesTitlePreviewText} 
                    studiesStartDatePreviewText={studiesStartDatePreviewText} 
                    studiesEndDatePreviewText={studiesEndDatePreviewText} 
                    studiesDescriptionPreviewText={studiesDescriptionPreviewText} 
                    studies={studies} 
                />
            )
        } else if (section.id == 'practicalExp') {
            return (
                <PreviewSection 
                    key={section.id + ('-preview')} 
                    title={section.longTitle} 
                    fields={section.fields} 
                    companyPreviewText={companyPreviewText} 
                    jobPositionPreviewText={jobPositionPreviewText} 
                    jobStartDatePreviewText={jobStartDatePreviewText} 
                    jobEndDatePreviewText={jobEndDatePreviewText} 
                    jobDescriptionPreviewText={jobDescriptionPreviewText} 
                    jobs={jobs} 
                />
            )
        } else if (section.id == 'skills') {
            return (
                <PreviewSection 
                    key={section.id + ('-preview')} 
                    title={section.longTitle} 
                    fields={section.fields} 
                    skillNamePreviewText={skillNamePreviewText} 
                    skillLevelPreviewText={skillLevelPreviewText} 
                    skills={skills} 
                />
            )
        } else if (section.id == 'contact') {
            return (
                <PreviewSection
                    key={section.id + ('-preview')} 
                    title={section.longTitle} 
                    fields={section.fields} 
                    xPreviewText={xPreviewText} 
                    instagramPreviewText={instagramPreviewText} 
                    linkedinPreviewText={linkedinPreviewText} 
                    githubPreviewText={githubPreviewText} 
                    youtubePreviewText={youtubePreviewText} 
                    dribbblePreviewText={dribbblePreviewText} 
                    behancePreviewText={behancePreviewText} 
                    twitchPreviewText={twitchPreviewText} 
                />
            )
        } else if (section.id == 'hobbies') {
            return (
                <PreviewSection 
                    key={section.id + ('-preview')} 
                    title={section.longTitle} 
                    fields={section.fields} 
                    travelingPreviewChecked={travelingPreviewChecked} 
                    musicPreviewChecked={musicPreviewChecked} 
                    readingPreviewChecked={readingPreviewChecked} 
                    gamingPreviewChecked={gamingPreviewChecked} 
                    bicyclingPreviewChecked={bicyclingPreviewChecked} 
                    runningPreviewChecked={runningPreviewChecked} 
                    cookingPreviewChecked={cookingPreviewChecked} 
                    shoppingPreviewChecked={shoppingPreviewChecked} 
                    dancingPreviewChecked={dancingPreviewChecked} 
                    swimmingPreviewChecked={swimmingPreviewChecked} 
                    paintingPreviewChecked={paintingPreviewChecked} 
                    photographyPreviewChecked={photographyPreviewChecked} 
                    fishingPreviewChecked={fishingPreviewChecked} 
                    hikingPreviewChecked={hikingPreviewChecked} 
                    yogaPreviewChecked={yogaPreviewChecked} 
                    surfingPreviewChecked={surfingPreviewChecked} 
                    skiingPreviewChecked={skiingPreviewChecked} 
                    gymPreviewChecked={gymPreviewChecked} 
                />
            )
        }
    })

    if (documentSaved) {
        return (
            <div className='preview'>
                <p>Your CV has been saved in your default downloads folder as a JSON file!</p>
            </div>
        )
    } else {
        return (
            <div className='preview'>
                {sections}
                <Button text='Edit' visibility={editButtonVisibility} onClick={onEditClick}/>
                <Button text='Save' visibility={saveButtonVisibility} onClick={onSaveClick}/>
            </div>
        )
    }
    
}

CVPreview.propTypes = {
    editButtonVisibility: PropTypes.string.isRequired,
    saveButtonVisibility: PropTypes.string.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    documentSaved: PropTypes.bool.isRequired,
    // General information props
    namePreviewText: PropTypes.string.isRequired,
    emailPreviewText: PropTypes.string.isRequired,
    phonePreviewText: PropTypes.string.isRequired,
    addressPreviewText: PropTypes.string.isRequired,
    postalCodeInputText: PropTypes.string.isRequired,
    cityPreviewText: PropTypes.string.isRequired,
    countryPreviewText: PropTypes.string.isRequired,
    birthDatePreviewText: PropTypes.string.isRequired,
    genderPreviewText: PropTypes.string.isRequired,
    photoImage: PropTypes.string,
    // Education props
    schoolPreviewText: PropTypes.string.isRequired,
    studiesTitlePreviewText: PropTypes.string.isRequired,
    studiesStartDatePreviewText: PropTypes.string.isRequired,
    studiesEndDatePreviewText: PropTypes.string.isRequired,
    studiesDescriptionPreviewText: PropTypes.string.isRequired,
    studies: PropTypes.array.isRequired,
    // Experience props
    companyPreviewText: PropTypes.string.isRequired,
    jobPositionPreviewText: PropTypes.string.isRequired,
    jobStartDatePreviewText: PropTypes.string.isRequired,
    jobEndDatePreviewText: PropTypes.string.isRequired,
    jobDescriptionPreviewText: PropTypes.string.isRequired,
    jobs: PropTypes.array.isRequired,
    // Skills props
    skillNamePreviewText: PropTypes.string.isRequired,
    skillLevelPreviewText: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    // Contact props
    xPreviewText: PropTypes.string.isRequired,
    instagramPreviewText: PropTypes.string.isRequired,
    linkedinPreviewText: PropTypes.string.isRequired,
    githubPreviewText: PropTypes.string.isRequired,
    youtubePreviewText: PropTypes.string.isRequired,
    dribbblePreviewText: PropTypes.string.isRequired,
    behancePreviewText: PropTypes.string.isRequired,
    twitchPreviewText: PropTypes.string.isRequired,
    // Hobbies props
    travelingPreviewChecked: PropTypes.bool.isRequired,
    musicPreviewChecked: PropTypes.bool.isRequired,
    readingPreviewChecked: PropTypes.bool.isRequired,
    gamingPreviewChecked: PropTypes.bool.isRequired,
    bicyclingPreviewChecked: PropTypes.bool.isRequired,
    runningPreviewChecked: PropTypes.bool.isRequired,
    cookingPreviewChecked: PropTypes.bool.isRequired,
    shoppingPreviewChecked: PropTypes.bool.isRequired,
    dancingPreviewChecked: PropTypes.bool.isRequired,
    swimmingPreviewChecked: PropTypes.bool.isRequired,
    paintingPreviewChecked: PropTypes.bool.isRequired,
    photographyPreviewChecked: PropTypes.bool.isRequired,
    fishingPreviewChecked: PropTypes.bool.isRequired,
    hikingPreviewChecked: PropTypes.bool.isRequired,
    yogaPreviewChecked: PropTypes.bool.isRequired,
    surfingPreviewChecked: PropTypes.bool.isRequired,
    skiingPreviewChecked: PropTypes.bool.isRequired,
    gymPreviewChecked: PropTypes.bool.isRequired
}

export default CVPreview