import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/Shared/util/seo.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
// import { ToasterService } from 'angular2-toaster';
@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {
  check=true;
  public form = {
    tenKhachHang: '',
    soDienThoai: '',
    email: '',
    diaChiKhachHang: ''
  }
  public isThisCheckSubmitForm: any;
  isShow: boolean;
  scrollDown: boolean;
  modalRef: NgbModalRef;
  constructor(public router: Router, private seoService: SeoService,private modalService: NgbModal,private authService: AuthService) { 
    if ('/Landing' === this.router.url) {
      this.scrollDown = true;
    } else {
      this.scrollDown = false;
    }
  }

  ngOnInit() {
    this.isShow = false;
    if (this.seoService.onBrowser) {
      /* Navbar on scroll */
      document.onscroll = () => {
        const top = (window.pageYOffset || document.body.scrollTop) - (document.body.clientTop || 0);
        if (top < 50) {
          this.scrollDown = true;
        } else {
          this.scrollDown = false;
        }
      };
    }
    this.isCheckRouter()
  }
  isCheckRouter() {
    if (this.router.url === '/Landing') {
      if (this.isShow) {
        this.isShow = !this.isShow;
      }
      return false;
    }
    return true;
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
  onSubmitForm(form: NgForm) {
    console.log(form)
    console.log(form['tenKhachHang'])
    console.log(form['soDienThoai'])
    this.check = false
    this.authService.login(form['tenKhachHang'], form['soDienThoai']).subscribe(rest => {
      if (rest.token) {
        this.check = true
        console.log('dn thanh cong')
        console.log(rest.token);
        this.router.navigateByUrl('/home');
        this.modalRef.close();
      } else {
        this.check = false
        console.log('faile')
        alert("Tài khoản không hợp lệ")
        //this.toaster.pop('error', 'Thất bại');
        // this.router.navigateByUrl('**');
      }
    })
  }

}
