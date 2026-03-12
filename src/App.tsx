/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from "react";
import { Sidebar } from "./components/Sidebar";
import { KakaoAd } from "./components/KakaoAd";
import { Dashboard } from "./pages/Dashboard";
import { GroupStages } from "./pages/GroupStages";
import { Tournament } from "./pages/Tournament";
import { TeamRecords } from "./pages/TeamRecords";
import { BatterStats } from "./pages/BatterStats";
import { PitcherStats } from "./pages/PitcherStats";

// 广告 단위 ID 상수
const AD_UNITS = {
  LEFT: "DAN-fy413XbLxAocEhmD",
  RIGHT: "DAN-0zQnN1lLOpcvsW28",
} as const;

type TabId = "dashboard" | "groups" | "tournament" | "teams" | "batters" | "pitchers";

const TAB_COMPONENTS: Record<TabId, ReactNode> = {
  dashboard: <Dashboard />,
  groups: <GroupStages />,
  tournament: <Tournament />,
  teams: <TeamRecords />,
  batters: <BatterStats />,
  pitchers: <PitcherStats />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  return (
    <div className="w-full min-h-screen bg-black">
      {/* 좌우 광고 */}
      <KakaoAd position="left" adUnit={AD_UNITS.LEFT} />
      <KakaoAd position="right" adUnit={AD_UNITS.RIGHT} />

      {/* 메인 콘텐츠 */}
      <div className="pl-[170px] pr-[170px] min-h-screen">
        <div className="flex items-stretch min-h-screen bg-[#f8fafc] overflow-hidden font-sans">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="flex-1 h-full overflow-y-auto p-8 lg:p-12">
            <div className="max-w-6xl mx-auto">
              {TAB_COMPONENTS[activeTab]}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
