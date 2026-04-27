export default function Achievements() {
  const skills = ["Python", "Laravel", "MySQL", "Docker", "GNS3", "Linux", "CCNA"];
  
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-emerald-400 font-mono text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="card-gradient p-8 rounded-2xl space-y-4">
        <h3 className="text-emerald-500 font-bold uppercase text-xs tracking-widest">Recent Success</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3 text-slate-300">
            <span className="text-emerald-500">▹</span> CCNAv7 Enterprise Networking
          </li>
          <li className="flex gap-3 text-slate-300">
            <span className="text-emerald-500">▹</span> GovTech CTF Challenge Participant
          </li>
          <li className="flex gap-3 text-slate-300">
            <span className="text-emerald-500">▹</span> 1st Place Football Tournament
          </li>
        </ul>
      </div>
    </div>
  );
}