import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Helpers {
    constructor() {}

    filterObj(obj, params) {
        /* Sắp xếp lại mảng dữ liệu theo năm và tháng giảm dần từ index 0->n */
        obj.sort(function(a, b) {
            return b.years - a.years || b.month - a.month;
        });

        return obj.filter(function(hero) {
            let match = true;
            Object.keys(params).map(function(objectKey, index) {
                if (hero[objectKey] !== params[objectKey]) {
                    match = false;
                }
            });
            return match;
        });
    }

    getSerialByFields(obj, fields) {
        let result = {};
        fields.forEach(itemField => {
            if (Array.isArray(itemField)) {
                result[itemField.join('-')] = [];
            } else {
                result[itemField] = [];
            }
            obj.forEach(itemObj => {
                if (Array.isArray(itemField)) {
                    result[itemField.join('-')].push(itemObj[itemField[0]]+'-'+itemObj[itemField[1]]);
                } else {
                    result[itemField].push(Math.round(itemObj[itemField] * 10) / 10);
                }
            });
        });
        return result;
    }
    
    filterObjQuater(obj, params) {
        /* Sắp xếp lại mảng dữ liệu theo năm và tháng giảm dần từ index 0->n */
        obj.sort(function(a, b) {
            return b.years - a.years || b.quarter-a.quarter;
        });

        return obj.filter(function(hero) {
            let match = true;
            Object.keys(params).map(function(objectKey, index) {
                if (hero[objectKey] !== params[objectKey]) {
                    match = false;
                }
            });
            return match;
        });
    }

    display(number, replacement = 'chưa rõ', digits = 2) {
        if (isNaN(number)) {
            return replacement;
        }
        if (undefined === number || null === number) {
            return replacement;
        } else {
            return parseFloat(number)
                .toFixed(digits)
                .toString();
        }
    }
    getNestedKey(obj, args, rtn = '') {
        /*
        Trả về giá trị của một phần tử con, cháu,... trong một object nếu giá trị đó tồn tại.
        obj: object cần parse
        args: mảng các key lồng nhau của object
        rtn: giá trị trả về nếu gặp key không tồn tại
        */
        for (let i = 0; i < args.length; i++) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return rtn;
            }
            obj = obj[args[i]];
        }
        return obj;
    }

    isKeyExist(obj, args) {
        /*
        Trả về giá trị của một phần tử con, cháu,... trong một object nếu giá trị đó tồn tại.
        obj: object cần parse
        args: mảng các key lồng nhau của object
        rtn: giá trị trả về nếu gặp key không tồn tại
        */
        // console.log(args.length);
        const headlen = args.length - 1;
        for (let i = 0; i < headlen; i++) {
            if (!obj || !obj.hasOwnProperty(args[i])) {
                return false;
            }
            obj = obj[args[i]];
        }
        // console.log(obj);
        for (let j = 0; j < args[headlen].length; j++) {
            // console.log(args[headlen][j]);
            if (!obj || !obj.hasOwnProperty(args[headlen][j])) {
                return false;
            }
            // if (!obj || !obj.hasOwnProperty(subArgs[j])) {
            //     return false;
            // }
        }

        return true;
    }

    makeStaticInfo(arr) {
        const obj = {};
        arr.forEach(element => {
            obj[element.id] = element.ten;
        });
        return obj;
    }
    makeStaticInfos(info) {
        const staticInfos = {};
        /* Lưa lại mảng gốc để có khi cần dung */
        staticInfos['origin'] = info;
        Object.keys(info).forEach(function(key) {
            // console.log(key, info[key]);
            const obj = {};
            info[key].forEach(element => {
                obj[element.id] = element.ten;
            });
            staticInfos[key] = obj;
        });
        return staticInfos;
    }

    gettitleAdressFromSource(itemObject) {
        let titleText = '';
        if (itemObject.so_nha) {
            titleText += 'Số nhà ' + itemObject.so_nha + ', ';
        }
        if (itemObject.dl_ngach_hem) {
            titleText += 'Ngách ' + itemObject.dl_ngach_hem + ', ';
        }
        if (itemObject.dl_ngo) {
            titleText += 'Ngõ ' + itemObject.dl_ngo + ', ';
        }
        if (this.isKeyExist(itemObject, ['duong', ['tien_to', 'ten', 'id']])) {
            titleText += itemObject.duong.tien_to + ' ' + itemObject.duong.ten;
        }
        return titleText;
    }

    getAreaInfoFromSource(itemObject) {
        const areaLink = {};
        ['duong', 'phuong_xa', 'quan_huyen', 'tinh'].forEach(key => {
            if (this.isKeyExist(itemObject, [key, ['tien_to', 'ten', 'id']])) {
                areaLink[key] = {
                    ten: itemObject[key].tien_to + ' ' + itemObject[key].ten + (key === 'tinh' ? '' : ', '),
                    id: itemObject[key].id,
                };
            } else {
                areaLink[key] = {
                    ten: '',
                    id: ''
                };
            }
            areaLink[key]['friendly'] = this.createSlugFromTitle(areaLink[key].ten + '-' + areaLink[key].id);
            // console.log(areaLink[key]);
        });
        return areaLink;
    }

    buildBreadcrumb(itemObject, childKey) {
        /*
        childKey[0]: tien_to hoặc tienTo
        childKey[1]: ten
        childKey[2]: id
        */
        const areaLink = {};
        ['duong', 'phuong_xa', 'quan_huyen', 'tinh'].forEach((key, index) => {
            // console.log(itemObject[index]);
            // console.log(itemObject[index]);
            // console.log(itemObject[index][childKey[0]]);

            if (this.isKeyExist(itemObject, [index, [childKey[0], childKey[1], childKey[2]]])) {
                areaLink[key] = {
                    ten: itemObject[index][childKey[0]] + ' ' + itemObject[index][childKey[1]] + (key === 'tinh' ? '' : ', '),
                    id: itemObject[index][childKey[2]]
                };
            } else {
                areaLink[key] = {
                    ten: '',
                    id: ''
                };
            }
            areaLink[key]['friendly'] = this.createSlugFromTitle(areaLink[key].ten + '-' + areaLink[key].id);
        });
        return areaLink;
    }

    buildBreadcrumbCustomKey(itemObject, childKey, subChildKey) {
        /*
        subChildKey[0]: tien_to hoặc tienTo
        subChildKey[1]: ten
        subChildKey[2]: id
        */
        const areaLink = {};
        childKey.forEach((key, index) => {
            // console.log(itemObject[index]);
            // console.log(itemObject[index]);
            // console.log(itemObject[index][subChildKey[0]]);
            // console.log(key);
            // console.log(itemObject[key]);
            if (this.isKeyExist(itemObject, [key, [subChildKey[0], subChildKey[1], subChildKey[2]]])) {
                areaLink[key] = {
                    ten: itemObject[key][subChildKey[0]] + ' ' + itemObject[key][subChildKey[1]] + (key === childKey[3] ? '' : ', '),
                    id: itemObject[key][subChildKey[2]]
                };
            } else {
                areaLink[key] = {
                    ten: '',
                    id: ''
                };
            }
            areaLink[key]['friendly'] = this.createSlugFromTitle(areaLink[key].ten + '-' + areaLink[key].id);
        });
        return areaLink;
    }

    buildTitle(itemObject, childKey, subChildKey) {
        let titleText = '';
        if (itemObject[childKey[0]]) {
            titleText += 'Số nhà ' + itemObject[childKey[0]] + ', ';
        }
        if (itemObject[childKey[1]]) {
            titleText += 'Ngách ' + itemObject[childKey[1]] + ', ';
        }
        if (itemObject[childKey[2]]) {
            titleText += 'Ngõ ' + itemObject[childKey[2]] + ', ';
        }
        if (this.isKeyExist(itemObject, [childKey[3], [subChildKey[1], subChildKey[2], subChildKey[0]]])) {
            titleText += itemObject[childKey[3]][subChildKey[1]] + ' ' + itemObject[childKey[3]][subChildKey[2]];
        }
        return titleText;
    }

    getThumbnai(url, size) {
        if (undefined !== url) {
            return url.replace('watermark', 'watermark_' + size);
        } else {
            return '';
        }
    }

    createSlugFromTitle(alias) {
        let str = alias;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
        str = str.replace(/\s+/g, ' ');
        str = str.trim();
        str = str.replace(/\s/g, '-');
        // console.log(str);
        return str;
    }

}
