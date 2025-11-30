import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import BrandButton from '@/components/ui/BrandButton'
import SectionWrapper from '@/components/ui/SectionWrapper'

const CtaSection = () => (
  <SectionWrapper background="muted">
    <Box className="glass-panel p-10 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
      <Box>
        <Typography variant="h4">
          Ready to co-create your next heirloom?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Book an in-studio or virtual consultation. We respond within one business day.
        </Typography>
      </Box>
      <Box className="flex flex-col sm:flex-row gap-3">
        <BrandButton component={Link} to="/custom-design">
          Start a custom brief
        </BrandButton>
        <BrandButton component={Link} to="/contact" tone="secondary">
          Visit our showroom
        </BrandButton>
      </Box>
    </Box>
  </SectionWrapper>
)

export default CtaSection

