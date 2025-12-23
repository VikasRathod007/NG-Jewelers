import { Box, Typography } from "@mui/material";

import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SEOHead from "@/components/ui/SEOHead";
import { jewelleryCategories } from "@/data/categories";
import { pageMeta } from "@/data/meta";

const CategoriesPage = () => {
  const meta = pageMeta.categories;

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <SectionHeading
          eyebrow="Collections"
          title="Meticulously curated jewellery categories"
          subtitle="All categories are crafted in 18K/22K gold with hallmarking certificates."
        />
        <Typography variant="body1" color="text.secondary">
          Pick a category below to begin your consultation. We can also mix
          techniques to create a hybrid capsule for you.
        </Typography>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <Box className="grid gap-6 lg:grid-cols-3">
          {jewelleryCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Box>
      </SectionWrapper>
    </>
  );
};

export default CategoriesPage;
