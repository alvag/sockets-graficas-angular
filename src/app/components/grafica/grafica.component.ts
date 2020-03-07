import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from '../../services/data.service';
import { WebsocketService } from '../../services/websocket.service';

@Component( {
    selector: 'app-grafica',
    templateUrl: './grafica.component.html',
    styleUrls: ['./grafica.component.css']
} )
export class GraficaComponent implements OnInit {

    public lineChartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81], label: 'Ventas' },
    ];
    public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];

    constructor( private dataService: DataService,
                 private wsService: WebsocketService ) { }

    ngOnInit() {
        this.getData();
        this.listenSocket();
    }

    getData() {
        this.dataService.getdata().subscribe( ( data: any ) => this.lineChartData = data );
    }

    listenSocket() {
        this.wsService.listen( 'grafico-data' )
        .subscribe( ( data: any ) => {
            this.lineChartData = data;
        } );
    }
}
