import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExchangeComponent } from './exchange/exchange.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'exchange',component:ExchangeComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
