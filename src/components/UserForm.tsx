import React, { Component, RefObject } from 'react';
import { validationUserRules } from '../configs/validationUserRules';
import { countries } from '../configs/countries';
import { ErrorRecord } from '../types/ErrorRecord';
import { User } from '../types/User';
import { FormValidate } from '../utils/FormValidate';
import DateInput from './DateInput';
import FileUploader from './FileUploader';
import Modal from './Modal';
import SelectBox from './SelectBox';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';

type UserFormProps = {
  onFormSubmit: (userData: User) => void;
};

type UserFormState<T> = {
  errors: ErrorRecord<T> | null;
  showConfirmModal: boolean;
};

class UserForm<T extends User> extends Component<UserFormProps, UserFormState<T>> {
  state: UserFormState<T> = {
    errors: null,
    showConfirmModal: false,
  };

  userNameInput: RefObject<HTMLInputElement>;
  userSurnameInput: RefObject<HTMLInputElement>;
  uploadAvatarInput: RefObject<HTMLInputElement>;
  userBirthdayInput: RefObject<HTMLInputElement>;
  userCountryInput: RefObject<HTMLSelectElement>;
  userTermsInput: RefObject<HTMLInputElement>;
  userPromotionsInput: RefObject<HTMLInputElement>;
  userGenderInput: RefObject<RadioGroup>;
  formRef: React.RefObject<HTMLFormElement>;
  constructor(props: UserFormProps) {
    super(props);
    this.userNameInput = React.createRef();
    this.userSurnameInput = React.createRef();
    this.userBirthdayInput = React.createRef();
    this.userCountryInput = React.createRef();
    this.userTermsInput = React.createRef();
    this.userPromotionsInput = React.createRef();
    this.userGenderInput = React.createRef();
    this.uploadAvatarInput = React.createRef();
    this.formRef = React.createRef();
  }

  hideConfirmModal = () => {
    this.setState({ showConfirmModal: false });
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = {} as User;
    if (this.userNameInput.current) {
      data[this.userNameInput.current?.name as keyof User] = this.userNameInput.current?.value;
    }

    if (this.userSurnameInput.current) {
      data[this.userSurnameInput.current?.name as keyof User] =
        this.userSurnameInput.current?.value;
    }

    if (this.userBirthdayInput.current) {
      data[this.userBirthdayInput.current?.name as keyof User] =
        this.userBirthdayInput.current?.value;
    }

    if (this.userCountryInput.current) {
      data[this.userCountryInput.current?.name as keyof User] =
        this.userCountryInput.current?.value;
    }

    if (this.userGenderInput.current) {
      data[this.userGenderInput.current?.name as keyof User] =
        this.userGenderInput.current?.getValue();
    }

    if (this.userTermsInput.current) {
      data[this.userTermsInput.current?.name as keyof User] = this.userTermsInput.current?.checked;
    }
    if (this.userPromotionsInput.current) {
      data[this.userPromotionsInput.current?.name as keyof User] =
        this.userPromotionsInput.current?.checked;
    }

    const errors = FormValidate(data, validationUserRules.validations);

    if (this.uploadAvatarInput.current?.files && this.uploadAvatarInput.current?.files.length > 0) {
      this.uploadAvatarInput.current.files = null;
    }

    if (Object.keys(errors).length === 0) {
      this.setState({ showConfirmModal: true, errors: null });
      this.formRef.current?.reset();

      if (Object.keys(data).length > 0) {
        this.props.onFormSubmit(data as User);
      }
    } else {
      this.setState({ errors: errors });
    }
  };

  render() {
    return (
      <div className="flex justify-center">
        <form ref={this.formRef} className="w-9/12" onSubmit={this.handleSubmit}>
          <TextInput name="userName" label="Name*:" forwardRef={this.userNameInput} />
          {this.state?.errors?.userName && (
            <p className="text-red-500">{this.state?.errors?.userName}</p>
          )}

          <TextInput name="userSurname" label="Surname*:" forwardRef={this.userSurnameInput} />
          {this.state?.errors?.userSurname && (
            <p className="text-red-500">{this.state?.errors?.userSurname}</p>
          )}

          <DateInput name="userBirthday" label="Birthday*:" forwardRef={this.userBirthdayInput} />
          {this.state?.errors?.userBirthday && (
            <p className="text-red-500">{this.state?.errors?.userBirthday}</p>
          )}

          <SelectBox
            name="userCountry"
            label="Country:"
            forwardRef={this.userCountryInput}
            options={countries}
          />

          <RadioGroup
            name="userGender"
            label="Gender*:"
            ref={this.userGenderInput}
            options={['female', 'male']}
          />
          {this.state?.errors?.userGender && (
            <p className="text-red-500">{this.state?.errors?.userGender}</p>
          )}

          <FileUploader name="avatar" label="Upload avatar:" forwardRef={this.uploadAvatarInput} />

          <Checkbox
            name="userTerms"
            label="I accept all tetms and conditions*"
            forwardRef={this.userTermsInput}
          />
          {this.state?.errors?.userTerms && (
            <p className="text-red-500">{this.state?.errors?.userTerms}</p>
          )}

          <Checkbox
            name="userPromotions"
            label="I consent to receive information about promotions"
            forwardRef={this.userPromotionsInput}
          />

          <div className="text-right">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
        <Modal onClose={this.hideConfirmModal} show={this.state.showConfirmModal}>
          <div className="w-max h-max bg-slate-300 rounded-md border-indigo-600 border-2 shadow-md">
            <div>
              <h2 className="text-4xl text-center align-middle p-11">The data has been saved!</h2>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default UserForm;
