import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { timers } from "../../constants/timers";

export const Footer = () => {
  const [dateAndTime, setDateAndTime] = useState(new Date().toLocaleString());

  // Update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateAndTime(new Date().toLocaleString());
    }, timers.milliSecondsPerUpdate);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledFooter>
      <StyledTimeAndDate>{dateAndTime}</StyledTimeAndDate>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  border-top: 1px solid #333;
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTimeAndDate = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;
