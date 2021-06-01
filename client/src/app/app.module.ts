import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './simple-pages/login/login.component';
import { RegisterComponent } from './simple-pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertComponent } from './_directives/alert.component';
import { LayoutModule } from './layout/layout.module';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

export const API_URL = new InjectionToken<string>('apiUrl');

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
],
declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
],
providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
],
bootstrap: [AppComponent]
})
export class AppModule { }
