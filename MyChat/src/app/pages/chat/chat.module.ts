import { AutosizeModule } from 'ngx-autosize';
import { NgModule } from '@angular/core';
import { ChatPage } from './chat.page';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    AutosizeModule,
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
