import { Pipe } from '@angular/core';

@Pipe({ name: 'formatpairs' })
export class FormatPairsPipe {
  transform(pair: string):Array<string> {
    return pair.split("-");
  }
}
