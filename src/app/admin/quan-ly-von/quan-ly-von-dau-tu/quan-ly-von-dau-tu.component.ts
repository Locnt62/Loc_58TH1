import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quan-ly-von-dau-tu',
  templateUrl: './quan-ly-von-dau-tu.component.html',
  styleUrls: ['./quan-ly-von-dau-tu.component.css']
})
export class QuanLyVonDauTuComponent implements OnInit {
  listVon: any
  seg: any;
  constructor( private activeRoute: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
    this.listVon = [
      {name: 'vốn nhà nước', tenduan:'Dự án Cống nhập', tieuduan:'hợp phần xd1', giaidoan:'2019', giatritien:'2000', loaivon:'von kho bac', landieuchinh:'1', trangthao:''},
      {name: 'vốn nhà nước', tenduan:'Dự án Cống nhập', tieuduan:'hợp phần xd1', giaidoan:'2019', giatritien:'2000', loaivon:'von kho bac', landieuchinh:'1', trangthao:''},
      {name: 'vốn nhà nước', tenduan:'Dự án Cống nhập', tieuduan:'hợp phần xd1', giaidoan:'2019', giatritien:'2000', loaivon:'von kho bac', landieuchinh:'1', trangthao:''},
      {name: 'vốn nhà nước', tenduan:'Dự án Cống nhập', tieuduan:'hợp phần xd1', giaidoan:'2019', giatritien:'2000', loaivon:'von kho bac', landieuchinh:'1', trangthao:''},
    ]
    this.activeRoute.queryParams.subscribe(params =>{
      console.log('params');
      // console.log(params.name);
       this.seg = params.name;
      console.log(this.seg)
    })
  }

  direct(item){
    this.router.navigate(['/QuanlyVon'], { queryParams: { name: item.name } });
  }

  ThemVon(){
    this.router.navigate(['/ThemVon'])
  }

}
