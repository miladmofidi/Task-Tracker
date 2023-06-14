import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from 'src/app/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  //To task be accesible from outside the component and can be filled
  @Input()
  task!: Task;

  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter();
  //To show red multply icon from FontAwesome icons
  faTimes = faTimes;
  tasks: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  //emit delete event
  onDelete(task: any) {
    //console.log(task);
    this.onDeleteTask.emit(task);
  }

  //emit double click on task event
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
