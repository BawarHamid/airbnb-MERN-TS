import {
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

type ProfileMenuProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useContext(UserContext);

  return (
    <Menu isOpen={isOpen} onClose={onClose} placement="auto">
      <MenuButton className="mx-[-6px]"></MenuButton>
      <MenuList
        className="mt-8 border-white ml-[30px]"
        backgroundColor="#FF385C"
        borderWidth="1px"
        rounded="12px"
      >
        <MenuGroup>
          <h2 className="text-start ml-4 font-bold text-base text-white">
            Konto
          </h2>
          <MenuItem backgroundColor="#FF385C">
            <Link
              to={user ? "/profile" : "/register"}
              className="text-white text-sm hover:underline ml-2"
            >
              {user ? "Min profil" : "Opret bruger"}
            </Link>
          </MenuItem>
          <MenuItem backgroundColor="#FF385C">
            <Link to={"/"} className="text-white text-sm hover:underline ml-2">
              {"Startside"}
            </Link>
          </MenuItem>
          <MenuItem backgroundColor="#FF385C">
            <Link
              to={user ? "/login" : "/login"}
              onClick={logout}
              className="text-white text-sm hover:underline ml-2"
            >
              {user ? "Log ud" : "Log ind"}
            </Link>
          </MenuItem>
        </MenuGroup>
        <MenuDivider className="border-white" borderWidth="2px" />
        <MenuGroup>
          <h2 className="text-start ml-4 font-bold text-base text-white">
            Hjælp
          </h2>
          <MenuItem backgroundColor="#FF385C">
            <Link className="text-white text-sm hover:underline ml-2" to={"/"}>
              Mere
            </Link>
          </MenuItem>
          <MenuItem backgroundColor="#FF385C">
            <Link
              className="text-white text-sm hover:underline ml-2"
              to={
                "https://www.airbnb.dk/resources/hosting-homes/t/common-questions-23?_set_bev_on_new_domain=1701043870_ZjA4Y2MwNzkzMmNh"
              }
            >
              FAQ
            </Link>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
