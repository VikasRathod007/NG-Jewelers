import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useMemo, useState } from 'react'

import { brandIdentity } from '@/data/brand'
import { highlightNav, primaryNav } from '@/data/navigation'
import BrandButton from '@/components/ui/BrandButton'

const Navbar = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const allNavItems = useMemo(() => [...primaryNav, ...highlightNav], [])

  const isActive = (path: string) =>
    location.pathname === path || location.hash === path.replace('/', '')

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(253, 251, 248, 0.9)',
        }}
      >
        <Toolbar sx={{ gap: 3 }}>
          <Box
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}
          >
            {/* Logo placeholder - replace with actual logo image */}
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                NG
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontFamily='"Playfair Display", serif' sx={{ lineHeight: 1.2 }}>
                NG Jewellers
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>
                {brandIdentity.location}
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation - hidden on mobile */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
            {primaryNav.map((item) => (
              <Typography
                key={item.path}
                component={Link}
                to={item.path}
                className="text-sm font-medium"
                sx={{
                  color: isActive(item.path) ? 'primary.main' : 'text.primary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Button - only visible on mobile */}
          <IconButton
            edge="end"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'flex', lg: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 320 }} role="presentation">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={2}
            py={2}
          >
            <Typography variant="h6">Explore NG Jewellers</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {allNavItems.map((item) => (
              <ListItemButton
                key={item.path}
                component={Link}
                to={item.path}
                selected={isActive(item.path)}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Box px={2} pb={4}>
            <BrandButton
              fullWidth
              component={Link}
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact Studio
            </BrandButton>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar

