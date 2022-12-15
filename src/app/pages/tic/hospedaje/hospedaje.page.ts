import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.page.html',
  styleUrls: ['./hospedaje.page.scss'],
})
export class HospedajePage implements OnInit {
  listParquedero: any = [
    {
      "titulo": "Hospedaje UD",
      "img": "assets/imgs/h1.png",
      "des": 'Calle 10 # 5-51',
      "precio":1000
    },
    {
      "titulo": "Hospedaje 1",
      "img": "assets/imgs/h2.png",
      "des": 'Calle 26 # 5-51',
      "precio":1000
    },
    {
      "titulo": "Hospedaje 2",
      "img": "assets/imgs/h3.png",
      "des": 'Calle 26 # 5-51',
      "precio":1000
    },
    {
      "titulo": "Hospedaje 3",
      "img": "assets/imgs/h4.png",
      "des": 'Trasversal 10 # 5-51',
      "precio":1000
    },
  ]
  isModalOpen2: boolean = false
  constructor(private toastr: ToastController) { }

  date = '01-01-2000'
  hora = '12:00'
  ngOnInit() {
  }

  onClick() {
    console.log('open');

    this.isModalOpen2 = true
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
