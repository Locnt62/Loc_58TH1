import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { ChartsModule } from 'ng2-charts';
import { DropdownModule } from "ng2-dropdown";
import { Ng2MenuModule } from "ng2-menu";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';



import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { WeatherComponent } from './weather/weather.component';
import { from } from 'rxjs';
import { WeatherSevice } from './weather/weather.service';
import { ToDoComponent } from './to-do/to-do.component';
import { HeaderComponent } from './to-do/header/header.component';
import { FooterComponent } from './to-do/footer/footer.component';
import { TodoInputComponent } from './to-do/todo-input/todo-input.component';
import { TodoItemComponent } from './to-do/todo-item/todo-item.component';
import { TodoListComponent } from './to-do/todo-list/todo-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule} from 'ag-grid-angular';
 import { NgApexchartsModule} from 'ng-apexcharts';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

  import { NgSelectModule } from '@ng-select/ng-select';
import { ListDuanCustomerComponent } from './list-duan-customer/list-duan-customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatTabsModule } from '@angular/material';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ListChudautuCustomerComponent } from './list-chudautu-customer/list-chudautu-customer.component';


import { AuthModule } from './auth/auth.module';
import { QuanLyDuAnComponent } from './admin/quan-ly-du-an/quan-ly-du-an/quan-ly-du-an.component';
import { ChiTietDuAnComponent } from './admin/quan-ly-du-an/chi-tiet-du-an/chi-tiet-du-an.component';
import { QuanLyChuDauTuComponent } from './admin/quan-ly-chu-dau-tu/quan-ly-chu-dau-tu/quan-ly-chu-dau-tu.component';
import { QuanLyVonDauTuComponent } from './admin/quan-ly-von/quan-ly-von-dau-tu/quan-ly-von-dau-tu.component';
import { ThemVonComponent } from './admin/quan-ly-von/them-von/them-von.component';
import { ChiTietChuDauTuComponent } from './admin/quan-ly-chu-dau-tu/chi-tiet-chu-dau-tu/chi-tiet-chu-dau-tu.component';
import { QlyTongMucDauTuComponent } from './admin/quan-ly-tong-muc-dau-tu/qly-tong-muc-dau-tu/qly-tong-muc-dau-tu.component';
import { ThemTongMucDauTuComponent } from './admin/quan-ly-von/them-tong-muc-dau-tu/them-tong-muc-dau-tu.component';
import { QuanLyThucHienGiaiNganComponent } from './admin/quan-ly-giai-ngan/quan-ly-thuc-hien-giai-ngan/quan-ly-thuc-hien-giai-ngan.component';
import { ThemQuanLyGiaiNganComponent } from './admin/quan-ly-giai-ngan/them-quan-ly-giai-ngan/them-quan-ly-giai-ngan.component';
import { ListNguoiDungComponent } from './admin/quan-ly-nguoi-dung/list-nguoi-dung/list-nguoi-dung.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PricingComponent,
    HomeComponent,
    CarouselComponent,
    JumbotronComponent,
    WeatherComponent,
    ToDoComponent,
    HeaderComponent,
    FooterComponent,
    TodoInputComponent,
    TodoItemComponent,
    TodoListComponent,
    SidebarComponent,
    DropdownComponent,
    AgGridComponent,
    LandingPageComponent,
    HeaderNavbarComponent,
    FooterNavComponent,
    ListDuanCustomerComponent,
    ListChudautuCustomerComponent,
    QuanLyDuAnComponent,
    ChiTietDuAnComponent,
    QuanLyChuDauTuComponent,
    QuanLyVonDauTuComponent,
    ThemVonComponent,
    ChiTietChuDauTuComponent,
    QlyTongMucDauTuComponent,
    ThemTongMucDauTuComponent,
    QuanLyThucHienGiaiNganComponent,
    ThemQuanLyGiaiNganComponent,
    ListNguoiDungComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule,
    ChartsModule,
    DropdownModule,
    Ng2MenuModule,
    NgbModule,
    Ng2PageScrollModule,
     NgSelectModule,
     NgxPaginationModule,
     MatTabsModule,
     AuthModule,
     NgApexchartsModule,
    AgGridModule.withComponents([]),
    TabsModule.forRoot()
  ],
  providers: [WeatherSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
