import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchHttpService } from '../http/test-api';
@Component({
  selector: 'app-list-chudautu-customer',
  templateUrl: './list-chudautu-customer.component.html',
  styleUrls: ['./list-chudautu-customer.component.css']
})
export class ListChudautuCustomerComponent implements OnInit, AfterViewInit {
  listInvest: any[];
  config: any;
  segment: any;
  seg: any;
  Inputext: any;
  listDetailCDT: any;
  Diachi: any;
  Email: any;
  Emailnguoitao: any;
  Fax: any;
  Nguoitao: any;
  Phone: any;
  Tenchudautu: any;
  Website: any;
  listDA: any;
  listTDA: any;
  constructor(private activeRoute: ActivatedRoute, private router: Router, private searchHttpService: SearchHttpService, ) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listInvest
    };
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      // console.log(params.name);
      this.seg = params.name;
      console.log(this.seg)
      this.getDetailCDT(this.seg);
      this.SearchTieuduan(this.seg);
      this.SearchDuan(this.seg)
    })
    // this.listInvest = [
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    //   { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    // ]
    this.getListCDT('')

  }
  Redirect(item) {
    this.router.navigate(['/ListInvesterCustomer'], { queryParams: { name: item.Id } })
    console.log('sau khi nhan')
    console.log(item)
    console.log(item.Id)
    const id = 3
    this.getDetailCDT(item.Id)
  }
  ngAfterViewInit() {
    this.activeRoute.url.subscribe(param => {
      console.log('router');
      console.log(param);
    })


  }

  getListCDT(name) {
    this.searchHttpService.queryListChudautu(name).subscribe(dt => {
      console.log('ds chu dau tu');
      console.log(dt)
      this.listInvest = dt

    })
  }

  Addtext() {
    console.log(this.Inputext)
    // this.searchCDT(this.Inputext)
    this.getListCDT(this.Inputext)
  }


  searchCDT(name) {
    this.searchHttpService.SearchCDT(name).subscribe(res => {
      console.log('search ten chu dau tu')
      console.log(res);

    })
  }

  getDetailCDT(name) {
    this.searchHttpService.getDetailCDT(name).subscribe(dt => {
      console.log('chi tiet chu dau tu');
      console.log(dt);
      this.listDetailCDT = dt;
      this.Diachi = this.listDetailCDT.Diachi;
      this.Email = this.listDetailCDT.Email
      this.Emailnguoitao = this.listDetailCDT.Emailnguoitao;
      this.Fax = this.listDetailCDT.Fax;
      this.Nguoitao = this.listDetailCDT.Nguoitao;
      this.Phone = this.listDetailCDT.Phone;
      this.Tenchudautu = this.listDetailCDT.Tenchudautu
      this.Website = this.listDetailCDT.Website;
    })
  }

  SearchTieuduan(cdt) {
    this.searchHttpService.getTieeuduan(cdt).subscribe(rest => {
      console.log('lay tieu du an');
      console.log(rest);
      this.listTDA = rest;
    })
  }
  SearchDuan(cdt) {
    this.searchHttpService.getAllDuan('', cdt, '', '').subscribe(dt => {
      console.log('ds dự án của chủ đầu tư');
      console.log(dt);
      this.listDA = dt;
    })
  }
  direct(item) {
    console.log('an')
    console.log(item)
    this.router.navigate(['/ListProjectCustomer'], { queryParams: { name: item.Id } })
  }

}
