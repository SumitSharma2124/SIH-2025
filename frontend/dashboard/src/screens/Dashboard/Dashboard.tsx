import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Layout } from "../../components/Layout/Layout";
import { DashboardStatsSection } from "./sections/DashboardStatsSection/DashboardStatsSection";
import IssueListSection from "./sections/IssueListSection/IssueListSection";
import { MapView } from "./sections/MapView/MapView";
import { AnalyticsView } from "./sections/AnalyticsView/AnalyticsView";
// import { ApiTest } from "../../components/ApiTest";

export const Dashboard = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState("list");
  const [filters, setFilters] = React.useState({
    type: "all",
    priority: "all",
    department: "all",
    status: "all",
    area: "all",
    search: ""
  });

  return (
    <Layout>
      <div className="p-6">
        {/* Dashboard Stats Section */}
        <DashboardStatsSection filters={filters} setFilters={setFilters} />

        {/* Backend Connection Test */}
        <div className="mt-6">
          {/* Backend Connection Test removed */}
        </div>

        {/* View Toggle Tabs */}
        <div className="mt-8 mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[386px]">
            <TabsList className="w-full h-[69px] bg-slate-100 rounded-[15px] p-0">
              <TabsTrigger
                value="map"
                className="flex-1 h-[54px] text-[28px] [font-family:'Inter',Helvetica] font-bold text-[#00000099] data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:rounded-[10px] data-[state=active]:mx-2 data-[state=active]:my-[7.5px]"
              >
                Map
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="flex-1 h-[54px] text-[28px] [font-family:'Inter',Helvetica] font-bold text-[#00000099] data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:rounded-[10px] data-[state=active]:mx-2 data-[state=active]:my-[7.5px]"
              >
                List
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="flex-1 h-[54px] text-[28px] [font-family:'Inter',Helvetica] font-bold text-[#00000099] data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:rounded-[10px] data-[state=active]:mx-2 data-[state=active]:my-[7.5px]"
              >
                Analytics
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Content based on active tab */}
        {activeTab === "list" && <IssueListSection filters={filters} />}
        {activeTab === "map" && <MapView />}
        {activeTab === "analytics" && <AnalyticsView />}
      </div>
    </Layout>
  );
};
