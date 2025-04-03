import { AppBar } from "@mui/material";
import styled from "@emotion/styled";
import { Logo } from "./Logo";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NoConnectionIcon from "@mui/icons-material/SignalWifiBad";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { PageConfig } from "../../types";

export const Header = ({
  currentPage,
  isConnected,
}: {
  currentPage?: PageConfig;
  isConnected: boolean;
}) => {
  return (
    <StyledHeader>
      <Logo />
      {currentPage && currentPage.categories && (
        <StyledBreadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ color: "#fff" }}
        >
          {currentPage.categories.map((category) => (
            <h2 key={category}>{category}</h2>
          ))}
        </StyledBreadcrumbs>
      )}
      <StyledSpacer />
      {!isConnected && <NoConnectionIcon />}
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)`
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 6rem;
  align-items: center;
  position: relative;
`;

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  @media (max-width: 425px) {
    font-size: 0.5rem;
  }
`;

const StyledSpacer = styled.div`
  flex: 1;
`;
