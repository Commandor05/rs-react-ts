import React from 'react';
import { Path, UseFormRegister, RegisterOptions, FieldValues } from 'react-hook-form';

type FileUploaderProps<TFormValue extends FieldValues> = {
  label: string;
  name: Path<TFormValue>;
  register: UseFormRegister<TFormValue>;
  validation?: RegisterOptions;
};

const FileUploader = <TFormValues extends Record<string, unknown>>({
  name,
  label,
  register,
  validation,
}: FileUploaderProps<TFormValues>): JSX.Element => {
  return (
    <div className="flex">
      <div className="mb-3 w-96">
        <label htmlFor={name} className="inline-block input-label">
          {label}
        </label>
        <input
          className="relative m-0 block w-full min-w-0 flex-auto rounded-md border-2 border-solid border-indigo-300 transition duration-300 ease-in-out file:border-0 file:border-solid file:border-inherit file:bg-indigo-600 file:px-3 file:py-3 file:text-white file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-indigo-700 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
          type="file"
          id={name}
          {...register(name, validation)}
        />
      </div>
    </div>
  );
};

export default FileUploader;
