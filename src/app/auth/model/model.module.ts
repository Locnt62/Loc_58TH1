import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelModule { 
  id: number;
  name: string;
  email: string;
  create_at: string;
  updated_at: string;
}
