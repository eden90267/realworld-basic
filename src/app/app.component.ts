import {Component, OnInit} from '@angular/core';
import {ArticleService} from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>';
  keyword = '';
  get list() {
    return this.articleService.list;
  }

  constructor(public articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.loadArticles();
  }

  searchArticle(keyword: string) {
    this.keyword = keyword;
  }

}
