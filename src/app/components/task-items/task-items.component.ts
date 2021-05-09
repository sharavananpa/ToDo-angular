import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css'],
})
export class TaskItemsComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onToggleReminder = new EventEmitter<Task>();
  fa = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
}
