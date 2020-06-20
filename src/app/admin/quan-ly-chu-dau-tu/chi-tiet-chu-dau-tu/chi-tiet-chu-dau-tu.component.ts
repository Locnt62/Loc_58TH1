import { Component, OnInit } from '@angular/core';
import { SearchHttpService } from 'src/app/http/test-api';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chi-tiet-chu-dau-tu',
  templateUrl: './chi-tiet-chu-dau-tu.component.html',
  styleUrls: ['./chi-tiet-chu-dau-tu.component.css']
})
export class ChiTietChuDauTuComponent implements OnInit {
  TenCDT: any;
  DiaChi: any;
  website: any;
  SDT: any;
  Email: any;
  Fax: any
  Tennguoinhap: any;
  SDTNguoinhap: any;
  EmailNN: any;
  listtypeCDT: any;
  MaCDT: any
  TypeCDT:any
  check = true

  dynamicVariable: boolean
  constructor(private searchHttpService: SearchHttpService,private router: Router) { }

  ngOnInit() {
    this.searchHttpService.LoaiCDT().subscribe(dt => {
      console.log('loai chu dau tu');
      console.log(dt)
      this.listtypeCDT = dt
    })
    this.dynamicVariable = true

  }

  TextTenCDT() {
    console.log(this.TenCDT)
  }
  TextDiaChi() {
    console.log(this.DiaChi)
  }
  Textwebsite() {
    console.log(this.website)
  }
  TextSDT() {
    console.log(this.SDT)
  }
  TextFax() {
    console.log(this.Fax)
  }
  TextEmail() {
    console.log(this.Email)
  }
  TextTenNN() {
    console.log(this.Tennguoinhap)
  }
  TextSDTNN() {
    console.log(this.SDTNguoinhap)
  }
  TextEmailNN() {
    console.log(this.EmailNN)
  }
  TextMaCDT() {
    console.log(this.MaCDT)

  }

  SelectTypeCDT(){
    console.log(this.TypeCDT)
  }

  redirect(){
    this.router.navigate(['/QuanlyChuDauTu']);
  }
  Save(){
    this.check = false
    this.searchHttpService.ThemCDT(this.MaCDT, this.TenCDT,'',this.DiaChi, this.website, this.SDT, this.Fax, this.Email,'', this.TypeCDT).subscribe(dt =>{
      console.log(dt)
      if(dt.Status === 1){
        this.check = true
        alert(dt.Messege)
        // this.toastrService.success(dt.Messege,'', {
        //   timeOut: 3000
        // });
        this.router.navigate(['/QuanlyChuDauTu'])
      }else if(dt.Status === 0){
        this.check = true
        alert(dt.Messege)
      }
    })
  }


}
