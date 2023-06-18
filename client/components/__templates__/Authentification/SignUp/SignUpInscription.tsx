import Button from "@/components/__atoms__/Button";
import Input from "@/components/__atoms__/Input";
import InputPassword from "@/components/__atoms__/InputPassword";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";

type SignUpInscriptionProps = {};
const SignUpInscription: FC<SignUpInscriptionProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center gap-8 w-full ">
        <p className="font-bold">INSCRIPTION</p>
        <div className="flex flex-col w-full gap-8 px-12">
          <Input rounded type="text" placeholder="Nom d'utilisateur" />
          <Input rounded type="text" placeholder="Email" />
          <Input rounded type="text" placeholder="Nom" />
          <Input rounded type="text" placeholder="Prénom" />
          <InputPassword rounded placeholder="Mot de passe" />
          <InputPassword rounded placeholder="Confirmer le mot de passe" />
        </div>
        <div className="w-full px-20 flex gap-8">
          <Button
            className="w-full"
            color={BUTTON_TYPE.SECONDARY}
            size={SIZE.LARGE}
            reverse
          >
            Retour
          </Button>
          <Button
            className="w-full"
            color={BUTTON_TYPE.SECONDARY}
            size={SIZE.LARGE}
          >
            Suivant
          </Button>
        </div>
      </div>
      <p className="mb-3">
        Déjà membre ?
        <Link className="text-secondary ml-1" href="">
          Se connecter
        </Link>
      </p>
    </div>
  );
};

export default SignUpInscription;
