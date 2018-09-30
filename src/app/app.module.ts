import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createClientFn } from './client';
import { taskServiceFactory, TaskService } from './task.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'ClientFn', useFactory: createClientFn, deps: [HttpClient]},
    { provide: TaskService, useFactory: taskServiceFactory, deps: ['ClientFn'] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
