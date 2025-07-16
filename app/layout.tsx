import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BeWild - Organic & Sustainable Products',
  description: 'Discover the goodness of nature with our responsibly sourced, eco-friendly, and chemical-free products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-arizona-sans">{children}</body>
    </html>
  );
} 