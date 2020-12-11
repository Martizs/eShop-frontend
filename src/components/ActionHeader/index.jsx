import { useDispatch, useSelector } from "react-redux";
/* icons */
import { LoggoComp } from "icons/LoggoComp";
/* styles */
import { ActionHeadCont, MenuBut, ActHeadLog } from "./style";
import { HeadLanCont } from "components/Header/style";
/* redux */
import { setLang, toggleMenu } from "redux_store/general/actions";
/* components */
import { DropDown } from "components/DropDown";
/* consts */
import { langOptions } from "components/Header/const";

export const ActionHeader = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.menu);

  const initLang =
    localStorage.getItem("lang") === "en"
      ? langOptions[0].title
      : langOptions[1].title;

  return (
    <ActionHeadCont>
      <MenuBut fontSize="large" onClick={() => dispatch(toggleMenu())} />
      <ActHeadLog
        to="/"
        onClick={() => {
          if (open) {
            dispatch(toggleMenu());
          }
        }}
      >
        <LoggoComp />
      </ActHeadLog>
      <HeadLanCont>
        <DropDown
          fontSize="1.3rem"
          items={langOptions}
          initVal={initLang}
          onItemSelect={(lang) => dispatch(setLang(lang.data))}
        />
      </HeadLanCont>
    </ActionHeadCont>
  );
};
