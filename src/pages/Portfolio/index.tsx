import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material'
import { useState } from 'react'

import SectionHeading from '@/components/ui/SectionHeading'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SEOHead from '@/components/ui/SEOHead'
import { galleryShowcase, type GalleryItem } from '@/data/gallery'
import { pageMeta } from '@/data/meta'

const PortfolioPage = () => {
  const meta = pageMeta.portfolio
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  return (
    <>
      <SEOHead meta={meta} />

      <SectionWrapper>
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent handcrafted stories"
          subtitle="Tap on an image to expand."
        />
        <Box className="grid gap-6 md:grid-cols-3">
          {galleryShowcase.map((item) => (
            <Box
              key={item.id}
              className="glass-panel overflow-hidden cursor-pointer"
              onClick={() => setActiveItem(item)}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />
              <Box className="p-4">
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Dialog open={Boolean(activeItem)} onClose={() => setActiveItem(null)} maxWidth="md">
          <DialogContent sx={{ position: 'relative', p: 0 }}>
            <IconButton
              onClick={() => setActiveItem(null)}
              sx={{ position: 'absolute', right: 8, top: 8, zIndex: 10 }}
            >
              <CloseIcon />
            </IconButton>
            {activeItem && (
              <>
                <Box
                  component="img"
                  src={activeItem.image}
                  alt={activeItem.title}
                  sx={{ width: '100%', maxHeight: 500, objectFit: 'cover' }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6">{activeItem.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activeItem.description}
                  </Typography>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      </SectionWrapper>
    </>
  )
}

export default PortfolioPage

