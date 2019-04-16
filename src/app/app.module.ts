import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ComposantEnfantComponent } from './composant-enfant/composant-enfant.component';
import { ComposantArriereEnfantComponent } from './composant-arriere-enfant/composant-arriere-enfant.component';
import { ColorComponent } from './color/color.component';
import { CvComponent } from './Cvtech/cv/cv.component';
import { CvListComponent } from './Cvtech/cv-list/cv-list.component';
import { CvItemComponent } from './Cvtech/cv-item/cv-item.component';
import { CvDetailsComponent } from './Cvtech/cv-details/cv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantEnfantComponent,
    ComposantArriereEnfantComponent,
    ColorComponent,
    CvComponent,
    CvListComponent,
    CvItemComponent,
    CvDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
