import { computed, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeLangService {
  position = signal("left");
  currentLang = signal(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  );
  currentDirection = computed(() => {
    if (this.currentLang() === "en") {
      this.translateService.use(this.currentLang()!); 
      return 'ltr';
    }
    else if (this.currentLang() === "ar") {
      this.translateService.use(this.currentLang()!);
      return "rtl";
    }
    else return "";
  });
  constructor(private translateService: TranslateService) { }
  changeLang(langCode: string): void {
    localStorage.setItem('langCode' , langCode);
    if (langCode === "ar") {
      this.currentLang.set("ar");
      this.position.set("right");
    }
    if (langCode === "en") {
      this.currentLang.set("en");
      this.position.set("left");
    }
  }
}
