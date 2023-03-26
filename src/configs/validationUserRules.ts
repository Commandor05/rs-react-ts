export const validationUserRules = {
  validations: {
    userName: {
      required: {
        value: true,
        message: 'Required',
      },
      pattern: {
        value: '^[A-Z]+[a-zA-Z]*$',
        message: 'First letter must be capital',
      },
    },
    userSurname: {
      required: {
        value: true,
        message: 'Required',
      },
      pattern: {
        value: '^[A-Z]+[a-zA-Z]*$',
        message: 'First letter must be capital',
      },
    },
    userBirthday: {
      required: {
        value: true,
        message: 'Required',
      },
      pattern: {
        value: '[0-9]{4}-[0-9]{2}-[0-9]{2}',
        message: 'Invalid date format',
      },
    },
  },
};
