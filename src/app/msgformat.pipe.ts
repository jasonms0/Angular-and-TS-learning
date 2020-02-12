import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgformat'
})
export class MsgformatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split("").reverse().join("");
  }

}
