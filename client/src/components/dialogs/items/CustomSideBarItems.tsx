import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

type CustomSidebarItemsProps = {
  icon: ReactElement;
  title: string;
  linkPath: string;
  linkClass?: null;
};

const CustomSidebarItems: React.FC<CustomSidebarItemsProps> = ({
  icon,
  title,
  linkPath,
  linkClass,
}) => {
  const { pathname } = useLocation();

  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }

  function linkClasses(type = null) {
    let classes =
      "flex py-3 gap-2 px-[3.4rem] text-white hover:bg-blue-100 items-center hover:w-full hover:bg-opacity-25 ";
    if (type === subpage) {
      classes += "text-white";
    }
    return classes;
  }

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
