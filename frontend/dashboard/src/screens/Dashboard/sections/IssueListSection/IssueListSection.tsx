import { useEffect, useState } from "react";
import { apiClient } from "../../../../lib/api";
import { Badge } from "../../../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

interface IssueListSectionProps {
  filters: {
    type: string;
    priority: string;
    department?: string;
    status: string;
    area: string;
    search: string;
  };
}

const IssueListSection = ({ filters }: IssueListSectionProps): JSX.Element => {
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [areaCache, setAreaCache] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data: any = await apiClient.getReports();
        let reports = [];
        if (Array.isArray(data)) {
          reports = data;
        } else if (data && Array.isArray(data.reports)) {
          reports = data.reports;
        }
        setIssues(reports);
        // For each report, fetch area if not already cached
        reports.forEach((issue) => {
          const coords = issue.location?.coordinates;
          if (coords && coords.length === 2) {
            const key = coords.join(",");
            // Only fetch if not in cache and not already saved in backend
            if (!areaCache[key] && !issue.area && !issue._areaFetched) {
              // Mark as fetched to prevent repeat fetches in this session
              issue._areaFetched = true;
              fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords[1]}&lon=${coords[0]}`)
                .then(res => res.json())
                .then(async data => {
                  const addr = data.address || {};
                  const specific = data.name || addr.name || addr.amenity || addr.building || addr.attraction;
                  let area = specific;
                  if (!area) {
                    const parts = [
                      addr.house_number,
                      addr.road,
                      addr.neighbourhood,
                      addr.suburb,
                      addr.village,
                      addr.town,
                      addr.city,
                      addr.state,
                      addr.country
                    ].filter(Boolean);
                    area = parts.length > 0 ? parts.join(", ") : data.display_name || "Unknown";
                  }
                  setAreaCache(prev => ({ ...prev, [key]: area }));
                  // Save area to backend so it is only fetched once
                  try {
                    const id = issue._id || issue.id;
                    await apiClient.updateReport(id, { area });
                  } catch {}
                })
                .catch(() => {
                  setAreaCache(prev => ({ ...prev, [key]: "Unknown" }));
                });
            }
          }
        });
      } catch (error) {
        setError("Failed to fetch reports");
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
    const interval = setInterval(() => {
      fetchReports();
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-lg">Loading reports...</div>;
  }
  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }


  // Filtering logic based on filters prop
  const filteredIssues = issues.filter(issue => {
    const type = issue.category || issue.type || "";
    const priority = issue.priority || "";
    const status = issue.status || "";
    const area = (() => {
      if (issue.area) return issue.area;
      const coords = issue.location?.coordinates;
      if (coords && coords.length === 2) {
        const key = coords.join(",");
        return areaCache[key] || "";
      }
      return "";
    })();
    const search = filters.search?.toLowerCase() || "";
    return (
      (filters.type === "all" || type === filters.type) &&
      (filters.priority === "all" || priority === filters.priority) &&
      (filters.status === "all" || status === filters.status) &&
      (filters.area === "all" || (area && area.toLowerCase().includes(filters.area.toLowerCase()))) &&
      (!search || (issue.title?.toLowerCase().includes(search) || area.toLowerCase().includes(search)))
    );
  });

  return (
    <div className="w-full bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-1 sm:p-4 overflow-x-auto">
  <Table className="w-full min-w-[900px] table-fixed text-xs sm:text-sm md:text-base font-inter">
        <TableHeader>
          <TableRow className="border-b border-[#b6bdc6] bg-[#f8fafc]">
            <TableHead className="px-3 py-2 font-semibold text-[#22223b] text-base text-left align-middle tracking-wide uppercase">Issue</TableHead>
            <TableHead className="px-3 py-2 font-semibold text-[#22223b] text-base text-left align-middle tracking-wide uppercase">Type</TableHead>
            <TableHead className="px-3 py-2 font-semibold text-[#22223b] text-base text-left align-middle tracking-wide uppercase">Priority</TableHead>
            <TableHead className="px-3 py-2 font-semibold text-[#22223b] text-base text-left align-middle tracking-wide uppercase">Area</TableHead>
            <TableHead className="px-3 py-2 font-semibold text-[#22223b] text-base text-left align-middle tracking-wide uppercase">Department</TableHead>
            <TableHead className="px-3 py-2 font-semibold text-[#22223b] text-base text-left align-middle tracking-wide uppercase">Status</TableHead>
            <TableHead className="px-3 py-2 font-semibold text-[#22223b] text-base text-left align-middle tracking-wide uppercase">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredIssues.map((issue, index) => {
            let createdAt = issue.createdAt || issue.created || issue.timestamp;
            let createdDisplay = "-";
            if (createdAt) {
              try {
                createdDisplay = new Date(createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
              } catch {
                createdDisplay = createdAt;
              }
            }
            return (
              <TableRow
                key={issue._id || issue.id || index}
                className={
                  `border-b border-[#b6bdc6] h-[75px] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#f6f8fa]'} hover:bg-[#e9ecef]`
                }
              >
                <TableCell className="px-3 py-2 align-middle">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-[#22223b] text-base md:text-lg truncate">{issue.title}</span>
                    <span className="text-xs text-[#6c757d] font-normal whitespace-normal break-words">
                      {issue.location && issue.location.coordinates
                        ? `Lat: ${issue.location.coordinates[1]}, Lng: ${issue.location.coordinates[0]}`
                        : '-'}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-3 py-2 align-middle">
                  <Badge className="bg-[#10b77f] hover:bg-[#10b77f] text-white rounded-[22px] px-2 py-2.5 h-[32px] w-[70px] flex items-center justify-center font-semibold text-xs md:text-base tracking-wide">
                    {issue.category || issue.type || "-"}
                  </Badge>
                </TableCell>
                <TableCell className="px-3 py-2 align-middle">
                  <Select
                    defaultValue={issue.priority || ""}
                    onValueChange={async val => {
                      const id = issue._id || issue.id;
                      try {
                        await apiClient.updateReport(id, { priority: val });
                        setIssues(prev => prev.map((it, idx) => idx === index ? { ...it, priority: val } : it));
                      } catch (e) {
                        // Optionally show error
                      }
                    }}
                  >
                    <SelectTrigger className="w-28 h-9 bg-white rounded-[11px] border-2 border-solid border-[#b6bdc6] font-semibold text-xs md:text-base text-black">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="px-3 py-2 align-middle">
                  <span className="text-sm text-[#343a40] font-normal break-words whitespace-pre-line max-w-[180px] block">
                    {(() => {
                      if (issue.area) return issue.area;
                      const coords = issue.location?.coordinates;
                      if (coords && coords.length === 2) {
                        const key = coords.join(",");
                        return areaCache[key] || "...";
                      }
                      return "-";
                    })()}
                  </span>
                </TableCell>
                <TableCell className="px-3 py-2 align-middle">
                  <Select
                    defaultValue={issue.department || issue.assignedDept || ""}
                    onValueChange={async val => {
                      const id = issue._id || issue.id;
                      try {
                        await apiClient.updateReport(id, { department: val });
                        setIssues(prev => prev.map((it, idx) => idx === index ? { ...it, department: val } : it));
                      } catch (e) {
                        // Optionally show error
                      }
                    }}
                  >
                    <SelectTrigger className="w-32 h-9 bg-white rounded-[11px] border-2 border-solid border-[#b6bdc6] font-semibold text-xs md:text-base text-black">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Road">Road</SelectItem>
                      <SelectItem value="Water">Water</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Sanitation">Sanitation</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="px-3 py-2 align-middle">
                  <Select
                    defaultValue={issue.status || ""}
                    onValueChange={async val => {
                      const id = issue._id || issue.id;
                      try {
                        await apiClient.updateReport(id, { status: val });
                        setIssues(prev => prev.map((it, idx) => idx === index ? { ...it, status: val } : it));
                      } catch (e) {
                        // Optionally show error
                      }
                    }}
                  >
                    <SelectTrigger className="w-32 h-9 bg-white rounded-[11px] border-2 border-solid border-[#b6bdc6] font-semibold text-xs md:text-base text-black">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="px-3 py-2 align-middle">
                  <span className="text-xs text-[#6c757d] whitespace-pre-line">{createdDisplay}</span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
export default IssueListSection;
