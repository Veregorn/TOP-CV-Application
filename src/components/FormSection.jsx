import '../styles/FormSection.css'
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';
import Button from './Button';
import FormSubSection from './FormSubSection';

function FormSection(props) {

    if (props.title == 'General Information') {

        const fields = props.fields.map((field) => {
            if (field.id == 'gi-name') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.nameInputText}
                            onChange={props.onNameChange}
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-email') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.emailInputText} 
                            onChange={props.onEmailChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-phone') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.phoneInputText} 
                            onChange={props.onPhoneChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-address') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.addressInputText} 
                            onChange={props.onAddressChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-postal') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.postalCodeInputText} 
                            onChange={props.onPostalCodeChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-city') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.cityInputText} 
                            onChange={props.onCityChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-country') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.countryInputText} 
                            onChange={props.onCountryChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-birth') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            required={field.required}
                            value={props.birthDateInputText} 
                            onChange={props.onBirthDateChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-gender') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.type} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.genderInputText} 
                            onChange={props.onGenderChange} 
                            disabled={false} 
                        />
                    </div>
                )
            } else if (field.id == 'gi-photo') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')} 
                            type={field.inputType} 
                            accept='image/*'
                            required={field.required}
                            onChange={props.onPhotoChange} 
                            disabled={false} 
                        />
                    </div>
                )
            }
        })

        return (
            
            <div className={props.className}>
                <h2>{props.title}</h2>
                {fields}
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>

        )

    } else if (props.title == 'Education') {

        const subSections = props.studies.map((study) => {
            return (
                <FormSubSection 
                    key={('ed-sub-section') + String(study.id)} 
                    fields={props.fields} 
                    schoolInputText={study.school} 
                    onSchoolChange={props.onSchoolChange} 
                    studiesTitleInputText={study.title} 
                    onStudiesTitleChange={props.onStudiesTitleChange} 
                    studiesStartDateSelect={study.startDate} 
                    onStudiesStartDateChange={props.onStudiesStartDateChange} 
                    studiesEndDateSelect={study.endDate} 
                    onStudiesEndDateChange={props.onStudiesEndDateChange} 
                    studiesDescriptionInputText={study.description} 
                    onStudiesDescriptionChange={props.onStudiesDescriptionChange} 
                />
            )
        })
        
        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                {subSections}
                <FormSubSection 
                    fields={props.fields} 
                    schoolInputText={props.schoolInputText} 
                    onSchoolChange={props.onSchoolChange} 
                    studiesTitleInputText={props.studiesTitleInputText} 
                    onStudiesTitleChange={props.onStudiesTitleChange} 
                    studiesStartDateSelect={props.studiesStartDateSelect} 
                    onStudiesStartDateChange={props.onStudiesStartDateChange} 
                    studiesEndDateSelect={props.studiesEndDateSelect} 
                    onStudiesEndDateChange={props.onStudiesEndDateChange} 
                    studiesDescriptionInputText={props.studiesDescriptionInputText} 
                    onStudiesDescriptionChange={props.onStudiesDescriptionChange} 
                />
                <Button text='+ More studies' onClick={props.onAddStudiesClick}/>
                <Button text='< Previous' onClick={props.onPreviousClick}/>
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Practical Experience') {
        
        const subSections = props.jobs.map((job) => {
            return (
                <FormSubSection 
                    key={('exp-sub-section') + String(job.id)} 
                    fields={props.fields} 
                    companyInputText={job.company} 
                    onCompanyChange={props.onCompanyChange} 
                    jobPositionInputText={job.position} 
                    onJobPositionChange={props.onJobPositionChange} 
                    jobStartDateSelect={job.startDate} 
                    onJobStartDateChange={props.onJobStartDateChange} 
                    jobEndDateSelect={job.endDate} 
                    onJobEndDateChange={props.onJobEndDateChange} 
                    jobDescriptionInputText={job.description} 
                    onJobDescriptionChange={props.onJobDescriptionChange} 
                />
            )
        })

        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                {subSections}
                <FormSubSection 
                    fields={props.fields} 
                    companyInputText={props.companyInputText} 
                    onCompanyChange={props.onCompanyChange} 
                    jobPositionInputText={props.jobPositionInputText} 
                    onJobPositionChange={props.onJobPositionChange} 
                    jobStartDateSelect={props.jobStartDateSelect} 
                    onJobStartDateChange={props.onJobStartDateChange} 
                    jobEndDateSelect={props.jobEndDateSelect} 
                    onJobEndDateChange={props.onJobEndDateChange} 
                    jobDescriptionInputText={props.jobDescriptionInputText} 
                    onJobDescriptionChange={props.onJobDescriptionChange} 
                />
                <Button text='+ More jobs' onClick={props.onAddJobClick}/>
                <Button text='< Previous' onClick={props.onPreviousClick}/>
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Skills') {
        
        const subSections = props.skills.map((skill, index) => {
            return (
                <FormSubSection 
                    key={('sk-sub-section') + String(skill.id)} 
                    index={index} 
                    fields={props.fields} 
                    skillNameInputText={skill.name} 
                    onSkillNameChange={props.onSkillNameChange} 
                    skillLevelRadio={skill.level} 
                    onSkillLevelChange={props.onSkillLevelChange} 
                />
            )
        })

        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                {subSections}
                <FormSubSection 
                    fields={props.fields} 
                    skillNameInputText={props.skillNameInputText} 
                    onSkillNameChange={props.onSkillNameChange} 
                    skillLevelRadio={props.skillLevelRadio} 
                    onSkillLevelChange={props.onSkillLevelChange} 
                />
                <Button text='+ More skills' onClick={props.onAddSkillClick}/>
                <Button text='< Previous' onClick={props.onPreviousClick}/>
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Contact') {
        
        const fields = props.fields.map((field) => {
            if (field.id == 'x') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onXCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.xInputEnabled} 
                            value={props.xInputText} 
                            onChange={props.onXChange} 
                        />
                    </div>
                )
            } else if (field.id == 'instagram') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onInstagramCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.instagramInputEnabled} 
                            value={props.instagramInputText} 
                            onChange={props.onInstagramChange} 
                        />
                    </div>
                )
            } else if (field.id == 'linkedin') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onLinkedinCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.linkedinInputEnabled} 
                            value={props.linkedinInputText} 
                            onChange={props.onLinkedinChange} 
                        />
                    </div>
                )
            } else if (field.id == 'github') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onGithubCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.githubInputEnabled} 
                            value={props.githubInputText} 
                            onChange={props.onGithubChange} 
                        />
                    </div>
                )
            } else if (field.id == 'youtube') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onYoutubeCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.youtubeInputEnabled} 
                            value={props.youtubeInputText} 
                            onChange={props.onYoutubeChange} 
                        />
                    </div>
                )
            } else if (field.id == 'dribbble') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onDribbbleCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.dribbbleInputEnabled} 
                            value={props.dribbbleInputText} 
                            onChange={props.onDribbbleChange} 
                        />
                    </div>
                )
            } else if (field.id == 'behance') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onBehanceCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.behanceInputEnabled} 
                            value={props.behanceInputText} 
                            onChange={props.onBehanceChange} 
                        />
                    </div>
                )
            } else if (field.id == 'twitch') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onTwitchCheckboxChange} />
                        <img src={field.imageURL} alt={field.imageAlt} />
                        <Input 
                            id={field.id + ('-input')} 
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={false}
                            disabled={!props.twitchInputEnabled} 
                            value={props.twitchInputText} 
                            onChange={props.onTwitchChange} 
                        />
                    </div>
                )
            }
        })

        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                {fields}
                <Button text='< Previous' onClick={props.onPreviousClick}/>
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Hobbies') {
            
            const fields = props.fields.map((field) => {
                if (field.id == 'traveling') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onTravelingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'music') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onMusicCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'reading') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onReadingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'gaming') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onGamingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'bicycling') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onBicyclingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'running') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onRunningCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'cooking') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onCookingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'shopping') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onShoppingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('-checkbox')} />
                        </div>
                    )
                } else if (field.id == 'dancing') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={field.id + ('checkbox')} onChange={props.onDancingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={field.id + ('checkbox')} />
                        </div>
                    )
                } else if (field.id == 'swimming') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'swimming-checkbox'} onChange={props.onSwimmingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'swimming-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'painting') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'painting-checkbox'} onChange={props.onPaintingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'painting-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'photography') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'photography-checkbox'} onChange={props.onPhotographyCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'photography-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'fishing') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'fishing-checkbox'} onChange={props.onFishingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'fishing-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'hiking') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'hiking-checkbox'} onChange={props.onHikingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'hiking-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'yoga') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'yoga-checkbox'} onChange={props.onYogaCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'yoga-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'surfing') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'surfing-checkbox'} onChange={props.onSurfingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'surfing-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'skiing') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'skiing-checkbox'} onChange={props.onSkiingCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'skiing-checkbox'} />
                        </div>
                    )
                } else if (field.id == 'gym') {
                    return (
                        <div key={('form-') + field.id} className='form-field'>
                            <input type='checkbox' id={'gym-checkbox'} onChange={props.onGymCheckboxChange} />
                            <img src={field.imageURL} alt={field.imageAlt} />
                            <Label text={field.imageAlt} for={'gym-checkbox'} />
                        </div>
                    )
                }
            })

            return (
                <div className={props.className}>
                    <h2>{props.title}</h2>
                    {fields}
                    <Button text='< Previous' onClick={props.onPreviousClick}/>
                    <Button text='Save' onClick={props.onSaveClick}/>
                </div>
            )
    }
        
}

FormSection.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool
    })).isRequired,
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
    onSaveClick: PropTypes.func,
    // General Info prop types
    nameInputText: PropTypes.string,
    onNameChange: PropTypes.func,
    emailInputText: PropTypes.string,
    onEmailChange: PropTypes.func,
    phoneInputText: PropTypes.string,
    onPhoneChange: PropTypes.func,
    addressInputText: PropTypes.string,
    onAddressChange: PropTypes.func,
    postalCodeInputText: PropTypes.string,
    onPostalCodeChange: PropTypes.func,
    cityInputText: PropTypes.string,
    onCityChange: PropTypes.func,
    countryInputText: PropTypes.string,
    onCountryChange: PropTypes.func,
    birthDateInputText: PropTypes.string,
    onBirthDateChange: PropTypes.func,
    genderInputText: PropTypes.string,
    onGenderChange: PropTypes.func,
    onPhotoChange: PropTypes.func,
    // Education prop types
    schoolInputText: PropTypes.string,
    onSchoolChange: PropTypes.func,
    studiesTitleInputText: PropTypes.string,
    onStudiesTitleChange: PropTypes.func,
    studiesStartDateSelect: PropTypes.string,
    onStudiesStartDateChange: PropTypes.func,
    studiesEndDateSelect: PropTypes.string,
    onStudiesEndDateChange: PropTypes.func,
    studiesDescriptionInputText: PropTypes.string,
    onStudiesDescriptionChange: PropTypes.func,
    studies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        school: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    onAddStudiesClick: PropTypes.func,
    // Practical Experience prop types
    companyInputText: PropTypes.string,
    onCompanyChange: PropTypes.func,
    jobPositionInputText: PropTypes.string,
    onJobPositionChange: PropTypes.func,
    jobStartDateSelect: PropTypes.string,
    onJobStartDateChange: PropTypes.func,
    jobEndDateSelect: PropTypes.string,
    onJobEndDateChange: PropTypes.func,
    jobDescriptionInputText: PropTypes.string,
    onJobDescriptionChange: PropTypes.func,
    jobs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    onAddJobClick: PropTypes.func,
    // Skills prop types
    skillNameInputText: PropTypes.string,
    onSkillNameChange: PropTypes.func,
    skillLevelRadio: PropTypes.string,
    onSkillLevelChange: PropTypes.func,
    skills: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired
    })),
    onAddSkillClick: PropTypes.func,
    // Contact prop types
    xInputText: PropTypes.string,
    onXChange: PropTypes.func,
    xInputEnabled: PropTypes.bool,
    onXCheckboxChange: PropTypes.func,
    instagramInputText: PropTypes.string,
    onInstagramChange: PropTypes.func,
    instagramInputEnabled: PropTypes.bool,
    onInstagramCheckboxChange: PropTypes.func,
    linkedinInputText: PropTypes.string,
    onLinkedinChange: PropTypes.func,
    linkedinInputEnabled: PropTypes.bool,
    onLinkedinCheckboxChange: PropTypes.func,
    githubInputText: PropTypes.string,
    onGithubChange: PropTypes.func,
    githubInputEnabled: PropTypes.bool,
    onGithubCheckboxChange: PropTypes.func,
    youtubeInputText: PropTypes.string,
    onYoutubeChange: PropTypes.func,
    youtubeInputEnabled: PropTypes.bool,
    onYoutubeCheckboxChange: PropTypes.func,
    dribbbleInputText: PropTypes.string,
    onDribbbleChange: PropTypes.func,
    dribbbleInputEnabled: PropTypes.bool,
    onDribbbleCheckboxChange: PropTypes.func,
    behanceInputText: PropTypes.string,
    onBehanceChange: PropTypes.func,
    behanceInputEnabled: PropTypes.bool,
    onBehanceCheckboxChange: PropTypes.func,
    twitchInputText: PropTypes.string,
    onTwitchChange: PropTypes.func,
    twitchInputEnabled: PropTypes.bool,
    onTwitchCheckboxChange: PropTypes.func,
    // Hobbies prop types
    onTravelingCheckboxChange: PropTypes.func,
    onMusicCheckboxChange: PropTypes.func,
    onReadingCheckboxChange: PropTypes.func,
    onGamingCheckboxChange: PropTypes.func,
    onBicyclingCheckboxChange: PropTypes.func,
    onRunningCheckboxChange: PropTypes.func,
    onCookingCheckboxChange: PropTypes.func,
    onShoppingCheckboxChange: PropTypes.func,
    onDancingCheckboxChange: PropTypes.func,
    onSwimmingCheckboxChange: PropTypes.func,
    onPaintingCheckboxChange: PropTypes.func,
    onPhotographyCheckboxChange: PropTypes.func,
    onFishingCheckboxChange: PropTypes.func,
    onHikingCheckboxChange: PropTypes.func,
    onYogaCheckboxChange: PropTypes.func,
    onSurfingCheckboxChange: PropTypes.func,
    onSkiingCheckboxChange: PropTypes.func,
    onGymCheckboxChange: PropTypes.func
}

export default FormSection