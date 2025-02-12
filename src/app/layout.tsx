import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { ToastContainer } from '@/shared/lib/notify';
import { Footer } from '@/shared/ui/components/footer';
import { Header } from '@/shared/ui/components/header';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Payment transferring services | Clarity Global Inc',
  description:
    'Make transactions with your payments with Clarity Global Inc safely! Send and receive money worldwide in any currency to 180 countries.',
  robots: 'noindex, nofollow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        style={{ overflowX: 'hidden', touchAction: 'pan-y' }}
      >
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="bottom-left"
          theme="light"
          className={montserrat.className}
          style={{ whiteSpace: 'preLine' }}
        />
      </body>
    </html>
  );
}
