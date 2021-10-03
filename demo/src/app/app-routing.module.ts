import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ShowempComponent } from './showemp/showemp.component';
import { RegisterComponent } from './register/register.component';
import { HrhomepageComponent } from './hrhomepage/hrhomepage.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:'',component: LoginComponent},
{path:'login',component: LoginComponent},
{path: 'products',canActivate:[AuthGuard],component:ProductComponent},
{path: 'hrhomepage',children: [
{path:'',component:HrhomepageComponent},
{path:'register',canActivate:[AuthGuard],component:RegisterComponent},
{path:'showemp',canActivate:[AuthGuard],component: ShowempComponent}]},
{path: '**', component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
