import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(){}

  childValue = false;

  
  ngOnInit(): void {
  }


  onValueChanged(value: boolean) {
    this.childValue = value;
  }
}
