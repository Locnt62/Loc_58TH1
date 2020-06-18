import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SearchHttpService } from 'src/app/http/test-api';
import { AuthService } from 'src/app/auth/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-list-nguoi-dung',
  templateUrl: './list-nguoi-dung.component.html',
  styleUrls: ['./list-nguoi-dung.component.css']
})
export class ListNguoiDungComponent implements OnInit {
  listuser: any;
  modalRef: NgbModalRef;
  listquyen: any;
  listInvest: any;
  ThemFName: any;
  ThemLName: any;
  ThemTK: any;
  ThemCDT: any;
  variable: boolean

  ThemQuyen: any;
  ThemEmail: any;
  ThemMK: any;

  SuaFName: any;
  SuaLName: any;
  SuaTK: any;
  SuaQuyen: any;
  SuaCDT: any;
  SuaEmail: any;
  SuaMK: any;
  SearchTen: any;
  id_xoa: any;

  ConMK:any;


  check = true





  constructor(private activeRoute: ActivatedRoute, private modalService: NgbModal, private router: Router, private searchHttpService: SearchHttpService, private authService: AuthService) { }

  ngOnInit() {
    this.Getlistuser("")
    this.GetRole()
    this.getListCDT("")
    this.variable = true
    this.ThemCDT = null
    console.log('roleeee ')
    console.log(this.authService.getRole());
    if (this.authService.getRole() === '1') {
      console.log('quyen admin')
    }
  }

  getListCDT(name) {
    this.searchHttpService.queryListChudautu(name).subscribe(dt => {
      console.log('ds chu dau tu');
      console.log(dt)
      this.listInvest = dt
    })
  }

  Getlistuser(name) {
    this.check = false
    this.searchHttpService.ListUser(name).subscribe(dt => {
      if(dt){
        this.check = true
      this.check = true
      console.log('list user');
      this.listuser = dt;
      console.log(this.listuser)
      }
    })
  }
  GetRole() {
    this.searchHttpService.GetRole().subscribe(rest => {
      console.log('role');
      console.log(rest)
      this.listquyen = rest
    })
  }

  open(content) {
    if (this.authService.getRole() === '1') {
      this.modalRef = this.modalService.open(content, {
        windowClass: 'modal-content-request',
        keyboard: false,
        backdrop: 'static'
      });
    } else {
      alert("Bạn không có quyền sửa");
      // Swal.fire('Hello world!')
    }
  }
  close() {
    this.modalRef.close();
  }
  TextSearchTen() {
    console.log(this.SearchTen)
    this.Getlistuser(this.SearchTen)
  }
  TextThemFName() {
    console.log(this.ThemFName)
  }
  TextThemLName() {
    console.log(this.ThemLName)
  }
  TextThemTK() {
    console.log(this.ThemTK)
  }
  SelectThemCDT() {
    console.log(this.ThemCDT)
    if (this.ThemCDT == 2) {
      this.variable = false
    }
  }
  SelectThemQuyen() {
    console.log(this.ThemQuyen)
  }
  TextThemEmail() {
    console.log(this.ThemEmail)
  }
  TextThemMK() {
    console.log(this.ThemMK)
  }
  TextConMK(){
    console.log(this.ConMK);
    this.Check();
  }

  Check(){
    if (this.ConMK) {
      if (this.ThemMK !== this.ConMK) {
        return true
      }
      return false
    }

  }


  Them() {
    this.check = false
    this.searchHttpService.Adduser(this.ThemQuyen, this.ThemCDT, this.ThemTK, this.ThemMK, this.ThemFName, this.ThemLName, this.ThemEmail).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        this.check = true
        this.close()
        alert(dt.Messege)
        this.Getlistuser("")
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }
    })
  }



  TextSuaFName() {
    console.log(this.SuaFName)
  }
  TextSuaLName() {
    console.log(this.SuaLName)
  }
  TextSuaTK() {
    console.log(this.SuaTK)
  }
  SelectSuaQuyen() {
    console.log(this.SuaQuyen)
  }
  SelectSuaCDT() {
    console.log(this.SuaCDT)
  }
  TextSuaEmail() {
    console.log(this.SuaEmail)
  }
  TextSuaMK() {
    console.log(this.SuaMK)
  }

  Sua(item) {
    this.check = false
    this.searchHttpService.Detailuser(item.User_Id).subscribe(dt => {
      if (dt) {
        this.check = true
        console.log('chi tiet nguoi dung');
        console.log(dt)
        this.SuaFName = dt.Firstname;
        this.SuaLName = dt.Lastname;
        this.SuaTK = dt.Username;
        this.SuaQuyen = dt.IdRole;
        this.SuaCDT = dt.IdChudautu;
        this.SuaEmail = dt.Mail;
      }
    })

  }

  chonnguoixoa(item) {
    console.log(item.User_Id)
    this.id_xoa = item.User_Id;
  }

  // Xoa(item) {
  //   this.searchHttpService.Xoauser(item.User_Id).subscribe(dt => {
  //     console.log(dt);
  //     if (dt.Status === 1) {
  //       alert(dt.Messege)
  //       this.Getlistuser("")
  //     } else if (dt.Status === 0) {
  //       alert(dt.Messege)
  //     }

  //   })
  // }

  Delete() {
    this.check = false
    this.searchHttpService.Xoauser(this.id_xoa).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        this.check = true
        this.close()
        alert(dt.Messege)
        this.Getlistuser("")
      } else if (dt.Status === 0) {
        this.check = true
        alert(dt.Messege)
      }

    })
  }

  Checkrole() {
    if (this.authService.getRole() === '1') {
      console.log('quyen admin')
      return false
    }
    return true
  }





}
