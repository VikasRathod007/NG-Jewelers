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
      'One-of-a-kind handcrafted pieces featuring intricate meenakari, nakashi and temple-inspired motifs.',
    image: handmadeImg,
    highlights: ['22K BIS Hallmarked', 'In-house design studio', 'Lifetime polishing'],
    ctaLabel: 'Explore handmade work',
  },
  {
    id: 'bridal',
    name: 'Bridal Jewellery',
    description:
      'Signature bridal sets, layered haar and statement maang tikkas that narrate your heritage.',
    image: bridalImg,
    highlights: ['Custom ensembles', 'Styling consultation', 'Assured buyback'],
    ctaLabel: 'Plan bridal trousseau',
  },
  {
    id: 'custom',
    name: 'Custom Jewellery',
    description:
      'Translate your Pinterest boards or sketches into heirloom-quality pieces with our CAD + artisan workflow.',
    image: customImg,
    highlights: ['3D previews', 'Flexible budgets', 'Dedicated concierge'],
    ctaLabel: 'Start bespoke brief',
  },
  {
    id: 'daily',
    name: 'Daily Wear',
    description:
      'Lightweight chains, stackable rings and office-ready pieces finished with hypoallergenic comfort.',
    image: dailyImg,
    highlights: ['Minimal silhouettes', 'Diamond detailing', 'After-sales care'],
    ctaLabel: 'Shop daily classics',
  },
  {
    id: 'wholesale',
    name: 'Wholesale B2B',
    description:
      'Bulk handcrafted inventory for boutique jewellers and studios with consistent timelines.',
    image: wholesaleImg,
    highlights: ['Pan-India shipping', 'Design-only partnerships', 'Private labelling'],
    ctaLabel: 'Book a sourcing call',
  },
  {
    id: 'artisan',
    name: 'Artisan Collaborations',
    description:
      'Limited edition capsules co-created with award-winning karigars and fashion houses.',
    image: artisanImg,
    highlights: ['Story-led capsules', 'Press-ready content', 'Exclusive drops'],
    ctaLabel: 'Pitch collaboration',
  },
]

