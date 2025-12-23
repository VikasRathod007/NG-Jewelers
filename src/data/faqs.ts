export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

export const faqs: FAQ[] = [
  {
    question: "Do you only work with gold?",
    answer:
      "We mainly work in 18K and 22K BIS hallmarked gold. We can also make jewellery in platinum on request and can reuse your old gold jewellery.",
    category: "Craftsmanship",
  },
  {
    question: "How long does a custom piece take?",
    answer:
      "Most custom orders take 4–6 weeks after you approve the design. Bridal sets can take 8–10 weeks depending on the work.",
    category: "Custom Design",
  },
  {
    question: "Can I book a virtual appointment?",
    answer:
      "Yes, we talk to customers across India and other countries on WhatsApp and video calls. We can also share computer designs during the call.",
    category: "Consultations",
  },
  {
    question: "Do you offer buyback or exchange?",
    answer:
      "Yes. NG Jewellers offers lifetime buyback on gold weight (after cutting making charges) and exchange on diamond value as per current rates.",
    category: "Policies",
  },
  {
    question: "Is there a minimum order for wholesale?",
    answer:
      "Wholesale orders start from 15 pieces in one lot. We can also give you custom boxes, tags and photos if needed.",
    category: "B2B",
  },
  {
    question: "What after-sales services are included?",
    answer:
      "We offer free first resizing, polishing within a year and fast repair support. Extra care plans are also available.",
    category: "Care",
  },
];
