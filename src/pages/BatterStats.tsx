import { useState } from "react";
import { BATTER_STATS, YEARS } from "@/data/mockData";
import { motion } from "motion/react";
import { TeamBadge } from "@/components/TeamBadge";

export function BatterStats() {
  const [year, setYear] = useState<number>(2023);
  const stats = BATTER_STATS[year as keyof typeof BATTER_STATS] || [];

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">{year} 타자 성적</h2>
          <p className="text-slate-500 mt-2">{year} WBC 주요 타자들의 기록입니다.</p>
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

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold">선수</th>
                <th className="px-6 py-4 font-semibold">국가</th>
                <th className="px-6 py-4 font-semibold text-right">타율 (AVG)</th>
                <th className="px-6 py-4 font-semibold text-right">홈런 (HR)</th>
                <th className="px-6 py-4 font-semibold text-right">타점 (RBI)</th>
                <th className="px-6 py-4 font-semibold text-right">OPS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {stats.sort((a, b) => b.ops - a.ops).map((player, i) => (
                <motion.tr 
                  key={`${year}-${player.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 font-bold text-slate-800">{player.name}</td>
                  <td className="px-6 py-4 text-slate-500">
                    <TeamBadge name={player.team} />
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-slate-700">{(player.avg).toFixed(3).replace(/^0+/, '')}</td>
                  <td className="px-6 py-4 text-right font-mono text-slate-700">{player.hr}</td>
                  <td className="px-6 py-4 text-right font-mono text-slate-700">{player.rbi}</td>
                  <td className="px-6 py-4 text-right font-mono font-bold text-blue-600">{(player.ops).toFixed(3)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
