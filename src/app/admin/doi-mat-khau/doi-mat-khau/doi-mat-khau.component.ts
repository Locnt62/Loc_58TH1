import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchHttpService } from 'src/app/http/test-api';

@Component({
  selector: 'app-doi-mat-khau',
  templateUrl: './doi-mat-khau.component.html',
  styleUrls: ['./doi-mat-khau.component.css']
})
export class DoiMatKhauComponent implements OnInit {

  constructor(private searchHttpService: SearchHttpService,) { }

  ngOnInit() {
  }

  Check(form: NgForm) {
    if (form['diaChiKhachHang']) {
      if (form['email'] !== form['diaChiKhachHang']) {
        return true
      }
      return false
    }

  }


  onSubmitForm(form: NgForm) {
    console.log(form)
    console.log(form['tenKhachHang'])
    console.log(form['soDienThoai'])
    console.log(form['email'])
    console.log(form['diaChiKhachHang'])
    this.searchHttpService.ChangePassword(form['tenKhachHang'], form['soDienThoai'], form['email']).subscribe(dt => {
      console.log(dt);
      if (dt.Status === 1) {
        alert(dt.Messege)
      } else if (dt.Status === 0) {
        alert(dt.Messege)
      }
    })

  }

}
