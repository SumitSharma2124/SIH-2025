import React from "react";

export const AnalyticsView = (): JSX.Element => {
  const stats = [
    { label: "Total Issues", value: "1,247", change: "+12%", color: "text-blue-600" },
    { label: "Resolved", value: "892", change: "+8%", color: "text-green-600" },
    { label: "In Progress", value: "234", change: "+15%", color: "text-yellow-600" },
    { label: "Pending", value: "121", change: "-3%", color: "text-red-600" },
  ];

  const departmentStats = [
    { name: "Road Department", issues: 456, resolved: 312 },
    { name: "Water Department", issues: 234, resolved: 189 },
    { name: "Electric Department", issues: 189, resolved: 156 },
    { name: "Sanitation", issues: 156, resolved: 134 },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${stat.color}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Issues by Department */}
        <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Issues by Department</h3>
          <div className="space-y-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                    <span className="text-sm text-gray-500">{dept.resolved}/{dept.issues}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#10b77f] h-2 rounded-full" 
                      style={{ width: `${(dept.resolved / dept.issues) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Trends */}
        <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time Trends</h3>
          <div className="flex items-center justify-center h-[200px] bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#25abe9] rounded-full flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-gray-600">Interactive charts showing response time trends over time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Distribution */}
      <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Issue Priority Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">23%</div>
            <div className="text-sm text-red-700">High Priority</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">45%</div>
            <div className="text-sm text-yellow-700">Medium Priority</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">32%</div>
            <div className="text-sm text-green-700">Low Priority</div>
          </div>
        </div>
      </div>
    </div>
  );
};