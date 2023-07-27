import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, of,pipe} from 'rxjs';
import { map, filter, tap} from 'rxjs/operators'
import { take} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  start = Date.now();
  documents: any = [];
  testdata: any = [];
  finaldata: any = [];
  example : any = [];
  pageno:number = 1;
  collectID:Array<Document> = [];
  documentList:Array<Document> =[];
  constructor(private api: ApiService){
  }
  
  ngOnInit(): void {
   this.getDocumentsByBatchID();
  }

  /* R and D for RxJS
  // getDocumentsByBatchID() {
  //   this.api.tacker$.subscribe(x => {
  //     this.finaldata = x;
  //     console.log("doc",this.finaldata);
  //   });

    //console.log("doc");
  }*/

  // getDocumentsByBatchID() {
  //   //this.api.Fetch();
  //   this.api.getDocuments()
  //     .subscribe(result => { this.documents = result
  //       this.finaldata = this.documents;
  //       console.log("doc",this.documents);
  //     });
  // }

// working code
  getDocumentsByBatchID() {
    this.api.getDocuments()
      .subscribe(result => { this.documents = result
        this.testdata = this.documents;
        for (let index = 0; index <=10; index++) {
          this.finaldata.push(this.testdata[index]);
          //this.documentList.push(this.testdata[index]);
        }
        console.log("doc", this.finaldata);
      });
  }

    
}
