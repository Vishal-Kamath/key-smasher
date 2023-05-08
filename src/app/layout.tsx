import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Key Smasher',
  applicationName: 'Key Smasher',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', media: '(prefers-color-scheme: light)' },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },

      // dark
      {
        url: '/favicon-dark/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-dark/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-dark/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },

      // dark
      {
        url: '/favicon-dark/apple-touch-icon.png',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },

      // dark
      {
        url: '/favicon-dark/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-dark/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  description:
    "Key Smasher is a typing speed test website designed to challenge and improve your typing skills. Whether you're a seasoned typist looking to refine your skills or a beginner looking to develop your typing proficiency, Key Smasher offers a fun and engaging platform for you to test and develop your typing speed and accuracy.",
  keywords: [
    'wpm speed',
    'wpm testing',
    'type test',
    'typing speed test',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Vishal Kamath', url: 'https://github.com/Vishal-Kamath' }],
  creator: 'Vishal Kamath',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
