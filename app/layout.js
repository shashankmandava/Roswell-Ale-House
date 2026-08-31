import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Roswell Ale House',
  description: 'Sports, food, drinks and good times in Roswell.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Testimonials />
        <Footer />
      </body>
    </html>
  );
}
