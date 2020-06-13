import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SearchHttpService } from '../http/test-api';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  modalRef: NgbModalRef;
  listProvine: any;
  selectProvince: any;
  listItem: any;
  listSearch: any;
  optionlabelindex: any;
  dsTinh: any;
  constructor(public router: Router, private modalService: NgbModal, private searchHttpService: SearchHttpService, private authService: AuthService) { }


  ngOnInit() {
    console.log(this.router.url);
    this.selectProvince = "Toàn quốc"
    this.listProvine = [
      { text: 'Toàn quốc', name: 'All' },
      { text: 'Hà Nội', name: 'Hanoi' },
      { text: 'TP. Hồ Chí Minh', name: 'Hochiminh' },
      { text: 'Đà Nẵng', name: 'Danang' },
      { text: 'Hải phòng', name: 'Haiphong' },

    ]

    // this.listItem = [
    //   { name: 'Dự án Diamond Lotus Riverside', address: 'Số 1A Đường Tạ Quang Bửu, Phường 6, Quận 8, Thành phố Hồ Chí Minh', price: '1200 tỷ', company: 'Công ty cổ phần phát triển đô thị Ankoga', square: '200ha', status: 'Đã hoàn thành' },
    //   { name: 'Diamond Lotus Riverside', address: 'Đường Lê Quang Kim, Phường 8, Quận 8, TP Hồ Chí Minh', price: '1200 tỷ', company: 'Công ty cổ phần đầu tư và xây dựng Phúc Khang', square: '200ha', status: 'Đã hoàn thành' },
    //   { name: 'Dự án Diamond Lotus Riverside', address: 'Số 1A Đường Tạ Quang Bửu, Phường 6, Quận 8, Thành phố Hồ Chí Minh', price: '1200 tỷ', company: 'Công ty cổ phần phát triển đô thị Ankoga', square: '200ha', status: 'Đã hoàn thành' },
    //   { name: 'Diamond Lotus Riverside', address: 'Đường Lê Quang Kim, Phường 8, Quận 8, TP Hồ Chí Minh', price: '1200 tỷ', company: 'Công ty cổ phần đầu tư và xây dựng Phúc Khang', square: '200ha', status: 'Đã hoàn thành' },
    // ]
    this.listSearch = [
      { name: 'Tất cả', id: 'all' },
      { name: 'Dự án', id: 'duan' },
      { name: 'Chủ đầu tư', id: 'chudautu' }
    ]
    this.getOptionLabel(0);
    this.getProvince();
    this.GetDuannoibat('');

  }

  SelectTinh() {
    console.log('this.selectProvince');
    console.log(this.selectProvince);
   this.GetDuannoibat(this.selectProvince)
  }

  GetDuannoibat(index){
    this.searchHttpService.queryDuanNoibat(index).subscribe(data =>{
      console.log('listItem')
      this.listItem = data
      console.log(this.listItem)
    })
  }
  getOptionLabel(index) {
    this.optionlabelindex = index;
    console.log(this.optionlabelindex)
  }
  Redirect(item) {
    this.router.navigate(['/ListProjectCustomer'], { queryParams: { name: item.Id } });
    // this.router.navigateByUrl('/ListProjectCustomer/' + item.TenDa);
  }

  getProvince(){
    this.searchHttpService.queryProvince().subscribe(dt =>{
      console.log('list tinh')
      // console.log(dt);
      this.dsTinh = dt;
      console.log(this.dsTinh)
    })
  }

}
