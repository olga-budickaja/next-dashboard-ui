import { FieldError } from "react-hook-form";

type InputFieldsProps = {
  label: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  require?: true;
  options: {
    id: number;
    value: string;
    name: string;
  }[];
};

const SelectField = ({
  label,
  register,
  name,
  defaultValue,
  error,
  require,
  options,
}: InputFieldsProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label htmlFor={name} className="text-sm text-gray-500 w-max relative">
        {label}
        {require && (
          <span className="text-sm text-red-500 absolute top-0 -right-2">
            *
          </span>
        )}
      </label>
      <select
        id={name}
        {...register(name)}
        className="ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-2 rounded-md text-sm w-full"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default SelectField;
