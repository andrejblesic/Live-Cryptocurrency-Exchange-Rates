import { Pipe } from '@angular/core';

@Pipe({ name: 'formatpairs' })
export class FormatPairs {
  transform(pair: string):Array<string> {
    return pair.split("-");
  }
}
