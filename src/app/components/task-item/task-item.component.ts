import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {Task} from 'src/app/Task';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {TaskService} from "../../services/task.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit  {

  //To task be accessible from outside the component and can be filled
  @Input()
  task!: Task;
  //editTask!: Task ;
  editTask: Task = {} as Task;

  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter();

  @Output()
  onTaskUpdated: EventEmitter<void> = new EventEmitter<void>();

  //To show red close icon from FontAwesome icons
  faTimes = faTimes;
  faEdit = faEdit;
  tasks: any;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.editTask = this.task;
  }


  //emit delete event
  onDelete(task: any) {
    //console.log(task);
    this.onDeleteTask.emit(task);
  }

  //emit double click on task event
  onToggleForReminder(task: Task) {
    this.onToggleReminder.emit(task);
  }


  public onUpdateTask(task: Task): void {
    this.editTask = task;
    this.taskService.updateTaskReminder(this.editTask).subscribe(
      (response: Task) => {
        console.log(response);
        this.onTaskUpdated.emit();
        this.editTask = {} as Task; // Reset to an empty Task object
      },
      (erro: HttpErrorResponse) => {
        alert(erro.message);
      }
    );
  }
}
