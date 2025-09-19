import React from "react";
import { Layout } from "../../components/Layout/Layout";

export const Insights = (): JSX.Element => {
  const insights = [
    {
      title: "Peak Issue Hours",
      description: "Most issues are reported between 8 AM - 10 AM and 5 PM - 7 PM",
      metric: "67%",
      trend: "up",
    },
    {
      title: "Resolution Time",
      description: "Average time to resolve issues has improved by 23% this month",
      metric: "4.2 days",
      trend: "down",
    },
    {
      title: "Citizen Satisfaction",
      description: "Overall satisfaction rating from resolved issue feedback",
      metric: "4.6/5",
      trend: "up",
    },
    {
      title: "Department Efficiency",
      description: "Road Department leads in fastest response times",
      metric: "2.1 hours",
      trend: "up",
    },
  ];

  const topIssues = [
    { type: "Potholes", count: 234, percentage: 35 },
    { type: "Street Lighting", count: 156, percentage: 23 },
    { type: "Water Leaks", count: 123, percentage: 18 },
    { type: "Trash Collection", count: 89, percentage: 13 },
    { type: "Traffic Signals", count: 67, percentage: 11 },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Insights & Analytics</h1>
            <p className="text-xl text-gray-600">Data-driven insights to improve city services</p>
          </div>

          {/* Key Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900">{insight.title}</h3>
                  <div className={`w-3 h-3 rounded-full ${insight.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                <div className="text-3xl font-bold text-[#10b77f] mb-2">{insight.metric}</div>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>

          {/* Charts and Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Issue Types */}
            <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top Issue Types</h3>
              <div className="space-y-4">
                {topIssues.map((issue, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-700">{issue.type}</span>
                        <span className="text-sm text-gray-500">{issue.count} issues</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#10b77f] h-2 rounded-full" 
                          style={{ width: `${issue.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Trends */}
            <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Trends</h3>
              <div className="flex items-center justify-center h-[300px] bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#25abe9] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Interactive trend charts showing issue patterns over time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Department Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">Road Dept</div>
                <div className="text-sm text-blue-700 mt-1">Avg Response: 2.1 hours</div>
                <div className="text-xs text-gray-600 mt-1">Resolution Rate: 89%</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">Water Dept</div>
                <div className="text-sm text-green-700 mt-1">Avg Response: 3.4 hours</div>
                <div className="text-xs text-gray-600 mt-1">Resolution Rate: 92%</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">Electric Dept</div>
                <div className="text-sm text-purple-700 mt-1">Avg Response: 1.8 hours</div>
                <div className="text-xs text-gray-600 mt-1">Resolution Rate: 95%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};