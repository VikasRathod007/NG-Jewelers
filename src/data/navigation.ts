export type NavItem = {
  label: string;
  path: string;
};

export const primaryNav: NavItem[] = [

  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Categories", path: "/categories" },
  // { label: 'Custom Design', path: '/custom-design' },
  { label: "Contact", path: "/contact" },
];


export const highlightNav: NavItem[] = [
  { label: "Why NG", path: "/#why-us" },
  { label: "Services", path: "/#services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "FAQ", path: "/faq" },
];
