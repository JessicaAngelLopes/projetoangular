import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JogosComponent } from './jogos/jogos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  
  {
    path:'jogos',
    component: JogosComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
