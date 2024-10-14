import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanPackagesRoutingModule } from './scan-packages-routing.module';
import { ScanPackagesComponent } from './scan-packages.component';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { SafePipe } from './safe.pipe';
LOAD_WASM().subscribe();

@NgModule({
  declarations: [ScanPackagesComponent, SafePipe],
  imports: [CommonModule, ScanPackagesRoutingModule, NgxScannerQrcodeModule],
})
export class ScanPackagesModule {}
