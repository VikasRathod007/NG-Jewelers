import { Alert, Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import BrandButton from '@/components/ui/BrandButton'
import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SEOHead from '@/components/ui/SEOHead'
import { heroCustomAsset, customizationHighlights, customizationSteps, previousCustomWork } from '@/data/customization'
import { pageMeta } from '@/data/meta'

type CustomBriefForm = {
  name: string
  contact: string
  jewelleryType: string
  budget: string
  inspiration: string
  message: string
}

const CustomDesignPage = () => {
  const meta = pageMeta.customDesign
  const { register, handleSubmit, reset } = useForm<CustomBriefForm>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (values: CustomBriefForm) => {
    console.table(values)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <Box className="grid gap-8 lg:grid-cols-2 items-center">
          <Box>
            <SectionHeading
              eyebrow="Custom Atelier"
              title="Submit your bespoke jewellery brief"
              subtitle="Share your ideas, heirloom inspiration or Pinterest board."
            />
            <Typography variant="body1" color="text.secondary">
              Our concierge will respond within one working day with a discovery call slot,
              estimated budgets and timeline for your project.
            </Typography>
          </Box>
          <Box
            component="img"
            src={heroCustomAsset}
            alt="Custom jewellery making"
            className="rounded-[32px] shadow-soft w-full object-cover"
          />
        </Box>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Process"
          title="Four transparent steps"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {customizationSteps.map((step) => (
            <Box key={step.title} className="glass-panel p-5">
              <Typography variant="overline">{step.duration}</Typography>
              <Typography variant="h6">{step.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {step.copy}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Previous commissions"
          title="Recent custom stories"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-3">
          {previousCustomWork.map((item) => (
            <Box key={item.id} className="glass-panel overflow-hidden">
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />
              <Box className="p-5">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </SectionWrapper>

      <SectionWrapper background="muted">
        <SectionHeading
          eyebrow="Highlights"
          title="Why custom with NG"
          align="center"
        />
        <Box className="grid gap-6 md:grid-cols-3">
          {customizationHighlights.map((highlight) => (
            <Box key={highlight.title} className="glass-panel p-5">
              <Typography variant="h6">{highlight.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {highlight.detail}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading
          eyebrow="Start here"
          title="Custom design request form"
          align="center"
        />
          <Box
            component="form"
            className="glass-panel p-6 space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
          {submitted && (
            <Alert severity="success">Thank you! We will reach out shortly.</Alert>
          )}
          <Box className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Full name"
              fullWidth
              {...register('name', { required: true })}
            />
            <TextField
              label="Phone / WhatsApp"
              fullWidth
              {...register('contact', { required: true })}
            />
            <TextField
              label="Jewellery type"
              fullWidth
              {...register('jewelleryType', { required: true })}
            />
            <TextField label="Estimated budget" fullWidth {...register('budget')} />
            <TextField
              label="Inspiration link (Pinterest / Drive)"
              fullWidth
              className="md:col-span-2"
              {...register('inspiration')}
            />
            <TextField
              label="Tell us more"
              fullWidth
              multiline
              minRows={4}
              className="md:col-span-2"
              {...register('message')}
            />
          </Box>
          <BrandButton type="submit" size="large">
            Submit request
          </BrandButton>
        </Box>
      </SectionWrapper>
    </>
  )
}

export default CustomDesignPage

