import { Component, OnInit,ViewChild,ElementRef,Input } from '@angular/core';
import * as HighCharts from 'highcharts';
import { ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
export class GraficaPage implements OnInit { 
  constructor(private modalCtrl : ModalController,public database: AngularFireDatabase) {
    this.leerSensores();

   }
  sensores : Sensores[]=[]
  lastSensores: Sensores = {
    sensor: null
  };

  ngOnInit() {
  }
  ionViewDidEnter() {
  }
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  valoresSensor:any;
  leerSensores() {
    const path = 'sensores/';
    this.database.list<Sensores>(path, ref => ref.orderByChild('time').limitToLast(60)).valueChanges().subscribe( res => {
        console.log('sensores -> ', res);
        this.sensores = res;
        this.sensores.reverse();
        this.convertirArray(this.sensores);
        this.lastSensores = this.sensores[0];
    })
}
  lineChart(data){

    this.valoresSensor=HighCharts.chart(this.container.nativeElement, {
      chart: {
        type: 'column',
        marginRight: 10
      },

      time: {
          useUTC: false
      },
      title: {
        text: '60 segundos'
      },
      accessibility: {
        announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function (allSeries, newSeries, newPoint) {
                if (newPoint) {
                    return 'New point added. Value: ' + newPoint.y;
                }
                return false;
            }
        }
    },xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
  },

  yAxis: {
      title: {
          text: 'ppm'
      },
      plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
      }]
  },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },
      

    legend: {
        enabled: false
    },
    exporting: {
      enabled: false
  },
      series: [{
        name: 'Calidad de aire',
        type: undefined,
        data: (function () {
          // generate an array
          var data2 = [],
          time = (new Date()).getTime(),
              i,j=0;

              for (i = -59; i <= 0; i += 1) {
                data2.push({
                    x: time + i * 1000,
                    y: data[j]
                });
                console.log(data[j]);
                j++
            }
          return data2;
      }())
      }]
    });
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  convertirArray(data){
    let array = [];
    let i;
    for(i=0;i<60;i++){
      array.push(data[i].sensor);
    }
    console.log(array);
    this.lineChart(array.reverse());
  }
  
}

interface Sensores {
  sensor: number;
}