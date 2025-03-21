import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress size={128} />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
