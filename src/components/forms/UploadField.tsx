import Image from "next/image";
import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type InputFieldsProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  require?: true;
};

const UploadField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
  require,
}: InputFieldsProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4 mt-8">
      <label
        htmlFor={name}
        className="flex items-center  gap-2 text-sm text-gray-500 w-max relative gap2 cursor-pointer"
      >
        <Image
          src="/upload.png"
          alt="Завантаження фото"
          width={28}
          height={28}
        />
        <span>Завантажити фото</span>
        {require && (
          <span className="text-sm text-red-500 absolute top-0 -right-2">
            *
          </span>
        )}
      </label>
      <input
        name={name}
        type={type}
        {...register(name)}
        className="hidden"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default UploadField;
