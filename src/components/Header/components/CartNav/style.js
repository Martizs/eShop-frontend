import styled from "styled-components";
import Badge from "@material-ui/core/Badge";

export const StyledBadge = styled(Badge)`
  span {
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.secondBackgrCol};
  }
`;
