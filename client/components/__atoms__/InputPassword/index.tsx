import { FC, InputHTMLAttributes, useState } from "react";
import { cx } from "@emotion/css";
import IconEye from "../../../public/img/eye-icon.svg";
import Image from "next/image";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rounded?: boolean;
  placeholder?: string;
};

const InputPassword: FC<InputProps> = ({ rounded, className, ...props }) => {
  const inputStyle = cx(
    className,
    "flex bg-white py-1 px-1 border w-auto px-2 outline-none",
    {
      "rounded-lg": rounded,
    }
  );
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className={inputStyle}>
      <input
        type={showPassword ? "text" : "password"}
        {...props}
        autoFocus={false}
        className="focus:outline-none"
      />
      <Image
        onClick={handleShowPassword}
        src={IconEye}
        alt="Eye icon"
        height={24}
        width={24}
      />
    </div>
  );
};

export default InputPassword;
