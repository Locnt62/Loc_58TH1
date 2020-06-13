import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qly-tong-muc-dau-tu',
  templateUrl: './qly-tong-muc-dau-tu.component.html',
  styleUrls: ['./qly-tong-muc-dau-tu.component.css']
})
export class QlyTongMucDauTuComponent implements OnInit {
  seg: any;

  constructor( private activeRoute: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params =>{
      console.log('params');
      // console.log(params.name);
       this.seg = params.name;
      console.log(this.seg)
    })
  }

  ThemTMDT(){
    this.router.navigate(['/ThemTMDT'])
  }

}
