import { AuthGuardService } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResolverService } from './resolver/resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'chat/:id/:name',
    // resolve: {
    //   messages: ResolverService
    // },
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'userdetail',
    loadChildren: () => import('./pages/userdetail/userdetail.module').then(m => m.UserdetailPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-room',
    loadChildren: () => import('./pages/create-room/create-room.module').then(m => m.CreateRoomPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'add-member/:id',
    loadChildren: () => import('./pages/add-member/add-member.module').then(m => m.AddMemberPageModule),
    canActivate: [AuthGuardService],
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
