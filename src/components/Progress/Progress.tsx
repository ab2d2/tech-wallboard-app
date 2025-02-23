import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function ProgressBarWithLabel(
  props: LinearProgressProps & {
    progress: {
      progressPercentage: number;
      timeRemaining: number;
    };
  }
) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "60%",
      }}
    >
      <Box sx={{ paddingRight: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {` Next page is due in ${Math.round(
            props.progress.timeRemaining
          )} seconds   `}
        </Typography>
      </Box>
      <Box sx={{ width: "30%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={props.progress.progressPercentage}
          sx={{ borderRadius: 1, height: 32 }}
        />
      </Box>
    </Box>
  );
}
