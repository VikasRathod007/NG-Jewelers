import { Box, Chip, Typography } from "@mui/material";

import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { brandIdentity } from "@/data/brand";

const ServiceAreasSection = () => (
  <SectionWrapper background="muted">
    <SectionHeading
      eyebrow="Service areas"
      title="Serving Indore and nearby cities"
      subtitle="Home delivery across Madhya Pradesh with trusted partners."
      align="center"
    />

    <Box className="grid gap-8 lg:grid-cols-2">
      <Box className="glass-panel overflow-hidden">
        <Box
          component="iframe"
          title="NG Jewellers map"
          src={brandIdentity.mapEmbedUrl}
          width="100%"
          height="320"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
        />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Main service areas
        </Typography>
        <Box className="flex flex-wrap gap-3">
          {brandIdentity.serviceAreas.map((city) => (
            <Chip
              key={city}
              label={city}
              sx={{ borderRadius: 999, px: 1 }}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          We also do pan india shipping through trusted logistics partners.
        </Typography>
      </Box>
    </Box>
  </SectionWrapper>
);

export default ServiceAreasSection;
