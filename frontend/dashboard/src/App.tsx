import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { WorkOrder } from './screens/WorkOrder/WorkOrder';
import { CreateWorkOrder } from './screens/WorkOrder/CreateWorkOrder';
import { Insights } from './screens/Insights/Insights';
import { Settings } from './screens/Settings/Settings';
import { Login } from './screens/Login/Login';

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/work-order" element={<WorkOrder />} />
        <Route path="/work-order/create" element={<CreateWorkOrder />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};