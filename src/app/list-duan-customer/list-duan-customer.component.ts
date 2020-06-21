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
  SearchCDT:any


  searchTenTDA:any
check:boolean
  list_giaidoanvon: any;
  von_duan: any;
  timTenVon: any;
  timGiaDoan: any;
  timtieuduan: any;
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
    this.SearchCDT = ''
    this.searchTenTDA = ''

    this.Inputext = ''
    this.selectProvince = ''
    this.selectChudautu = ''
    this.timGiaDoan = ''
    this.timTenVon = ''
    this.timtieuduan = ''
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      // console.log(params.name);
      this.seg = params.name;
      console.log(this.seg)
      this.idduan = parseInt(this.seg)
      console.log('aaa', this.idduan)
     

    })
    this.getChitiet(this.seg)
    this.getTVDT(this.seg,2)
    this.getTVDT_tda(this.seg,1)
    

    this.getChudautu()
    this.getProvince()
    this.getAllduan('', '', '', '')
    
    this.SearchTDA('', this.seg, '')
    this.SearchVonDA(this.timGiaDoan, this.timTenVon, this.timtieuduan, this.seg)
  }
  Redirect(item) {
    console.log('an')
    console.log(item)
    this.router.navigate(['/ListProjectCustomer'], { queryParams: { name: item.Id } })
    this.tenduan = item.TenDa;
    console.log(this.tenduan)

    this.getChitiet(item.Id)

    this.getTVDT(item.Id,2)
    this.getTVDT_tda(item.Id,1)

    this.SearchTDA('', item.Id, '')
    this.GiaidoanVon()

    this.SearchVonDA(this.timGiaDoan, this.timTenVon, this.timtieuduan, item.Id)

  }
  ngAfterViewInit() {
    this.activeRoute.url.subscribe(param => {
      console.log('router');
      console.log(param);
    })
  }
  SelectTinh() {
    console.log(this.selectProvince)
    // this.getAllduan(this.selectProvince, '', '', '')
    this.getAllduan(this.selectProvince, this.selectChudautu, this.Inputext, '')
  }

  SelectCDT() {
    console.log(this.selectChudautu);
    // this.getAllduan('', this.selectChudautu, '', '')
    this.getAllduan(this.selectProvince, this.selectChudautu, this.Inputext, '')
  }
  Addtext() {
    console.log(this.Inputext)
    // this.getAllduan('', '', this.Inputext, '')
    this.getAllduan(this.selectProvince, this.selectChudautu, this.Inputext, '')
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
    this.check = false
    this.searchHttpService.getAllDuan(idtinh, idcdt, tenda, mada).subscribe(rest => {
      if(rest){
        this.check = true
      console.log('item tra ve');
      this.listItem = rest;
      console.log(this.listItem)
      }
    })
  }

  GiaidoanVon() {
    this.searchHttpService.Giadoanvon().subscribe(dt => {
      console.log('giai doan von')
      console.log(dt)
      this.list_giaidoanvon = dt
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
    //     this.UrlImage = this.chitietduan.Urlfile;
    //     this.listtieuduan = this.chitietduan.listtieuduan;
    //     console.log('this.listtieuduan')
    //     console.log(this.listtieuduan)
    //   }
    // })

    this.searchHttpService.getListDAadminDetail(id).subscribe(ite =>  {
      console.log(' this.chitietduan');
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
  TextSearchCDT() {
    console.log('a,', this.SearchCDT)
    this.SearchTDA(this.SearchCDT, this.seg, this.searchTenTDA)
  }
  TextsearchTenTDA() {
    console.log(this.searchTenTDA)
    this.SearchTDA(this.SearchCDT, this.seg, this.searchTenTDA)
  }

  SearchTDA(chudautu, idduan, name) {
    this.searchHttpService.SearchTDA(chudautu, idduan, name).subscribe(dt => {
      console.log('search tiểu dự án');
      console.log(dt)
      this.listtieuduan = dt
    })
  }



  TexttimTenVon() {
    console.log(this.timTenVon)
    this.SearchVonDA(this.timGiaDoan, this.timTenVon, this.timtieuduan, this.seg)
  }

  TexttimGiaDoan() {
    console.log(this.timGiaDoan)
    this.SearchVonDA(this.timGiaDoan, this.timTenVon, this.timtieuduan, this.seg)
  }

  Texttimtieuduan() {
    console.log(this.timtieuduan)
    this.SearchVonDA(this.timGiaDoan, this.timTenVon, this.timtieuduan, this.seg)
  }


  SearchVonDA(magd, name, idtieuda, idduan) {
    this.check = false
    this.searchHttpService.SearchVon(magd, name, idtieuda, idduan).subscribe(dt => {
      if (dt) {
        this.check = true
        console.log('ds von du an');
        console.log(dt)
        this.von_duan = dt
      }
    })
  }



}
