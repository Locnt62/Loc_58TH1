import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component'
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WeatherComponent } from './weather/weather.component';
import { ToDoComponent } from './to-do/to-do.component'
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListDuanCustomerComponent } from './list-duan-customer/list-duan-customer.component';
import {ListChudautuCustomerComponent} from './list-chudautu-customer/list-chudautu-customer.component';
import { AuthGuard } from './auth.guard';
import { QuanLyDuAnComponent } from './admin/quan-ly-du-an/quan-ly-du-an/quan-ly-du-an.component';
import {QuanLyChuDauTuComponent} from './admin/quan-ly-chu-dau-tu/quan-ly-chu-dau-tu/quan-ly-chu-dau-tu.component'
import {ChiTietDuAnComponent} from './admin/quan-ly-du-an/chi-tiet-du-an/chi-tiet-du-an.component';
import {QuanLyVonDauTuComponent} from './admin/quan-ly-von/quan-ly-von-dau-tu/quan-ly-von-dau-tu.component';
import {ThemVonComponent} from './admin/quan-ly-von/them-von/them-von.component';
import {ChiTietChuDauTuComponent} from './admin/quan-ly-chu-dau-tu/chi-tiet-chu-dau-tu/chi-tiet-chu-dau-tu.component'
import {QlyTongMucDauTuComponent} from'./admin/quan-ly-tong-muc-dau-tu/qly-tong-muc-dau-tu/qly-tong-muc-dau-tu.component'
import {ThemTongMucDauTuComponent} from './admin/quan-ly-von/them-tong-muc-dau-tu/them-tong-muc-dau-tu.component'
import {QuanLyThucHienGiaiNganComponent} from './admin/quan-ly-giai-ngan/quan-ly-thuc-hien-giai-ngan/quan-ly-thuc-hien-giai-ngan.component'
import {ThemQuanLyGiaiNganComponent} from './admin/quan-ly-giai-ngan/them-quan-ly-giai-ngan/them-quan-ly-giai-ngan.component'
import {ListNguoiDungComponent} from './admin/quan-ly-nguoi-dung/list-nguoi-dung/list-nguoi-dung.component'
import {DoiMatKhauComponent} from './admin/doi-mat-khau/doi-mat-khau/doi-mat-khau.component'
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'ag-grid', component: AgGridComponent },
  { path: 'Landing', component: LandingPageComponent },
  { path: 'ListProjectCustomer', component: ListDuanCustomerComponent },
  // { path: 'ListProjectCustomer/:', component: ListDuanCustomerComponent },
  { path: 'ListInvesterCustomer', component: ListChudautuCustomerComponent },
  // { path: 'ListInvesterCustomer/:', component: ListChudautuCustomerComponent },
  { path: 'QuanlyDuan', component: QuanLyDuAnComponent, canActivate: [AuthGuard]},
  { path: 'QuanlyChuDauTu', component: QuanLyChuDauTuComponent, canActivate: [AuthGuard]},
  { path: 'Themmoiduan', component: ChiTietDuAnComponent, canActivate: [AuthGuard]},
  { path: 'QuanlyVon', component: QuanLyVonDauTuComponent, canActivate: [AuthGuard]},
  { path: 'ThemVon', component: ThemVonComponent, canActivate: [AuthGuard]},
  { path: 'ChitietCDT', component: ChiTietChuDauTuComponent, canActivate: [AuthGuard]},
  { path: 'QlyTongMucDauTuComponent', component: QlyTongMucDauTuComponent, canActivate: [AuthGuard]},
  { path: 'ThemTMDT', component: ThemTongMucDauTuComponent, canActivate: [AuthGuard]},
  { path: 'QuanlyGiaingan', component: QuanLyThucHienGiaiNganComponent, canActivate: [AuthGuard]},
  { path: 'ThemGiaingan', component: ThemQuanLyGiaiNganComponent, canActivate: [AuthGuard]},
  { path: 'QuanLyNguoiDung', component: ListNguoiDungComponent, canActivate: [AuthGuard]},
  { path: 'DoiMatKhau', component: DoiMatKhauComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'Landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
