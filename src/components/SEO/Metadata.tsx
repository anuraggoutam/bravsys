import type { Metadata, Viewport } from 'next';

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const SITE_NAME = 'VertexWeb';
const DEFAULT_URL = 'https://bravsys.com';

// Add social media information
const SOCIAL_MEDIA = {
  twitter: 'https://x.com/vertexweb_',
  instagram: 'https://www.instagram.com/vertexweb_/',
  facebook: 'https://www.facebook.com/profile.php?id=61572442240215',
  linkedin: 'www.linkedin.com/in/anurag-gautam-52b899218',
};

const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: {
    default: `${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'We build high-performance, SEO-friendly websites to help businesses grow. Expert web development, UI/UX design, and e-commerce solutions for businesses of all sizes.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  keywords: [
    'web development agency',
    'website designing company in delhi',
    'website development company in delhi',
    'web development company in delhi',
    'web designing company in india',
    'delhi company list',
    'website Developer in delhi',
    'SEO web design',
    'Best Web Development Agency in delhi',
    'Best Web Development company',
    'web development services in india',
    'website development in india',
    'top companies in delhi',
    'Best Web Development in noida',
    'Best Web Development in ghaziabad',
    'Best Web Development in faridabad',
    'Best Web Development in laxmi nagar',
    'Best Web Development in gurgaon',
    'best web development near me',
    'web development in mumbai',
    'web development in pune',
    'web development in krishan vihar',
    'eCommerce website development',
    'Next.js development',
    'React.js development',
    'web design services',
    'custom web development',
    'UI/UX design',
    'website maintenance',
    'responsive web design',
    'custom web applications',
    'mobile-friendly websites',
    'web performance optimization',
    'WordPress development',
    'React development',
    'digital marketing services',
    'website security',
    'website accessibility',
    'progressive web apps',
    'API integration',
    'content management systems',
    'website analytics',
    'conversion rate optimization',
  ],
  authors: [{ name: 'VertexWeb' }],
  openGraph: {
    type: 'website',
    url: DEFAULT_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: '/images/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Vertex Web Solutions - Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SOCIAL_MEDIA.twitter,
    creator: SOCIAL_MEDIA.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: DEFAULT_URL,
  },
  other: {
    'facebook-domain-verification': 'eyjrs0ojyq8ec9nf0ic34hxip02zin',
    'fb:app_id': '9571611329538041',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export function generateMetadata({
  title,
  description,
  keywords,
  noindex,
  nofollow,
}: MetadataProps): Metadata {
  const updatedMetadata: Metadata = {
    ...DEFAULT_METADATA,
    title: title || DEFAULT_METADATA.title,
    description: description || DEFAULT_METADATA.description,
    keywords: keywords || DEFAULT_METADATA.keywords,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
  };

  // Update OpenGraph and Twitter metadata
  if (title) {
    updatedMetadata.openGraph = {
      ...updatedMetadata.openGraph,
      title,
    };
    updatedMetadata.twitter = {
      ...updatedMetadata.twitter,
      title,
    };
  }

  if (description) {
    updatedMetadata.openGraph = {
      ...updatedMetadata.openGraph,
      description,
    };
    updatedMetadata.twitter = {
      ...updatedMetadata.twitter,
      description,
    };
  }

  return updatedMetadata;
}

export default generateMetadata;
