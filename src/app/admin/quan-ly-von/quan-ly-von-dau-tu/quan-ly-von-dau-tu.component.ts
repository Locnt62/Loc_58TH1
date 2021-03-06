import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchHttpService } from 'src/app/http/test-api';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-quan-ly-von-dau-tu',
  templateUrl: './quan-ly-von-dau-tu.component.html',
  styleUrls: ['./quan-ly-von-dau-tu.component.css']
})
export class QuanLyVonDauTuComponent implements OnInit {
  listVon: any
  modalRef: NgbModalRef;
  seg: any;
  list_giaidoanvon: any;
  list_tieuduan: any;
  list_duan: any;

  searchVon: any;
  searchda: any;
  searchtda: any;

  suatenvon: any;
  suamavon: any;
  suada: any;
  suatda: any;
  suatien: any;
  suadieuchinh: any;
  suanguoitao: any;
  suangaytao: any;
  suagiaidoan: any;
  id_von: any;

  variable: boolean

check = true
  idvon_xoa: any;
  ls_von: any;
id_duan:any





  constructor(private activeRoute: ActivatedRoute, private router: Router, private searchHttpService: SearchHttpService,private modalService: NgbModal,) { }
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  ngOnInit() {
    this.id_duan = -1
    this.searchVon = '';
    this.searchda = '';
    this.searchtda = '';

    this.variable = true
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      // console.log(params.name);
      this.seg = params.name;
      console.log(this.seg)
    })
    if (this.seg) {
      this.Chitietvon(this.seg)
      this.LichsuVon(this.seg)
    }
    this.GiaidoanVon()
    this.ListDA()
    this.ListTDA()
    this.ListVon('', '', '')
  }
  open(content) {
    this.modalRef = this.modalService.open(content, {
      windowClass: 'modal-content-request',
      keyboard: false,
      backdrop: 'static'
    });
  }
  close() {
    this.modalRef.close();
  }

  direct(item) {
    this.router.navigate(['/QuanlyVon'], { queryParams: { name: item.ID } });
    this.Chitietvon(item.ID)
    this.LichsuVon(item.ID)
  }

  redirect() {
    this.router.navigate(['/QuanlyVon'])
  }

  ThemVon() {
    this.router.navigate(['/ThemVon'])
  }

  GiaidoanVon() {
    this.searchHttpService.Giadoanvon().subscribe(dt => {
      console.log('giai doan von')
      console.log(dt)
      this.list_giaidoanvon = dt
    })
  }


  ListDA() {
    this.searchHttpService.ListDuan().subscribe(dt => {
      console.log('ds du an');
      console.log(dt)
      this.list_duan = dt
    })
  }
  ListTDA() {
    this.searchHttpService.ListTieuDuAn(this.suada).subscribe(rest => {
      console.log('ds tieu du an');
      console.log(rest)
      this.list_tieuduan = rest
    })
  }

  ListVon(tenvon, idduan, idtieuda) {
    this.check = false
    this.searchHttpService.Listvon(tenvon, idduan, idtieuda).subscribe(dt => {
      if(dt){
        this.check = true
      console.log('list von');
      console.log(dt)
      this.listVon = dt
      }
    })
  }

  SearchVon() {
    console.log(this.searchVon)
    // this.ListVon(this.searchVon, '', '')
     this.ListVon(this.searchVon,this.searchda,this.searchtda)
  }

  Searchda() {
    console.log(this.searchda)
  //  this.ListVon('', this.searchda, '')
    this.ListVon(this.searchVon,this.searchda,this.searchtda)
  }
  Searchtda() {
    console.log(this.searchtda)
   // this.ListVon('', '', this.searchtda)
   this.ListVon(this.searchVon,this.searchda,this.searchtda)
  }


  Chitietvon(idvon) {
    this.check = false
    this.searchHttpService.Chitietvon(idvon).subscribe(dt => {
      if(dt){
        this.check = true
      console.log('chi tiết vốn');
      console.log(dt)
      this.suatenvon = dt.Tenvon;
      this.suamavon = dt.Mavon;
      this.suada = dt.Maduan;
      this.suatda = dt.Matieuduan;
      this.suagiaidoan = dt.Magiaidoan;
      this.suadieuchinh = dt.Landieuchinh;
      this.suanguoitao = dt.Nguoitao;
      this.suangaytao = dt.Ngaytao
      this.suatien = dt.Giatritien;
      this.id_von = dt.ID;
      }
    })
  }


  //sua
  Suatenvon() {
    console.log(this.suatenvon)
  }
  Suamavon() {
    console.log(this.suamavon)
  }
  Suada() {
    console.log(this.suada)
  }
  Suatda() {
    console.log(this.suatda)
  }
  Suatien() {
    console.log(this.suatien)
  }
  Suadieuchinh() {
    console.log(this.suadieuchinh)
  }
  Suanguoitao() {
    console.log(this.suanguoitao)
  }
  Suangaytao() {
    console.log(this.suangaytao)
  }
  Suagiaidoan() {
    console.log(this.suagiaidoan)
  }

  Sua() {
    this.check = false
    console.log('da bam')
    this.searchHttpService.Suavon(this.id_von, this.suamavon, this.suatenvon, this.suada, this.suatda, this.suagiaidoan, this.suatien, this.suadieuchinh).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        this.check = true
        alert(dt.Messege)
        this.router.navigate(['/QuanlyVon'])
        this.ListVon('', '', '')
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
    })
  }
  // Xoa(item){
  //   this.searchHttpService.XoaVon(item.ID).subscribe(dt =>{
  //     console.log(dt)
  //     if (dt.Status === 1) {
  //       alert(dt.Messege)
  //       this.router.navigate(['/QuanlyVon'])
  //       this.ListVon('', '', '')
  //     } else if (dt.Status === 0) {
  //       alert(dt.Messege)
  //     }
  //   })
  // }

  chonvonxoa(item){
    console.log('aaaa',item.ID)
    this.idvon_xoa = item.ID
  }

  Delete(){
    this.check = false
    this.searchHttpService.XoaVon(this.idvon_xoa).subscribe(dt =>{
      console.log(dt)
      if (dt.Status === 1) {
        this.check = true
        this.close()
        alert(dt.Messege)
        this.router.navigate(['/QuanlyVon'])
        this.ListVon('', '', '')
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
    })
  }


  LichsuVon(idvon){
    this.searchHttpService.HistoryVon(idvon).subscribe(dt =>{
      console.log('lich su von');
      console.log(dt)
      this.ls_von = dt
    })
  }

}
