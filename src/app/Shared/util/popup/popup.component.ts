import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jhi-popup-content',
  styleUrls: ['./popup.scss'],
  template: `
    <div class="cen-common-popup fixed-dark-background" [ngClass]="{'popup-open': popupData.isOpen}">
        <div class="container">
            <div class="row">
                <div class="col-1 col-sm-3">

                </div>
                <div class="col-10 col-sm-6 background-popup px-4">
                    <div class="d-flex popup-header">
                        <div class="mr-auto"><h3><ng-content select="popup-header"></ng-content></h3></div>
                        <div><a class="close-button" (click)="closePoppup()"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-2x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg></a></div>
                    </div>  
                    <div class="popup-body">  
                        <ng-content select="popup-body"></ng-content>
                    </div>
                    <div class="popup-footer">
                        <ng-content select="popup-footer"></ng-content>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})
export class PopupContentComponent {

    @Input() popupData;
    @Output() popupDataChange:EventEmitter<any> = new EventEmitter<any>();

    constructor(
    ) {

    }
    closePoppup() {
        this.popupData.isOpen = false;
        this.popupData.step = 0;
        this.popupDataChange.emit(this.popupData);
    }
}
