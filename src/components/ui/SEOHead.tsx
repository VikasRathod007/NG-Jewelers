import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import type { PageMeta } from "@/data/meta";
import { brandIdentity } from "@/data/brand";

type SEOHeadProps = {
  meta: PageMeta;
};

const SEOHead = ({ meta }: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = `https://ngjewellers.com${location.pathname}`;
  const ogTitle = meta.ogTitle || meta.title;
  const ogDescription = meta.ogDescription || meta.description;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(", ")} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta
        property="og:image"
        content="https://ngjewellers.com/og-image.jpg"
      />
      <meta property="og:site_name" content="NG Jewellers" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta
        name="twitter:image"
        content="https://ngjewellers.com/twitter-image.jpg"
      />

      {/* Business Information */}
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Indore" />
      <meta name="geo.position" content="22.28596;75.86583" />
      <meta name="ICBM" content="22.28596, 75.86583" />

      {/* Contact Information */}
      <meta name="contact" content={brandIdentity.phones.join(", ")} />
      <meta name="address" content={brandIdentity.location} />
    </Helmet>
  );
};

export default SEOHead;
