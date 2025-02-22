import { AppBar } from "@mui/material";
import styled from "@emotion/styled";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;
