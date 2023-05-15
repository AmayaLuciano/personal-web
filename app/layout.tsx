import Header from '@/components/Header';
import Providers from './Providers';
import './globals.css';
import { Roboto_Mono } from 'next/font/google';
import { description } from '@/utils/config';
import { Metadata } from 'next';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amaya Luciano',
  description: description,
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
