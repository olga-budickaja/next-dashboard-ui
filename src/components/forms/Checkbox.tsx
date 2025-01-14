import {
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

type checkboxProps = {
  isChecked: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
const Checkbox = ({ isChecked, onChange, children }: checkboxProps) => {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-500 w-max relative">
      <input
        type="checkbox"
        className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-gray-300 rounded-sm bg-transparent
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-green-400 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400"
        checked={isChecked}
        onChange={() => onChange((prev) => !prev)}
      />
      <span>{children}</span>
      <svg
        className="
      absolute
      w-4 h-4
      hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </label>
  );
};

export default Checkbox;
