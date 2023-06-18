import Button from "@/components/__atoms__/Button";
import Input from "@/components/__atoms__/Input";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import interests from "../../../../data/interests.js";

type SignUpInterestProps = {};

const SignUpInterest: FC<SignUpInterestProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-8 w-full px-20">
        <p>
          PROFIL - <span className="text-primary">Etape 2/4</span>
        </p>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {interests.map((interest: string) => {
            return (
              <Input
                key={interest}
                type="checkbox"
                id="interest"
                name="interest"
                value={interest}
                label={interest}
              />
            );
          })}
        </div>
        <div className="flex gap-12 mx-12 mt-4">
          <Button
            className="whitespace-nowrap"
            reverse
            color={BUTTON_TYPE.SECONDARY}
            size={SIZE.LARGE}
          >
            Retour
          </Button>
          <Button
            className="whitespace-nowrap"
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

export default SignUpInterest;
