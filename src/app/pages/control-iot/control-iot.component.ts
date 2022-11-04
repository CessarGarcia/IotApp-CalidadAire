import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';
import { GraficaPage } from 'src/app/grafica/grafica.page';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-control-iot',
  templateUrl: './control-iot.component.html',
  styleUrls: ['./control-iot.component.scss'],
})
export class ControlIotComponent implements OnInit {

  seccion: 'temp' | 'contr' | 'hist' = 'temp';
  mediciones: Mediciones[] = [];
  sensores : Sensores[]=[]
  lastMedicion: Mediciones = {
    sensor: null,
    time: null,
  };
  lastSensores: Sensores = {
    sensor: null
  };

  version = 0;
  datos=[]
  manual: boolean = false;

  constructor(public database: AngularFireDatabase,public modalCtrl:ModalController,private alertController: AlertController) {
          this.leerMediciones();
          this.clearVersion();
          this.leerSensores();
  }

  ngOnInit() {}

  leerMediciones() {
      const path = 'mediciones/';
      this.database.list<Mediciones>(path, ref => ref.orderByChild('time').limitToLast(20)).valueChanges().subscribe( res => {
          console.log('mediciones -> ', res);
          this.mediciones = res;
          this.mediciones.reverse();
          this.lastMedicion = this.mediciones[0];
          if(this.mediciones[0].sensor>=400){
            this.presentAlert();
          }
      })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje Importante',
      message: 'Calidad de aire muy desfavorable!',
      buttons: ['OK'],
    });
    await alert.present();
  }
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

  segmentChanged(ev: any) {
    this.seccion = ev.detail.value;
    // console.log('ev.detail.value -> ', ev.detail.value);
  }

  clearVersion() {
    const path = 'version';
    this.database.object(path).set(0);
  }

  async verGrafica() {
    console.log("Holaa ",this.sensores);
    const modal = await this.modalCtrl.create({
      component: GraficaPage,
      componentProps: {
        'data':this.datos
      }
    });
    return await modal.present();
  }
  convertirArray(data){
    let array = [];
    let i;
    for(i=0;i<60;i++){
      array.push(data[i].sensor);
    }
    console.log(array);
    this.datos=array
  }
}

interface Mediciones {
  sensor: number;
  time: number;
}
interface Sensores {
  sensor: number;
}