import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UnitService } from './services/unit.service';
import { TodoService } from './services/todo.service';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UnitComponent } from './unit/unit.component';
import { ContactComponent } from './contact/contact.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ListElementComponent } from './list-element/list-element.component';
import { MatSliderModule } from '@angular/material/slider';
import { AgGridModule } from 'ag-grid-angular';
import { TradPageComponent } from './trad-page/trad-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
	{ path: 'chat', canActivate: [AuthGuard], component: ChatComponent },
	{ path: 'auth', component: AuthComponent },
	{ path: 'unitInfos/:id', canActivate: [AuthGuard], component: UnitComponent },
	{ path: 'unitGlobalPage/:id', component: UnitComponent },
	{ path: 'contact', canActivate: [AuthGuard], component: ContactComponent },
	{ path: 'todolist', canActivate: [AuthGuard], component: TodolistComponent },
	{ path: 'traduction', component: TradPageComponent },
	{ path: 'calendar',canActivate: [AuthGuard], component: CalendarComponent },
	{ path: 'not-found', component: FourOhFourComponent },
  { path: '', canActivate: [AuthGuard], component: IndexComponent },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent,
    AuthComponent,
    IndexComponent,
    UnitComponent,
    ContactComponent,
    FourOhFourComponent,
    TodolistComponent,
    ListElementComponent,
    TradPageComponent,
    CalendarComponent
  ],
  imports: [
		HttpClientModule,
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		AgGridModule.withComponents([]),
		MatSliderModule,
		RouterModule.forRoot(appRoutes)
  ],
	providers: [
		AuthService,
		UnitService,
		AuthGuard,
		TodoService,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
