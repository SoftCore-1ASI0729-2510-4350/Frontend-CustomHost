import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//import {NgForOf} from '@angular/common';
@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleModule,
    //NgForOf,
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
    languages = ['en','es'];
    currentLang: string;

  constructor(private translate: TranslateService) {
      this.translate.use('en');
      this.currentLang='en';
    console.log(this.currentLang)
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    console.log(lang)
  }
}
