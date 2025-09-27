import "./globals.css";
import "./App.css";
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import StructuredData from '../components/SEO/StructuredData';
import generateMetadata from '../components/SEO/Metadata';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-poppins', // Enables use in className
});

export const metadata: Metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <WhatsAppButton />
          {/* Global toaster for notifications */}
          <Toaster
            position="top-right"
            expand={true}
            richColors
            toastOptions={{
              classNames: {
                toast:
                  'group flex w-full max-w-sm items-center gap-3 overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 hover:scale-[1.02] dark:bg-neutral-900 dark:border-neutral-800',
                title:
                  'text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors',
                description:
                  'text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors',
                actionButton:
                  'rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90',
                cancelButton:
                  'rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 transition-all hover:bg-gray-100 dark:border-neutral-700 dark:text-gray-300 dark:hover:bg-neutral-800',
              },
            }}
          />

          <Footer />
        </div>
      </body>
    </html>
  );
}


