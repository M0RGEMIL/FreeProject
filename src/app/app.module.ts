import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UnitComponent } from './unit/unit.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
	{ path: 'chat', component: ChatComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: 'unitInfos', component: UnitComponent },
	{ path: 'unitGlobalPage', component: UnitComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    MessageComponent,
    ChatComponent,
    AuthComponent,
    IndexComponent,
    UnitComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
  ],
	providers: [
		AuthService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
