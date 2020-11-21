import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ImagePipe } from './pipes/image.pipe';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HeaderIntereptor } from './Interceptor/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ImagePipe,
    AddProfileComponent,
    EditProfileComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderIntereptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
