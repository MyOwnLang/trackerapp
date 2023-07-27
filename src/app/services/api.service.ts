import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { map, take, of, Observable,Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
// arrydata: any = []
// private trackerSubject: Subject<any>;
// tacker$: Observable<any>;
 baseUrl: string = "https://cat-tracker-api-d-ws.azurewebsites.net/api/v1/batch/2377";
 documentUrl: string = "https://cat-tracker-api-d-ws.azurewebsites.net/api/v1/document/";
 result : any;
  constructor(private api: HttpClient) {
    // this.trackerSubject = new Subject<any>();
    // this.tacker$ = this.trackerSubject.asObservable();
   }
  
  /* R and D for RxJS
  getDocuments(){
    this.tacker$ = this.api.get<any>(this.baseUrl).pipe(map(testdata => testdata["DocChanges"][0]["@Document"]),map(x => x["Ids"]));
    //console.log("from apiservice", this.arrydata);
    this.trackerSubject.next(this.tacker$);
    //console.log("from apiservice", this.arrydata);
  }*/


  // getDocuments(){
  //   return this.api.get<any>(this.baseUrl)
  //   .pipe(map(testdata => testdata["DocChanges"][0]["@Document"]),
  //   take(2));
  // }

  

  // Fetch(): any{
  //  const source : any = this.getDocuments().pipe(take(20));
  //  //console.log("source" , source);

  //  source.subscribe((tval: any) => console.log("tvalue", tval));
  //  //console.log(subscribe);
  //  return source;
  // }
/*working code*/
  getDocuments(){

    return this.api.get<any>(this.baseUrl)
    .pipe(map(testdata => testdata["DocChanges"][0]["@Document"]),
    map(x => x["Ids"]));
  }

  /*
  getDocumentDetails(itemid: string){
    console.log("documentUrl" , this.documentUrl+itemid);
    return this.api.get<any>(this.documentUrl+itemid);
    //.pipe(map(testdata => testdata["Document"][0]),map(ds =>ds.toString().replace("@","")));
  }*/

  getDocumentDetails(itemid: string){
    console.log("documentUrl" , this.documentUrl+itemid);
    return this.api.get<any>(this.documentUrl+itemid);
  }
}
