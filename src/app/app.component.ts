import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { PrimeNGConfig } from "primeng/api";

import { TranslateModule, TranslateService } from "@ngx-translate/core";


import { NgClass } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { initFlowbite } from 'flowbite'


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NgClass , NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
  ) {}
  ngOnInit(): void {
    initFlowbite();
  }
  
}
