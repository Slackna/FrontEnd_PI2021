import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any,): any {
    if (arg ==0 || arg.length < 1) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.precio<=500) {
        resultPosts.push(post);
        (console.log('listobienbrini'))
      }
    };
    return resultPosts;
  }

}



