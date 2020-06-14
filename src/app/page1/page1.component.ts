import { Component, OnInit } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName = 'Page 1';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.pageName = 'First Page'}, 2000);
  }

  onButtonClick() {
    alert('hello - date' + new Date());
  }


}
