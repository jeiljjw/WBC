/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { GroupStages } from "./pages/GroupStages";
import { Tournament } from "./pages/Tournament";
import { TeamRecords } from "./pages/TeamRecords";
import { BatterStats } from "./pages/BatterStats";
import { PitcherStats } from "./pages/PitcherStats";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return <Dashboard />;
      case "groups": return <GroupStages />;
      case "tournament": return <Tournament />;
      case "teams": return <TeamRecords />;
      case "batters": return <BatterStats />;
      case "pitchers": return <PitcherStats />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="h-screen w-full bg-black px-[170px]">
      <div className="flex h-full bg-[#f8fafc] overflow-hidden font-sans">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
