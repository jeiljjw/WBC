import { CHAMPIONS } from "@/data/mockData";
import { Trophy, Star } from "lucide-react";
import { motion } from "motion/react";
import { TeamBadge } from "@/components/TeamBadge";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-3xl font-bold text-slate-900">역대 우승국 및 MVP</h2>
        <p className="text-slate-500 mt-2">월드 베이스볼 클래식의 역대 챔피언과 주요 선수들을 확인하세요.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...CHAMPIONS].sort((a, b) => b.year - a.year).map((champ, idx) => (
          <motion.div 
            key={champ.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 text-slate-50 opacity-50">
              <Trophy size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                  {champ.year}
                </span>
                <Trophy className="text-yellow-500" size={24} />
              </div>
              <div className="mb-1">
                <TeamBadge name={champ.team} className="text-2xl font-bold text-slate-800" />
              </div>
              <div className="flex items-center gap-1 text-slate-500 text-sm mb-6">
                <span>준우승:</span>
                <TeamBadge name={champ.runnerUp} className="text-sm font-medium" />
              </div>
              
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                  <Star size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">MVP</p>
                  <p className="font-semibold text-slate-700">{champ.mvp}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
