import { useContext } from "react";
import { ThemeContext } from "styled-components";
/* styles */
import { LoadingIcStyle } from "./style";

export const LoadingIc = () => {
  const theme = useContext(ThemeContext);

  return (
    <LoadingIcStyle
      type="Puff"
      color={theme.colors.loadingCol}
      height={100}
      width={100}
    />
  );
};
