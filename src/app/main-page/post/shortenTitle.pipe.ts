import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenTitlePipe implements PipeTransform {
  transform(title: string): string {
    if ((title.length !== 0 || title !== '') && title.length > 40) {
      return title.substr(1, 25) + '...';
    }
    return title;
  }
}
