import { Box, Chip, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import heroVisual from '@/assets/images/hero-banner.webp'
import BrandButton from '@/components/ui/BrandButton'
import SectionWrapper from '@/components/ui/SectionWrapper'
import StatHighlight from '@/components/ui/StatHighlight'
import { brandIdentity } from '@/data/brand'

const HeroSection = () => (
  <SectionWrapper className="relative overflow-hidden">
    <Box
      className="grid gap-10 lg:grid-cols-2"
      sx={{ alignItems: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Chip
          label="Luxury handcrafted in Indore"
          sx={{
            mb: 2,
            backgroundColor: 'rgba(183, 110, 120, 0.12)',
            color: 'primary.main',
            borderRadius: 999,
          }}
        />
        <Typography variant="h1" className="text-4xl lg:text-5xl">
          {brandIdentity.tagline}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 3, maxWidth: 540 }}
        >
          {brandIdentity.subheading}
        </Typography>

        <Box className="flex flex-col sm:flex-row gap-3 mt-6">
          <BrandButton component={Link} to="/categories">
            View Collections
          </BrandButton>
          <BrandButton
            component={Link}
            to="/custom-design"
            tone="secondary"
          >
            Custom Brief
          </BrandButton>
        </Box>

        <Box className="mt-8 grid gap-6 sm:grid-cols-3">
          {brandIdentity.stats.map((stat) => (
            <StatHighlight key={stat.label} {...stat} />
          ))}
        </Box>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Box
          component="img"
          src={heroVisual}
          alt="NG Jewellers handcrafted pieces"
          className="w-full rounded-[32px] shadow-soft object-cover"
        />
        <Box className="glass-panel absolute -bottom-6 right-6 p-4 max-w-xs">
          <Typography variant="subtitle2">Studio services</Typography>
          <Typography variant="body2" color="text.secondary">
            {brandIdentity.serviceHub}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  </SectionWrapper>
)

export default HeroSection

