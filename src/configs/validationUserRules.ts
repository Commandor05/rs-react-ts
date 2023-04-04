import { isImageFileValid } from '../utils/Validations';

export const validationUserRules = {
  validations: {
    userName: {
      required: 'Required',
      pattern: {
        value: /^[A-Z]+[a-zA-Z]*$/,
        message: 'Should contain only letters and first letter must be capital',
      },
    },
    userSurname: {
      required: 'Required',
      pattern: {
        value: /^[A-Z]+[a-zA-Z]*$/,
        message: 'Should contain only letters and first letter must be capital',
      },
    },
    userBirthday: {
      required: 'Required',
      pattern: {
        value: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
        message: 'Invalid date format',
      },
    },
    userCountry: {
      required: 'Required',
    },
    userGender: {
      required: 'Required',
    },
    userTerms: {
      required: 'Required',
    },
    uploadFile: {
      validate: isImageFileValid,
    },
  },
};
