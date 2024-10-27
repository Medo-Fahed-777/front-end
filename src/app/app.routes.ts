import { Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      
     {
      path:'main',
      loadComponent:()=>import('./components/layout/layout.component').then(m=>m.LayoutComponent),
      children:[
        {
          path:'home',

          loadComponent:()=>import('./pages/home/home.component').then(m=>m.HomeComponent)
        },

        {
          path:'register',
          loadComponent:()=>import('./pages/register/register.component').then(m=>m.RegisterComponent)
        },
        {
          path:'login',
          loadComponent:()=>import('./pages/login/login.component').then(m=>m.LoginComponent)
        }
      ]
     },
     {
      path: "**",
      redirectTo: "main/home",
      pathMatch: "full",
    },
    {
      path: "",
      redirectTo: "main/home",
      pathMatch: "full",
    },
    ]
  }
];
