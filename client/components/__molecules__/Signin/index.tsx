import { ChangeEvent, FC, FormEvent, useState } from "react";
import { BUTTON_TYPE } from "../../../constants";
import Input from "@/components/__atoms__/Input";
import Button from "@/components/__atoms__/Button";
import InputPassword from "@/components/__atoms__/InputPassword";
import Link from "next/link";

const Signin: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email", email);
    console.log("Password", password);
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Input
        onChange={handleEmailChange}
        type="email"
        rounded
        placeholder="Email"
        id="email"
        className="mb-5"
        value={email}
      />
      <div className="mb-5">
        <InputPassword
          onChange={handlePasswordChange}
          id="password"
          rounded
          placeholder="Mot de passe"
          value={password}
        />
        <Link className="underline text-gray-500 text-xs ml-2" href="">
          Mot de passe oublié ?
        </Link>
      </div>
      <Button type="submit" color={BUTTON_TYPE.SECONDARY}>
        Se connecter
      </Button>
    </form>
  );
};

export default Signin;
