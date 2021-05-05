import { Component, OnInit } from '@angular/core';
import { CashService } from 'src/app/cash.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:CashService) { }

  SegmentList:any=[];
  
  segment:any;

  ngOnInit(): void {
    this.refreshSegList();
  }

  refreshSegList(){
    this.service.getSegmentList().subscribe(data=>{
      this.SegmentList=data;
    });
  }

  closeClick(){
    this.refreshSegList();
  }

  editClick(item:any){
    this.segment=item;
  }
}
