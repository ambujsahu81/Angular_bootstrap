import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ConfettiPageComponent } from './confetti-page/confetti-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EventRegistrationComponent,
    EventDetailsComponent,
    ConfettiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
