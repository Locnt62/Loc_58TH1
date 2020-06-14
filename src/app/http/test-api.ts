import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class SearchHttpService {
    private headers;
    private header;
    private obj = 'http://www.btlqlda.somee.com'
    constructor(private http: HttpClient, private authService: AuthService) {
        this.headers = new HttpHeaders({
            // 'Content-Type':  'application/json',
            'UserId': authService.getId(),
            'token': authService.getToken(),
            'Role': authService.getRole(),
            'IdCDT': authService.getIdCDT()
            // authorization: 'Bearer ' + authService.getToken(),
        });
    }

    //test api cenhome
    queryApiCenhome(body: string): Observable<any> {
        return this.http.get('https://app.cenhomes.vn' + '/project?apikey=1c17999fb4d3c3b86d6e104a710f1dd8&address=' + body);
    }

    queryThongtindiachinh(body: any): Observable<any> {
        return this.http.post<any>('https://gapi.cenhomes.vn/c-search/v1/analysis/address-thong-tin-dia_chinh', body);
    }
    //queri tinh thanh pho
    queryProvince(): Observable<any> {
        return this.http.get(this.obj + '/api/DropDown/Gettinh');
    }
    //get chu dau tu
    queryChudautu(): Observable<any> {
        return this.http.get(this.obj + '/api/DropDown/Getchudautu');
    }
    // ds du an noi  bat
    queryDuanNoibat(id: number): Observable<any> {
        return this.http.get(this.obj + '/api/Duan/SearchSpecail?tinh=' + id);
    }

    //ds tat ca du an
    getAllDuan(tinh: any, chudautu: any, ten: string, ma: string): Observable<any> {
        return this.http.get(this.obj + '/api/Duan/Search?tinh=' + tinh + '&chudatu=' + chudautu + '&mada=' + ma + '&tenda=' + ten);
    }

    //chitietduan
    detDuanDetail(id: any): Observable<any> {
        return this.http.get(this.obj + '/api/Duan/DaDetail?id=' + id);
    }

    //get list chu dau tu
    queryListChudautu(name: string): Observable<any> {
        return this.http.get(this.obj + '/api/ChuDauTu/Search?name=' + name);
    }
    //chi tiet chu dau tu
    getDetailCDT(id: any): Observable<any> {
        return this.http.get(this.obj + '/api/ChuDauTu/ChuDauTuDetail?id=' + id);
    }



    //search chu dau tu
    SearchCDT(name: string): Observable<any> {
        return this.http.get(this.obj + '/api/ChuDauTu/Search', {
            params: {
                name: name
            }
        });
    }


    //get tieu du an cua chu dau tu
    getTieeuduan(cdt: any): Observable<any> {
        return this.http.get(this.obj + '/api/Duan/SreachTieuDuan?chudautu=' + cdt);
    }


    //get tong von dau tu
    getTVDT(id: any, type: any): Observable<any> {
        return this.http.get(this.obj + '/api/Duan/Gettongdautu/?id=' + id + '&type=' + type);
    }
    //get list dự án trang admin

    getListDAadmin(key: string, tinh: any, chudatu: any, id: any): Observable<any> {
        return this.http.get(this.obj + '/api/Duan/SearchDaAdmin?nameandkey=' + key + '&tinh=' + tinh + '&chudatu=' + chudatu + '&id=' + id);
    }
    //chi tiet du an
    getListDAadminDetail(id: any): Observable<any> {
        return this.http.get(this.obj + '/api/Duan/SearchDaAdmin?id=' + id);
    }
    //get loai von
    Loaivon(): Observable<any> {
        return this.http.get(this.obj + '/api/DropDown/GetallLoaivon');
    }

    //get hinh thuc quan ly
    Quanly(): Observable<any> {
        return this.http.get(this.obj + '/api/DropDown/GetallHTQL');
    }


    //them moi du an

    ThemDA(Maduan: string, Diadiemkhobac: string, IdChudautu: any, Tenduan: string, IdhinhthucQLDA: any, Idloainguonvon: any, Diadiemthuchien: string, QDduyetCTDT: string, Ngaypheduyet: any, Tongmucdautu: any, Motaduan: string, Thoigiankhoicong: any, Thoigianhoanthanh: any, UrlMaps: string, idtinh: any): Observable<any> {
        const form = new FormData;
        form.append('Maduan', Maduan)
        form.append('Diadiemkhobac', Diadiemkhobac)
        form.append('IdChudautu', IdChudautu)
        form.append('Tenduan', Tenduan)
        form.append('IdhinhthucQLDA', IdhinhthucQLDA)
        form.append('Idloainguonvon', Idloainguonvon)
        form.append('Diadiemthuchien', Diadiemthuchien)
        form.append('QDduyetCTDT', QDduyetCTDT)
        form.append('Ngaypheduyet', Ngaypheduyet)
        form.append('Tongmucdautu', Tongmucdautu)
        form.append('Motaduan', Motaduan)
        form.append('Thoigiankhoicong', Thoigiankhoicong)
        form.append('Thoigianhoanthanh', Thoigianhoanthanh)
        form.append('UrlMaps', UrlMaps)
        form.append('idtinh', idtinh)
        return this.http.post<any>(this.obj + '/api/Duan/AddDuan', form, {headers: this.headers});
    }

    //xoa du an
    // XoaDA(idda: any): Observable<any> {
    //     return this.http.get('http://www.btlqlda.somee.com/api/Duan/DeleteDuan?idda=' + idda, {headers: this.headers});
    // }

    XoaDA(idda: any): Observable<any> {
        const form =  new FormData;
        form.append('idda', idda)
        return this.http.post<any>(this.obj + '/api/Duan/DeleteDuan',form, {headers: this.headers});
    }

    //sua du an
    SuaDA(Maduan: string, Diadiemkhobac: string, IdChudautu: any, Tenduan: string, IdhinhthucQLDA: any, Idloainguonvon: any, Diadiemthuchien: string, QDduyetCTDT: string, Ngaypheduyet: any, Tongmucdautu: any, Motaduan: string, Thoigiankhoicong: any, Thoigianhoanthanh: any, Urlfile: string, idtinh: any): Observable<any> {
        const form = new FormData;
        form.append('Maduan', Maduan)
        form.append('Diadiemkhobac', Diadiemkhobac)
        form.append('IdChudautu', IdChudautu)
        form.append('Tenduan', Tenduan)
        form.append('IdhinhthucQLDA', IdhinhthucQLDA)
        form.append('Idloainguonvon', Idloainguonvon)
        form.append('Diadiemthuchien', Diadiemthuchien)
        form.append('QDduyetCTDT', QDduyetCTDT)
        form.append('Ngaypheduyet', Ngaypheduyet)
        form.append('Tongmucdautu', Tongmucdautu)
        form.append('Motaduan', Motaduan)
        form.append('Thoigiankhoicong', Thoigiankhoicong)
        form.append('Thoigianhoanthanh', Thoigianhoanthanh)
        form.append('Urlfile', Urlfile)
        form.append('idtinh', idtinh)
        return this.http.post<any>(this.obj + '/api/Duan/EditDa', form, {headers: this.headers});
    }



    //them tieu du an
    ThemTDA(Maduan:any, MaCDT: any, Matieuduan: string, Tentieuduan: string, Diadiemkhobac: string, Mota: string): Observable<any> {
        const form = new FormData;
        form.append('Maduan', Maduan)
        form.append('MaCDT', MaCDT)
        form.append('Matieuduan', Matieuduan)
        form.append('Tentieuduan', Tentieuduan)
        form.append('Diadiemkhobac', Diadiemkhobac)
        form.append('Mota', Mota)
        return this.http.post<any>(this.obj + '/api/Duan/AddTieuDa', form, {headers: this.headers});
    }

    //sua tieu du an
    SưaTDA(Maduan:any, MaCDT: any, Matieuduan: string, Tentieuduan: string, Diadiemkhobac: string, Mota: string): Observable<any> {
        const form = new FormData;
        form.append('Maduan', Maduan)
        form.append('MaCDT', MaCDT)
        form.append('Matieuduan', Matieuduan)
        form.append('Tentieuduan', Tentieuduan)
        form.append('Diadiemkhobac', Diadiemkhobac)
        form.append('Mota', Mota)
        return this.http.post<any>(this.obj + '/api/Duan/EditTieuDa', form, {headers: this.headers});
    }

    //xoa tieu du an
    XoaTDA(id:any): Observable<any> {
        const form = new FormData;
        form.append('id', id)
        return this.http.post<any>(this.obj + '/api/Duan/DeleteTieuDa', form, {headers: this.headers});
    }
    //detail tieu du an
    DetailTDA(id:any): Observable<any> {
        const form = new FormData;
        form.append('id', id)
        return this.http.post<any>(this.obj + '/api/Duan/TieuDaDetail', form, {headers: this.headers});
    }

    //them moi chudautu

    ThemCDT(MaCDT:string, TenCDT:string, TenCDTfull: string, Diachi: string, Website:string, Phone:string, Fax:string, Email:string, Mota:string, IdLoaiCDT: string ): Observable<any> {
        const form = new FormData;
        form.append('MaCDT', MaCDT)
        form.append('TenCDT', TenCDT)
        form.append('TenCDTfull', TenCDTfull)
        form.append('Diachi', Diachi)
        form.append('Website', Website)
        form.append('Phone', Phone)
        form.append('Fax', Fax)
        form.append('Email', Email)
        form.append('Mota', Mota)     
        form.append('IdLoaiCDT', IdLoaiCDT)
        return this.http.post<any>(this.obj + '/api/ChuDauTu/AddCDT', form, {headers: this.headers});
    }

    
    SuaCDT(ID:any, MaCDT:string, TenCDT:string, TenCDTfull: string, Diachi: string, Website:string, Phone:string, Fax:string, Email:string, Mota:string, IdLoaiCDT: string ): Observable<any> {
        const form = new FormData;
        form.append('ID', ID)
        form.append('MaCDT', MaCDT)
        form.append('TenCDT', TenCDT)
        form.append('TenCDTfull', TenCDTfull)
        form.append('Diachi', Diachi)
        form.append('Website', Website)
        form.append('Phone', Phone)
        form.append('Fax', Fax)
        form.append('Email', Email)
        form.append('Mota', Mota)     
        form.append('IdLoaiCDT', IdLoaiCDT)
        return this.http.post<any>(this.obj + '/api/ChuDauTu/EditCDT', form, {headers: this.headers});
    }

    XoaCDT(id:any): Observable<any> {
        const form = new FormData;
        form.append('id', id)
        return this.http.post<any>( this.obj + '/api/ChuDauTu/DeleteCDT', form, {headers: this.headers});
    }

    //loai chu dau tu
    LoaiCDT(): Observable<any>{
        return this.http.get(this.obj + '/api/DropDown/GetloaiCDT');
    }



    //get role
    GetRole(): Observable<any>{
        return this.http.get( this.obj + '/api/DropDown/GetRole');
    }

    //list user
    ListUser(name:string): Observable<any>{
        const form = new FormData;
        form.append("name", name)
        return this.http.post<any>(this.obj + '/api/User/SearchUser', form, {headers: this.headers});
    }

    //them user
    Adduser(IdRole: any, IdChudautu:any, Username: string, Password: string, Firstname: string, Lastname: string, Mail: string): Observable<any>{
        const form = new FormData;
        form.append("IdRole", IdRole)
        form.append("IdChudautu", IdChudautu)
        form.append("Username", Username)
        form.append("Password", Password)
        form.append("Firstname", Firstname)
        form.append("Lastname", Lastname)
        form.append("Mail", Mail)
        return this.http.post<any>(this.obj + '/api/User/AddUser', form, {headers: this.headers})

    }

    //Sua user

    Suauser(User_Id: any, IdRole: any, IdChudautu:any, Username: string, Password: string, Firstname: string, Lastname: string, Mail: string): Observable<any>{
        const form = new FormData;
        form.append("User_Id", User_Id)
        form.append("IdRole", IdRole)
        form.append("IdChudautu", IdChudautu)
        form.append("Username", Username)
        form.append("Password", Password)
        form.append("Firstname", Firstname)
        form.append("Lastname", Lastname)
        form.append("Mail", Mail)
        return this.http.post<any>( this.obj + '/api/User/EditUser', form, {headers: this.headers})

    }

    //Xoa user

    Xoauser(User_Id: any): Observable<any>{
        const form = new FormData;
        form.append("User_Id", User_Id)
        return this.http.post<any>(this.obj + '/api/User/DeleteUser', form, {headers: this.headers})

    }

    //chi tiet
    Detailuser(User_Id: any): Observable<any>{
        const form = new FormData;
        form.append("User_Id", User_Id)
        return this.http.post<any>(this.obj + '/api/User/Userdetail', form, {headers: this.headers})

    }

    //logout
    Logout(Userid: any): Observable<any>{
        const form = new FormData;
        form.append("Userid", Userid)
        return this.http.post<any>(this.obj + '/api/User/Logout', form, {headers: this.headers})
    }

    Count(type:any): Observable<any>{
        return this.http.get(this.obj + '/api/DropDown/GetOverview?type=' + type)
    }





}

