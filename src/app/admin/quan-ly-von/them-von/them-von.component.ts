import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchHttpService } from 'src/app/http/test-api';

@Component({
  selector: 'app-them-von',
  templateUrl: './them-von.component.html',
  styleUrls: ['./them-von.component.css']
})
export class ThemVonComponent implements OnInit {
  list_giaidoanvon: any;
  list_duan: any;
  list_tieuduan: any;


  suatenvon:any;
  suamavon:any;
  suada:any;
  suatda:any;
  suatien:any;
  suadieuchinh:any;
  suanguoitao:any;
  suangaytao:any;
  suagiaidoan: any;
  id_von: any;

  check = true

  constructor(private activeRoute: ActivatedRoute,private router: Router,private searchHttpService: SearchHttpService,) { }

  ngOnInit() {
    this.GiaidoanVon();
    this.ListDA();
    this.ListTDA()
  }

  redirect(){
    this.router.navigate(['/QuanlyVon'])
  }

 

  GiaidoanVon(){
    this.searchHttpService.Giadoanvon().subscribe(dt =>{
      console.log('giai doan von')
      console.log(dt)
      this.list_giaidoanvon = dt
    })
  }


  ListDA(){
    this.searchHttpService.ListDuan().subscribe(dt =>{
      console.log('ds du an');
      console.log(dt)
      this.list_duan = dt
    })
  }
   ListTDA(){
     this.searchHttpService.ListTieuDuAn().subscribe(rest =>{
       console.log('ds tieu du an');
       console.log(rest)
       this.list_tieuduan = rest
     })
   }


   //them
   Suatenvon(){
    console.log(this.suatenvon)
  }
  Suamavon(){
    console.log(this.suamavon)
  }
  Suada(){
    console.log(this.suada)
  }
  Suatda(){
    console.log(this.suatda)
  }
  Suatien(){
    console.log(this.suatien)
  }
  Suadieuchinh(){
    console.log(this.suadieuchinh)
  }
  Suanguoitao(){
    console.log(this.suanguoitao)
  }
  Suangaytao(){
    console.log(this.suangaytao)
  }
  Suagiaidoan(){
    console.log(this.suagiaidoan)
  }

  Them(){
    this.check = false
    this.searchHttpService.Themvon(this.suamavon,this.suatenvon,this.suada,this.suatda,this.suagiaidoan,this.suatien,this.suadieuchinh).subscribe(dt =>{
      console.log(dt);
      if (dt.Status === 1) {
        this.check = true
        alert(dt.Messege)
        this.router.navigate(['/QuanlyVon'])
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
    })
  }

}
