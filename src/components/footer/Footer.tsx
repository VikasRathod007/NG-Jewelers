import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import PlaceIcon from '@mui/icons-material/Place'
import ScheduleIcon from '@mui/icons-material/Schedule'
import { Box, Divider, Link as MuiLink, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { brandIdentity } from '@/data/brand'
import { primaryNav } from '@/data/navigation'

const Footer = () => (
  <Box component="footer" className="bg-brand-dark text-white pt-16">
    <Box className="max-w-screen-xl mx-auto px-6 lg:px-8">
      <Box className="grid gap-8 md:grid-cols-3">
        <Box>
          <Typography
            variant="h4"
            fontFamily='"Playfair Display", serif'
            sx={{ color: '#D4AF37' }}
          >
            NG Jewellers
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: 'rgba(255,255,255,0.7)',
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '0.875rem',
              },
              lineHeight: 1.6,
              wordBreak: 'break-word',
            }}
          >
            {brandIdentity.tagline.split(' • ').map((part, index, array) => (
              <Box
                key={index}
                component="span"
                sx={{
                  display: {
                    xs: 'block',
                    sm: index < array.length - 1 ? 'inline' : 'block',
                    md: 'inline',
                  },
                  '&:not(:last-child)::after': {
                    content: {
                      xs: '""',
                      sm: '" • "',
                      md: '" • "',
                    },
                    mx: { sm: 0.5, md: 0.5 },
                  },
                }}
              >
                {part}
              </Box>
            ))}
          </Typography>
        </Box>

        <Box>
          <Typography variant="overline" letterSpacing={3}>
            Visit us
          </Typography>
          <Box display="flex" gap={1.5} alignItems="flex-start" mt={2}>
            <PlaceIcon />
            <Typography color="rgba(255,255,255,0.8)">
              {brandIdentity.location}
            </Typography>
          </Box>
          <Box display="flex" gap={1.5} alignItems="center" mt={2}>
            <ScheduleIcon />
            <Typography color="rgba(255,255,255,0.8)">
              {brandIdentity.hours}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="overline" letterSpacing={3}>
            Connect
          </Typography>
          <Box mt={2} display="flex" flexDirection="column" gap={1}>
            {brandIdentity.phones.map((phone) => (
              <MuiLink
                key={phone}
                href={`tel:${phone.replace(/\s/g, '')}`}
                underline="none"
                color="inherit"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <PhoneInTalkIcon fontSize="small" /> {phone}
              </MuiLink>
            ))}
            <MuiLink
              href={`mailto:${brandIdentity.email}`}
              underline="none"
              color="inherit"
            >
              {brandIdentity.email}
            </MuiLink>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        gap={2}
        pb={4}
      >
        <Box display="flex" gap={3} flexWrap="wrap">
          {primaryNav.map((item) => (
            <Typography
              key={item.path}
              component={Link}
              to={item.path}
              sx={{ color: 'rgba(255,255,255,0.72)' }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
        <Typography color="rgba(255,255,255,0.6)">
          © {new Date().getFullYear()} NG Jewellers. Crafted in Indore.
        </Typography>
      </Box>
    </Box>
  </Box>
)

export default Footer

