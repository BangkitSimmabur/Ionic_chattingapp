import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateRoomPage } from './create-room.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRoomPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateRoomPage]
})
export class CreateRoomPageModule {}
