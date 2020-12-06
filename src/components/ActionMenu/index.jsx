/* components */
import { MenuItemBadg } from "./components/MenuItemBadg";
import { MenuItem } from "./components/MenuItem";
/* icons */
import { FBLoggo } from "icons/FBLoggo";
import { InstLogo } from "icons/InstLogo";
import { MailLogo } from "icons/MailLogo";
/* styles */
import { ActMenCont, IconsText } from "./style";

export const ActionMenu = (props) => {
  return (
    <ActMenCont open={props.open}>
      <MenuItem
        to="https://www.youtube.com/channel/UCVfhKzY261aiqKnx6UyZ4Gg"
        ext
      >
        KANALAS
      </MenuItem>
      <MenuItem to="/ap">APIE MUS</MenuItem>
      <MenuItem to="/parduotuve">PARDUOTUVĖ</MenuItem>
      <MenuItemBadg />
      <MenuItem to="/kontaktai">
        <MailLogo big />
        <IconsText>KONTAKTAI</IconsText>
      </MenuItem>
      <MenuItem to="https://www.facebook.com/dzhiungles" ext>
        <FBLoggo big />
        <IconsText>FACEBOOK'AS</IconsText>
      </MenuItem>
      <MenuItem to="https://www.instagram.com/dzhiungles" ext>
        <InstLogo big />
        <IconsText>INSTAGRAMAS</IconsText>
      </MenuItem>
    </ActMenCont>
  );
};
