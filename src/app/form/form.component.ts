import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form = {
    tenKhachHang: '',
    soDienThoai: '',
    email: '',
    diaChiKhachHang: ''
  }
  public isThisCheckSubmitForm: any;
  constructor() { }

  ngOnInit() {
  }
  onSubmitForm(form: NgForm) {
    console.log(form)
  }
  
  

  }
