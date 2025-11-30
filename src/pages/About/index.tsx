import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SEOHead from '@/components/ui/SEOHead'
import { brandIdentity } from '@/data/brand'
import { pageMeta } from '@/data/meta'
import { processSnapshots, whyChooseUsCards } from '@/data/services'
import { artisanTeam } from '@/data/team'

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
          eyebrow="Team"
          title="Meet the artisans & directors"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {artisanTeam.map((member) => (
            <Card key={member.name} className="h-full text-center">
              <CardContent>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 96, height: 96, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2">{member.experience}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {member.specialty}
                </Typography>
              </CardContent>
            </Card>
          ))}
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

