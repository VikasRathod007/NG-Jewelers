import craftsmanshipImg from '@/assets/images/craftsmanship.webp'
import processImg from '@/assets/images/process.webp'

export type Specialization = {
  title: string
  description: string
  icon: string
}

export const coreSpecializations: Specialization[] = [
  {
    title: 'Handcrafted Heritage',
    description:
      'Temple, meenakari and pacheli techniques perfected over decades for heirloom sets.',
    icon: 'hammer',
  },
  {
    title: 'Custom Gold Atelier',
    description:
      'Collaborative design sprints blending CAD precision with artisan finishing for bespoke stories.',
    icon: 'sparkles',
  },
  {
    title: 'Bridal Styling Suite',
    description:
      'End-to-end bridal curation across ceremonies with layering, styling and care guides.',
    icon: 'crown',
  },
  {
    title: 'B2B Manufacturing',
    description:
      'Reliable wholesale partner for boutiques seeking limited runs with tight QC controls.',
    icon: 'handshake',
  },
]

export const whyChooseUsCards = [
  {
    title: 'Ethical Sourcing',
    copy: '100% BIS hallmarked gold, responsibly sourced diamonds, recycled metals where possible.',
  },
  {
    title: 'In-House Karigars',
    copy: '18 master artisans under one roof ensuring consistent finishing and faster refinements.',
  },
  {
    title: 'Digitised Workflow',
    copy: '3D CAD previews, AR try-ons and tracked approvals keep every project transparent.',
  },
  {
    title: 'Lifetime Service',
    copy: 'Complimentary cleaning, free first resizing and priority repairs for NG patrons.',
  },
]

export const processSnapshots = [
  {
    title: 'Design Discovery',
    highlight: 'Mood-boarding, budget mapping & gemstone sourcing',
    media: craftsmanshipImg,
  },
  {
    title: 'Wax & Casting',
    highlight: 'Precision casting with multi-stage QC and weight optimisation',
    media: processImg,
  },
  {
    title: 'Finishing & Delivery',
    highlight: 'Hand setting, polishing and velvet packaging with authentication',
    media: craftsmanshipImg,
  },
]

