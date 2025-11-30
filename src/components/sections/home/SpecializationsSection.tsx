import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import DiamondIcon from '@mui/icons-material/Diamond'
import GavelIcon from '@mui/icons-material/Gavel'
import HandshakeIcon from '@mui/icons-material/Handshake'
import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { coreSpecializations } from '@/data/services'

const iconMap: Record<string, ReactNode> = {
  hammer: <GavelIcon />,
  sparkles: <AutoAwesomeIcon />,
  crown: <DiamondIcon />,
  handshake: <HandshakeIcon />,
}

const SpecializationsSection = () => (
  <SectionWrapper id="services" background="muted">
    <SectionHeading
      eyebrow="Specializations"
      title="Where artistry meets precision"
      subtitle="Strategic service pillars designed for brides, collectors and boutique partners alike."
      align="center"
    />

    <Box className="grid gap-6 md:grid-cols-2">
      {coreSpecializations.map((spec) => (
        <Box key={spec.title} className="glass-panel p-6 flex gap-4">
          <Box
            className="w-14 h-14 rounded-full flex items-center justify-center text-white"
            sx={{ background: 'linear-gradient(135deg,#B76E78,#E6BE8A)' }}
          >
            {iconMap[spec.icon]}
          </Box>
          <Box>
            <Typography variant="h6">{spec.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {spec.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </SectionWrapper>
)

export default SpecializationsSection

