import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { ExpPipe } from './exp.pipe';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Router, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HrhomepageComponent } from './hrhomepage/hrhomepage.component';
import { HttpClientModule} from '@angular/common/http'
//libraries are imported in json
@NgModule({
  declarations: [   //components and pipes
    AppComponent,
    DemoComponent,
    LoginComponent,
    ShowempComponent,
    ExpPipe,
    RegisterComponent,
    HeaderComponent,
    GenderPipe,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    PagenotfoundComponent,
    HrhomepageComponent
  ],
  imports: [  //modules
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],  //services
  bootstrap: [AppComponent]
})
export class AppModule { }
