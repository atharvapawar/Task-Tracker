// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'May 5th at 2:30pm',
      reminder: true,
      completed: false
    },
    {
      id: 2,
      text: 'Chess',
      day: 'May 6th at 6:30pm',
      reminder: true,
      completed: false
    }
  ];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): Observable<Task> {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    return of(task);
  }

  deleteTask(id: number): Observable<void> {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return of();
  }

  updateTaskReminder(task: Task): Observable<void> {
    const taskToUpdate = this.tasks.find(t => t.id === task.id);
    if (taskToUpdate) {
      taskToUpdate.reminder = !task.reminder;
    }
    return of();
  }

  toggleCompleted(task: Task): Observable<void> {
    const taskToUpdate = this.tasks.find(t => t.id === task.id);
    if (taskToUpdate) {
      taskToUpdate.completed = !task.completed;
    }
    return of();
  }
}
