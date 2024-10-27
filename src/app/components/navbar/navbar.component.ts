import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {DropdownModule} from 'primeng/dropdown'
import { ChangeLangService } from '../../services/other/change-lang.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule , DropdownModule ,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  courses: any[] = [];
  seminars: any[] = [];
  selectedCourse: any;
  selectedSeminar: any;
  isLanguageEnglish = true;
  constructor(public changeLangService: ChangeLangService) { }

 async ngOnInit(){
    this.isLanguageEnglish = this.changeLangService.currentLang() === "en";
    this. courses = [
      {'name':"Math",'id':1},
      {'name':"Science",'id':2},
      {'name':"History",'id':3},
      {'name':"English",'id':4},
    ]
    this.seminars = [
      {'name':"Math",'id':1},
      {'name':"Science",'id':2},
    ]
  }
  toggleLang(){
    const lang = this.isLanguageEnglish ? "ar" : "en";
    this.changeLang(lang);
}
  changeLang(lang: string){
    this.changeLangService.changeLang(lang);
  }
}