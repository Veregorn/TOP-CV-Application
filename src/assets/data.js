const SECTION_DATA = [
    {
        id: 'generalInfo',
        buttonTitle: 'General Info',
        longTitle: 'General Information',
        fields: [
            {
                id: 'gi-name',
                label: 'Name',
                type: 'text',
                placeholder: 'Enter your name',
                required: true,
            },
            {
                id: 'gi-email',
                label: 'Email',
                type: 'email',
                placeholder: 'Enter your email',
                required: true,
            },
            {
                id: 'gi-phone',
                label: 'Phone',
                type: 'tel',
                placeholder: 'Enter your phone number',
                required: true,
            },
            {
                id: 'gi-address',
                label: 'Address',
                type: 'text',
                placeholder: 'Enter your address',
                required: true,
            },
            {
                id: 'gi-postal',
                label: 'Postal Code',
                type: 'text',
                placeholder: 'Enter your postal code',
                required: true,
            },
            {
                id: 'gi-city',
                label: 'City',
                type: 'text',
                placeholder: 'Enter your city',
                required: true,
            },
            {
                id: 'gi-country',
                label: 'Country',
                type: 'text',
                placeholder: 'Enter your country',
                required: true,
            },
            {
                id: 'gi-birth',
                label: 'Date of Birth',
                type: 'date',
                required: true,
            },
            {
                id: 'gi-gender',
                label: 'Gender',
                type: 'text',
                placeholder: 'Enter your gender',
                required: true,
            },
            {
                id: 'gi-photo',
                label: 'Photo',
                type: 'file',
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
                type: 'text',
                placeholder: 'Enter the school name',
                required: true,
            },
            {
                id: 'ed-study-title',
                label: 'Study Title',
                type: 'text',
                placeholder: 'Enter the study title',
                required: true,
            },
            {
                id: 'ed-start-date',
                label: 'Start Date',
                required: true,
            },
            {
                id: 'ed-end-date',
                label: 'End Date',
                required: true,
            },
            {
                id: 'ed-description',
                label: 'Description',
                type: 'text',
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
                id: 'exp-name',
                label: 'Name',
                type: 'text',
                placeholder: 'Enter your name',
                required: true,
            },
            {
                id: 'exp-email',
                label: 'Email',
                type: 'email',
                placeholder: 'Enter your email',
                required: true,
            },
            {
                id: 'exp-phone',
                label: 'Phone',
                type: 'tel',
                placeholder: 'Enter your phone number',
                required: true,
            },
            {
                id: 'exp-address',
                label: 'Address',
                type: 'text',
                placeholder: 'Enter your address',
                required: true,
            },
            {
                id: 'exp-website',
                label: 'Website',
                type: 'url',
                placeholder: 'Enter your website',
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
                label: 'Name',
                type: 'text',
                placeholder: 'Enter your name',
                required: true,
            },
            {
                id: 'sk-email',
                label: 'Email',
                type: 'email',
                placeholder: 'Enter your email',
                required: true,
            },
            {
                id: 'sk-phone',
                label: 'Phone',
                type: 'tel',
                placeholder: 'Enter your phone number',
                required: true,
            },
            {
                id: 'sk-address',
                label: 'Address',
                type: 'text',
                placeholder: 'Enter your address',
                required: true,
            },
            {
                id: 'sk-website',
                label: 'Website',
                type: 'url',
                placeholder: 'Enter your website',
                required: false,
            }
        ]
    },
    {
        id: 'contact',
        buttonTitle: 'Contact',
        longTitle: 'Contact',
        fields: [
            {
                id: 'ct-name',
                label: 'Name',
                type: 'text',
                placeholder: 'Enter your name',
                required: true,
            },
            {
                id: 'ct-email',
                label: 'Email',
                type: 'email',
                placeholder: 'Enter your email',
                required: true,
            },
            {
                id: 'ct-phone',
                label: 'Phone',
                type: 'tel',
                placeholder: 'Enter your phone number',
                required: true,
            },
            {
                id: 'ct-address',
                label: 'Address',
                type: 'text',
                placeholder: 'Enter your address',
                required: true,
            },
            {
                id: 'ct-website',
                label: 'Website',
                type: 'url',
                placeholder: 'Enter your website',
                required: false,
            }
        ]
    },
    {
        id: 'hobbies',
        buttonTitle: 'Hobbies',
        longTitle: 'Hobbies',
        fields: [
            {
                id: 'ho-name',
                label: 'Name',
                type: 'text',
                placeholder: 'Enter your name',
                required: true,
            },
            {
                id: 'ho-email',
                label: 'Email',
                type: 'email',
                placeholder: 'Enter your email',
                required: true,
            },
            {
                id: 'ho-phone',
                label: 'Phone',
                type: 'tel',
                placeholder: 'Enter your phone number',
                required: true,
            },
            {
                id: 'ho-address',
                label: 'Address',
                type: 'text',
                placeholder: 'Enter your address',
                required: true,
            },
            {
                id: 'ho-website',
                label: 'Website',
                type: 'url',
                placeholder: 'Enter your website',
                required: false,
            }
        ]
    }
];

export default SECTION_DATA;