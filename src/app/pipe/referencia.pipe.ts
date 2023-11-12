import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia'
})
export class ReferenciaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let ref: string;
    ref = "Ref-" + value;
    return ref;
  }

}
