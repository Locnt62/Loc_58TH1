import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActionService {
    public changeBDS: any;
    public changeList: any;
    public changeZone: any;
    public changeListRealAround: any;
    public openSearch: any;
    @Output() changeInfoBDS: EventEmitter<boolean> = new EventEmitter();
    @Output() changeListBDS: EventEmitter<boolean> = new EventEmitter();
    @Output() changeInfoZone: EventEmitter<boolean> = new EventEmitter();
    @Output() changeListRealAroundOuput: EventEmitter<boolean> = new EventEmitter();
    @Output() isOpenSearch: EventEmitter<boolean> = new EventEmitter();

    actionChangeInfoBDS(change) {
        this.changeBDS = change;
        this.changeInfoBDS.emit(this.changeBDS);
    }

    actionChangeInfoZone(change) {
        this.changeZone = change;
        this.changeInfoZone.emit(this.changeZone);
    }

    actionSearchList(change) {
        this.changeList = change;
        this.changeListBDS.emit(this.changeList);
    }

    actionChangeListRealAround(change) {
        this.changeListRealAround = change;
        this.changeListRealAroundOuput.emit(this.changeListRealAround);
    }

    actionOpenSearch(change) {
        this.openSearch = change;
        this.isOpenSearch.emit(change);
    }
}
