import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '@app/@shared/services/authentication.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MaterialModule,
  ],
  providers: [AuthenticationService],
})
export class LoginModule {}
