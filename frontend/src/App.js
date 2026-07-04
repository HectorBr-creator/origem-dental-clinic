import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Atmosfera from "@/components/sections/Atmosfera";
import Filosofia from "@/components/sections/Filosofia";
import Tratamentos from "@/components/sections/Tratamentos";
import Jornada from "@/components/sections/Jornada";
import Depoimentos from "@/components/sections/Depoimentos";
import ChamadaFinal from "@/components/sections/ChamadaFinal";
import Footer from "@/components/sections/Footer";

function App() {
  useSmoothScroll();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: id === "hero" ? 0 : -60 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar onScrollTo={scrollTo} />
      <main>
        <Hero onScrollTo={scrollTo} />
        <Atmosfera />
        <Filosofia />
        <Tratamentos />
        <Jornada />
        <Depoimentos />
        <ChamadaFinal />
      </main>
      <Footer onScrollTo={scrollTo} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
