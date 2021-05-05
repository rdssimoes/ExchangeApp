import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashService } from './cash.service';

import { ExchangeComponent } from './exchange/exchange.component';
import { ShowComponent } from './exchange/show/show.component';
import { SettingsComponent } from './settings/settings.component';
import { EditComponent } from './settings/edit/edit.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlterComponent } from './settings/alter/alter.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    ShowComponent,
    SettingsComponent,
    EditComponent,
    AlterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
