import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validationUserRules } from '../configs/validationUserRules';
import { countries } from '../configs/countries';
import { User } from '../types/User';
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

export type UserFormValues = User & {
  uploadFile?: File[];
};

const UserForm: React.FC<UserFormProps> = ({ onFormSubmit }) => {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm<Partial<UserFormValues>>();

  useEffect(() => {
    setFocus('userName');
  }, [setFocus]);

  const hideConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const onSubmit: SubmitHandler<Partial<UserFormValues>> = (data) => {
    setShowConfirmModal(true);
    if (data.uploadFile && data.uploadFile?.length > 0) {
      data.userAvatar = data.uploadFile[0];
      delete data.uploadFile;
    }
    onFormSubmit(data as User);
    reset();
  };

  return (
    <div className="flex justify-center">
      <form className="w-9/12" onSubmit={handleSubmit(onSubmit)}>
        <TextInput<Partial<UserFormValues>>
          name="userName"
          label="Name*:"
          register={register}
          validation={validationUserRules.validations.userName}
        />
        <p className="text-red-500">{errors?.userName?.message}</p>

        <TextInput<Partial<UserFormValues>>
          name="userSurname"
          label="Surname*:"
          register={register}
          validation={validationUserRules.validations.userSurname}
        />
        <p className="text-red-500">{errors?.userSurname?.message}</p>

        <DateInput<Partial<UserFormValues>>
          name="userBirthday"
          label="Birthday*:"
          register={register}
          validation={validationUserRules.validations.userBirthday}
        />
        <p className="text-red-500">{errors?.userBirthday?.message}</p>

        <SelectBox
          {...register('userCountry', validationUserRules.validations.userCountry)}
          name="userCountry"
          label="Country:"
          options={countries}
        />
        <p className="text-red-500">{errors?.userCountry?.message}</p>

        <RadioGroup
          name="userGender"
          label="Gender*:"
          register={register}
          validation={validationUserRules.validations.userGender}
          options={['female', 'male']}
        />
        <p className="text-red-500">{errors?.userGender?.message}</p>

        <FileUploader name="uploadFile" label="Upload avatar:" register={register} />

        <Checkbox<Partial<UserFormValues>>
          name="userTerms"
          label="I accept all tetms and conditions*"
          register={register}
          validation={validationUserRules.validations.userTerms}
        />
        <p className="text-red-500">{errors?.userTerms?.message}</p>

        <Checkbox<Partial<UserFormValues>>
          name="userPromotions"
          label="I consent to receive information about promotions"
          register={register}
        />

        <div className="text-right">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <Modal onClose={hideConfirmModal} show={showConfirmModal}>
        <div className="w-max h-max bg-slate-300 rounded-md border-indigo-600 border-2 shadow-md">
          <div>
            <h2 className="text-4xl text-center align-middle p-11">The data has been saved!</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
