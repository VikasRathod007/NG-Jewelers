import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SEOHead from '@/components/ui/SEOHead'
import { faqs } from '@/data/faqs'
import { pageMeta } from '@/data/meta'

const FaqPage = () => {
  const meta = pageMeta.faq

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <SectionHeading
          eyebrow="FAQ"
          title="Your questions answered"
          subtitle="Can’t find what you’re looking for? Send us a WhatsApp message anytime."
        />
        {faqs.map((faq) => (
          <Accordion key={faq.question} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </SectionWrapper>
    </>
  )
}

export default FaqPage

