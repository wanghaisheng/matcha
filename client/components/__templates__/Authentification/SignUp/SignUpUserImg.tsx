import Button from "@/components/__atoms__/Button";
import Input from "@/components/__atoms__/Input";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import DragZone from "@/components/__atoms__/DragZone";

type SignUpUserImgProps = {};

const SignUpUserImg: FC<SignUpUserImgProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-8 w-full">
        <p className="px-20">
          PHOTO DE PROFIL - <span className="text-primary">Etape 4/4</span>
        </p>
        <div className="mx-6 h-48">
          <DragZone />
        </div>
        <div className="flex gap-12 mx-12 mt-4 px-20">
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
            Terminer
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

export default SignUpUserImg;
