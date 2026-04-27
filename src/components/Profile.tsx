export default function Profile() {
  return (
    <div className="text-center space-y-8">
      <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
        Welcome to my Digital Space
      </div>
      <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
        Architecting Secure<br />
        <span className="text-emerald-500 text-glow">Network Systems</span>
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Computer Systems & Networks student at <span className="text-white">JNEC</span>. 
        Specializing in <span className="text-emerald-400">Laravel</span> and <span className="text-emerald-400">Docker Infrastructure</span>.
      </p>
      <div className="pt-4">
        <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-500 transition-all">
          View My Work
        </a>
      </div>
    </div>
  );
}