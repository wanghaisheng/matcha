import Button from "@/components/__atoms__/Button";
import Input from "@/components/__atoms__/Input";
import InputPassword from "@/components/__atoms__/InputPassword";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";

type SignInProps = {};
const SignIn: FC<SignInProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center gap-8 w-full ">
        <p className="font-bold">CONNEXION</p>
        <div className="flex flex-col w-full gap-4 px-12">
          <Input rounded type="text" placeholder="Nom d'utilisateur" />
          <div>
            <InputPassword rounded placeholder="Mot de passe" />
            <Link href="" className="underline text-[#999999] ml-2 text-sm">
              Mot de passe oublié ?
            </Link>
          </div>
        </div>
        <div className="w-full px-12">
          <Button
            className="w-full"
            color={BUTTON_TYPE.SECONDARY}
            size={SIZE.LARGE}
          >
            Se connecter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
