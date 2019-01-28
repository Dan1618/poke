import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatProgressBarModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search-component/search-component.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { SinglePokeComponent } from './single-poke/single-poke.component';
import { SinglePokeResolverService } from './common/single-poke-resolver.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PokeListComponent,
    SinglePokeComponent
  ],
  imports: [
    MatButtonModule, MatProgressBarModule, MatTableModule, MatPaginatorModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SinglePokeResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
