import artisanImg from '@/assets/images/artisan.webp'
import bridalImg from '@/assets/images/bridal.webp'
import customImg from '@/assets/images/custom.webp'
import dailyImg from '@/assets/images/daily.webp'
import handmadeImg from '@/assets/images/craftsmanship.webp'
import wholesaleImg from '@/assets/images/wholesale.webp'

export type JewelleryCategory = {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
  ctaLabel: string
}

export const jewelleryCategories: JewelleryCategory[] = [
  {
    id: 'gold-handmade',
    name: 'Gold Handmade Jewellery',
    description:
  'Special handmade pieces with meenakari, nakashi and temple-style designs.',
    image: handmadeImg,
    highlights: ['22K BIS Hallmarked', 'In-house design studio', 'Lifetime polishing'],
    ctaLabel: 'Explore handmade work',
  },
  {
    id: 'bridal',
    name: 'Bridal Jewellery',
    description:
  'Bridal sets, long haars and maang tikkas that match your family style and culture.',
    image: bridalImg,
    highlights: ['Custom ensembles', 'Styling consultation', 'Assured buyback'],
    ctaLabel: 'Plan bridal trousseau',
  },
  {
    id: 'custom',
    name: 'Custom Jewellery',
    description:
  'We turn your photos or drawings into strong gold pieces you can use for many years.',
    image: customImg,
    highlights: ['3D previews', 'Flexible budgets', 'Dedicated concierge'],
    ctaLabel: 'Start bespoke brief',
  },
  {
    id: 'daily',
    name: 'Daily Wear',
    description:
  'Lightweight chains, rings and office-friendly pieces that are comfortable to wear every day.',
    image: dailyImg,
    highlights: ['Minimal silhouettes', 'Diamond detailing', 'After-sales care'],
    ctaLabel: 'Shop daily classics',
  },
  {
    id: 'wholesale',
    name: 'Wholesale B2B',
    description:
  'Handmade stock in bulk for jewellery shops and studios, delivered on time.',
    image: wholesaleImg,
    highlights: ['Pan-India shipping', 'Design-only partnerships', 'Private labelling'],
    ctaLabel: 'Book a sourcing call',
  },
  {
    id: 'artisan',
    name: 'Artisan Collaborations',
    description:
  'Special small collections made together with expert karigars and designers.',
    image: artisanImg,
  highlights: ['Special themed collections', 'Photos and content for your marketing', 'Limited stock launches'],
  ctaLabel: 'Share your idea',
  },
]

