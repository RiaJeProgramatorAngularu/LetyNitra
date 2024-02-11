import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";
import {BodyComponent} from "./body/body.component";
import {MainComponent} from "./main/main.component";
import {OnasComponent} from "./onas/onas.component";
import {LetiskoNitraComponent} from "./letisko-nitra/letisko-nitra.component";
import {LeteckaSkolaComponent} from "./letecka-skola/letecka-skola.component";
import {PrihlasenieComponent} from "./prihlasenie/prihlasenie.component";
import {RegistraciaComponent} from "./registracia/registracia.component";

const routes: Routes = [
  {path: 'header', component: HeaderComponent },
  {path: 'navigation', component: NavigationComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'body', component: BodyComponent },
  {path: 'main', component: MainComponent },
  {path: 'onas', component: OnasComponent },
  {path: 'letiskoNitra', component: LetiskoNitraComponent },
  {path: 'leteckaSkola', component: LeteckaSkolaComponent },
  {path: 'prihlasenie', component: PrihlasenieComponent },
  {path: 'registracia', component: RegistraciaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeaderComponent, NavigationComponent, FooterComponent, BodyComponent, MainComponent, LetiskoNitraComponent, OnasComponent, LeteckaSkolaComponent, PrihlasenieComponent, RegistraciaComponent];
