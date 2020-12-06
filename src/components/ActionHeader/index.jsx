import { useDispatch, useSelector } from "react-redux";
/* icons */
import { LoggoComp } from "icons/LoggoComp";
/* styles */
import { ActionHeadCont, MenuBut, ActHeadLog, InvBut } from "./style";
/* redux */
import { toggleMenu } from "redux_store/general/actions";

export const ActionHeader = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.menu);

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
      <InvBut fontSize="large" />
    </ActionHeadCont>
  );
};
