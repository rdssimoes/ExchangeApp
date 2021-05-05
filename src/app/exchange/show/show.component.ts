import { Component, OnInit } from '@angular/core';
import { CashService } from 'src/app/cash.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:CashService) { }

  SegmentList:any=[];
  CountryList:any=[];
  Rate:any;
  
  segment:string="";
  currency:string="";
  qty:string="";
  value:string="";

  ngOnInit(): void {
    this.refreshSegList();
    this.refreshCouList();
  }

  refreshSegList(){
    this.service.getSegmentList().subscribe(data=>{
      this.SegmentList=data;
    });
  }

  refreshCouList(){
    this.service.getCountryList().subscribe(data=>{
      this.CountryList=data;
    });
  }

  convert(){
    var rate = {
      Segment:this.segment,
      Currency:this.currency,
      Qty:this.qty
    };

    this.service.convert(rate).subscribe(res=>{
      this.Rate = res;
      this.value = this.Rate.Value;
    });
  }
}