import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { UdalostiComponent } from './components/udalosti/udalosti.component';
import { UdalostItemComponent } from './components/udalost-item/udalost-item.component';
import { UdalostFormComponent } from './components/udalost-form/udalost-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    UdalostiComponent,
    UdalostItemComponent,
    UdalostFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
