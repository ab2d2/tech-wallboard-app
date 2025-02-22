import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ProgressBarWithLabel } from "../Progress/Progress";
import { timers } from "../../constants/timers";

export const Footer = ({ currentPageIndex }: { currentPageIndex: number }) => {
  const [dateAndTime, setDateAndTime] = useState(new Date().toLocaleString());
  const [progress, setProgress] = useState(timers.secondsPerPage);

  // Update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateAndTime(new Date().toLocaleString());
    }, timers.milliSecondsPerUpdate);

    return () => clearInterval(interval);
  }, [currentPageIndex]);

  // Update the progress bar every second
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress <= 1 ? timers.secondsPerPage : prevProgress - 1
      );
    }, timers.milliSecondsPerUpdate);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledFooter>
      <StyledTimeAndDate>{dateAndTime}</StyledTimeAndDate>
      <ProgressBarWithLabel
        progress={{
          progressPercentage: calculateProgressPercentage(
            progress,
            timers.secondsPerPage
          ),
          timeRemaining: progress,
        }}
      />
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

function calculateProgressPercentage(
  progress: number,
  secondsPerPage: number
): number {
  return ((secondsPerPage - progress) / secondsPerPage) * 100;
}
