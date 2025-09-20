import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export const Settings = (): JSX.Element => {
  const [activeSection, setActiveSection] = React.useState("general");

  const menuItems = [
    { id: "general", label: "General Settings", icon: "⚙️" },
    { id: "users", label: "User Management", icon: "👥" },
    { id: "departments", label: "Departments", icon: "🏢" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "integrations", label: "Integrations", icon: "🔗" },
  ];

  const users = [
    { name: "John Smith", email: "john@city.gov", role: "Admin", department: "Road", status: "Active" },
    { name: "Sarah Johnson", email: "sarah@city.gov", role: "Manager", department: "Water", status: "Active" },
    { name: "Mike Davis", email: "mike@city.gov", role: "Technician", department: "Electric", status: "Inactive" },
  ];

  const departments = [
    { name: "Road Department", head: "John Smith", staff: 12, activeIssues: 45 },
    { name: "Water Department", head: "Sarah Johnson", staff: 8, activeIssues: 23 },
    { name: "Electric Department", head: "Mike Davis", staff: 6, activeIssues: 18 },
    { name: "Sanitation", head: "Lisa Brown", staff: 15, activeIssues: 31 },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Settings</h1>
            <p className="text-xl text-gray-600">Configure system settings and manage users</p>
          </div>

          <div className="flex gap-6">
            {/* Settings Menu */}
            <div className="w-64 bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.id 
                        ? 'bg-[#10b77f] text-white' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="flex-1 bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-6">
              {activeSection === "general" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">General Settings</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        System Name
                      </label>
                      <Input 
                        defaultValue="City Issue Management System" 
                        className="h-12 border-2 border-[#b6bcc5]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Default Priority
                      </label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="h-12 border-2 border-[#b6bcc5]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-[#10b77f] hover:bg-[#0ea06e] text-white">
                      Save Changes
                    </Button>
                    <Button variant="outline">
                      Reset to Default
                    </Button>
                  </div>
                </div>
              )}

              {activeSection === "users" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                    <Button className="bg-[#10b77f] hover:bg-[#0ea06e] text-white">
                      Add New User
                    </Button>
                  </div>

                  <div className="overflow-hidden border border-[#b6bdc6] rounded-lg">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Name</th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Email</th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Role</th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Department</th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {users.map((user, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                            <td className="px-6 py-4">
                              <Badge className="bg-blue-100 text-blue-800">{user.role}</Badge>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">{user.department}</td>
                            <td className="px-6 py-4">
                              <Badge className={user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                                {user.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeSection === "departments" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Department Management</h2>
                    <Button className="bg-[#10b77f] hover:bg-[#0ea06e] text-white">
                      Add Department
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {departments.map((dept, index) => (
                      <div key={index} className="border border-[#b6bdc6] rounded-lg p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Department Head:</strong> {dept.head}</p>
                          <p><strong>Staff Count:</strong> {dept.staff}</p>
                          <p><strong>Active Issues:</strong> {dept.activeIssues}</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Notification Settings</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-[#b6bdc6] rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Receive email alerts for new issues</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-[#b6bdc6] rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">SMS Alerts</h3>
                        <p className="text-sm text-gray-600">Get SMS notifications for urgent issues</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-[#b6bdc6] rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">Dashboard Alerts</h3>
                        <p className="text-sm text-gray-600">Show real-time alerts on dashboard</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "integrations" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">System Integrations</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-[#b6bdc6] rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">GIS Mapping</h3>
                      <p className="text-sm text-gray-600 mb-4">Connect with geographic information systems</p>
                      <Badge className="bg-green-100 text-green-800 mb-4">Connected</Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Configure</Button>
                        {/* Test Connection button removed */}
                      </div>
                    </div>
                    
                    <div className="border border-[#b6bdc6] rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile App API</h3>
                      <p className="text-sm text-gray-600 mb-4">API for citizen mobile application</p>
                      <Badge className="bg-yellow-100 text-yellow-800 mb-4">Pending</Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Setup</Button>
                        <Button size="sm" variant="outline">Documentation</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};