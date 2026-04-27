import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="nav-container">
        <span className="text-xl font-bold text-white uppercase tracking-tighter">
          Sonam<span className="text-brand-green">Choki</span>
        </span>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#projects" className="hover:text-brand-green transition">Work</a>
          <a href="#contact" className="hover:text-brand-green transition">Contact</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-40 space-y-40 pb-20">
        <section id="profile" className="py-20"><Profile /></section>
        <section id="projects" className="py-20"><Projects /></section>
        <section id="achievements" className="py-20"><Achievements /></section>
        <section id="contact" className="py-20"><Contact /></section>
      </main>
    </div>
  );
}