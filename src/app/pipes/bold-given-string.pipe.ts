import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldGivenString',
  standalone: true
})
export class BoldGivenStringPipe implements PipeTransform {


  transform(value: string, regex: string): any {
    return this.replace(value, regex);
  }

  replace(str: string, regex: string) {
    return str.replace(new RegExp(`(${regex})`, 'gi'), '<b>$1</b>');
  }


}
