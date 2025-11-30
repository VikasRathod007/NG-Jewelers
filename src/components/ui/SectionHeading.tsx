import { Box, Typography } from '@mui/material'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string | ReactNode
  align?: 'left' | 'center'
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) => (
  <Box
    className={clsx(
      'mb-10',
      align === 'center' && 'text-center max-w-3xl mx-auto'
    )}
  >
    {eyebrow && (
      <Typography
        variant="overline"
        sx={{
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'primary.main',
          fontWeight: 600,
        }}
      >
        {eyebrow}
      </Typography>
    )}
    <Typography
      variant="h2"
      className="text-3xl leading-tight md:text-4xl lg:text-5xl"
      sx={{ mb: subtitle ? 2 : 0 }}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body1" color="text.secondary" className="text-lg">
        {subtitle}
      </Typography>
    )}
  </Box>
)

export default SectionHeading

