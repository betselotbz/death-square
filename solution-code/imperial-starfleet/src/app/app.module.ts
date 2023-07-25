import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { ExternalDefensesModule } from './external-defenses/external-defenses.module';
import { InfoWindowComponent } from './info-window/info-window.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InternalDefensesModule,
    ExternalDefensesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
