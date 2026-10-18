import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pains from '@/components/Pains';
import Solution from '@/components/Solution';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import TechStack from '@/components/Techstack';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pains />
        <Solution />
        <Process />
        <Cases />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}