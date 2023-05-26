import { FC, InputHTMLAttributes } from "react";
import { cx } from "@emotion/css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rounded?: boolean;
  label?: string;
};

const Input: FC<InputProps> = ({ label, rounded, className, ...props }) => {
  const inputStyle = cx(className, "py-1 px-1 border w-auto px-2", {
    "rounded-lg": rounded,
  });

  return (
    <div className="flex flex-col">
      {label && <label className="font-bold">{label}</label>}
      <input className={inputStyle} {...props} />
    </div>
  );
};

export default Input;
