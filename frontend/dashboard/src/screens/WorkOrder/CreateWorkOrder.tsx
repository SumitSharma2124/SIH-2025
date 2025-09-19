import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export const CreateWorkOrder = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    priority: '',
    department: '',
    assignee: '',
    dueDate: '',
    issueType: '',
    estimatedHours: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Work Order Data:', formData);
    
    // Show success message and redirect
    alert('Work Order created successfully!');
    navigate('/work-order');
  };

  const departments = [
    { value: 'road', label: 'Road Department' },
    { value: 'water', label: 'Water Department' },
    { value: 'electric', label: 'Electric Department' },
    { value: 'sanitation', label: 'Sanitation Department' }
  ];

  const assignees = [
    { value: 'john-smith', label: 'John Smith' },
    { value: 'sarah-johnson', label: 'Sarah Johnson' },
    { value: 'mike-davis', label: 'Mike Davis' },
    { value: 'lisa-brown', label: 'Lisa Brown' }
  ];

  const priorities = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const issueTypes = [
    { value: 'pothole', label: 'Pothole' },
    { value: 'water-leak', label: 'Water Leak' },
    { value: 'street-light', label: 'Street Light' },
    { value: 'traffic-signal', label: 'Traffic Signal' },
    { value: 'trash-collection', label: 'Trash Collection' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button
                onClick={() => navigate('/work-order')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Work Orders
              </Button>
            </div>
            <h1 className="text-4xl font-bold text-black mb-2">Create New Work Order</h1>
            <p className="text-xl text-gray-600">Fill out the details to create a new work assignment</p>
          </div>

          <Card className="bg-white rounded-[15px] border border-solid border-[#b6bdc6] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Order Title *
                  </label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-2 border-[#b6bcc5]"
                    placeholder="Enter work order title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-2 border-[#b6bcc5]"
                    placeholder="Enter location address"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border-2 border-[#b6bcc5] rounded-lg resize-none focus:border-[#10b77f] focus:ring-[#10b77f]"
                  placeholder="Describe the work that needs to be done..."
                />
              </div>

              {/* Assignment Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('department', value)}>
                    <SelectTrigger className="h-12 border-2 border-[#b6bcc5]">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assign To
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('assignee', value)}>
                    <SelectTrigger className="h-12 border-2 border-[#b6bcc5]">
                      <SelectValue placeholder="Select assignee" />
                    </SelectTrigger>
                    <SelectContent>
                      {assignees.map((assignee) => (
                        <SelectItem key={assignee.value} value={assignee.value}>
                          {assignee.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('priority', value)}>
                    <SelectTrigger className="h-12 border-2 border-[#b6bcc5]">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem key={priority.value} value={priority.value}>
                          {priority.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Type
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('issueType', value)}>
                    <SelectTrigger className="h-12 border-2 border-[#b6bcc5]">
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      {issueTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Due Date
                  </label>
                  <Input
                    name="dueDate"
                    type="date"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-[#b6bcc5]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Hours
                  </label>
                  <Input
                    name="estimatedHours"
                    type="number"
                    value={formData.estimatedHours}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-[#b6bcc5]"
                    placeholder="Hours"
                    min="0"
                    step="0.5"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <Button
                  type="submit"
                  className="bg-[#10b77f] hover:bg-[#0ea06e] text-white font-bold text-lg py-3 px-8 rounded-lg"
                >
                  Create Work Order
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/work-order')}
                  className="font-bold text-lg py-3 px-8 rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setFormData({
                    title: '',
                    description: '',
                    location: '',
                    priority: '',
                    department: '',
                    assignee: '',
                    dueDate: '',
                    issueType: '',
                    estimatedHours: ''
                  })}
                  className="font-bold text-lg py-3 px-8 rounded-lg"
                >
                  Reset Form
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};