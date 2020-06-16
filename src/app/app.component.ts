import { Component, OnInit } from '@angular/core';
import { WeatherSevice } from './weather/weather.service'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { TodoService } from '../app/to-do/services/todo.service'
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { SearchHttpService } from './http/test-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '72px';
  private _opened: boolean = false;
  public status: boolean = false;
  public checkNav: boolean = false;
  isShow: boolean;
  check_router: string;
  token_get: any;
  idUser: any;
  id_user: any;
  constructor(public router: Router, private activeRoute: ActivatedRoute, private authService: AuthService, private searchHttpService: SearchHttpService,) {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        // console.log('navigated to:', event.url);
        this.check_router = event.url;
        console.log('this.check_router');
        console.log(this.check_router);
        // console.log('route state', event.state);
        // console.log('');
      }
    })

    this.token_get = localStorage.getItem('currentUser')
    console.log('this.token_get');
    console.log(this.token_get);

    this.idUser = this.authService.getId();
    console.log('aa',this.idUser)
    this.id_user = parseInt(this.idUser, 10);
    console.log('int', this.id_user)
  }
  ngOnInit() {
    // this.activeRoute.url.subscribe(param => {
    //   console.log('check router');
    //   console.log(param);
    // })
    this.isShow = false;
     this.isCheckRouter();
    this.GetToken();
  }


  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  changeStatus() {
    this.status = !this.status;
    console.log(this.status)
  }
  check() {
    this.checkNav = !this.checkNav;
  }

  isCheckRouter() {
    if(this.check_router){
      const index = this.check_router.indexOf('/Landing');
      if (index !== -1) {
        this.isShow = !this.isShow
        return false
      }

      const index1 = this.check_router.indexOf('/ListProjectCustomer');
      if (index1 !== -1) {
        this.isShow = !this.isShow
        return false
      }
      const index2 = this.check_router.indexOf('/ListInvesterCustomer');
      if (index2 !== -1) {
        this.isShow = !this.isShow
        return false
      }

      const index3 = this.check_router.indexOf(' ')
      if(index3 !== - 1){
        this.isShow = !this.isShow
        return false
      }
    }


      // if (this.check_router === '/Landing') {
      //   if (this.isShow) {
      //     this.isShow = !this.isShow;
      //   }
      //   return false;
      // }else if(this.check_router === '/ListProjectCustomer'){
      //   if (this.isShow) {
      //     this.isShow = !this.isShow;
      //   }
      //   return false;
      // }
      // else if(this.check_router === '/ListInvesterCustomer'){
      //   if (this.isShow) {
      //     this.isShow = !this.isShow;
      //   }
      //   return false;
      // }

      return true;

  }

  Logout() {
    this.authService.logout();
    this.searchHttpService.Logout(this.id_user).subscribe(dt =>{
      console.log('logout');
      console.log(dt)
    })
    this.router.navigateByUrl('/Landing')
  }
  GetToken() {
    console.log('get token')
    this.authService.getToken();
  }


  Direct(){
    this.router.navigate(['/DoiMatKhau'])
    console.log('123')
  }

}

