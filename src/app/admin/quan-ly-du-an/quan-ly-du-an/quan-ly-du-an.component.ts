import { Component, OnInit, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SearchHttpService } from 'src/app/http/test-api';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
// import { DatePickerOptions } from 'ng2-datepicker';
// import { DatepickerOptions } from 'ng2-datepicker';
// import * as enLocale from 'date-fns/locale/en';
// import * as frLocale from 'date-fns/locale/fr';
@Injectable()
export class CustomDateAdapter {
  fromModel(value: string): NgbDateStruct {
    if (!value)
      return null
    let parts = value.split('/');
    return { year: +parts[0], month: +parts[1], day: +parts[2] } as NgbDateStruct
  }

  toModel(date: NgbDateStruct): string // from internal model -> your mode
  {
    return date ? date.year + "/" + ('0' + date.month).slice(-2) + "/" + ('0' + date.day).slice(-2) : null

  }

}
@Injectable()
export class CustomDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (!value)
      return null
    let parts = value.split('/');
    return { year: +parts[0], month: +parts[1], day: +parts[2] } as NgbDateStruct

  }
  format(date: NgbDateStruct): string {
    return date ? date.year + "/" + ('0' + date.month).slice(-2) + "/" + ('0' + date.day).slice(-2) : null
  }
}



@Component({
  selector: 'app-quan-ly-du-an',
  templateUrl: './quan-ly-du-an.component.html',
  styleUrls: ['./quan-ly-du-an.component.css'],
  providers: [{ provide: NgbDateAdapter, useClass: CustomDateAdapter },
  { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }]
})
export class QuanLyDuAnComponent implements OnInit, AfterViewInit {
  listProvine: any;
  chudautu: any;
  listDA: any;
  config: any;
  seg: any;
  modalRef: NgbModalRef;
  listda: any;
  list_da: any;
  Addtext: any;
  selectProvince: any;
  selectChudautu: any;
  loainguonvon: any;
  htql: any
  list_loaivon: any;
  list_quanly: any;
  detailDA: any;
  tenduan: any;
  QDDT: any
  Ngaypheduyet: any
  Khobac: any

  NNoithuchien: any
  QDBD: any
  TMDT: any
  TGTC: any
  TGHT: any
  Image: any
  list_tieuduan: any;
  Mota: any;
  listInvest: any;
  maduan: any;
  Tinh: any;

  dynamicVariable: boolean

  //tieu du an
  TenTDA: any;
  MaTDA: any;
  Diadiemkhobac: any;
  MT: any;
  idduan: any;
  CDT: any;
  //sua tieu du an
  SuaTenTDA: any;
  SuaMaTDA: any;
  SuaCDT: any;
  SuaDiadiemkhobac: any;
  SuaMT: any;

  variable: boolean

  check = true
  idduan_chonxoa: any;
  idtda_xoa: any;
  model: NgbDateStruct;

  model2: string;

  SearchCDT: any
  searchTenTDA: any;
  list_giaidoanvon: any;


  timTenVon: any;
  timGiaDoan: any;
  timtieuduan: any;
  von_duan: any;
  listTVDT_duan: any;
  listTVDT_tieuduan: any;




  constructor(private activeRoute: ActivatedRoute, private modalService: NgbModal, private router: Router, private searchHttpService: SearchHttpService,) {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.listDA
    };

  }

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }


  ngOnInit() {

    this.Addtext = '';
    this.selectProvince = '';
    this.selectChudautu = ''

    this.SearchCDT = '';
    this.SearchCDT = ''

    this.searchTenTDA = ''

    this.timTenVon = ''
    this.timGiaDoan = ''
    this.timtieuduan = ''


    this.variable = true;
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      // console.log(params.name);
      this.seg = params.name;
      console.log(this.seg)
    })
    this.dynamicVariable = true
    this.GetListDA('', '', '', '')
    this.ListTinh()
    this.ListCDT()
    this.LoaiVon();
    this.Quanly()
    this.GiaidoanVon()

    if (this.seg) {
      this.ChitietDA(this.seg)
      this.SearchTDA('', this.seg, '')
      this.SearchVonDA(this.timGiaDoan, this.timTenVon, this.timtieuduan, this.seg)
      this.getTVDT(this.seg,2)
    this.getTVDT_tda(this.seg,1)
    }

    this.listDA = [
      { mada: '123456', ten: 'Hồ nậm cát', chudautu: 'UBND Cao Bằng', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: '123456', ten: 'Hồ nậm cát', chudautu: 'UBND Cao Bằng', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: '123456', ten: 'Hồ nậm cát', chudautu: 'UBND Cao Bằng', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: '123456', ten: 'Hồ nậm cát', chudautu: 'UBND Cao Bằng', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
      { mada: 'Tiểu dự án', ten: 'Hợp phần xây dựng', chudautu: 'QLCT&CTTL 2', diadiem: 'Cao Bang', ngaypheduyet: '23-12-2018', ngayhoanthanh: '', tongmucdautu: '' },
    ]
  }

  direct(item) {
    this.router.navigate(['/QuanlyDuan'], { queryParams: { name: item.Id } });
    this.ChitietDA(item.Id)
    this.SearchTDA('', item.Id, '')
    this.SearchVonDA(this.timGiaDoan, this.timTenVon, this.timtieuduan, item.Id)
    this.getTVDT(item.Id,2)
    this.getTVDT_tda(item.Id,1)

  }
  redirect() {
    this.router.navigate(['/QuanlyDuan'])
  }


  SearchTDA(chudautu, idduan, name) {
    this.searchHttpService.SearchTDA(chudautu, idduan, name).subscribe(dt => {
      console.log('search tiểu dự án');
      console.log(dt)
      this.list_tieuduan = dt
    })
  }
  open(content) {
    this.modalRef = this.modalService.open(content, {
      windowClass: 'modal-content-request',
      keyboard: false,
      backdrop: 'static'
    });
    this.variable = false
  }
  close() {
    this.modalRef.close();
  }
  ngAfterViewInit() {
    // this.activeRoute.queryParams.subscribe(params =>{
    //   console.log('params');
    //   // console.log(params.name);
    //    this.seg = params.name;
    //   console.log(this.seg)
    // })

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


  ThemDA() {
    this.router.navigate(['/Themmoiduan'])
  }


  GetListDA(key, tinh, chudatu, id) {
    this.check = false;
    this.searchHttpService.getListDAadmin(key, tinh, chudatu, id).subscribe(rest => {
      if (rest) {
        this.check = true
        console.log('list dự án adminm');
        this.list_da = rest
        console.log(this.list_da)
      }
    })
  }

  ChitietDA(id) {
    this.check = false
    this.searchHttpService.getListDAadminDetail(id).subscribe(dt => {
      if (dt) {
        this.check = true
        console.log('chi tiet du an');
        console.log(dt)
        this.detailDA = dt[0];
        console.log('â', this.detailDA)
        this.tenduan = this.detailDA.TenDa;
        this.QDDT = this.detailDA.QuyetDinh;
        this.Ngaypheduyet = this.detailDA.NgayPheDuyet;
        this.Khobac = this.detailDA.Diadiemkhobac;
        this.NNoithuchien = this.detailDA.DiaDiem;
        this.QDBD = this.detailDA.Chudautu;
        this.TMDT = this.detailDA.Tongdautu;
        this.Image = this.detailDA.Urlfile;
        this.TGTC = this.detailDA.Thoigianthicong;
        this.model = this.detailDA.Thoigianthicong;
        this.TGHT = this.detailDA.DateComplete;
        this.htql = this.detailDA.Idhinhthucquanli
        this.list_tieuduan = this.detailDA.listtieuduan
        this.maduan = this.detailDA.Maduan;
        this.Mota = this.detailDA.Mota;
        this.QDBD = this.detailDA.Idchudautu
        this.loainguonvon = this.detailDA.Idloainguonvon
        this.Tinh = this.detailDA.idtinh
        this.idduan = this.detailDA.Id;
      }
    })
  }

  SearMADA() {
    console.log(this.Addtext)
    // this.GetListDA(this.Addtext, '', '', '')
    this.GetListDA(this.Addtext, this.selectProvince, this.selectChudautu, '')
  }
  SelectTinh() {
    console.log(this.selectProvince)
    // this.GetListDA('', this.selectProvince, '', '')
    this.GetListDA(this.Addtext, this.selectProvince, this.selectChudautu, '')
  }
  SelectCDT() {
    console.log(this.selectChudautu)
    // this.GetListDA('', '', this.selectChudautu, '')
    this.GetListDA(this.Addtext, this.selectProvince, this.selectChudautu, '')
  }


  // XuatFileExcel(){

  // }

  ListTinh() {
    this.searchHttpService.queryProvince().subscribe(dt => {
      console.log('ds tinh');
      this.listProvine = dt
      console.log(this.listProvine)
    })
  }

  ListCDT() {
    this.searchHttpService.queryChudautu().subscribe(dt => {
      console.log('chu dau tu');
      this.chudautu = dt
      console.log(dt)
    })
  }
  // getListCDT(name) {
  //   this.searchHttpService.queryListChudautu(name).subscribe(dt => {
  //     console.log('ds chu dau tu');
  //     console.log(dt)
  //     this.listInvest = dt

  //   })
  // }

  GiaidoanVon() {
    this.searchHttpService.Giadoanvon().subscribe(dt => {
      console.log('giai doan von')
      console.log(dt)
      this.list_giaidoanvon = dt
    })
  }



  LoaiVon() {
    this.searchHttpService.Loaivon().subscribe(dt => {
      console.log('loai von');
      this.list_loaivon = dt
      console.log(this.list_loaivon)
    })
  }
  Quanly() {
    this.searchHttpService.Quanly().subscribe(dt => {
      console.log('quan ly');
      this.list_quanly = dt
      console.log(this.list_quanly)
    })
  }

  SelectQuanly() {
    console.log(this.htql)
  }

  SelectVon() {
    console.log(this.loainguonvon)
  }

  ChonTinh() {
    console.log(this.Tinh)
  }

  ChonDAxoa(item) {
    console.log('abcced0', item.Id)
    this.idduan_chonxoa = item.Id
  }

  // Delete(item) {
  //   console.log(item.Id)
  //   this.searchHttpService.XoaDA(item.Id).subscribe(dt => {
  //     console.log(dt);
  //     if (dt.Status === 1) {
  //       alert(dt.Messege)
  //       this.GetListDA('', '', '', '')
  //     } else if (dt.Status === 0) {
  //       alert(dt.Messege)
  //     }
  //   })
  // }


  Delete() {

    this.check = false
    this.searchHttpService.XoaDA(this.idduan_chonxoa).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        this.close()
        this.check = true
        alert(dt.Messege)
        this.GetListDA('', '', '', '')
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
    })
  }


  //form
  TextTenDA() {
    console.log(this.tenduan)
  }

  TextQDDT() {
    console.log(this.QDDT)
  }
  TextNPD() {
    console.log(this.Ngaypheduyet)
  }
  TextKhobac() {
    console.log(this.Khobac)
  }
  TextNTH() {
    console.log(this.NNoithuchien)
  }
  TextQDBD() {
    console.log(this.QDBD)
  }
  TextTMDT() {
    console.log(this.TMDT)
  }
  TextTGTC() {
    console.log(this.TGTC)
  }
  TextTGHT() {
    console.log(this.TGHT)
  }
  TextImage() {
    console.log(this.Image)
  }
  AddMota() {
    console.log(this.Mota)
  }
  TextmaDA() {
    console.log(this.maduan)
  }
  ChonCDT() {
    console.log(this.CDT)
  }

  //sửa
  // Sửa() {

  //   this.searchHttpService.ThemDA(this.maduan, this.Khobac, this.QDBD, this.tenduan, this.htql, this.loainguonvon, this.NNoithuchien, this.QDDT, this.Ngaypheduyet, this.TMDT, this.Mota, this.TGTC, this.TGHT, this.Image, this.Tinh).subscribe(dt => {
  //     console.log('ket qua sau khi them');
  //     console.log(dt)
  //     console.log(dt.Status)
  //     console.log(dt.Messege)
  //     if (dt.Status === 1) {
  //       alert(dt.Messege)
  //       this.router.navigate(['/QuanlyDuan'])
  //     } else if (dt.Status === 0) {
  //       alert(dt.Messege)
  //     }
  //   })

  // }


  onDateSelect(event) {
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
    // let finalDate = year + "-" + month + "-" + day;
    this.TGTC = day + "/" + month + "/" + year;
    console.log('aaaa', this.TGTC)
  }


  ThemMoi() {
    this.check = false
    this.searchHttpService.SuaDA(this.idduan, this.maduan, this.Khobac, this.QDBD, this.tenduan, this.htql, this.loainguonvon, this.NNoithuchien, this.QDDT, this.Ngaypheduyet, this.TMDT, this.Mota, this.TGTC, this.TGHT, this.Image, this.Tinh).subscribe(dt => {
      console.log('ket qua sau khi sửa');
      console.log(dt)
      console.log(dt.Status)
      console.log(dt.Messege)
      if (dt.Status === 1) {
        this.check = true
        alert(dt.Messege)
        this.router.navigate(['/QuanlyDuan'])
        this.GetListDA('', '', '', '')
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
    })

  }


  //tieu du an
  TextTDA() {
    console.log(this.TenTDA)
  }
  TextMaTDA() {
    console.log(this.MaTDA)
  }
  TextDDKB() {
    console.log(this.Diadiemkhobac)
  }
  TextMT() {
    console.log(this.MT)
  }



  ThemTDA() {
    this.searchHttpService.ThemTDA(this.idduan, this.CDT, this.MaTDA, this.TenTDA, this.Diadiemkhobac, this.MT).subscribe(dt => {
      console.log(dt)
      if (dt.Status === 1) {
        this.close()
        alert(dt.Messege)
        this.ChitietDA(this.seg)
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })
  }
  //sua
  TextSuaTenTDA() {
    console.log(this.SuaTenTDA)
  }
  TextSuaMaTDA() {
    console.log(this.SuaMaTDA)
  }
  TextSuaCDT() {
    console.log(this.SuaCDT)
  }
  TextSuaDDKB() {
    console.log(this.SuaDiadiemkhobac)
  }
  TextSuaMT() {
    console.log(this.SuaMT)
  }
  Sua(item) {
    console.log('item sua');
    console.log(item)

    // this.SuaMaTDA = item.
    this.searchHttpService.DetailTDA(item.Id).subscribe(dt => {
      console.log('chi tiế');
      console.log(dt)
      this.SuaTenTDA = dt.Tentieuduan;

      this.SuaMaTDA = dt.Matieuduan;
      this.SuaCDT = dt.MaCDT;
      this.SuaDiadiemkhobac = dt.Diadiemkhobac;
      this.SuaMT = dt.Mota;
    })
  }

  LuuSua() {
    this.searchHttpService.SưaTDA(this.idduan, this.SuaCDT, this.SuaMaTDA, this.SuaTenTDA, this.SuaDiadiemkhobac, this.SuaMT).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        this.close()
        alert(dt.Messege)
        this.ChitietDA(this.seg)
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })
  }
  // Xoa(item) {
  //   this.searchHttpService.XoaTDA(item.Id).subscribe(dt => {
  //     if (dt.Status === 1) {
  //       alert(dt.Messege)
  //       this.ChitietDA(this.seg)
  //     } else if (dt.Status === 0) {
  //       alert(dt.Messege)
  //     }
  //   })
  // }

  ChonTDAxoa(item) {
    console.log('xoaoaa', item.Id)
    this.idtda_xoa = item.Id
  }

  XoaTDA() {
    this.check = false
    this.searchHttpService.XoaTDA(this.idtda_xoa).subscribe(dt => {
      if (dt.Status === 1) {
        this.check = true
        this.close()
        alert(dt.Messege)
        this.ChitietDA(this.seg)
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
    })
  }


  XuatFile() {
    this.searchHttpService.ExportExcell().subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        this.check = true
        this.close()
        alert(dt.Messege)
        this.ChitietDA(this.seg)
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
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
