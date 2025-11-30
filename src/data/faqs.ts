export type FAQ = {
  question: string
  answer: string
  category?: string
}

export const faqs: FAQ[] = [
  {
    question: 'Do you only work with gold?',
    answer:
      'Gold is our primary medium (18K & 22K BIS Hallmarked) but we also craft in platinum on request and can reuse your heirloom gold.',
    category: 'Craftsmanship',
  },
  {
    question: 'How long does a custom piece take?',
    answer:
      'Most bespoke orders take 4-6 weeks from design approval. Bridal suites may take 8-10 weeks depending on complexity.',
    category: 'Custom Design',
  },
  {
    question: 'Can I book a virtual appointment?',
    answer:
      'Yes, we consult clients across India and overseas through WhatsApp, Zoom or FaceTime with real-time CAD sharing.',
    category: 'Consultations',
  },
  {
    question: 'Do you offer buyback or exchange?',
    answer:
      'Yes. NG Jewellers offers lifetime buyback on gold weight (net of making charges) and exchange on diamond value as per prevailing rates.',
    category: 'Policies',
  },
  {
    question: 'Is there a minimum order for wholesale?',
    answer:
      'Wholesale collections begin at 15 pieces per drop with fully custom cartons, tagging and optional photo assets.',
    category: 'B2B',
  },
  {
    question: 'What after-sales services are included?',
    answer:
      'Complimentary first resizing, polishing within a year and priority repair slots. Extended care plans are also available.',
    category: 'Care',
  },
]

