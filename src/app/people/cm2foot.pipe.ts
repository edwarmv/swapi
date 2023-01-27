import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cm2ft',
  standalone: true
})
export class Cm2FtPipe implements PipeTransform {

  transform(height: string): string {
    return Math.round((Number(height) / 30.48) * 100)/100 + ' ft.';
  }

}
