import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { IntelComponent } from './intel/intel.component';
import { MediaComponent } from './media/media.component';
import { HomeComponent } from './home/home.component';
import { CastComponent } from './cast/cast.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IntelComponent,
    MediaComponent,
    HomeComponent,
    CastComponent,
    InfoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
