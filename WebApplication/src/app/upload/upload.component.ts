import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  file!:File;

  constructor() { }
  
  lines: any = [];
  linesR: any = [];

  ngOnInit() {}

  // function stores the input file and checks for it's text/plain file.type 
  // if the file type confirms with being text/plain 
  // the program stores it into the file variable
  changeListener(files:any) {
    var fileList = (<HTMLInputElement>files.target).files;
    if (fileList && fileList.length > 0) {
      this.file = fileList[0];
/*
      console.log(this.file.name);
      console.log(this.file.size);
      console.log(this.file.type);
*/
      
      if(this.file.type != "text/plain"){

        alert("Sorry, " + this.file.name + " is invalid, allowed extension is: .txt");
        this.file = null;

      }
      
    }
  }

  // Upon the button press for submission this function is called
  // which reads the said file with FileReader.
  // results are stored in a string array split by '\n' (new line)
  // which then gets looped through backwards to display it in browser
  FileSubmitted() {
    if(this.file){
      let reader: FileReader = new FileReader();
        reader.readAsText(this.file);
        reader.onload = e => {
          var StringArr = (<string>reader.result).split('\n');

          var Parent = document.getElementById('attachment');
          Parent.innerHTML ="";
          
          for (var i = StringArr.length - 1; i >= 0; i--) {
              var paragraph = document.createElement("p");
              paragraph.innerHTML = StringArr[i];
              Parent?.appendChild(paragraph);
          }
      };
    }
    
  }
}
