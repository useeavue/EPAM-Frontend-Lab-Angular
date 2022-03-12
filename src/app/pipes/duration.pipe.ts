import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const hours = duration / 60;
    const minutes = duration % 60;
    if (hours > 1 && minutes) {
      return `${Math.trunc(hours)}h ${minutes}min`;
    }
    if (!minutes) {
      return `${hours}h`;
    }
    return `${duration}min`;
  }
}
