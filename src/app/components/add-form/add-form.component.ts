import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  @Output() onAddTask = new EventEmitter<Task>();
  text: string;
  day: string;
  add: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Form not complete!');
      return;
    }
    if (this.add) {
      this.text += ' - ' + this.add;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.add = '';
    this.reminder = false;
  }
}
