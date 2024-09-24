import { Component } from '@angular/core';
import { Task } from './Task';
import { TaskService } from './services/task.service';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent,TaskListComponent, AddTaskComponent]
})

export class AppComponent {
  constructor(private taskService: TaskService) {}

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe();
  }
}
