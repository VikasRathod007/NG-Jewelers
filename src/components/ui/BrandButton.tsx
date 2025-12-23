import Button, { type ButtonProps } from "@mui/material/Button";
import type { LinkProps as RouterLinkProps } from "react-router-dom";

type BrandButtonProps = ButtonProps & {
  tone?: "primary" | "secondary" | "ghost";
  to?: RouterLinkProps["to"];
};

const toneStyles = {
  primary: {
    background:
      "linear-gradient(135deg, #B76E78 0%, #E6BE8A 50%, #C68733 100%)",
    color: "#1F1B16",
  },
  secondary: {
    background: "#fff",
    color: "#B76E78",
    border: "1px solid rgba(183, 110, 120, 0.25)",
  },
  ghost: {
    background: "transparent",
    color: "#1F1B16",
    border: "1px solid rgba(31, 27, 22, 0.2)",
  },
};

const BrandButton = ({
  tone = "primary",
  children,
  sx,
  ...props
}: BrandButtonProps) => (
  <Button
    {...props}
    sx={{
      borderRadius: 999,
      px: 3,
      py: 1.2,
      fontWeight: 600,
      letterSpacing: "0.05em",
      ...toneStyles[tone],
      ...sx,
    }}
  >
    {children}
  </Button>
);

export default BrandButton;
