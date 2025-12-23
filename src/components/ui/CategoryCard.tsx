import { Box, Chip, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import type { JewelleryCategory } from "@/data/categories";
import BrandButton from "@/components/ui/BrandButton";

type CategoryCardProps = {
  category: JewelleryCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => (
  <Box className="glass-panel overflow-hidden h-full flex flex-col">
    <Box
      component="img"
      src={category.image}
      alt={category.name}
      className="w-full object-cover"
      sx={{
        height: { xs: 200, sm: 240, md: 224 },
      }}
    />
    <Box
      className="flex-1 flex flex-col space-y-3 sm:space-y-4"
      sx={{
        p: { xs: 3, sm: 4, md: 6 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
        }}
      >
        {category.name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: { xs: "0.875rem", sm: "0.875rem" },
          flex: 1,
        }}
      >
        {category.description}
      </Typography>
      <Box className="flex flex-wrap gap-2">
        {category.highlights.map((item) => (
          <Chip
            key={item}
            size="small"
            label={item}
            sx={{
              borderRadius: 999,
              backgroundColor: "rgba(183,110,120,0.12)",
              color: "primary.main",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
            }}
          />
        ))}
      </Box>
      <BrandButton
        component={RouterLink}
        to="/contact"
        size="large"
        tone="secondary"
        sx={{
          width: { xs: "100%", sm: "auto" },
          mt: "auto",
        }}
      >
        {category.ctaLabel}
      </BrandButton>
    </Box>
  </Box>
);

export default CategoryCard;
