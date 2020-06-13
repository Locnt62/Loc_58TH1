import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SearchHttpService {
    constructor(private http: HttpClient) { }

    //test api cenhome
    queryApiCenhome(body: string): Observable<any> {
        return this.http.get('https://app.cenhomes.vn' + '/project?apikey=1c17999fb4d3c3b86d6e104a710f1dd8&address=' + body);
    }

    queryThongtindiachinh(body: any): Observable<any> {
        return this.http.post<any>('https://gapi.cenhomes.vn/c-search/v1/analysis/address-thong-tin-dia_chinh', body);
    }
    //queri tinh thanh pho
    queryProvince(): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/DropDown/Gettinh');
    }
    //get chu dau tu
    queryChudautu():  Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/DropDown/Getchudautu');
    }
    // ds du an noi  bat
    queryDuanNoibat(id: number): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/SearchSpecail?tinh=' + id);
    }

    //ds tat ca du an
    getAllDuan(tinh:any, chudautu:any,ten:string,ma:string): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/Search?tinh=' + tinh + '&chudatu=' + chudautu + '&mada=' + ma + '&tenda=' + ten);
    }

    //chitietduan
    detDuanDetail(id:any): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/DaDetail?id=' + id);
    }

    //get list chu dau tu
    queryListChudautu(name:string): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/ChuDauTu/Search?name=' + name);
    }
    //chi tiet chu dau tu
    getDetailCDT(id:any): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/ChuDauTu/ChuDauTuDetail?id=' + id);
    }



    //search chu dau tu
    SearchCDT(name:string): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/ChuDauTu/Search', {
            params:{
                name:name
            }
        });
    }


    //get tieu du an cua chu dau tu
    getTieeuduan(cdt:any): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/SreachTieuDuan?chudautu=' + cdt);
    }


    //get tong von dau tu
    getTVDT(id:any, type:any): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/Gettongdautu/?id=' + id +'&type=' + type);
    }
    //get list dự án trang admin

    getListDAadmin(key: string, tinh: any, chudatu: any, id:any): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/SearchDaAdmin?nameandkey=' + key +'&tinh=' + tinh + '&chudatu=' + chudatu + '&id=' + id);
    }
    //chi tiet du an
    getListDAadminDetail(id:any): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/SearchDaAdmin?id=' + id);
    }
    //get loai von
    Loaivon(): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/DropDown/GetallLoaivon');
    }

    //get hinh thuc quan ly
    Quanly(): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/DropDown/GetallHTQL');
    }


    //them moi du an

    ThemDA(Maduan: string,Diadiemkhobac: string,IdChudautu:any,Tenduan:string,IdhinhthucQLDA:any,Idloainguonvon:any,Diadiemthuchien:string,QDduyetCTDT:string,Ngaypheduyet:any,Tongmucdautu:any,Motaduan:string,Thoigiankhoicong:any,Thoigianhoanthanh:any,UrlMaps:string,idtinh:any): Observable<any> {
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
        return this.http.post<any>('http://www.btlqlda.somee.com/api/Duan/AddDuan', form);
    }

   //xoa du an
   XoaDA(idda:any): Observable<any> {
        return this.http.get('http://www.btlqlda.somee.com/api/Duan/DeleteDuan?idda=' + idda);
    }

    //sua du an
    SuaDA(Maduan: string,Diadiemkhobac: string,IdChudautu:any,Tenduan:string,IdhinhthucQLDA:any,Idloainguonvon:any,Diadiemthuchien:string,QDduyetCTDT:string,Ngaypheduyet:any,Tongmucdautu:any,Motaduan:string,Thoigiankhoicong:any,Thoigianhoanthanh:any,Urlfile:string,idtinh:any): Observable<any> {
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
        return this.http.post<any>('http://www.btlqlda.somee.com/api/Duan/EditDa', form);
    }

}

