import { TEAM_RECORDS, COUNTRY_INFO } from "@/data/mockData";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TeamBadge } from "@/components/TeamBadge";

export function TeamRecords() {
  const chartData = TEAM_RECORDS.map(r => ({
    ...r,
    teamAbbr: COUNTRY_INFO[r.team]?.abbr || r.team
  }));

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold text-slate-900">국가별 역대 성적</h2>
        <p className="text-slate-500 mt-2">WBC 참가국들의 통산 성적 및 메달 획득 현황입니다.</p>
      </header>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-6">메달 획득 현황</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="teamAbbr" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend iconType="circle" />
              <Bar dataKey="gold" name="우승 (Gold)" stackId="a" fill="#fbbf24" radius={[0, 0, 4, 4]} />
              <Bar dataKey="silver" name="준우승 (Silver)" stackId="a" fill="#94a3b8" />
              <Bar dataKey="bronze" name="3위 (Bronze)" stackId="a" fill="#b45309" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold">국가</th>
                <th className="px-6 py-4 font-semibold text-center">출전 횟수</th>
                <th className="px-6 py-4 font-semibold text-center">승-패</th>
                <th className="px-6 py-4 font-semibold text-center">승률</th>
                <th className="px-6 py-4 font-semibold text-center">우승</th>
                <th className="px-6 py-4 font-semibold text-center">준우승</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {TEAM_RECORDS.map((team, i) => (
                <motion.tr 
                  key={team.team}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 font-bold text-slate-800">
                    <TeamBadge name={team.team} />
                  </td>
                  <td className="px-6 py-4 text-center text-slate-600">{team.appearances}</td>
                  <td className="px-6 py-4 text-center font-medium text-slate-700">{team.winLoss}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{(team.winPct).toFixed(3)}</td>
                  <td className="px-6 py-4 text-center font-bold text-yellow-500">{team.gold}</td>
                  <td className="px-6 py-4 text-center font-bold text-slate-400">{team.silver}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
