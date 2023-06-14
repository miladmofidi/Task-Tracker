import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean=false;
  private subject = new Subject<any>();

  constructor() { }

  //to change showAddTask value and send it on subject object to all observables
  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // to provide subscription ability to subscribers
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
