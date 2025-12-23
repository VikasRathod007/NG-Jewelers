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
  'Temple, meenakari and pacheli work done over many years for special family sets.',
    icon: 'hammer',
  },
  {
    title: 'Custom Gold Atelier',
    description:
  'We work with you to design jewellery using computer designs and hand finishing for custom pieces.',
    icon: 'sparkles',
  },
  {
    title: 'Bridal Styling Suite',
    description:
  'Complete bridal jewellery sets for all functions, with help on styling and care.',
    icon: 'crown',
  },
  {
    title: 'B2B Manufacturing',
    description:
  'Reliable wholesale partner for shops that want small but regular orders with checked quality.',
    icon: 'handshake',
  },
]

export const whyChooseUsCards = [
  {
    title: 'Ethical Sourcing',
    // show hallmark icon
    copy: '100% BIS hallmarked gold, responsibly sourced diamonds, recycled metals where possible.',
  },
  {
    title: 'In-House Karigars',
  copy: '54 skilled karigars in one workshop, giving you the same good finish and quick changes.',
  },
  {
    title: 'Digitised Workflow',
  copy: 'We share 3D designs and photo or video updates so you can see and approve clearly before we make it.',
  },
  {
    title: 'Lifetime Service',
  copy: 'Free cleaning and fast repair support for NG customers.',
  },
]

export const aboutWhyChoosePoints = [
  {
    title: 'Skilled Artisans',
    description:
  'Our team of karigars and designers has many years of experience in handmade gold jewellery, bridal sets and custom orders.',
  },
  {
    title: '100% Hallmarked Gold',
    description:
  'Every piece has BIS hallmark and we clearly show gold purity, weight and bill details.',
  },
  {
    title: 'Bulk Manufacturing Ready',
    description:
  'We can handle regular orders for retailers, wholesalers and brands who need steady, made-to-order gold jewellery.',
  },
  {
    title: 'Transparent & Relationship-First',
    description:
  'Simple pricing, clear talk and support after purchase, so we can build a long-term relationship with you.',
  },
]

export const aboutSpecializationsExtended = [
  ...coreSpecializations,
  {
    title: 'Lightweight Daily Wear',
    description:
  'Strong but light gold jewellery for daily use – bangles, rings, chains and earrings that you can wear to work and functions.',
  },
  {
    title: 'Wholesale & B2B Supply',
    description:
  'We supply to jewellers, retailers and exporters with regular quality checks, custom designs and on-time delivery.',
  },
]

export const processSnapshots = [
  {
    title: 'Design Discovery',
  highlight: 'We understand your taste, budget and help choose stones',
    media: craftsmanshipImg,
  },
  {
    title: 'Wax & Casting',
  highlight: 'Careful casting with many checks and fair gold weight',
    media: processImg,
  },
  {
    title: 'Finishing & Delivery',
  highlight: 'Stone setting by hand, polishing and safe packing with hallmark proof',
    media: craftsmanshipImg,
  },
]

