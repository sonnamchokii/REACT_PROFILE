export default function Projects() {
  const projects = [
    {
      title: "IT Asset Management",
      desc: "Web-based Laravel application with secure Role-Based Access Control.",
      tag: "Laravel / MySQL"
    },
    {
      title: "Cyber Range Lab",
      desc: "Dockerized OT/ICS environment for monitoring network threats using ELK.",
      tag: "Docker / Cybersecurity"
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-white tracking-tight">Project Gallery</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="glass-card p-10 hover:border-emerald-500/40 transition-all duration-500">
            <span className="text-emerald-500 text-[10px] font-mono tracking-widest uppercase">{p.tag}</span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}