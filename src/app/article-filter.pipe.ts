import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(articles: any, keyword?: any): any {
    if (!articles) {
      return articles;
    }
    return articles.filter(article => keyword === null || article.title.indexOf(keyword) > -1);
  }

}
