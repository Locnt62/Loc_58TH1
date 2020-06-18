import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { SearchHttpService } from '../http/test-api';
@Component({
  selector: 'app-list-duan-customer',
  templateUrl: './list-duan-customer.component.html',
  styleUrls: ['./list-duan-customer.component.css']
})
export class ListDuanCustomerComponent implements OnInit, AfterViewInit {
  listProject: any;
  config: any;
  segment: string;
  public chonNguonCung: string = '1';
  list_select: any;
  seg: any;
  listProvine: any;
  chudautu: any;
  selectProvince: any;
  selectChudautu: any;
  dsTinh: any;
  listCDT: any;
  listItem: any;
  Inputext: any
  idduan: any;
  chitietduan: any;
  maDA: any;
  DateComplete: any;
  DiaDiem: any;
  Diadiemkhobac: any;
  Hinhthucquanli: any;
  Loaivon: any;
  NgayPheDuyet: any;
  QuyetDinh: any;
  TenDa: any;
  Thoigianthicong: any;
  Tongdautu: any;
  UrlImage: any;
  tenduan: any;
  listtieuduan: any;
  input_tda: any;
  input_cdt: any;
  listTVDT_duan: any;
  listTVDT_tieuduan: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private searchHttpService: SearchHttpService, ) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listItem
    };

  }
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      // console.log(params.name);
      this.seg = params.name;
      console.log(this.seg)
      this.idduan = parseInt(this.seg)
      console.log('aaa', this.idduan)
      this.getChitiet(this.idduan)
      this.getTVDT(this.seg,2)
      this.getTVDT_tda(this.seg,1)

    })
    this.listProject = [
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      { name: 'Vinhomes Smart City', address: 'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội' },
      // { name:'Vinhomes Smart City', address:'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội'},
      // { name:'Vinhomes Smart City', address:'Đường Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội'},
    ]
    this.list_select = [
      { name: 'Thông tin tiểu dự án' },
      { name: 'Quản lý vốn' }
    ]
    this.listProvine = [
      { text: 'Toàn quốc', name: 'All' },
      { text: 'Hà Nội', name: 'Hanoi' },
      { text: 'TP. Hồ Chí Minh', name: 'Hochiminh' },
      { text: 'Đà Nẵng', name: 'Danang' },
      { text: 'Hải phòng', name: 'Haiphong' },
    ]

    this.chudautu = [
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
      { name: 'Sở NN&PTNT Bắc Ninh', address: '	Số 8 Đường Lý Thái Tổ - Tp Bắc Ninh - Tỉnh Bắc Ninh', email: '	snnptnt@bacninh.gov.vn', sdt: '0222 3855 737' },
    ]

    this.getChudautu()
    this.getProvince()
    this.getAllduan('', '', '', '')
  }
  Redirect(item) {
    console.log('an')
    console.log(item)
    this.router.navigate(['/ListProjectCustomer'], { queryParams: { name: item.Id } })
    this.tenduan = item.TenDa;
    console.log(this.tenduan)

    // this.idduan = parseInt(this.seg)
    // console.log('aaa', this.idduan)
    // this.getChitiet(item.Id)

  }
  ngAfterViewInit() {
    this.activeRoute.url.subscribe(param => {
      console.log('router');
      console.log(param);
    })
  }
  SelectTinh() {
    console.log(this.selectProvince)
    this.getAllduan(this.selectProvince, '', '', '')

  }

  SelectCDT() {
    console.log(this.selectChudautu);
    this.getAllduan('', this.selectChudautu, '', '')
  }
  Addtext() {
    console.log(this.Inputext)
    this.getAllduan('', '', this.Inputext, '')
  }
  getChudautu() {
    this.searchHttpService.queryChudautu().subscribe(dt => {
      console.log('list chủ đầu tu');
      this.listCDT = dt
      console.log(this.listCDT)
    })
  }
  getProvince() {
    this.searchHttpService.queryProvince().subscribe(dt => {
      console.log('list tinh')
      this.dsTinh = dt;
      console.log(this.dsTinh)
    })
  }

  getAllduan(idtinh, idcdt, tenda, mada) {
    this.searchHttpService.getAllDuan(idtinh, idcdt, tenda, mada).subscribe(rest => {
      console.log('item tra ve');
      this.listItem = rest;
      console.log(this.listItem)
    })
  }

  getChitiet(id) {
    // this.searchHttpService.detDuanDetail(id).subscribe(ite => {
    //   console.log(' this.chitietduan');
    //   // console.log(ite)
    //   this.chitietduan = ite
    //   console.log(this.chitietduan)
    //   //lay du lieu
    //   if (this.chitietduan) {
    //     this.maDA = this.chitietduan.Maduan;
    //     console.log(this.maDA)
    //     this.DateComplete = this.chitietduan.DateComplete;
    //     this.DiaDiem = this.chitietduan.DiaDiem;
    //     this.Diadiemkhobac = this.chitietduan.Diadiemkhobac;
    //     this.Hinhthucquanli = this.chitietduan.Hinhthucquanli
    //     this.Loaivon = this.chitietduan.Loaivon;
    //     this.NgayPheDuyet = this.chitietduan.NgayPheDuyet;
    //     this.QuyetDinh = this.chitietduan.QuyetDinh;
    //     this.TenDa = this.chitietduan.TenDa;
    //     this.Thoigianthicong = this.chitietduan.Thoigianthicong;
    //     this.Tongdautu = this.chitietduan.Tongdautu;
    //     this.UrlImage = this.chitietduan.UrlImage;
    //     this.listtieuduan = this.chitietduan.listtieuduan;
    //     console.log('this.listtieuduan')
    //     console.log(this.listtieuduan)
    //   }
    // })

    this.searchHttpService.getListDAadminDetail(id).subscribe(ite =>  {
      console.log(' this.chitietduan');
      // console.log(ite)
      this.chitietduan = ite[0]
      console.log(this.chitietduan)
      //lay du lieu
      if (this.chitietduan) {
        this.maDA = this.chitietduan.Maduan;
        console.log(this.maDA)
        this.DateComplete = this.chitietduan.DateComplete;
        this.DiaDiem = this.chitietduan.DiaDiem;
        this.Diadiemkhobac = this.chitietduan.Diadiemkhobac;
        this.Hinhthucquanli = this.chitietduan.Hinhthucquanli
        this.Loaivon = this.chitietduan.Loaivon;
        this.NgayPheDuyet = this.chitietduan.NgayPheDuyet;
        this.QuyetDinh = this.chitietduan.QuyetDinh;
        this.TenDa = this.chitietduan.TenDa;
        this.Thoigianthicong = this.chitietduan.Thoigianthicong;
        this.Tongdautu = this.chitietduan.Tongdautu;
        this.UrlImage = this.chitietduan.Urlfile;
        this.listtieuduan = this.chitietduan.listtieuduan;
        console.log('this.listtieuduan')
        console.log(this.listtieuduan)
      }
    })
  }

  AddTDA(){
    console.log(this.input_cdt);
  }

  AddCDT(){
    console.log(this.input_cdt)
    this.searchHttpService.getTieeuduan(this.input_cdt).subscribe(dt =>{
      console.log('tim kiem theo chu dat tu');
      console.log(dt)
    })
  }
  //lay tong von dau tu
  getTVDT(id,type){
    this.searchHttpService.getTVDT(id,type).subscribe(rest =>{
      console.log('lay tong von dau tu cua du an');
      // console.log(rest);
      this.listTVDT_duan = rest
      console.log(this.listTVDT_duan)
    })
  }
  //tong von dau tu tieu du an
  getTVDT_tda(id,type){
    this.searchHttpService.getTVDT(id,type).subscribe(rest =>{
      console.log('lay tong von dau tu cua tieu du an');
      // console.log(rest)
      this.listTVDT_tieuduan = rest
      console.log(this.listTVDT_tieuduan)
    })
  }



}
