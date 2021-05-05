import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { CashService } from 'src/app/cash.service'

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {

  constructor(private service:CashService) { }
  
  @Input() segment:any;
  Id:string="";
  Rate:string="";

  ngOnInit(): void {
    this.Id=this.segment.Id;
    this.Rate=this.segment.Rate;
  }

  updateSegment(){
    this.service.updateSegment(this.segment).subscribe(res=>{
    });
  }
}