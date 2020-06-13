import { Component, OnInit } from '@angular/core';
import { SearchHttpService } from 'src/app/http/test-api';

@Component({
  selector: 'app-chi-tiet-chu-dau-tu',
  templateUrl: './chi-tiet-chu-dau-tu.component.html',
  styleUrls: ['./chi-tiet-chu-dau-tu.component.css']
})
export class ChiTietChuDauTuComponent implements OnInit {
  TenCDT:any;
  DiaChi: any;
  website: any;
  SDT: any;
  Email:any;
  Fax:any
  Tennguoinhap:any;
  SDTNguoinhap:any;
  EmailNN:any;

  constructor(private searchHttpService: SearchHttpService,) { }

  ngOnInit() {
    
  }

  TextTenCDT(){
    console.log(this.TenCDT)
  }
  TextDiaChi(){
    console.log(this.DiaChi)
  }
  Textwebsite(){
    console.log(this.website)
  }
  TextSDT(){
    console.log(this.SDT)
  }
  TextFax(){
    console.log(this.Fax)
  }
  TextEmail(){
    console.log(this.Email)
  }
  TextTenNN(){
    console.log(this.Tennguoinhap)
  }
  TextSDTNN(){
    console.log(this.SDTNguoinhap)
  }
  TextEmailNN(){
    console.log(this.EmailNN)
  }


}
