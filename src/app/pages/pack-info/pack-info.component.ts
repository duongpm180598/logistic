import { LogisticService } from './../../@shared/services/logistic.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PackInfo } from '@app/@shared/models/PackInfo';

@Component({
  selector: 'app-pack-info',
  templateUrl: './pack-info.component.html',
  styleUrl: './pack-info.component.scss',
})
export class PackInfoComponent implements OnInit {
  code: string = '';
  info: PackInfo | null = {
    MaBK: '62B5A567-F2E',
    Chieubay: 'VN-EU',
    NgayBay: '2024-10-12T14:00:00',
    NguoiNhan: 'Kim Anh Tóc',
    DienThoai: '',
    DiaChi: '',
    SoKien: 3,
    TrongLuong: 74.7,
    CuocPhi: 0.0,
    PhuThu: 0.0,
    BaoHiem: 0.0,
    TinhTrang: 1,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private logisticService: LogisticService
  ) {
    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.code = param.get('code') ?? '';
    });
  }

  ngOnInit(): void {
    this.getPackInfoByCode();
  }

  getPackInfoByCode(): void {
    if (!this.code) {
      return;
    }
    this.logisticService.scanPackCode(this.code).subscribe((data) => {
      console.log(data);
    });
  }
}
