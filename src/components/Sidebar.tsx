import { cn } from "@/utils/cn";
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  Flag, 
  Activity, 
  Target 
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: "dashboard" | "groups" | "tournament" | "teams" | "batters" | "pitchers") => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems: { id: "dashboard" | "groups" | "tournament" | "teams" | "batters" | "pitchers"; label: string; icon: typeof LayoutDashboard }[] = [
    { id: "dashboard", label: "대시보드", icon: LayoutDashboard },
    { id: "groups", label: "조 편성", icon: Users },
    { id: "tournament", label: "토너먼트", icon: Trophy },
    { id: "teams", label: "국가별 성적", icon: Flag },
    { id: "batters", label: "타자 성적", icon: Activity },
    { id: "pitchers", label: "투수 성적", icon: Target },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white self-stretch flex flex-col shrink-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight text-blue-400">WBC History</h1>
        <p className="text-slate-400 text-sm mt-1">월드 베이스볼 클래식 기록</p>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium",
                activeTab === item.id 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-900/20" 
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="p-6 text-xs text-slate-500">
        &copy; 2026 WBC Dashboard
      </div>
    </div>
  );
}
