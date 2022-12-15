import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listasmaps',
  templateUrl: './listasmaps.page.html',
  styleUrls: ['./listasmaps.page.scss'],
})
export class ListasmapsPage implements OnInit {
  listParquedero: any = [
    {
      "titulo": "vivero ",
      "img": "assets/imgs/v1.png",
      "des": 'Calle 10 # 5-51',
      "precio": 1000,
      "id": 1,
      "lat": 4.579482,
      "log": -74.157192,
      "dlat": 4.613542,
      "dlog": -74.064529,
    },
    {
      "titulo": "bosa",
      "img": "assets/imgs/v1.png",
      "des": 'Calle 26 # 5-51',
      "precio": 1000,
      "id": 2,
      "lat": 4.579482,
      "log": -74.157192,
      "dlat": 4.638675, 
      "dlog": -74.186011,
    },
    {
      "titulo": "macarena",
      "img": "assets/imgs/v1.png",
      "des": 'Calle 26 # 5-51',
      "precio": 1000,
      "id": 3,
      "lat": 4.579482,
      "log": -74.157192,
      "dlat": 4.614349,
      "dlog":  -74.064083,
    },
    {
      "titulo": "ingenieria",
      "img": "assets/imgs/v1.png",
      "des": 'Trasversal 10 # 5-51',
      "precio": 1000,
      "id": 4,
      "lat": 4.579482,
      "log": -74.157192,
      "dlat": 4.628214,
      "dlog": -74.066054,
    },
  ]
  isModalOpen2: boolean = false
  constructor(private toastr: ToastController, private router: Router,) { }

  date = '01-01-2000'
  hora = '12:00'
  ngOnInit() {
  }

  navegar(){

    console.log('test');


    this.router.navigate(["maps"


    ]);
  }

  onClick(i: any) {

    console.log(i);
    console.log('open');
    this.router.navigate(["reservesmaps/" + i.id, {
      coords1: i.lat,
      coords2: i.log,
      coords3: i.dlat,
      coords4: i.dlog,

    }]);
    // this.isModalOpen2 = true
  }
  close(e?: any) {
    this.isModalOpen2 = false
    if (e) {

      this.presentSuccessToast("Su reserva se ha hecho");

    }


  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastr.create({
      message: message,
      animated: true,
      color: 'success',
      position: 'bottom',
      duration: 3000
    });
    return await toast.present();
  }

  async presentErrorToast(message: string, duration?: number) {
    if (!duration) duration = 3000
    const toast = await this.toastr.create({
      message: message,
      animated: true,
      color: 'danger',
      duration: duration
    });
    return await toast.present();
  }
}
