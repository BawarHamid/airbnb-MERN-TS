import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type CustomSidebarItemsProps = {
  icon: ReactElement;
  title: string;
  linkPath: string;
};

const CustomSidebarItems: React.FC<CustomSidebarItemsProps> = ({
  icon,
  title,
  linkPath,
}) => {
  return (
    <li>
      <Link to={linkPath}>
        <div className="flex py-3 gap-2 px-[3.4rem] text-white hover:bg-red-400 items-center hover:w-full">
          {icon}
          <h2 className="text-white font-bold">{title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default CustomSidebarItems;
