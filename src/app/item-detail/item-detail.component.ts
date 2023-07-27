import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Pcn } from '../model/pcn';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent {
  start = Date.now();
  info:any;
  documents: Array<any> =[];
  dates: Array<any> = [];
  datainfo: any;
  testdata: any = [];
  finaldata: any = [];
  example : any = [];
  pageno:number = 1;
  itemId:string ="";
  pcnArray: Array<any> = [];
  strArray: string = "";
  globalId: string = "";
  familyId: string = "";
  constructor(private api: ApiService, private _Activatedroute:ActivatedRoute){
  }
  
  ngOnInit(): void {
   this.getDocumentDetails();
   
  }
  // working code
  getDocumentDetails() {
    this.itemId=this._Activatedroute.snapshot.params["id"];
    console.log("itemid" , this.itemId);
    this.api.getDocumentDetails(this.itemId)
    .subscribe(result => 
      {
       this.documents = result;
       this.info = JSON.parse(this.documents[0]["Document"]);
       console.log("result", this.info["Document"][0]["@GlobalId"]);
       console.log("pcnlist",this.info["Document"][0]["Pcns"]["Pcn"]);
       this.pcnArray = this.info["Document"][0]["Pcns"]["Pcn"];
       this.dates = this.info["Document"][0]["Dates"]["Date"];
       this.globalId = this.info["Document"][0]["@GlobalId"];
       this.familyId = this.info["Document"][0]["@FamilyId"];
      });
      }
    }
