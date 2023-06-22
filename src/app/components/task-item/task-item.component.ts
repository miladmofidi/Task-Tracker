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

  //To task be accesible from outside the component and can be filled
  @Input()
  task!: Task;
  editTask!: Task | null;

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

  public onOpenModal(task: Task | null, mode?: string) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editTask = task;
      button.setAttribute('data-target', '#updateTaskModal');
      console.log('From inside onOpenModal')
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

  public onUpdateTask(task: Task): void {
    // @ts-ignore
    //document.getElementById('add-employee-form').click();
    this.taskService.updateTaskReminder(task).subscribe(
      (response: Task) => {
        console.log(response);
        this.onTaskUpdated.emit();
      },
      (erro: HttpErrorResponse) => {
        alert(erro.message);
      }
    );
  }
}
