import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './components/grafica/grafica.component';
import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: environment.wsUrl, options: {} };




@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
