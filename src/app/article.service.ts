import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root' // 注入的點是整個程式的進入點，不用再去 module 的 providers 添加了
})
export class ArticleService {

  list;

  constructor(private httpClient: HttpClient) {
  }

  loadArticles() {
    this.httpClient.get('https://conduit.productionready.io/api/articles')
      .subscribe((response: any) => this.list = response.articles);
  }

  searchArticle(keyword: string) {
    this.httpClient.get('https://conduit.productionready.io/api/articles')
      .subscribe((response: any) => {
        this.list = response.articles.filter(item => keyword === null || item.title.indexOf(keyword) > -1);
      });
  }
}
