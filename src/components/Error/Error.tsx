import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export function Error({ message }: { message: string }) {
  return (
    <ErrorContainer>
      <Typography variant="h1" fontSize={"6rem"} color="red">
        Error
      </Typography>
      {message}
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 4rem;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
