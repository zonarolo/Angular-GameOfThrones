import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gotApi';

  user = {
    name: 'Juan',
    age: 25,
  };

  constructor(public translate: TranslateService, public _router: Router) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|en/) ? browserLang : 'es');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
