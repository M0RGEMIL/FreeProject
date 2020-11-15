import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    MessageComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
	providers: [
		AuthService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
