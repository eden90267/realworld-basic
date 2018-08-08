import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword = null;
  isHighlight = false;
  fontSize = 24;
  @Output()
  keywordChange: EventEmitter<string>;

  constructor() {
    this.keywordChange = new EventEmitter();
  }

  ngOnInit() {
  }

  searchClick($event) {
    // this.isHighlight = !this.isHighlight;
    // this.fontSize += 2;
    this.keywordChange.emit(this.keyword);
  }

}
