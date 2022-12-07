/**
 * Returns only one text message, in our case only one formControl error.
 * source: https://stackoverflow.com/questions/36443068/how-to-display-only-single-validation-error-at-a-time
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneErrorMessage',
})
export class OneErrorMessagePipe implements PipeTransform {
  transform(obj: any): unknown {
    const keys = Object.keys(obj);
    if (keys && keys.length > 0) {
      return keys[0];
    }
    return null;
  }
}
