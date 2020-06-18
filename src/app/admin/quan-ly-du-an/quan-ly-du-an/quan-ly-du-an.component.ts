import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SearchHttpService } from 'src/app/http/test-api';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quan-ly-du-an',
  templateUrl: './quan-ly-du-an.component.html',
  styleUrls: ['./quan-ly-du-an.component.css']
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

    if (this.seg) {
      this.ChitietDA(this.seg)

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

  }
  redirect() {
    this.router.navigate(['/QuanlyDuan'])
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
    this.GetListDA(this.Addtext, '', '', '')
  }
  SelectTinh() {
    console.log(this.selectProvince)
    this.GetListDA('', this.selectProvince, '', '')
  }
  SelectCDT() {
    console.log(this.selectChudautu)
    this.GetListDA('', '', this.selectChudautu, '')
  }

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

  ChonDAxoa(item){
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

  ChonTDAxoa(item){
    console.log('xoaoaa',item.Id)
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


}
