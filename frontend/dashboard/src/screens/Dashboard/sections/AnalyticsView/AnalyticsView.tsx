import { useEffect, useState } from "react";
import { apiClient } from "../../../../lib/api";

interface Issue {
  status?: string;
  priority?: string;
  department?: string;
}

export const AnalyticsView = (): JSX.Element => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data: any = await apiClient.getReports();
        if (Array.isArray(data)) {
          setIssues(data);
        } else if (data && Array.isArray(data.reports)) {
          setIssues(data.reports);
        } else {
          setIssues([]);
        }
      } catch (error) {
        setError("Failed to fetch analytics data");
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  // Analytics calculations
  const total = issues.length;
  const resolved = issues.filter(i => i.status === 'Resolved').length;
  const inProgress = issues.filter(i => i.status === 'In Progress').length;
  const pending = issues.filter(i => i.status === 'Pending').length;

  // Department stats
  const departmentMap: Record<string, { issues: number; resolved: number }> = {};
  issues.forEach(i => {
    const dept = i.department || 'Unknown';
    if (!departmentMap[dept]) departmentMap[dept] = { issues: 0, resolved: 0 };
    departmentMap[dept].issues++;
    if (i.status === 'Resolved') departmentMap[dept].resolved++;
  });
  const departmentStats = Object.entries(departmentMap).map(([name, stats]) => ({ name, ...stats }));

  // Priority distribution
  const high = issues.filter(i => i.priority === 'High').length;
  const medium = issues.filter(i => i.priority === 'Medium').length;
  const low = issues.filter(i => i.priority === 'Low').length;
  const highPct = total ? Math.round((high / total) * 100) : 0;
  const mediumPct = total ? Math.round((medium / total) * 100) : 0;
  const lowPct = total ? Math.round((low / total) * 100) : 0;

  if (loading) return <div className="p-8 text-center text-lg">Loading analytics...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

  return (
    <div className="w-full space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Issues</p>
              <p className="text-3xl font-bold text-gray-900">{total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-3xl font-bold text-green-600">{resolved}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-3xl font-bold text-yellow-600">{inProgress}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-3xl font-bold text-red-600">{pending}</p>
            </div>
          </div>
        </div>
      </div>

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
                    style={{ width: `${(dept.issues ? (dept.resolved / dept.issues) * 100 : 0)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Priority Distribution */}
      <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Issue Priority Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">{highPct}%</div>
            <div className="text-sm text-red-700">High Priority</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">{mediumPct}%</div>
            <div className="text-sm text-yellow-700">Medium Priority</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{lowPct}%</div>
            <div className="text-sm text-green-700">Low Priority</div>
          </div>
        </div>
      </div>
    </div>
  );
};