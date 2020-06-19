import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchHttpService } from 'src/app/http/test-api';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-chi-tiet-du-an',
  templateUrl: './chi-tiet-du-an.component.html',
  styleUrls: ['./chi-tiet-du-an.component.css']
})
export class ChiTietDuAnComponent implements OnInit {
  listProvine: any;
  chudautu: any;
  listDA: any;
  config: any;
  seg: any;
  // modalRef: NgbModalRef;
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
  list_chudautu: any;

  maduan: any;

  Tinh: any;
  model: NgbDateStruct;
  model1: NgbDateStruct;
  model2: NgbDateStruct;
  constructor(private activeRoute: ActivatedRoute, private modalService: NgbModal, private router: Router, private searchHttpService: SearchHttpService,) { }

  ngOnInit() {
    this.LoaiVon();
    this.Quanly()
    this.ListCDT()
    this.ListTinh()
  }


  redirect() {
    this.router.navigate(['/QuanlyDuan'])
  }
  ListCDT() {
    this.searchHttpService.queryChudautu().subscribe(dt => {
      console.log('chu dau tu');
      this.list_chudautu = dt
      console.log(this.list_chudautu)
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


  onDateSelect(event) {
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
    // let finalDate = year + "-" + month + "-" + day;
    this.TGTC =  day+"/"+month+"/"+year;
    console.log('aaaa',this.TGTC)
   }


   onDateSelect1(event) {
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
    // let finalDate = year + "-" + month + "-" + day;
    this.TGHT =  day+"/"+month+"/"+year;
    console.log('aaaa',this.TGHT)
   }
   onDateSelect2(event) {
    let year = event.year;
    let month = event.month <= 9 ? '0' + event.month : event.month;;
    let day = event.day <= 9 ? '0' + event.day : event.day;;
    // let finalDate = year + "-" + month + "-" + day;
    this.Ngaypheduyet =  day+"/"+month+"/"+year;
    console.log('aaaa',this.Ngaypheduyet)
   }

  ThemMoi() {
    const body = {
      mada: this.maduan,
      tendua: this.tenduan
    }
    console.log('aa', body)
    this.searchHttpService.ThemDA(this.maduan, this.Khobac, this.QDBD, this.tenduan, this.htql, this.loainguonvon, this.NNoithuchien, this.QDDT, this.Ngaypheduyet, this.TMDT, this.Mota, this.TGTC, this.TGHT, this.Image, this.Tinh).subscribe(dt => {
      console.log('ket qua sau khi them');
      console.log(dt)
      console.log(dt.Status)
      console.log(dt.Messege)
      if (dt.Status === 1) {
        alert(dt.Messege)
        this.router.navigate(['/QuanlyDuan'])
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })

  }


  ListTinh() {
    this.searchHttpService.queryProvince().subscribe(dt => {
      console.log('ds tinh');
      this.listProvine = dt
      console.log(this.listProvine)
    })
  }

  SelectTinh() {
    console.log(this.Tinh)
  }

}
