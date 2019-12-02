import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'friendlist',
        loadChildren: () => import('../friendlist/friendlist.module').then(m => m.FriendlistPageModule)
      },
      {
        path: 'chatlist',
        loadChildren: () => import('../chatlist/chatlist.module').then(m => m.ChatlistPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/friendlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
