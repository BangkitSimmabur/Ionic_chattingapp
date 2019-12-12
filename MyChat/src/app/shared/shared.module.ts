import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AutosizeModule } from 'ngx-autosize';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosizeModule,
  ],
  declarations: [],
  exports: [
      CommonModule,
      FormsModule,
      IonicModule,
      AutosizeModule,
  ],
})
export class SharedModule {}
