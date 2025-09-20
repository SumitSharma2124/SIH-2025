import { useNavigate } from "react-router-dom";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

interface DashboardStatsSectionProps {
  filters: {
    type: string;
    priority: string;
    department?: string;
    status: string;
    area: string;
    search: string;
  };
  setFilters: (f: any) => void;
}

export const DashboardStatsSection = ({ filters, setFilters }: DashboardStatsSectionProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        {/* Header section with title and action buttons */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-black text-3xl lg:text-5xl tracking-[0] leading-[normal] mb-4">
              City Issue Dashboard
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#000000b2] text-xl tracking-[0] leading-[normal]">
              Monitor, triage, and resolve citizen reports in real time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:mt-2">
            <Button className="bg-[#10b77f] hover:bg-[#0ea06e] text-white font-bold text-xl h-auto py-4 px-4 rounded-[15px] border-2 border-[#b6bcc5] min-w-[182px]">
              Auto Route All
            </Button>
            <Button 
              onClick={() => navigate('/work-order/create')}
              className="bg-[#25abe9] hover:bg-[#2196d3] text-white font-bold text-xl h-auto py-4 px-4 rounded-[15px] border-2 border-[#b6bcc5] min-w-[194px]"
            >
              New Work Order
            </Button>
          </div>
        </div>

        {/* Search and filters section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 lg:max-w-[402px]">
              <Input
                placeholder="Search Address, title..."
                className="h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] [font-family:'Inter',Helvetica] font-light text-[#00000080] text-2xl px-4"
                value={filters.search}
                onChange={e => setFilters((f: any) => ({ ...f, search: e.target.value }))}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:flex-1">
              <Select value={filters.type} onValueChange={val => setFilters((f: any) => ({ ...f, type: val }))}>
                <SelectTrigger className="h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] [font-family:'Inter',Helvetica] font-light text-black text-2xl px-4 min-w-[140px]">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="pothole">Pothole</SelectItem>
                  <SelectItem value="streetlight">Streetlight</SelectItem>
                  <SelectItem value="garbage">Garbage</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.priority} onValueChange={val => setFilters((f: any) => ({ ...f, priority: val }))}>
                <SelectTrigger className="h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] [font-family:'Inter',Helvetica] font-light text-black text-2xl px-4 min-w-[140px]">
                  <SelectValue placeholder="All Priorities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.status} onValueChange={val => setFilters((f: any) => ({ ...f, status: val }))}>
                <SelectTrigger className="h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] [font-family:'Inter',Helvetica] font-light text-black text-2xl px-4 min-w-[140px]">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="submitted">Submitted</SelectItem>
                  <SelectItem value="acknowledged">Acknowledged</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filters.area} onValueChange={val => setFilters((f: any) => ({ ...f, area: val }))}>
                <SelectTrigger className="h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] [font-family:'Inter',Helvetica] font-light text-black text-2xl px-4 min-w-[140px]">
                  <SelectValue placeholder="All Areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Areas</SelectItem>
                  {/* You can dynamically generate area options if needed */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-start">
            <Button className="bg-[#10b77f] hover:bg-[#0ea06e] text-white font-bold text-2xl h-auto py-4 px-16 rounded-[7px] min-w-[192px]"
              onClick={() => setFilters({ type: "all", priority: "all", department: "all", status: "all", area: "all", search: "" })}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
