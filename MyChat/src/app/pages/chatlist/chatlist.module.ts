import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatlistPage } from './chatlist.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ChatlistPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatlistPage]
})
export class ChatlistPageModule {}
