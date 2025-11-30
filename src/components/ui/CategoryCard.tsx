import { Box, Chip, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import type { JewelleryCategory } from '@/data/categories'
import BrandButton from '@/components/ui/BrandButton'

type CategoryCardProps = {
  category: JewelleryCategory
}

const CategoryCard = ({ category }: CategoryCardProps) => (
  <Box className="glass-panel overflow-hidden">
    <Box
      component="img"
      src={category.image}
      alt={category.name}
      className="h-56 w-full object-cover"
    />
    <Box className="p-6 space-y-4">
      <Typography variant="h5">{category.name}</Typography>
      <Typography variant="body2" color="text.secondary">
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
              backgroundColor: 'rgba(183,110,120,0.12)',
              color: 'primary.main',
            }}
          />
        ))}
      </Box>
      <BrandButton
        component={RouterLink}
        to="/contact"
        size="large"
        tone="secondary"
      >
        {category.ctaLabel}
      </BrandButton>
    </Box>
  </Box>
)

export default CategoryCard

