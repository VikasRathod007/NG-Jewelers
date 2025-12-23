import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { whyChooseUsCards } from "@/data/services";

const WhyChooseUsSection = () => (
  <SectionWrapper id="why-us">
    <SectionHeading
      eyebrow="Why choose us?"
      title="A jewellery shop trusted by families"
      subtitle="Clear process, honest gold and friendly service keep customers coming back."
      align="center"
    />

    <Box className="grid gap-6 md:grid-cols-2">
      {whyChooseUsCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="glass-panel p-6"
        >
          <Typography variant="h6">{card.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {card.copy}
          </Typography>
        </motion.div>
      ))}
    </Box>
  </SectionWrapper>
);

export default WhyChooseUsSection;
