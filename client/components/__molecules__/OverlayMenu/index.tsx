import { User } from "@/@types/user";
import UserBadge from "@/components/__atoms__/UserBadge";
import { FC } from "react";
import UserIcon from "../../../public/img/user-solid.svg";
import GlassIcon from "../../../public/img/magnifying-glass-solid.svg";
import LogoutIcon from "../../../public/img/arrow-right-from-bracket-solid.svg";
import ChevronRight from "../../../public/img/chevron-right-solid.svg";

type OverlayMenuProps = { user: User };
const OverlayMenu: FC<OverlayMenuProps> = ({ user }) => {
  return (
    <div className="w-96 border shadow-md flex flex-col rounded-lg">
      <div className="flex w-full justify-center bg-[#F7F7FA] gap-2 py-5">
        <UserBadge image={user.image} isConnected={user.isConnected} />
        <div className="flex flex-col justify-center">
          <span className="font-bold text-sm">
            {user.firstname} {user.lastname}
          </span>
          <span className="text-[#8A98BA]">{user.genre}</span>
          <span>{user.age} ans</span>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-between w-full border-b-[1px] border-[#C4CBDC] gap-5 mt-3 pb-3">
          <div className="flex ml-5 gap-5">
            <span className="text-[#C4CBDC]">
              <UserIcon height="17px" width="17px" />
            </span>
            <span className="text-md">Mon profil</span>
          </div>
          <span className="mr-5">
            <ChevronRight width={5} height={13} />
          </span>
        </div>
        <div className="flex items-center justify-between w-full border-b-[1px] border-[#C4CBDC] gap-5 mt-3 pb-3">
          <div className="flex ml-5 gap-5">
            <span className="text-[#C4CBDC]">
              <GlassIcon height="17px" width="17px" />
            </span>
            <span className="text-md">Recherche avancée</span>
          </div>
          <span className="mr-5">
            <ChevronRight width={5} height={13} />
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3 p-3">
        <LogoutIcon height="17px" width="17px" />{" "}
        <span className="text-md">Log out</span>
      </div>
    </div>
  );
};

export default OverlayMenu;
