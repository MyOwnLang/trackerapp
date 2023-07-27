import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PickupComponent } from './pickup/pickup.component';
import { TraceComponent } from './trace/trace.component';
import { TransComponent } from './trans/trans.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { AttributeComponent } from './attribute/attribute.component';
import { LicenseComponent } from './license/license.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  {path: "pickup", component: PickupComponent},
  {path: "trace", component: TraceComponent},
  {path: "trans", component: TransComponent},
  {path: "home", component: HomeComponent},
  {path: "item", component: ItemComponent},
  {path: "attribute", component: AttributeComponent},
  {path: "license", component: LicenseComponent},
  {path: "ItemDetail/:id", component: ItemDetailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
