import Script from "next/script";

// Add your social media information here
const SOCIAL_MEDIA = {
  twitter: "https://x.com/vertexweb_",
  instagram: "https://www.instagram.com/vertexweb_/",
  facebook: "https://www.facebook.com/profile.php?id=61572442240215",
  linkedin: "www.linkedin.com/in/anurag-gautam-52b899218",
};

const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bravsys",
    url: "https://bravsys.com",
    logo: "https://bravsys.com/favicon.ico",
    description:
      "We build high-performance, SEO-friendly websites to help businesses grow.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 931043779",
      contactType: "customer service",
      areaServed: ["IN", "US", "UK", "CA"],
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      `https://www.instagram.com/${SOCIAL_MEDIA.instagram}/`,
      `https://twitter.com/${SOCIAL_MEDIA.twitter.slice(1)}`,
      `https://www.facebook.com/${SOCIAL_MEDIA.facebook}/`,
      `https://www.linkedin.com/company/${SOCIAL_MEDIA.linkedin}/`,
    ],
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
};

export default StructuredData;
