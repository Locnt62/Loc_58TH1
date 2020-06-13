import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SearchHttpService } from 'src/app/http/test-api';

@Component({
  selector: 'app-quan-ly-chu-dau-tu',
  templateUrl: './quan-ly-chu-dau-tu.component.html',
  styleUrls: ['./quan-ly-chu-dau-tu.component.css']
})
export class QuanLyChuDauTuComponent implements OnInit {
listInvest:any;
config: any;
modalRef: NgbModalRef;
  seg: any;

  TenCDT:any;
  DiaChi: any;
  website: any;
  SDT: any;
  Email:any;
  Fax:any
  Tennguoinhap:any;
  SDTNguoinhap:any;
  EmailNN:any;
  


  constructor(private activeRoute: ActivatedRoute,private modalService: NgbModal, private router: Router, private searchHttpService: SearchHttpService,) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listInvest
    };
   }

  ngOnInit() {
    this.listInvest = [
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    ]
    this.activeRoute.queryParams.subscribe(params =>{
      console.log('params');
      // console.log(params.name);
       this.seg = params.name;
      console.log(this.seg)
    })
  }

  Redirect(item){
    this.router.navigate(['/QuanlyChuDauTu'], { queryParams: { name: item.name } });
  }
  Themmoi(){
    this.router.navigate(['/ChitietCDT'])
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
