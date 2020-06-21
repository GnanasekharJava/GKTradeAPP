import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'GKApp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  welcome = 'welcome to GKApp';
  displayName = false;
  constructor(){
    setTimeout(()=>{
      this.displayName = true;
    },2000)
  }
  ngOnInit(){
    
  }
}
