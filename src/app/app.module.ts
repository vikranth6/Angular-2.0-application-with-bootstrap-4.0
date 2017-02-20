import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StocksComponent} from './stocks.component';
import {HighlightDirective} from './highlight.directive';
import {StockService} from './stock.service';
import {routing} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import { DateFormatterPipe } from './date-formatter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HighlightDirective,
    MutualfundsComponent,
    StockDirectiveDirective,
    DateFormatterPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
