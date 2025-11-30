import { Box, Typography } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import BrandButton from '@/components/ui/BrandButton'
import SectionWrapper from '@/components/ui/SectionWrapper'

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Page not found | NG Jewellers</title>
    </Helmet>
    <SectionWrapper>
      <Box className="text-center space-y-4">
        <Typography variant="h2">Page not found</Typography>
        <Typography variant="body1" color="text.secondary">
          The jewellery story you‘re looking for has moved.
        </Typography>
        <BrandButton component={Link} to="/">
          Back to home
        </BrandButton>
      </Box>
    </SectionWrapper>
  </>
)

export default NotFoundPage

