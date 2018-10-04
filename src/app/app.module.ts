import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for NgModel

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; // automatically declared with generating the Component (ng generate component)

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // has to be inserted manually after import statement
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
