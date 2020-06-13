import { Injectable, Inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  public onBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      console.log('onBrowser');
      this.onBrowser = true
    } else {
      console.log('onServer');
      this.onBrowser = false;
    }
  }
}
