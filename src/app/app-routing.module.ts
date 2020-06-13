import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BankCardComponent} from "./bank-card/bank-card.component";


const routes: Routes = [
  {path: '', component:  BankCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
