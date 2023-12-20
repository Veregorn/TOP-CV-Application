const SECTION_DATA = [
    {
        id: 'generalInfo',
        buttonTitle: 'General Info',
        longTitle: 'General Information',
        fields: [
            {
                id: 'gi-name',
                label: 'Name',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your name',
                required: true,
            },
            {
                id: 'gi-email',
                label: 'Email',
                type: 'input',
                inputType: 'email',
                placeholder: 'Enter your email',
                required: true,
            },
            {
                id: 'gi-phone',
                label: 'Phone',
                type: 'input',
                inputType: 'tel',
                placeholder: 'Enter your phone number',
                required: true,
            },
            {
                id: 'gi-address',
                label: 'Address',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your address',
                required: true,
            },
            {
                id: 'gi-postal',
                label: 'Postal Code',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your postal code',
                required: true,
            },
            {
                id: 'gi-city',
                label: 'City',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your city',
                required: true,
            },
            {
                id: 'gi-country',
                label: 'Country',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your country',
                required: true,
            },
            {
                id: 'gi-gender',
                label: 'Gender',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your gender',
                required: true,
            },
            {
                id: 'gi-birth',
                label: 'Date of Birth',
                type: 'input',
                inputType: 'date',
                required: true,
            },
            {
                id: 'gi-photo',
                label: 'Photo',
                type: 'input',
                inputType: 'file',
                required: true,
            }
        ]
    },
    {
        id: 'education',
        buttonTitle: 'Education',
        longTitle: 'Education',
        fields: [
            {
                id: 'ed-school',
                label: 'School Name',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter the school name',
                required: true,
            },
            {
                id: 'ed-study-title',
                label: 'Study Title',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter the study title',
                required: true,
            },
            {
                id: 'ed-start-date',
                label: 'Start Date',
                type: 'select',
                required: true,
            },
            {
                id: 'ed-end-date',
                label: 'End Date',
                type: 'select',
                required: true,
            },
            {
                id: 'ed-description',
                label: 'Description',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter the description',
                required: false,
            }
        ]
    },
    {
        id: 'practicalExp',
        buttonTitle: 'Practical Exp',
        longTitle: 'Practical Experience',
        fields: [
            {
                id: 'exp-company',
                label: 'Company Name',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter a company name',
                required: true,
            },
            {
                id: 'exp-job-position',
                label: 'Job Position',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter a job position',
                required: true,
            },
            {
                id: 'exp-start-date',
                label: 'Start Date',
                type: 'select',
                required: true,
            },
            {
                id: 'exp-end-date',
                label: 'End Date',
                type: 'select',
                required: true,
            },
            {
                id: 'exp-description',
                label: 'Job Description',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter a description',
                required: false,
            }
        ]
    },
    {
        id: 'skills',
        buttonTitle: 'Skills',
        longTitle: 'Skills',
        fields: [
            {
                id: 'sk-name',
                label: 'Skill Name',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter the skill name',
                required: true,
            },
            {
                id: 'sk-level',
                label: 'Skill Level',
                type: 'radio',
                required: true,
                options: [
                    {
                        label: 'Beginner',
                        value: 'beginner'
                    },
                    {
                        label: 'Elementary',
                        value: 'elementary'
                    },
                    {
                        label: 'Intermediate',
                        value: 'intermediate'
                    },
                    {
                        label: 'Advanced',
                        value: 'advanced'
                    },
                    {
                        label: 'Expert',
                        value: 'expert'
                    }
                ]
            }
        ]
    },
    {
        id: 'contact',
        buttonTitle: 'Contact',
        longTitle: 'Contact',
        fields: [
            {
                id: 'x',
                imageURL: '/images/x-icon.png',
                imageAlt: 'X',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your X user name'
            },
            {
                id: 'instagram',
                imageURL: '/images/instagram-icon.png',
                imageAlt: 'Instagram',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your Instagram user name'
            },
            {
                id: 'linkedin',
                imageURL: '/images/linkedin-icon.png',
                imageAlt: 'LinkedIn',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your LinkedIn user name'
            },
            {
                id: 'github',
                imageURL: '/images/github-icon.png',
                imageAlt: 'GitHub',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your GitHub user name'
            },
            {
                id: 'youtube',
                imageURL: '/images/youtube-icon.png',
                imageAlt: 'YouTube',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your YouTube user name'
            },
            {
                id: 'dribbble',
                imageURL: '/images/dribbble-icon.png',
                imageAlt: 'Dribbble',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your Dribbble user name'
            },
            {
                id: 'behance',
                imageURL: '/images/behance-icon.png',
                imageAlt: 'Behance',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your Behance user name'
            },
            {
                id: 'twitch',
                imageURL: '/images/twitch-icon.png',
                imageAlt: 'Twitch',
                type: 'input',
                inputType: 'text',
                placeholder: 'Enter your Twitch user name'
            }
        ]
    },
    {
        id: 'hobbies',
        buttonTitle: 'Hobbies',
        longTitle: 'Hobbies',
        fields: [
            {
                id: 'traveling',
                imageURL: '/images/traveling-icon.png',
                imageAlt: 'Traveling',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'music',
                imageURL: '/images/music-icon.png',
                imageAlt: 'Music',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'reading',
                imageURL: '/images/reading-icon.png',
                imageAlt: 'Reading',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'gaming',
                imageURL: '/images/gaming-icon.png',
                imageAlt: 'Gaming',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'bicycling',
                imageURL: '/images/bicycling-icon.png',
                imageAlt: 'Bicycling',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'running',
                imageURL: '/images/running-icon.png',
                imageAlt: 'Running',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'cooking',
                imageURL: '/images/cooking-icon.png',
                imageAlt: 'Cooking',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'shopping',
                imageURL: '/images/shopping-icon.png',
                imageAlt: 'Shopping',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'dancing',
                imageURL: '/images/dancing-icon.png',
                imageAlt: 'Dancing',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'swimming',
                imageURL: '/images/swimming-icon.png',
                imageAlt: 'Swimming',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'painting',
                imageURL: '/images/painting-icon.png',
                imageAlt: 'Painting',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'photography',
                imageURL: '/images/photography-icon.png',
                imageAlt: 'Photography',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'fishing',
                imageURL: '/images/fishing-icon.png',
                imageAlt: 'Fishing',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'hiking',
                imageURL: '/images/hiking-icon.png',
                imageAlt: 'Hiking',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'yoga',
                imageURL: '/images/yoga-icon.png',
                imageAlt: 'Yoga',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'surfing',
                imageURL: '/images/surfing-icon.png',
                imageAlt: 'Surfing',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'skiing',
                imageURL: '/images/skiing-icon.png',
                imageAlt: 'Skiing',
                type: 'input',
                inputType: 'checkbox'
            },
            {
                id: 'gym',
                imageURL: '/images/gym-icon.png',
                imageAlt: 'Gym',
                type: 'input',
                inputType: 'checkbox'
            }
        ]
    }
];

export default SECTION_DATA;