import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [dateAndTime, setDateAndTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateAndTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <StyledFooter>{dateAndTime}</StyledFooter>;
};
const StyledFooter = styled.footer`
  border-top: 1px solid #333;
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;
