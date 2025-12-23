import { Box, Container } from "@mui/material";
import clsx from "clsx";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
  background?: "default" | "muted" | "contrast";
  maxWidth?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const backgroundClass: Record<
  NonNullable<SectionWrapperProps["background"]>,
  string
> = {
  default: "section-light",
  muted: "section-muted",
  contrast: "bg-brand-dark text-white",
};

export const SectionWrapper = ({
  id,
  children,
  background = "default",
  maxWidth = "lg",
  className,
}: SectionWrapperProps) => (
  <Box
    component="section"
    id={id}
    className={clsx(
      "py-8 sm:py-12 md:py-16 lg:py-24",
      backgroundClass[background],
      className,
    )}
  >
    <Container
      maxWidth={maxWidth}
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {children}
    </Container>
  </Box>
);

export default SectionWrapper;
