export default function Contact() {
  return (
    <div className="glass-card p-12 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl"></div>
      <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
      <div className="space-y-4 font-mono text-emerald-400">
        <p className="text-xl">sonnamchokii9@gmail.com</p>
        <p className="text-slate-400">+975 17255337</p>
        <p className="text-slate-500 text-xs">Sarpang, Gelephu, Bhutan</p>
      </div>
      <div className="mt-8">
        <a href="https://sonamchoki9.wordpress.com/" className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-white transition">
          Visit Wordpress Portfolio
        </a>
      </div>
    </div>
  );
}