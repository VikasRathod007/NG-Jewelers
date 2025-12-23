import { Box, Card, CardContent, Typography } from '@mui/material'
import DiamondIcon from '@mui/icons-material/Diamond'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SecurityIcon from '@mui/icons-material/Security'
import PlaceIcon from '@mui/icons-material/Place'
import PublicIcon from '@mui/icons-material/Public'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SEOHead from '@/components/ui/SEOHead'
import { brandIdentity } from '@/data/brand'
import { pageMeta } from '@/data/meta'
import {
  aboutSpecializationsExtended,
  aboutWhyChoosePoints,
  processSnapshots,
  whyChooseUsCards,
} from '@/data/services'

// const timeline = [
//   {
//     year: '1998',
//     title: 'Studio opens in Raj Ratan Complex',
//     detail: 'Single workshop focused on handmade gold bangles.',
//   },
//   {
//     year: '2008',
//     title: 'Bridal couture desk launches',
//     detail: 'Dedicated bridal stylists & gemstone sourcing network.',
//   },
//   {
//     year: '2016',
//     title: 'CAD & AR previews introduced',
//     detail: 'Hybrid process blending tech with artisan finishing.',
//   },
//   {
//     year: '2024',
//     title: 'Wholesale lab & digital showroom',
//     detail: 'B2B drops plus virtual fittings for global patrons.',
//   },
// ]

const AboutPage = () => {
  const meta = pageMeta.about

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <SectionHeading
          eyebrow="About NG Jewellers"
          title="A 60+ year legacy of gold artistry"
          subtitle={brandIdentity.subheading}
        />
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
           NG Jewellers is a leading manufacturer of handmade and custom gold jewellery in Indore, known for exquisite craftsmanship, modern designs, and ethical business practices. With years of expertise in traditional jewellery making, we specialize in creating unique, custom-designed gold jewellery pieces that reflect both timeless elegance and modern style.
        </Typography>
      </SectionWrapper>

      {/* <SectionWrapper background="muted">
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
      </SectionWrapper> */}

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
          eyebrow="Our Specialization"
          title="Handmade gold jewellery for every milestone"
          subtitle="From daily wear to bridal trousseau and bulk B2B manufacturing, NG Jewellers is a full-service gold atelier."
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutSpecializationsExtended.map((spec) => (
            <Card key={spec.title} className="h-full">
              <CardContent>
                <Typography variant="h6">{spec.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {spec.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Our Promise"
          title="Why choose NG Jewellers?"
          subtitle="Skilled artisans, hallmarked purity and a relationship-first approach make NG more than just a showroom."
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutWhyChoosePoints.map((point) => (
            <Card key={point.title} className="h-full text-center">
              <CardContent>
                {point.title === 'Skilled Artisans' && (
                  <DiamondIcon
                    sx={{
                      fontSize: 48,
                      color: 'primary.main',
                      mb: 2,
                      mx: 'auto',
                      display: 'block',
                    }}
                  />
                )}
                {point.title === '100% Hallmarked Gold' && (
                  <VerifiedIcon
                    sx={{
                      fontSize: 48,
                      color: 'primary.main',
                      mb: 2,
                      mx: 'auto',
                      display: 'block',
                    }}
                  />
                )}
                {point.title === 'Bulk Manufacturing Ready' && (
                  <LocalShippingIcon
                    sx={{
                      fontSize: 48,
                      color: 'primary.main',
                      mb: 2,
                      mx: 'auto',
                      display: 'block',
                    }}
                  />
                )}
                {point.title === 'Transparent & Relationship-First' && (
                  <SecurityIcon
                    sx={{
                      fontSize: 48,
                      color: 'primary.main',
                      mb: 2,
                      mx: 'auto',
                      display: 'block',
                    }}
                  />
                )}
                <Typography variant="h6" gutterBottom>
                  {point.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {point.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Service Areas"
          title="Where we currently serve"
          subtitle="From our Indore studio to cities across Madhya Pradesh, with trusted logistics partners for pan-India delivery."
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <CardContent>
              <Box className="flex items-center gap-2 mb-1 justify-start">
                <PlaceIcon color="primary" />
                <Typography variant="h6" gutterBottom>
                  Core service cities
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {brandIdentity.serviceAreas.join(', ')} and surrounding regions across
                Madhya Pradesh with doorstep delivery options.
              </Typography>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent>
              <Box className="flex items-center gap-2 mb-1 justify-start">
                <PublicIcon color="primary" />
                <Typography variant="h6" gutterBottom>
                  Beyond Madhya Pradesh
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {brandIdentity.logisticsNarrative} {brandIdentity.exportNarrative}
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

