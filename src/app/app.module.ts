import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PickupComponent } from './pickup/pickup.component';
import { TraceComponent } from './trace/trace.component';
import { HeaderComponent } from './header/header.component';
import { TransComponent } from './trans/trans.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { AttributeComponent } from './attribute/attribute.component';
import { LicenseComponent } from './license/license.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ItemDetailComponent } from './item-detail/item-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PickupComponent,
    TraceComponent,
    HeaderComponent,
    TransComponent,
    HomeComponent,
    ItemComponent,
    AttributeComponent,
    LicenseComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
