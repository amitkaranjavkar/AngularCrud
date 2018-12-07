import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CustomerNamePipe } from './pipe/customername.pipe';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component'
import { CustomerService } from './services/customer.service'
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagerService } from './services/pager.service';
import { LoginComponent } from './login/login.component'
import { LoaderComponent } from './loader/loader.component';
import { LoginGuardService } from './services/login-guard.service';
import { LoginService } from './services/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authInterceptor/auth.interceptor';
import { EventExampleComponent } from './eventExamples/eventExamples.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent, canActivate: [LoginGuardService] },
  { path: 'about', component: AboutComponent, canActivate: [LoginGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuardService] },
  { path: 'contact', component: ContactComponent, canActivate: [LoginGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventExampleComponent },
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule, 
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CustomerNamePipe,
    LoginComponent,
    LoaderComponent,
    EventExampleComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    PagerService,
    LoginGuardService,
    LoginService,
    CustomerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }    
  ]
})
export class AppModule { }
