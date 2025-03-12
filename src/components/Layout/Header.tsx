import { AppBar } from "@mui/material";
import styled from "@emotion/styled";
import { Logo } from "./Logo";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { PageData } from "../../types";

export const Header = ({ currentPage }: { currentPage: PageData }) => {
  return (
    <StyledHeader>
      <Logo />
      <StyledBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ color: "#fff" }}
      >
        {currentPage.categories.map((category) => (
          <h2 key={category}>{category}</h2>
        ))}
      </StyledBreadcrumbs>
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
