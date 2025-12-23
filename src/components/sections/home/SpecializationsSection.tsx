import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DiamondIcon from "@mui/icons-material/Diamond";
import GavelIcon from "@mui/icons-material/Gavel";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { coreSpecializations } from "@/data/services";

const iconMap: Record<string, ReactNode> = {
  hammer: <GavelIcon />,
  sparkles: <AutoAwesomeIcon />,
  crown: <DiamondIcon />,
  handshake: <HandshakeIcon />,
};

const SpecializationsSection = () => (
  <SectionWrapper id="services" background="muted">
    <SectionHeading
      eyebrow="Specializations"
      title="Where artistry meets precision"
      subtitle="Strategic service pillars designed for brides, collectors and boutique partners alike."
      align="center"
    />

    <Box
      className="grid gap-4 sm:gap-6"
      sx={{
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, 1fr)",
        },
      }}
    >
      {coreSpecializations.map((spec) => (
        <Box
          key={spec.title}
          className="glass-panel flex gap-3 sm:gap-4"
          sx={{
            p: { xs: 4, sm: 5, md: 6 },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box
            className="rounded-full flex items-center justify-center text-white flex-shrink-0"
            sx={{
              width: { xs: 48, sm: 56 },
              height: { xs: 48, sm: 56 },
              background: "linear-gradient(135deg,#B76E78,#E6BE8A)",
            }}
          >
            {iconMap[spec.icon]}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                mb: 1,
              }}
            >
              {spec.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: "0.875rem", sm: "0.875rem" },
              }}
            >
              {spec.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </SectionWrapper>
);

export default SpecializationsSection;
