import '../styles/PreviewSection.css'
import CVFieldPreview from './CVFieldPreview'
import PropTypes from 'prop-types'

function PreviewSection({ 
    title, 
    fields,
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
    // Education props
    schoolPreviewText,
    studiesTitlePreviewText,
    studiesStartDatePreviewText,
    studiesEndDatePreviewText,
    studiesDescriptionPreviewText,
    studies,
    // Practical experience props
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
    gymPreviewChecked,
    moviesPreviewChecked,
    ballSportsPreviewChecked
 }) {

    const sectionFields = fields.map((field) => {
        // General information fields
        if (field.id == 'gi-name') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={namePreviewText} 
                />
            )
        } else if (field.id == 'gi-email') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={emailPreviewText} 
                />
            )
        } else if (field.id == 'gi-phone') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={phonePreviewText} 
                />
            )
        } else if (field.id == 'gi-address') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={addressPreviewText} 
                />
            )
        } else if (field.id == 'gi-postal') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={postalCodeInputText} 
                />
            )
        } else if (field.id == 'gi-city') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={cityPreviewText} 
                />
            )
        } else if (field.id == 'gi-country') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={countryPreviewText} 
                />
            )
        } else if (field.id == 'gi-birth') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={birthDatePreviewText} 
                />
            )
        } else if (field.id == 'gi-gender') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={genderPreviewText} 
                />
            )
        }
        // Education fields
        else if (field.id == 'ed-school') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={schoolPreviewText} 
                />
            )
        } else if (field.id == 'ed-study-title') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesTitlePreviewText} 
                />
            )
        } else if (field.id == 'ed-start-date') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesStartDatePreviewText} 
                />
            )
        } else if (field.id == 'ed-end-date') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesEndDatePreviewText} 
                />
            )
        } else if (field.id == 'ed-description') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesDescriptionPreviewText} 
                />
            )
        }
        // Practical experience fields
        else if (field.id == 'exp-company') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={companyPreviewText} 
                />
            )
        } else if (field.id == 'exp-job-position') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={jobPositionPreviewText} 
                />
            )
        } else if (field.id == 'exp-start-date') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={jobStartDatePreviewText} 
                />
            )
        } else if (field.id == 'exp-end-date') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={jobEndDatePreviewText} 
                />
            )
        } else if (field.id == 'exp-description') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={jobDescriptionPreviewText} 
                />
            )
        }
        // Skills fields
        else if (field.id == 'sk-name') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={skillNamePreviewText} 
                />
            )
        } else if (field.id == 'sk-level') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={skillLevelPreviewText} 
                />
            )
        // Contact fields
        } else if (field.id == 'x') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={xPreviewText} 
                    serviceURL='www.twitter.com' 
                    imageURL={field.imageURL} 
                />
            )
        } else if (field.id == 'instagram') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={instagramPreviewText} 
                    serviceURL='www.instagram.com' 
                    imageURL={field.imageURL} 
                />
            )
        } else if (field.id == 'linkedin') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={linkedinPreviewText} 
                    serviceURL='www.linkedin.com/in' 
                    imageURL={field.imageURL} 
                />
            )
        }
        else if (field.id == 'github') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={githubPreviewText} 
                    serviceURL='www.github.com' 
                    imageURL={field.imageURL} 
                />
            )
        }
        else if (field.id == 'youtube') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={youtubePreviewText} 
                    serviceURL='www.youtube.com' 
                    imageURL={field.imageURL} 
                />
            )
        }
        else if (field.id == 'dribbble') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={dribbblePreviewText} 
                    serviceURL='www.dribbble.com'
                    imageURL={field.imageURL} 
                />
            )
        }
        else if (field.id == 'behance') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={behancePreviewText} 
                    serviceURL='www.behance.com' 
                    imageURL={field.imageURL} 
                />
            )
        }
        else if (field.id == 'twitch') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    value={twitchPreviewText} 
                    serviceURL='www.twitch.tv' 
                    imageURL={field.imageURL} 
                />
            )
        }
        // Hobbies fields
        else if (field.id == 'traveling' && travelingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'music' && musicPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'reading' && readingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'gaming' && gamingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'bicycling' && bicyclingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'running' && runningPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'cooking' && cookingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'shopping' && shoppingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'dancing' && dancingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL} 
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'swimming' && swimmingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'painting' && paintingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'photography' && photographyPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'fishing' && fishingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'hiking' && hikingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'yoga' && yogaPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')}
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'surfing' && surfingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'skiing' && skiingPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'gym' && gymPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'movies' && moviesPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
        else if (field.id == 'ball-sports' && ballSportsPreviewChecked) {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')}  
                    id={field.id + ('-preview')} 
                    imageURL={field.imageURL}
                    value={field.imageAlt} 
                />
            )
        }
    })
        
    const studiesFields = studies ? studies.map((study) => {
        return (
            <div key={study.id + ('-preview')} className='study-preview'>
                <div className='dates'>
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.startDate} 
                    />
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.endDate} 
                    />
                </div>
                <div className='study-info'>
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.school} 
                    />
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.title} 
                    />
                    
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.description} 
                    />
                </div>
            </div>
        )
    }) : null

    const jobsFields = jobs ? jobs.map((job) => {
        return (
            <div key={job.id + ('-preview')} className='job-preview'>
                <div className='dates'>
                    <CVFieldPreview 
                        id={job.id + ('-preview')}
                        value={job.startDate} 
                    />
                    <CVFieldPreview 
                        id={job.id + ('-preview')}
                        value={job.endDate} 
                    />
                </div>
                <div className='job-info'>
                    <CVFieldPreview 
                        id={job.id + ('-preview')}
                        value={job.company} 
                    />
                    <CVFieldPreview 
                        id={job.id + ('-preview')}
                        value={job.position} 
                    />
                    <CVFieldPreview 
                        id={job.id + ('-preview')}
                        value={job.description} 
                    />
                </div>
            </div>
        )
    }) : null

    const skillsFields = skills ? skills.map((skill) => {
        return (
            <div key={skill.id + ('-preview')} className='skill-preview'>
                <CVFieldPreview 
                    id={skill.id + ('-preview')}
                    value={skill.name} 
                />
                <CVFieldPreview 
                    id={('skill-level-') + skill.id + ('-preview')}
                    value={skill.level} 
                />
            </div>
        )
    } ) : null
        
    if (skills) {
        return (
            <div className='preview-section'>
                <h3>{title}</h3>
                {studies && studiesFields}
                {jobs && jobsFields}
                <div className='skills-container'>
                    {skills && skillsFields}
                </div>
            </div>
        )
    } else if (title == 'Hobbies') {
        return (
            <div className='preview-section'>
                <h3>{title}</h3>
                <div className='hobbies-container'>
                    {sectionFields}
                </div>
            </div>
        )
    } else if (title == 'General Info') {
        return (
            <div className='preview-section'>
                <h3>{title}</h3>
                <div className='general-information-container'>
                    {sectionFields}
                </div>
            </div>
        )
    } else {
        return (
            <div className='preview-section'>
                <h3>{title}</h3>
                {studies && studiesFields}
                {jobs && jobsFields}
                {sectionFields}
            </div>
        )
    }
}

PreviewSection.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool
    })).isRequired,
    // General information props
    namePreviewText: PropTypes.string,
    emailPreviewText: PropTypes.string,
    phonePreviewText: PropTypes.string,
    addressPreviewText: PropTypes.string,
    postalCodeInputText: PropTypes.string,
    cityPreviewText: PropTypes.string,
    countryPreviewText: PropTypes.string,
    birthDatePreviewText: PropTypes.string,
    genderPreviewText: PropTypes.string,
    // Education props
    schoolPreviewText: PropTypes.string,
    studiesTitlePreviewText: PropTypes.string,
    studiesStartDatePreviewText: PropTypes.string,
    studiesEndDatePreviewText: PropTypes.string,
    studiesDescriptionPreviewText: PropTypes.string,
    studies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        school: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    // Practical experience props
    companyPreviewText: PropTypes.string,
    jobPositionPreviewText: PropTypes.string,
    jobStartDatePreviewText: PropTypes.string,
    jobEndDatePreviewText: PropTypes.string,
    jobDescriptionPreviewText: PropTypes.string,
    jobs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    // Skills props
    skillNamePreviewText: PropTypes.string,
    skillLevelPreviewText: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired
    })),
    // Contact props
    xPreviewText: PropTypes.string,
    instagramPreviewText: PropTypes.string,
    linkedinPreviewText: PropTypes.string,
    githubPreviewText: PropTypes.string,
    youtubePreviewText: PropTypes.string,
    dribbblePreviewText: PropTypes.string,
    behancePreviewText: PropTypes.string,
    twitchPreviewText: PropTypes.string,
    // Hobbies props
    travelingPreviewChecked: PropTypes.bool,
    musicPreviewChecked: PropTypes.bool,
    readingPreviewChecked: PropTypes.bool,
    gamingPreviewChecked: PropTypes.bool,
    bicyclingPreviewChecked: PropTypes.bool,
    runningPreviewChecked: PropTypes.bool,
    cookingPreviewChecked: PropTypes.bool,
    shoppingPreviewChecked: PropTypes.bool,
    dancingPreviewChecked: PropTypes.bool,
    swimmingPreviewChecked: PropTypes.bool,
    paintingPreviewChecked: PropTypes.bool,
    photographyPreviewChecked: PropTypes.bool,
    fishingPreviewChecked: PropTypes.bool,
    hikingPreviewChecked: PropTypes.bool,
    yogaPreviewChecked: PropTypes.bool,
    surfingPreviewChecked: PropTypes.bool,
    skiingPreviewChecked: PropTypes.bool,
    gymPreviewChecked: PropTypes.bool,
    moviesPreviewChecked: PropTypes.bool,
    ballSportsPreviewChecked: PropTypes.bool
}

export default PreviewSection