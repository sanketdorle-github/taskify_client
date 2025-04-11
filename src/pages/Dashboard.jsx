
// src/pages/Dashboard.jsx
import React from 'react';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';

const Dashboard = () => {
  return (
    <div className="p-4">
      <TaskForm />
      <TaskList />
    </div>
  );
};
export default Dashboard;
