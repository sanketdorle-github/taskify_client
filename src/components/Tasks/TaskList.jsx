// src/components/Tasks/TaskList.jsx
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import API from '../../api';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchName, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks', {
        params: {
            searchName,
          status: statusFilter,
          page,
        },
      });
      setTasks(res.data.docs);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error('Error fetching tasks', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [searchName, statusFilter, page]);

  return (
    <div className="mt-6">
      {/* Filter & Search Section */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center">
        <Input
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:w-1/2"
        />
       <Select
  value={statusFilter || "all"}
  onValueChange={(val) => setStatusFilter(val === "all" ? "" : val)}
>
  <SelectTrigger className="sm:w-40">
    <SelectValue placeholder="Filter by status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All</SelectItem>
    <SelectItem value="PENDING">Pending</SelectItem>
    <SelectItem value="DONE">Completed</SelectItem>
  </SelectContent>
</Select>

      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
          ))
        ) : (
          <Card>
            <CardContent className="p-4 text-center text-muted-foreground">
              No tasks found.
            </CardContent>
          </Card>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </Button>
          <span className="text-sm text-muted-foreground">Page {page} of {totalPages}</span>
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default TaskList;