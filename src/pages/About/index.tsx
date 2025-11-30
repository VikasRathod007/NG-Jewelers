import { Box, Card, CardContent, Typography } from '@mui/material'
import DiamondIcon from '@mui/icons-material/Diamond'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SecurityIcon from '@mui/icons-material/Security'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SEOHead from '@/components/ui/SEOHead'
import { brandIdentity } from '@/data/brand'
import { pageMeta } from '@/data/meta'
import { processSnapshots, whyChooseUsCards } from '@/data/services'

const timeline = [
  {
    year: '1998',
    title: 'Studio opens in Raj Ratan Complex',
    detail: 'Single workshop focused on handmade gold bangles.',
  },
  {
    year: '2008',
    title: 'Bridal couture desk launches',
    detail: 'Dedicated bridal stylists & gemstone sourcing network.',
  },
  {
    year: '2016',
    title: 'CAD & AR previews introduced',
    detail: 'Hybrid process blending tech with artisan finishing.',
  },
  {
    year: '2024',
    title: 'Wholesale lab & digital showroom',
    detail: 'B2B drops plus virtual fittings for global patrons.',
  },
]

const AboutPage = () => {
  const meta = pageMeta.about

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <SectionHeading
          eyebrow="About NG Jewellers"
          title="A 27-year legacy of gold artistry"
          subtitle={brandIdentity.subheading}
        />
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          Established in 1998, NG Jewellers blends heritage techniques with modern tools to
          craft bespoke jewellery that feels intimate yet editorial. Our artisans, gemstone
          experts and client concierge team work under one roof inside Raj Ratan Complex.
        </Typography>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Timeline"
          title="Milestones shaped by our patrons"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <Card key={item.year} className="h-full">
              <CardContent>
                <Typography variant="h5">{item.year}</Typography>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.detail}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Values"
          title="Crafted with conscience"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2">
          {whyChooseUsCards.map((card) => (
            <Card key={card.title} className="h-full">
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.copy}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Our Promise"
          title="What sets us apart"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="h-full text-center">
            <CardContent>
              <DiamondIcon
                sx={{
                  fontSize: 48,
                  color: 'primary.main',
                  mb: 2,
                  mx: 'auto',
                  display: 'block',
                }}
              />
              <Typography variant="h6" gutterBottom>
                Premium Quality
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every piece is crafted with precision using the finest materials and traditional
                techniques passed down through generations.
              </Typography>
            </CardContent>
          </Card>
          <Card className="h-full text-center">
            <CardContent>
              <VerifiedIcon
                sx={{
                  fontSize: 48,
                  color: 'primary.main',
                  mb: 2,
                  mx: 'auto',
                  display: 'block',
                }}
              />
              <Typography variant="h6" gutterBottom>
                BIS Hallmarked
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All our jewellery is BIS certified, ensuring purity and authenticity. Your trust
                is our foundation.
              </Typography>
            </CardContent>
          </Card>
          <Card className="h-full text-center">
            <CardContent>
              <LocalShippingIcon
                sx={{
                  fontSize: 48,
                  color: 'primary.main',
                  mb: 2,
                  mx: 'auto',
                  display: 'block',
                }}
              />
              <Typography variant="h6" gutterBottom>
                Nationwide Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We deliver across India through trusted logistics partners, ensuring your precious
                jewellery reaches you safely.
              </Typography>
            </CardContent>
          </Card>
          <Card className="h-full text-center">
            <CardContent>
              <SecurityIcon
                sx={{
                  fontSize: 48,
                  color: 'primary.main',
                  mb: 2,
                  mx: 'auto',
                  display: 'block',
                }}
              />
              <Typography variant="h6" gutterBottom>
                Secure & Transparent
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Complete transparency in pricing, gold weight calculations, and documentation.
                Your peace of mind matters to us.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Process"
          title="Manufacturing transparent at every stage"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-3">
          {processSnapshots.map((step) => (
            <Card key={step.title} className="h-full">
              <Box
                component="img"
                src={step.media}
                alt={step.title}
                className="h-48 w-full object-cover"
              />
              <CardContent>
                <Typography variant="h6">{step.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.highlight}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </SectionWrapper>
    </>
  )
}

export default AboutPage

