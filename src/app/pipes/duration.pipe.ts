import { Pipe, PipeTransform } from '@angular/core';
import { MINUTES_IN_HOUR } from '../common/numbers';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hours = duration / MINUTES_IN_HOUR;
    const minutes = duration % MINUTES_IN_HOUR;
    if (hours > 1 && minutes) {
      return `${Math.trunc(hours)}h ${minutes}min`;
    }
    if (!minutes) {
      return `${hours}h`;
    }
    return `${duration}min`;
  }
}
