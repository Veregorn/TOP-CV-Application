import '../styles/FormSection.css'
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';
import Button from './Button';
import FormSubSection from './FormSubSection';
import Textarea from './Textarea';

function FormSection(props) {

    if (props.title == 'Hello') {

        const fields = props.fields.map((field) => {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-textarea')} />
                    <Textarea 
                        id={field.id + ('-textarea')}
                        placeholder={field.placeholder} 
                        required={field.required} 
                        value={props.helloTextarea} 
                        onChange={props.onHelloChange} 
                        rows={field.rows} 
                        cols={field.cols} 
                    />
                    {!props.helloTextarea && <span className='form-field-errors' aria-live='polite'>Please tell us about yourself</span>}
                </div>
            )
        })

        const helloTextarea = document.getElementById('hello-textarea');
        if (helloTextarea) {
            if (helloTextarea.value.length > 0) {
                return (

                    <div className={props.className}>
                        <h2 className='form-section-title'>{props.title}</h2>
                        <div className='fields-container'>
                            {fields}
                        </div>
                        <Button text='Next >' classes='nav-button' onClick={props.onNextClick}/>
                    </div>

                )
            } else {
                return (

                    <div className={props.className}>
                        <h2 className='form-section-title'>{props.title}</h2>
                        <div className='fields-container'>
                            {fields}
                        </div>
                        <Button text='Next >' classes='nav-button' onClick={props.onNextClick} disabled={true}/>
                    </div>

                )
            }
        } else {
            return (

                <div className={props.className}>
                    <h2 className='form-section-title'>{props.title}</h2>
                    <div className='fields-container'>
                        {fields}
                    </div>
                    <Button text='Next >' classes='nav-button' onClick={props.onNextClick} disabled={true}/>
                </div>

            )
        }

    } else if (props.title == 'General Info') {

        const fields = props.fields.map((field) => {
            if (field.id == 'gi-name') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.nameInputText}
                            onChange={props.onNameChange}
                            disabled={false} 
                        />
                        {!props.nameInputText && <span className='form-field-errors' aria-live='polite'>Please enter your name</span>}
                    </div>
                )
            } else if (field.id == 'gi-email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.emailInputText} 
                            onChange={props.onEmailChange} 
                            disabled={false} 
                        />
                        {!emailRegex.test(props.emailInputText) && <span className='form-field-errors' aria-live='polite'>Please enter a valid email address</span>}
                    </div>
                )
            } else if (field.id == 'gi-phone') {
                return (
                    <div key={('form-') + field.id} className='form-field'>
                        <Label text={field.label} for={field.id + ('-input')} />
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
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
                            type={field.inputType} 
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
                        {field.required && <Label text={field.label} for={field.id + ('-input')} classes='required-input' />}
                        {!field.required && <Label text={field.label} for={field.id + ('-input')} />}
                        <Input 
                            id={field.id + ('-input')}
                            type={field.inputType} 
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
                            type={field.inputType} 
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
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.countryInputText} 
                            onChange={props.onCountryChange} 
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
                            type={field.inputType} 
                            placeholder={field.placeholder} 
                            required={field.required}
                            value={props.genderInputText} 
                            onChange={props.onGenderChange} 
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
                        {!props.birthDateInputText && <span className='form-field-errors' aria-live='polite'>Please enter your date of birth</span>}
                    </div>
                )
            } else if (field.id == 'gi-photo') {
                const photoRegex = /^.*\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/;
                const photoInput = document.getElementById('gi-photo-input');
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
                        {photoInput && photoInput.files.length == 0 && <span className='form-field-errors' aria-live='polite'>Please upload a photo</span>}
                        {photoInput && photoInput.files.length > 0 && !photoRegex.test(photoInput.files[0].name) && <span className='form-field-errors' aria-live='polite'>Please upload a valid photo</span>}
                    </div>
                )
            }
        })

        // We need to check if the name, email, date of birth and photo fields are filled, else we disable the next button
        const nameInput = document.getElementById('gi-name-input');
        const emailInput = document.getElementById('gi-email-input');
        const birthDateInput = document.getElementById('gi-birth-input');
        const photoInput = document.getElementById('gi-photo-input');

        if (nameInput && emailInput && birthDateInput && photoInput) {
            if (nameInput.value.length > 0 && emailInput.value.length > 0 && birthDateInput.value.length > 0 && photoInput.value.length > 0) {
                return (
                    <div className={props.className}>
                        <h2 className='form-section-title'>{props.title}</h2>
                        <div className='fields-container'>
                            {fields}
                        </div>
                        <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                        <Button text='Next >' classes='nav-button' onClick={props.onNextClick}/>
                    </div>
                )
            } else {
                return (
                    <div className={props.className}>
                        <h2 className='form-section-title'>{props.title}</h2>
                        <div className='fields-container'>
                            {fields}
                        </div>
                        <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                        <Button text='Next >' classes='nav-button' onClick={props.onNextClick} disabled={true}/>
                    </div>
                )
            }
        } else {
            return (
                <div className={props.className}>
                    <h2 className='form-section-title'>{props.title}</h2>
                    <div className='fields-container'>
                        {fields}
                    </div>
                    <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                    <Button text='Next >' classes='nav-button' onClick={props.onNextClick} disabled={true}/>
                </div>
            )
        }

    } else if (props.title == 'Education') {

        const subSections = props.studies.map((study) => {
            return (
                <div key={('ed-sub-section') + String(study.id)} className='form-ed-saved-sub-section'>
                    <p><strong>School Name: </strong>{study.school}</p>
                    <p><strong>Study Title: </strong>{study.title}</p>
                    <p><strong>Start Date: </strong>{study.startDate}</p>
                    <p><strong>End Date: </strong>{study.endDate}</p>
                    <p><strong>Description: </strong>{study.description}</p>
                    <Button text='Delete' onClick={() => props.onDeleteStudiesClick(study.id)}/>
                    <Button text='Edit' onClick={() => props.onEditStudiesClick(study.id)}/>
                </div>
            )
        })
        
        return (
            <div className={props.className}>
                <h2 className='form-section-title'>{props.title}</h2>
                <div className='fields-container'>
                    {subSections}
                    {props.moreStudiesClicked &&
                        <div className='form-ed-not-saved-sub-section'>
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
                            {props.schoolInputText != '' && props.studiesTitleInputText != '' && props.studiesStartDateSelect != '' && props.studiesEndDateSelect != '' && <Button text='Save' classes='save-button' onClick={props.onSaveStudiesClick}/>}
                            {(props.schoolInputText == '' || props.studiesTitleInputText == '' || props.studiesStartDateSelect == '' || props.studiesEndDateSelect == '') && <Button text='Save' classes='save-button' onClick={props.onSaveStudiesClick} disabled={true} />}
                        </div>
                    }
                </div>
                <Button text='+ More studies' classes='more' onClick={props.onAddStudiesClick}/>
                <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                <Button text='Next >' classes='nav-button' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Practical Experience') {
        
        const subSections = props.jobs.map((job) => {
            return (
                <div key={('exp-sub-section') + String(job.id)} className='form-exp-saved-sub-section'>
                    <p><strong>Company Name: </strong>{job.company}</p>
                    <p><strong>Job Position: </strong>{job.position}</p>
                    <p><strong>Start Date: </strong>{job.startDate}</p>
                    <p><strong>End Date: </strong>{job.endDate}</p>
                    <p><strong>Description: </strong>{job.description}</p>
                    <Button text='Delete' onClick={() => props.onDeleteJobClick(job.id)}/>
                    <Button text='Edit' onClick={() => props.onEditJobClick(job.id)}/>
                </div>
            )
        })

        return (
            <div className={props.className}>
                <h2 className='form-section-title'>{props.title}</h2>
                <div className='fields-container'>
                    {subSections}
                    {props.moreJobsClicked && 
                        <div className='form-exp-not-saved-sub-section'>
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
                            {props.companyInputText != '' && props.jobPositionInputText != '' && props.jobStartDateSelect != '' && props.jobEndDateSelect != '' && <Button text='Save' classes='save-button' onClick={props.onSaveJobClick}/>}
                            {(props.companyInputText == '' || props.jobPositionInputText == '' || props.jobStartDateSelect == '' || props.jobEndDateSelect == '') && <Button text='Save' classes='save-button' onClick={props.onSaveJobClick} disabled={true} />}
                        </div>
                    }
                </div>
                <Button text='+ More jobs' classes='more' onClick={props.onAddJobClick}/>
                <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                <Button text='Next >' classes='nav-button' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Skills') {
        
        const subSections = props.skills.map((skill) => {
            return (
                <div key={('skills-sub-section') + String(skill.id)} className='form-skills-saved-sub-section'>
                    <p><strong>Skill Name: </strong>{skill.name}</p>
                    <p><strong>Skill Level: </strong>{skill.level}</p>
                    <Button text='Delete' onClick={() => props.onDeleteSkillClick(skill.id)}/>
                    <Button text='Edit' onClick={() => props.onEditSkillClick(skill.id)}/>
                </div>
            )
        })

        return (
            <div className={props.className}>
                <h2 className='form-section-title'>{props.title}</h2>
                <div className='fields-container'>
                    {subSections}
                    {props.moreSkillsClicked &&
                        <div className='form-skills-not-saved-sub-section'>
                            <FormSubSection 
                                fields={props.fields} 
                                skillNameInputText={props.skillNameInputText} 
                                onSkillNameChange={props.onSkillNameChange} 
                                skillLevelRadio={props.skillLevelRadio} 
                                onSkillLevelChange={props.onSkillLevelChange} 
                            />
                            {props.skillNameInputText != '' && props.skillLevelRadio != '' && <Button text='Save' classes='save-button' onClick={props.onSaveSkillClick}/>}
                            {(props.skillNameInputText == '' || props.skillLevelRadio == '') && <Button text='Save' classes='save-button' onClick={props.onSaveSkillClick} disabled={true} />}
                        </div>
                    }
                </div>
                <Button text='+ More skills' classes='more' onClick={props.onAddSkillClick}/>
                <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                <Button text='Next >' classes='nav-button' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Contact') {
        
        const fields = props.fields.map((field) => {
            if (field.id == 'x') {
                return (
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onXCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onInstagramCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onLinkedinCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onGithubCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onYoutubeCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onDribbbleCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onBehanceCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                    <div key={('form-') + field.id} className='contact form-field'>
                        <input type='checkbox' id={field.id + ('-checkbox')} onChange={props.onTwitchCheckboxChange} />
                        <img className='social-img' src={field.imageURL} alt={field.imageAlt} />
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
                <h2 className='form-section-title'>{props.title}</h2>
                <div className='fields-container'>
                    {fields}
                </div>
                <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                <Button text='Next >' classes='nav-button' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Hobbies') {
            
            const fields = props.fields.map((field) => {
                if (field.id == 'traveling') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='traveling-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onTravelingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'music') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='music-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onMusicCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'reading') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='reading-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onReadingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'gaming') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='gaming-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onGamingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'bicycling') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='bicycling-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onBicyclingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'running') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='running-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onRunningCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'cooking') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='cooking-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onCookingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'shopping') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='shopping-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onShoppingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'dancing') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='dancing-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onDancingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'swimming') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='swimming-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onSwimmingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'painting') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='painting-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onPaintingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'photography') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='photography-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onPhotographyCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'fishing') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='fishing-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onFishingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'hiking') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='hiking-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onHikingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'yoga') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='yoga-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onYogaCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'surfing') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='surfing-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onSurfingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'skiing') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='skiing-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onSkiingCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'gym') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='gym-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onGymCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'movies') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='movies-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onMoviesCheckboxChange} 
                            />
                        </div>
                    )
                } else if (field.id == 'ball-sports') {
                    return (
                        <div key={('form-') + field.id} className='hobbies form-field'>
                            <Label 
                                imgId='ball-sports-image' 
                                src={field.imageURL} 
                                alt={field.imageAlt} 
                                for={field.id + ('-checkbox')} 
                                onChange={props.onBallSportsCheckboxChange} 
                            />
                        </div>
                    )
                }
            })

            return (
                <div className={props.className}>
                    <h2 className='form-section-title'>{props.title}</h2>
                    <div className='fields-container'>
                        {fields}
                    </div>
                    <Button text='< Previous' classes='nav-button' onClick={props.onPreviousClick}/>
                    <Button text='Finish' classes='finish-button' onClick={props.onFinishClick}/>
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
    onFinishClick: PropTypes.func,
    // Hello prop types
    helloTextarea: PropTypes.string,
    onHelloChange: PropTypes.func,
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
    onDeleteStudiesClick: PropTypes.func,
    onEditStudiesClick: PropTypes.func,
    onSaveStudiesClick: PropTypes.func,
    moreStudiesClicked: PropTypes.bool,
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
    onDeleteJobClick: PropTypes.func,
    onEditJobClick: PropTypes.func,
    onSaveJobClick: PropTypes.func,
    moreJobsClicked: PropTypes.bool,
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
    onDeleteSkillClick: PropTypes.func,
    onEditSkillClick: PropTypes.func,
    onSaveSkillClick: PropTypes.func,
    moreSkillsClicked: PropTypes.bool,
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
    onGymCheckboxChange: PropTypes.func,
    onMoviesCheckboxChange: PropTypes.func,
    onBallSportsCheckboxChange: PropTypes.func
}

export default FormSection