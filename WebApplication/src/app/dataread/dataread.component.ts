import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dataread',
  templateUrl: './dataread.component.html',
  styleUrls: ['./dataread.component.css']
})
export class DatareadComponent implements OnInit {

  URLlink = "https://localhost:5001/api/Diction/";
  KeyText="";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  // function stores the text from text box upon it's change
  // they value is used to look up the value from the webservice
  // on http://localhost:5001/ => this.URLlink.
  keyUpdate(event){
    this.KeyText = event.target.value;
  }

  // function makes a general call to the webservice api 
  // with the general a general http get call.
  // the web service uses cors for corss origin resource sharing.
  // data is returned in an object file which gets casted into an array variable
  // those get written into a div html element as children with p element.
  // variable results may be empty but that doesn't effect the program.
  getkeys(){
    var results;
    var divElem = document.getElementById("writeDiv");
    divElem.innerHTML="";
    this.http.get(this.URLlink).subscribe(data => {
      results = Object.values(data);
      for(var i = 0; i < results.length; i++){
        var child = document.createElement("p");
        child.innerHTML=results[i];
        divElem.appendChild(child);
      }
    });
  }

  // function makes a call to the api with a key and retuns it's value
  // it makes a http get request with the web service 
  // calling to an id extension so this.URLlink + this.KeyText
  // create http://localhost:5001/api/Diction/<key>
  // the api returns an object capable of being cast into an array
  // querried values are wiritten down onto the div element as children again
  Findvalues(){
    if(this.KeyText != "") {
      var results;
      var divElem = document.getElementById("writeDiv");
      divElem.innerHTML="";
      this.http.get(this.URLlink+this.KeyText).subscribe(data => {
        this.KeyText = "";

        results = Object.values(data);
        for(var i = 0; i < results.length; i++){
          var child = document.createElement("p");
          child.innerHTML=results[i];
          divElem.appendChild(child);
        }
        
      });
    }
    

  }


}
