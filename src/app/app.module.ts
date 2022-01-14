import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembroCreateComponent } from './membro-create/membro-create.component';
import { MembroDetailsComponent } from './membro-details/membro-details.component';
import { MembroListComponent } from './membro-list/membro-list.component';
import { MembroSearchComponent } from './membro-search/membro-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MembroCreateComponent,
    MembroDetailsComponent,
    MembroListComponent,
    MembroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
