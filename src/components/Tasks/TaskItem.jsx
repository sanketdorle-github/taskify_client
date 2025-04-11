
// src/components/Tasks/TaskItem.jsx
import React from 'react';
import API from '../../api';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


const TaskItem = ({ task, fetchTasks }) => {
  const handleStatusToggle = async () => {
    try {
      await API.put(`/tasks/${task._id}`, {
        name: task.name,
        description: task.description,
        status: task.status === 'PENDING' ? 'DONE' : 'PENDING',
      });
      fetchTasks();
    } catch (err) {
      console.error('Error updating task', err);
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/tasks/${task._id}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  return (
    <Card className="w-full mb-4 shadow-sm">
      <CardContent className="p-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.name}</h3>
          <p className="text-sm text-muted-foreground">{task.description}</p>
          <Badge
            variant={task.status === "DONE" ? "success" : "warning"}
            className="mt-2"
          >
            {task.status}
          </Badge>
        </div>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <Button variant="outline" onClick={handleStatusToggle}>
            Toggle
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;