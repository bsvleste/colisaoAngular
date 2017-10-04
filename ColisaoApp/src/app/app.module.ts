import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HeroesComponent} from './heroes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'heroes',
        component:HeroesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
