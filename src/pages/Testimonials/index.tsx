import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { Box, Card, CardContent, Typography } from '@mui/material'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SEOHead from '@/components/ui/SEOHead'
import { pageMeta } from '@/data/meta'
import { testimonials } from '@/data/testimonials'

const TestimonialsPage = () => {
  const meta = pageMeta.testimonials

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <SectionHeading
          eyebrow="Praise"
          title="Client testimonials"
          subtitle="Every story is unique—here are a few of our favourites."
        />
        <Box className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              className="h-full rounded-3xl shadow-lg"
              sx={{
                background: 'linear-gradient(to bottom right, rgba(244, 228, 188, 0.9), rgba(255, 255, 255, 1))',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: 40 }} />
                <Typography variant="body1" sx={{ mt: 2, color: 'text.primary' }}>
                  {item.quote}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: 600 }}>
                  {item.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.location} · {item.highlight}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </SectionWrapper>
    </>
  )
}

export default TestimonialsPage

