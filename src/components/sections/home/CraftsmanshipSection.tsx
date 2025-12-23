import { Box, Typography } from "@mui/material";

import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { processSnapshots } from "@/data/services";

const CraftsmanshipSection = () => (
  <SectionWrapper>
    <SectionHeading
      eyebrow="Craftsmanship"
      title="Modern tools. Traditional finishing."
      subtitle="You can understand each step of how we make your jewellery."
      align="center"
    />

    <Box className="grid gap-6 md:grid-cols-3">
      {processSnapshots.map((step) => (
        <Box key={step.title} className="glass-panel overflow-hidden">
          <Box
            component="img"
            src={step.media}
            alt={step.title}
            className="h-48 w-full object-cover"
          />
          <Box className="p-5 space-y-2">
            <Typography variant="subtitle1">{step.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {step.highlight}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </SectionWrapper>
);

export default CraftsmanshipSection;
