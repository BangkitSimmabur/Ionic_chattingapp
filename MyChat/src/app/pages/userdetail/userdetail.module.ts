import { NgModule } from '@angular/core';
import { UserdetailPage } from './userdetail.page';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserdetailPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [UserdetailPage],
})

export class UserdetailPageModule {}
