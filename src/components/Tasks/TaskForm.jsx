// src/components/Tasks/TaskForm.jsx
import React, { useState } from 'react';
import API from '../../api'; // Use the Axios instance
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from 'react-router-dom';
const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('PENDING'); // Default status
//   const [statetoload, setStateToLoad] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/tasks', { name, description, status }); // Send token with the request
      setName('');
      setDescription('');
      setStatus('PENDING');
    //   refreshPage()
    // setStateToLoad((prev)=>!prev)
      
    } catch (err) {
      console.error('Error creating task', err);
    }
  };

  return (
   
        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
          {/* Task Name */}
          <Input
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
    
          {/* Task Description */}
          <Textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
    
          {/* Task Status */}
          <Select value={status} onValueChange={(val) => setStatus(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="DONE">Done</SelectItem>
            </SelectContent>
          </Select>
    
          {/* Submit Button */}
          <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
            Add Task
          </Button>
        </form>
  );
};

export default TaskForm;
