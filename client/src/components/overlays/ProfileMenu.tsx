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
      <MenuList className="mt-8 border-primary-red ml-[60px]">
        <MenuGroup title="Profil" className="text-start">
          <MenuItem>
            <Link to={user ? "/profil" : "/register"}>
              {user ? "Min profil" : "Opret bruger"}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={"/"}>{"Startside"}</Link>
          </MenuItem>
          <MenuItem>
            <Link to={user ? "/" : "/login"} onClick={logout}>
              {user ? "Log ud" : "Log ind"}
            </Link>
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help" className="text-start">
          <MenuItem>Docs</MenuItem>
          <MenuItem>
            <Link
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
