import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BodyComponent} from './body/body.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {KontaktyComponent} from './kontakty/kontakty.component';
import {OnasComponent} from './onas/onas.component';
import {LetiskoNitraComponent} from './letisko-nitra/letisko-nitra.component';
import {LeteckaSkolaComponent} from './letecka-skola/letecka-skola.component';
import {RegistraciaComponent} from './registracia/registracia.component';
import {PrihlasenieComponent} from './prihlasenie/prihlasenie.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {environment} from "../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgIf} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodyComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    KontaktyComponent,
    OnasComponent,
    LetiskoNitraComponent,
    LeteckaSkolaComponent,
    RegistraciaComponent,
    PrihlasenieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
