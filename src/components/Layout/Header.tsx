import { AppBar } from "@mui/material";
import styled from "@emotion/styled";
import { Logo } from "./Logo";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { FlattenedCategoryConfig } from "../../store/utils";

export const Header = ({
  currentPage,
}: {
  currentPage: FlattenedCategoryConfig;
}) => {
  return (
    <StyledHeader>
      <Logo />
      <StyledBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ color: "#fff" }}
      >
        <h2>{currentPage.levelOneCategoryName}</h2>
        <h2>{currentPage.levelTwoCategoryName}</h2>
      </StyledBreadcrumbs>
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 6rem;
  align-items: center;
`;

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  @media (max-width: 425px) {
    font-size: 0.5rem;
  }
`;
