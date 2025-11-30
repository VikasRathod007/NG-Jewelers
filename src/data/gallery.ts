import gallery1 from '@/assets/images/gallery-1.webp'
import gallery2 from '@/assets/images/gallery-2.webp'
import gallery3 from '@/assets/images/gallery-3.webp'
import bridalImg from '@/assets/images/bridal.webp'
import handmadeImg from '@/assets/images/craftsmanship.webp'
import dailyImg from '@/assets/images/daily.webp'

export type GalleryItem = {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export const galleryShowcase: GalleryItem[] = [
  {
    id: 'royal-radha',
    title: 'Radha Bridal Polki Set',
    description:
      'Intricate kundan setting with detachable passa and hand-strung emerald droplets.',
    image: gallery1,
    category: 'Bridal',
  },
  {
    id: 'lotus-haar',
    title: 'Lotus Haar',
    description: 'Inspired by Malwa architecture with meenakari enamel infill.',
    image: gallery2,
    category: 'Heritage',
  },
  {
    id: 'aurora-stacks',
    title: 'Aurora Ring Stack',
    description: 'Customisable stack in rose gold with baguette diamonds.',
    image: gallery3,
    category: 'Daily Wear',
  },
  {
    id: 'navya-bridal',
    title: 'Navya Bridal Story',
    description: 'Five-ceremony bridal suite with coordinated hair jewels.',
    image: bridalImg,
    category: 'Bridal',
  },
  {
    id: 'artisan-bangle',
    title: 'Nakashi Kada Pair',
    description: 'Hand-chiselled kada with temple miniature scenes.',
    image: handmadeImg,
    category: 'Custom',
  },
  {
    id: 'daylight-pendants',
    title: 'Daylight Pendants',
    description: 'Minimal 22K pendants for elevated everyday ensembles.',
    image: dailyImg,
    category: 'Daily Wear',
  },
]

