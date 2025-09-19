import React from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

const issueData = [
  {
    id: 1,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 2,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 3,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 4,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 5,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 6,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 7,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 8,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 9,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 10,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 11,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
  {
    id: 12,
    title: "Pothole on road",
    location: "Eve Road",
    type: "Pothole",
    priority: "High",
    area: "East wood",
    department: "Road",
    status: "Resolved",
    created: "16/9/2025,\n7:13:33 am",
  },
];

export const IssueListSection = (): JSX.Element => {
  return (
    <div className="w-full bg-white rounded-[15px] border border-solid border-[#b6bdc6] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#b6bdc6]">
            <TableHead className="px-[29px] py-[22px] [font-family:'Inter',Helvetica] font-bold text-[#000000b2] text-2xl tracking-[0] leading-[normal]">
              Issue
            </TableHead>
            <TableHead className="px-4 py-[22px] [font-family:'Inter',Helvetica] font-bold text-[#000000b2] text-2xl tracking-[0] leading-[normal]">
              Type
            </TableHead>
            <TableHead className="px-4 py-[22px] [font-family:'Inter',Helvetica] font-bold text-[#000000b2] text-2xl tracking-[0] leading-[normal]">
              Priority
            </TableHead>
            <TableHead className="px-4 py-[22px] [font-family:'Inter',Helvetica] font-bold text-[#000000b2] text-2xl tracking-[0] leading-[normal]">
              Area
            </TableHead>
            <TableHead className="px-4 py-[22px] [font-family:'Inter',Helvetica] font-bold text-[#000000b2] text-2xl tracking-[0] leading-[normal]">
              Department
            </TableHead>
            <TableHead className="px-4 py-[22px] [font-family:'Inter',Helvetica] font-bold text-[#000000b2] text-2xl tracking-[0] leading-[normal]">
              Status
            </TableHead>
            <TableHead className="px-4 py-[22px] [font-family:'Inter',Helvetica] font-bold text-[#000000b2] text-2xl tracking-[0] leading-[normal]">
              Created
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issueData.map((issue, index) => (
            <TableRow
              key={issue.id}
              className="border-b border-[#b6bdc6] h-[75px]"
            >
              <TableCell className="px-[29px] py-4">
                <div className="flex flex-col">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal]">
                    {issue.title}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    {issue.location}
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-4 py-4">
                <Badge className="bg-[#10b77f] hover:bg-[#10b77f] text-white rounded-[22px] px-2 py-2.5 h-[39px] w-[78px] flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-base tracking-[0] leading-[normal]">
                  {issue.type}
                </Badge>
              </TableCell>
              <TableCell className="px-4 py-4">
                <Badge className="bg-[#f8ede4] hover:bg-[#f8ede4] text-[#cc410c] border-2 border-solid border-[#fed8ad] rounded-[22px] px-2 py-2.5 h-[39px] w-[78px] flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-base tracking-[0] leading-[normal]">
                  {issue.priority}
                </Badge>
              </TableCell>
              <TableCell className="px-4 py-4">
                <div className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {issue.area}
                </div>
              </TableCell>
              <TableCell className="px-4 py-4">
                <Select defaultValue={issue.department}>
                  <SelectTrigger className="w-40 h-[45px] bg-white rounded-[11px] border-2 border-solid border-[#b6bdc6] [font-family:'Inter',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Road">Road</SelectItem>
                    <SelectItem value="Water">Water</SelectItem>
                    <SelectItem value="Electric">Electric</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="px-4 py-4">
                <Select defaultValue={issue.status}>
                  <SelectTrigger className="w-40 h-[45px] bg-white rounded-[11px] border-2 border-solid border-[#b6bdc6] [font-family:'Inter',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="px-4 py-4">
                <div className="[font-family:'Inter',Helvetica] font-normal text-[#000000b2] text-[15px] tracking-[0] leading-[normal] whitespace-pre-line">
                  {issue.created}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
