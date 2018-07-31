import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ToUpperPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'toUpper',
})
export class ToUpperPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLocaleUpperCase();
  }
}
