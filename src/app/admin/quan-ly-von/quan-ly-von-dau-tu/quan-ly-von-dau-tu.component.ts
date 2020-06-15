import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchHttpService } from 'src/app/http/test-api';

@Component({
  selector: 'app-quan-ly-von-dau-tu',
  templateUrl: './quan-ly-von-dau-tu.component.html',
  styleUrls: ['./quan-ly-von-dau-tu.component.css']
})
export class QuanLyVonDauTuComponent implements OnInit {
  listVon: any
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








  constructor(private activeRoute: ActivatedRoute, private router: Router, private searchHttpService: SearchHttpService,) { }

  ngOnInit() {
    this.variable = true
    this.activeRoute.queryParams.subscribe(params => {
      console.log('params');
      // console.log(params.name);
      this.seg = params.name;
      console.log(this.seg)
    })
    if (this.seg) {
      this.Chitietvon(this.seg)
    }
    this.GiaidoanVon()
    this.ListDA()
    this.ListTDA()
    this.ListVon('', '', '')
  }

  direct(item) {
    this.router.navigate(['/QuanlyVon'], { queryParams: { name: item.ID } });
    this.Chitietvon(item.ID)
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
    this.searchHttpService.ListTieuDuAn().subscribe(rest => {
      console.log('ds tieu du an');
      console.log(rest)
      this.list_tieuduan = rest
    })
  }

  ListVon(tenvon, idduan, idtieuda) {
    this.searchHttpService.Listvon(tenvon, idduan, idtieuda).subscribe(dt => {
      console.log('list von');
      console.log(dt)
      this.listVon = dt
    })
  }

  SearchVon() {
    console.log(this.searchVon)
    this.ListVon(this.searchVon, '', '')
  }

  Searchda() {
    console.log(this.searchda)
    this.ListVon('', this.searchda, '')
  }
  Searchtda() {
    console.log(this.searchtda)
    this.ListVon('', '', this.searchtda)
  }


  Chitietvon(idvon) {
    this.searchHttpService.Chitietvon(idvon).subscribe(dt => {
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
    console.log('da bam')
    this.searchHttpService.Suavon(this.id_von, this.suamavon, this.suatenvon, this.suada, this.suatda, this.suagiaidoan, this.suatien, this.suadieuchinh).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        alert(dt.Messege)
        this.router.navigate(['/QuanlyVon'])
        this.ListVon('', '', '')
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })
  }
  Xoa(item){
    this.searchHttpService.XoaVon(item.ID).subscribe(dt =>{
      console.log(dt)
      if (dt.Status === 1) {
        alert(dt.Messege)
        this.router.navigate(['/QuanlyVon'])
        this.ListVon('', '', '')
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })
  }

}
