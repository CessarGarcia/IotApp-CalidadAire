import { Component, OnInit,ViewChild,ElementRef,Input } from '@angular/core';
import * as HighCharts from 'highcharts';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
export class GraficaPage implements OnInit {
  @Input() data; 
  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.lineChart(this.data);
  }
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  valoresSensor:any;
  lineChart(data){
    
    console.log("GYM ",data);
    this.valoresSensor=HighCharts.chart(this.container.nativeElement, {
      chart: {
        type: 'spline',
        marginRight: 10,
        events: {
          load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                
                  var x = (new Date()).getTime(),
                  y = Math.random()*20+10;
                  series.addPoint([x, y], true, true);
              }, 1000);
          }
      }
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

}