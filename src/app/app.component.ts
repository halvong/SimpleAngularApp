import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SimpleAngularApp';

  @ViewChild('footer',{static: true})
  footerComponent: FooterComponent;

  startTime: string;

  updateLastAccessed() {
    console.log('previous last accesssed', this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit() {
    this.startTime = new Date().toString();
  }

}
