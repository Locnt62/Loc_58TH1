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
  listInvest: any;
  config: any;
  modalRef: NgbModalRef;
  seg: any;

  TenCDT: any;
  DiaChi: any;
  website: any;
  SDT: any;
  Email: any;
  Fax: any
  Tennguoinhap: any;
  SDTNguoinhap: any;
  EmailNN: any;

  SearchCDT: any;
  MaCDT: any
  TypeCDT: any
  listtypeCDT: any;

  dynamicVariable: boolean
  idcdt: any;



  constructor(private activeRoute: ActivatedRoute, private modalService: NgbModal, private router: Router, private searchHttpService: SearchHttpService,) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listInvest
    };
  }

  ngOnInit() {
    this.dynamicVariable = true
    this.searchHttpService.LoaiCDT().subscribe(dt => {
      console.log('loai chu dau tu');
      console.log(dt)
      this.listtypeCDT = dt
    })
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      // console.log(params.name);
      this.seg = params.name;
      console.log(this.seg)
    })
    if (this.seg) {
      this.DetailCDT(this.seg)
    }

    this.getListCDT('');
  }

  Redirect(item) {
    this.router.navigate(['/QuanlyChuDauTu'], { queryParams: { name: item.Id } });
    this.DetailCDT(item.Id)
  }

  direct(){
    this.router.navigate(['/QuanlyChuDauTu'])
  }
  Themmoi() {
    this.router.navigate(['/ChitietCDT'])
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
  SelectTypeCDT() {
    console.log(this.TypeCDT)
  }

  getListCDT(name) {
    this.searchHttpService.queryListChudautu(name).subscribe(dt => {
      console.log('ds chu dau tu');
      console.log(dt)
      this.listInvest = dt
    })
  }

  TextSearchCDT() {
    console.log(this.SearchCDT)
    this.getListCDT(this.SearchCDT)
  }

  DetailCDT(id) {
    this.searchHttpService.getDetailCDT(id).subscribe(rest => {
      console.log('chi tiet chu dau tu');
      console.log(rest);
      this.TenCDT = rest.Tenchudautu;
      this.DiaChi = rest.Diachi;
      this.website = rest.Website;
      this.SDT = rest.Phone;
      this.Fax = rest.Fax
      this.Tennguoinhap = rest.Nguoitao;
      this.EmailNN = rest.Emailnguoitao;
      this.MaCDT = rest.MaCDT;
      this.TypeCDT = rest.IdLoaiCDT;
      this.Email = rest.Email
      this.idcdt = rest.Id
    })
  }

  Delete(item) {
    this.searchHttpService.XoaCDT(item.Id).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        alert(dt.Messege)
        this.getListCDT('')
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })
  }

  Sua(){
    this.searchHttpService.SuaCDT(this.idcdt,this.MaCDT,this.TenCDT,'',this.DiaChi,this.website, this.SDT, this.Fax, this.Email,'', this.TypeCDT).subscribe(dt =>{
      console.log(dt);
      if (dt.Status === 1) {
        alert(dt.Messege)
        this.router.navigate(['/QuanlyChuDauTu'])
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })
  }



}
