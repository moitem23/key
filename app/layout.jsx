import './globals.css';

export const metadata = {
  title: 'Three Keys Scottsdale | Your Scottsdale Home Away From Home',
  description: 'Three beautiful Scottsdale vacation stays — The Signature, The Dutton, and The Loft. Compare stays and book directly through VRBO.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
