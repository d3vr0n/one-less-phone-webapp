import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'secure', pathMatch: 'full' },
  {
    path: 'secure', loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule)
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
