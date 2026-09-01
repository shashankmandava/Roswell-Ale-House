import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Testimonials />

      <Footer />
    </>
  );
}