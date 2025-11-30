import { Box, Chip, Typography } from '@mui/material'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { brandIdentity } from '@/data/brand'

const ServiceAreasSection = () => (
  <SectionWrapper background="muted">
    <SectionHeading
      eyebrow="Service areas"
      title="Serving Indore & beyond"
      subtitle="Doorstep delivery across Madhya Pradesh with insured logistics partners."
      align="center"
    />

    <Box className="grid gap-8 lg:grid-cols-2">
      <Box className="glass-panel overflow-hidden">
        <Box
          component="iframe"
          title="NG Jewellers map"
          src={brandIdentity.mapEmbedUrl}
          width="100%"
          height="320"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
        />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Priority concierge coverage
        </Typography>
        <Box className="flex flex-wrap gap-3">
          {brandIdentity.serviceAreas.map((city) => (
            <Chip
              key={city}
              label={city}
              sx={{ borderRadius: 999, px: 1 }}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          Global virtual fittings and insured international shipping are available
          for bespoke commissions.
        </Typography>
      </Box>
    </Box>
  </SectionWrapper>
)

export default ServiceAreasSection

