import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 10000) return `${value}`
    return `${(value / 10000).toFixed(2)}万`
  }
}
