import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
})
export class OnSalePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (value) {
      return 'Đang hạ giá !';
    }
    return '';
  }
}
