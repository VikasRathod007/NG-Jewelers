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
      className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2"
      sx={{
        alignItems: 'center',
        px: { xs: 0, sm: 2 },
      }}
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
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '1.75rem', // 28px on mobile
              sm: '2.25rem', // 36px on small tablets
              md: '2.75rem', // 44px on medium screens
              lg: '3.5rem',  // 56px on large screens
              xl: '4rem',    // 64px on extra large
            },
            lineHeight: {
              xs: 1.2,
              sm: 1.3,
              md: 1.25,
            },
            fontWeight: 700,
            fontFamily: '"Playfair Display", serif',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {brandIdentity.tagline.split(' • ').map((part, index, array) => (
            <Box
              key={index}
              component="span"
              sx={{
                display: {
                  xs: 'block',
                  sm: index < array.length - 1 ? 'inline' : 'block',
                  md: 'inline',
                },
                '&:not(:last-child)::after': {
                  content: {
                    xs: '""',
                    sm: '" • "',
                    md: '" • "',
                  },
                  mx: { sm: 0.5, md: 1 },
                },
              }}
            >
              {part}
            </Box>
          ))}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: 540 },
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 1.6,
          }}
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

        <Box
          className="mt-6 sm:mt-8 grid gap-4 sm:gap-6"
          sx={{
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
            },
          }}
        >
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
        <Box
          className="glass-panel p-3 sm:p-4 max-w-xs"
          sx={{
            position: { xs: 'relative', sm: 'absolute' },
            bottom: { sm: -24 },
            right: { sm: 24 },
            mt: { xs: 2, sm: 0 },
            mx: { xs: 'auto', sm: 0 },
          }}
        >
          <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            Studio services
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
            {brandIdentity.serviceHub}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  </SectionWrapper>
)

export default HeroSection

