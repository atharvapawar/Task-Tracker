import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      completed: false // You might want to initialize this in case 'completed' is part of Task
    };

    this.onAddTask.emit(newTask); // Emit the task object, not an Event
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
