import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import BrandButton from "@/components/ui/BrandButton";
import SectionWrapper from "@/components/ui/SectionWrapper";

const CtaSection = () => (
  <SectionWrapper background="muted">
    <Box className="glass-panel p-10 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
      <Box>
        <Typography variant="h4">
          Want to make your next special jewellery piece?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Book a visit or video call with us. We reply within one working day.
        </Typography>
      </Box>
      <Box className="flex flex-col sm:flex-row gap-3">
        <BrandButton component={Link} to="/custom-design">
          Start a custom order
        </BrandButton>
        <BrandButton component={Link} to="/contact" tone="secondary">
          Visit our showroom
        </BrandButton>
      </Box>
    </Box>
  </SectionWrapper>
);

export default CtaSection;
