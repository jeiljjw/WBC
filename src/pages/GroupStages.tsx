import { useState } from "react";
import { GROUP_STAGES, YEARS } from "@/data/mockData";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { TeamBadge } from "@/components/TeamBadge";

export function GroupStages() {
  const [year, setYear] = useState<number>(2023);
  const pools = GROUP_STAGES[year as keyof typeof GROUP_STAGES];

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">{year} 조 편성 및 결과</h2>
          <p className="text-slate-500 mt-2">본선 1라운드 조별 리그 결과입니다.</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pools.map((pool, idx) => (
          <motion.div 
            key={`${year}-${pool.group}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
          >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">{pool.group}</h3>
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <MapPin size={14} />
                {pool.location}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white text-xs uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    <th className="px-6 py-3 font-medium">국가</th>
                    <th className="px-6 py-3 font-medium text-center">승</th>
                    <th className="px-6 py-3 font-medium text-center">패</th>
                    <th className="px-6 py-3 font-medium text-center">실점</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pool.teams.map((team, i) => (
                    <tr key={team.name} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-mono text-sm">{i + 1}</span>
                          <TeamBadge name={team.name} className="text-slate-700" />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-medium text-blue-600">{team.wins}</td>
                      <td className="px-6 py-4 text-center font-medium text-red-500">{team.losses}</td>
                      <td className="px-6 py-4 text-center text-slate-500">{team.runsAllowed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
