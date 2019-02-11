import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadControl } from '@iplab/ngx-file-upload';
import { FileUploadValidators } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  isDisabled: boolean = false;
  inputMode: boolean;

  public fileUploadControl = new FileUploadControl([FileUploadValidators.accept([".txt", ".json", ".doc"]),
                FileUploadValidators.filesLimit(1)]);
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getError(): Array<string> {
    let errorArray: string[] = [];
    let controlErrors = this.fileUploadControl.getError();
    Object.keys(controlErrors).forEach(keyError => {
      errorArray.push(controlErrors[ keyError ]);
    });
    console.log(errorArray);
     return errorArray;
    
  }
  public uploadedFiles: Array<File> = [];

  public clear(): void {
      this.uploadedFiles = [];
  }

  

}
