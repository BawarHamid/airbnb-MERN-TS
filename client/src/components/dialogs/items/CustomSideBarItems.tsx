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
        <div className="flex py-3 gap-2 px-[3.4rem] text-white hover:bg-blue-100 items-center hover:w-full hover:bg-opacity-25">
          <div>{icon}</div>
          <h2 className="text-white font-bold">{title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default CustomSidebarItems;
