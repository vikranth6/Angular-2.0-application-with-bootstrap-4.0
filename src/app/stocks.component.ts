import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
    {{title}}
    <ul [ngStyle] ="{'color':'red'}">
        <li *ngFor = "let stock of stocks">
            {{stock}}
        </li>
    </ul>
    <hr>
    <ul *ngIf = "stockMarkets.length == 4" [ngClass] = "'customClass'">
        <li *ngFor = "let market of stockMarkets">
            {{market}}
        </li>
    </ul>
    <hr>
    <div [ngSwitch] = "'NYSE'">
        <div *ngSwitchCase = "'NYSE'">New York Stock Exchane</div>
        <div *ngSwitchCase = "'LSE'">London Stock Exchane</div>
        <div *ngSwitchDefault>Could not find a a match</div> 
    </div>
    `,styles:[`
    
        .customClass{
            color:violet; 
        }

        .centerClass{
            text-align:center;
        }
    `]
})

export class StocksComponent{
    title = 'List of stocks: ';
    //stocks = ['AAPL','IBM','GOOG'];
    //ng class can used in three different ways in string, array and object
    stocks;

    stockMarkets = ['NASDAQ','NYSE','HKSE','LSE'];
    constructor(stockService : StockService){
        this.stocks = stockService.getStocks();
    }
}