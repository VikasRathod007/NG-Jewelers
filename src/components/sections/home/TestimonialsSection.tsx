import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import BrandButton from "@/components/ui/BrandButton";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => (
  <SectionWrapper background="contrast">
    <SectionHeading
      eyebrow="Testimonials"
      title="Loved by brides, collectors & boutiques"
      subtitle="Stories from NG patrons across India."
      align="center"
    />
    <Box className="grid gap-6 md:grid-cols-2">
      {testimonials.slice(0, 2).map((item) => (
        <Box
          key={item.id}
          className="rounded-3xl bg-gradient-to-br from-brand-goldLight/90 to-white p-6 shadow-lg"
          sx={{ border: "1px solid rgba(212, 175, 55, 0.2)" }}
        >
          <FormatQuoteIcon sx={{ color: "primary.main", fontSize: 40 }} />
          <Typography variant="body1" sx={{ mt: 2, color: "text.primary" }}>
            {item.quote}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mt: 3, fontWeight: 600, color: "text.primary" }}
          >
            {item.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {item.location} · {item.highlight}
          </Typography>
        </Box>
      ))}
    </Box>
    <Box className="text-center mt-10">
      <BrandButton component={Link} to="/testimonials" tone="secondary">
        Read all testimonials
      </BrandButton>
    </Box>
  </SectionWrapper>
);

export default TestimonialsSection;
