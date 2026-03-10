import { useState } from "react";
import { TOURNAMENT_RESULTS, YEARS } from "@/data/mockData";
import { motion } from "motion/react";
import { TeamBadge } from "@/components/TeamBadge";

export function Tournament() {
  const [year, setYear] = useState<number>(2023);
  const matches = TOURNAMENT_RESULTS[year as keyof typeof TOURNAMENT_RESULTS];

  const quarterfinals = matches.filter(m => m.stage === "Quarterfinals");
  const semifinals = matches.filter(m => m.stage === "Semifinals");
  const final = matches.filter(m => m.stage === "Final");

  const MatchCard = ({ match, delay }: { key?: any, match: any, delay: number }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
    >
      <div className="bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
        {match.stage}
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <TeamBadge name={match.team1} className={match.score1 > match.score2 ? 'text-slate-900' : 'text-slate-500'} />
          <span className={`font-bold text-lg ${match.score1 > match.score2 ? 'text-blue-600' : 'text-slate-400'}`}>
            {match.score1}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <TeamBadge name={match.team2} className={match.score2 > match.score1 ? 'text-slate-900' : 'text-slate-500'} />
          <span className={`font-bold text-lg ${match.score2 > match.score1 ? 'text-blue-600' : 'text-slate-400'}`}>
            {match.score2}
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">{year} 토너먼트 결과</h2>
          <p className="text-slate-500 mt-2">본선 2라운드부터 결승까지의 경기 결과입니다.</p>
        </div>
        <select 
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-700 font-medium shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        >
          {YEARS.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {quarterfinals.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-700 mb-4">8강 (Quarterfinals)</h3>
            {quarterfinals.map((m, i) => <MatchCard key={`${year}-qf-${i}`} match={m} delay={i * 0.1} />)}
          </div>
        )}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-700 mb-4">4강 (Semifinals)</h3>
          <div className="flex flex-col justify-around h-full pb-24 gap-4">
            {semifinals.map((m, i) => <MatchCard key={`${year}-sf-${i}`} match={m} delay={0.4 + i * 0.1} />)}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-700 mb-4">결승 (Final)</h3>
          <div className="flex flex-col justify-center h-full pb-48 gap-4">
            {final.map((m, i) => <MatchCard key={`${year}-f-${i}`} match={m} delay={0.6} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
