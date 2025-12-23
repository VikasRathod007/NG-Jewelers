import { Box, Typography } from "@mui/material";

type StatHighlightProps = {
  value: string;
  label: string;
};

const StatHighlight = ({ value, label }: StatHighlightProps) => (
  <Box className="text-center lg:text-left">
    <Typography
      variant="h3"
      className="text-3xl font-semibold text-brand-roseGold"
    >
      {value}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
  </Box>
);

export default StatHighlight;
