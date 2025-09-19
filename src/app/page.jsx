// app/page.jsx
import Navbar from './components/Navbar/page';
import Hero from './components/Hero/page';
import About from './components/About/page';
import Menu from './components/Menu/page';
import Contact from './components/Contact/page';
export default function page() {
  return (
    <>
    <Navbar/>
      <Hero />
      <About/>
      <Menu/>
      <Contact/>
    </>
  );
}
