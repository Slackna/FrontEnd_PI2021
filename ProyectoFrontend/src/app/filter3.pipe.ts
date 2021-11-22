import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {

  transform(value: any, arg: any,): any {
    if (arg ==0 || arg.length < 1) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.precio>=1000) {
        resultPosts.push(post);
        (console.log('listobienbrini3'))
      };
    };

    return resultPosts;
  }
}
