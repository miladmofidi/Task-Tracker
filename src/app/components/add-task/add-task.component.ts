import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from 'src/app/services/ui.service';
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output() onAddTaskٍEventEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task data!')
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTaskٍEventEmitter.emit(newTask)
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
