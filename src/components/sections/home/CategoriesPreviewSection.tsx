import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import BrandButton from "@/components/ui/BrandButton";
import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { jewelleryCategories } from "@/data/categories";

const CategoriesPreviewSection = () => (
  <SectionWrapper>
    <SectionHeading
      eyebrow="Collections"
      title="Jewellery categories curated for every milestone"
      subtitle="From handcrafted bridal couture to wholesale B2B programs."
      align="center"
    />

    <Box
      className="grid gap-4 sm:gap-6"
      sx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
      }}
    >
      {jewelleryCategories.slice(0, 3).map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Box>
    <Box className="text-center mt-10">
      <BrandButton component={Link} to="/categories" tone="ghost">
        View all categories
      </BrandButton>
    </Box>
  </SectionWrapper>
);

export default CategoriesPreviewSection;
