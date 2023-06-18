import Button from "@/components/__atoms__/Button";
import Input from "@/components/__atoms__/Input";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";

type SignUpBioProps = {};

const SignUpBio: FC<SignUpBioProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-8 w-full">
        <p className="px-20">
          BIOGRAPHIE - <span className="text-primary">Etape 3/4</span>
        </p>
        <div className="flex justify-center mt-4 h-full">
          <textarea
            className="border border-1 rounded-xl py-3 px-6 placeholder:italic placeholder:text-black placeholder:text-lg"
            id="description"
            name="description"
            rows={6}
            cols={50}
            placeholder="Description"
          ></textarea>
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

export default SignUpBio;
