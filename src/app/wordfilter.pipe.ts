import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordfilter',
})
export class WordfilterPipe implements PipeTransform {
  vulgarWords = ['shit', 'mf', 'fucker', 'workout'];
  transform(value: string): string {
    const transformWords = value.split(' ');
    let newWord = [];
    for (let i = 0; i < transformWords.length; i++) {
      if (this.vulgarWords.includes(transformWords[i])) {
        newWord.push('****');
      } else {
        newWord.push(transformWords[i]);
      }
    }
    return newWord.join(' ');
  }
}
