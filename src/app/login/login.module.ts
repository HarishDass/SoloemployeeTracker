import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [LoginComponent, LoginPageComponent, RegisterComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModuleModule],
})
export class LoginModule {}
