import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
