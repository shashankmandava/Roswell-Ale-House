import './globals.css';

export const metadata = {
  title: 'Roswell Ale House',
  description: 'Sports, food, drinks and good times in Roswell.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}