import Image from "next/image";
import { FC } from "react";
import CircleIcon from "../../../public/img/circle-icon.svg";

type userBadgeProps = {
  image: string;
  isConnected: boolean;
};

const UserBadge: FC<userBadgeProps> = ({ image, isConnected }) => {
  return (
    <div>
      <div className="relative w-[95px] rounded-full">
        <Image
          className="rounded-full"
          src={image}
          alt=""
          width={95}
          height={95}
        />
        <span className="absolute right-0 bottom-0 right-3  border-2 border-white rounded-full">
          <CircleIcon
            color={isConnected ? "green" : "gray"}
            height="16px"
            width="16px"
          />
        </span>
      </div>
    </div>
  );
};

export default UserBadge;
