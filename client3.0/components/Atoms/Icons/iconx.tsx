import { FC } from "react";
import * as HIcons from "@heroicons/react/outline";

interface IconxProps {
  icon: string;
  className?: string;
}

const Iconx: FC<IconxProps> = ({ icon, className }) => {
  const { ...icons } = HIcons;
  // @ts-ignore
  const TheIcon = icons[icon];
  return (
    <>
      <TheIcon
        className={className ? `${className}` : " w-5 h-5"}
        aria-hidden="true"
      />
    </>
  );
};

export default Iconx;
