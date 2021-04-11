import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "JuniorProgrammer";

  public show:boolean = false;
  public buttonName:any = 'Switch to webservice and database query';


  toggle(){
    this.show = !this.show;

    // switch between the two tasks
    // this.show dictates which component is shown
    if(this.show)  
      this.buttonName = "Switch to file flipping";
    else
      this.buttonName = "Switch to webservice and database query";
  }
}
