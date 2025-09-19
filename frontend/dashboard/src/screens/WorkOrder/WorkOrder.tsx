import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export const WorkOrder = (): JSX.Element => {
  const navigate = useNavigate();

  const workOrders = [
    {
      id: "WO-001",
      title: "Fix Pothole on Main Street",
      assignee: "John Smith",
      department: "Road",
      priority: "High",
      status: "In Progress",
      dueDate: "2025-01-20",
      created: "2025-01-15",
    },
    {
      id: "WO-002",
      title: "Water Leak Repair",
      assignee: "Sarah Johnson",
      department: "Water",
      priority: "Medium",
      status: "Pending",
      dueDate: "2025-01-22",
      created: "2025-01-16",
    },
    {
      id: "WO-003",
      title: "Street Light Maintenance",
      assignee: "Mike Davis",
      department: "Electric",
      priority: "Low",
      status: "Completed",
      dueDate: "2025-01-18",
      created: "2025-01-14",
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">Work Orders</h1>
              <p className="text-xl text-gray-600">Manage and track work assignments</p>
            </div>
            <Button 
              onClick={() => navigate('/work-order/create')}
              className="bg-[#10b77f] hover:bg-[#0ea06e] text-white font-bold text-xl py-4 px-6 rounded-[15px]"
            >
              Create New Work Order
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              placeholder="Search work orders..."
              className="flex-1 h-[58px] bg-white rounded-[15px] border-2 border-[#b6bcc5] text-xl px-4"
            />
            <Button className="bg-[#25abe9] hover:bg-[#2196d3] text-white font-bold text-xl py-4 px-6 rounded-[15px]">
              Filter
            </Button>
          </div>

          {/* Work Orders Table */}
          <div className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[#b6bdc6]">
                  <TableHead className="px-6 py-4 font-bold text-black text-xl">Work Order ID</TableHead>
                  <TableHead className="px-4 py-4 font-bold text-black text-xl">Title</TableHead>
                  <TableHead className="px-4 py-4 font-bold text-black text-xl">Assignee</TableHead>
                  <TableHead className="px-4 py-4 font-bold text-black text-xl">Department</TableHead>
                  <TableHead className="px-4 py-4 font-bold text-black text-xl">Priority</TableHead>
                  <TableHead className="px-4 py-4 font-bold text-black text-xl">Status</TableHead>
                  <TableHead className="px-4 py-4 font-bold text-black text-xl">Due Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workOrders.map((order) => (
                  <TableRow key={order.id} className="border-b border-[#b6bdc6] h-[75px]">
                    <TableCell className="px-6 py-4 font-bold text-black text-lg">{order.id}</TableCell>
                    <TableCell className="px-4 py-4 text-black text-base">{order.title}</TableCell>
                    <TableCell className="px-4 py-4 text-black text-base">{order.assignee}</TableCell>
                    <TableCell className="px-4 py-4">
                      <Badge className="bg-[#10b77f] text-white">{order.department}</Badge>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <Badge 
                        className={`${
                          order.priority === 'High' ? 'bg-red-100 text-red-800 border-red-200' :
                          order.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                          'bg-green-100 text-green-800 border-green-200'
                        }`}
                      >
                        {order.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-4">
                      <Badge 
                        className={`${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-4 text-gray-600 text-base">{order.dueDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};