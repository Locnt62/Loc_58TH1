import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quan-ly-thuc-hien-giai-ngan',
  templateUrl: './quan-ly-thuc-hien-giai-ngan.component.html',
  styleUrls: ['./quan-ly-thuc-hien-giai-ngan.component.css']
})
export class QuanLyThucHienGiaiNganComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
  }

  ThemGN(){
    this.router.navigate(['/ThemGiaingan'])
  }

}
