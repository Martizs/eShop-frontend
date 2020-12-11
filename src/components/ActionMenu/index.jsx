import { useSelector } from "react-redux";
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
  const currLang = useSelector((state) => state.currLang);

  return (
    <ActMenCont open={props.open}>
      <MenuItem
        to="https://www.youtube.com/channel/UCVfhKzY261aiqKnx6UyZ4Gg"
        ext
      >
        {currLang.chanTxt}
      </MenuItem>
      <MenuItem to="/ap">{currLang.abTxt}</MenuItem>
      <MenuItem to="/parduotuve">{currLang.shopTxt}</MenuItem>
      <MenuItemBadg text={currLang.cartTxt} />
      <MenuItem to="/kontaktai">
        <MailLogo big />
        <IconsText>{currLang.contactsTxt}</IconsText>
      </MenuItem>
      <MenuItem to="https://www.facebook.com/dzhiungles" ext>
        <FBLoggo big />
        <IconsText>{currLang.fbTxt}</IconsText>
      </MenuItem>
      <MenuItem to="https://www.instagram.com/dzhiungles" ext>
        <InstLogo big />
        <IconsText>{currLang.instaTxt}</IconsText>
      </MenuItem>
    </ActMenCont>
  );
};
