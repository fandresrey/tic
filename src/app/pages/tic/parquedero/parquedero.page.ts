import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-parquedero',
  templateUrl: './parquedero.page.html',
  styleUrls: ['./parquedero.page.scss'],
})
export class ParquederoPage implements OnInit {
  date = '01-01-2000'
  hora = '12:00'
  listParquedero: any = [
    {
      "titulo": "Parqueadero Ud",
      "img": "assets/imgs/p1.png",
      "des": 'Calle 10 # 5-51',
      "precio":1000
    },
    {
      "titulo": "Parquedero 1",
      "img": "assets/imgs/p2.png",
      "des": 'Calle 26 # 5-51',
      "precio":1000
    },
    {
      "titulo": "Parquedero 2",
      "img": "assets/imgs/p3.png",
      "des": 'Trasversal 10 # 5-51',
      "precio":1000
    },
  ]
  isModalOpen: boolean = false
  constructor(private toastr: ToastController) { }

  ngOnInit() {
  }
  onClick() {
    this.isModalOpen = true

  }
  close(e?: any) {
    this.isModalOpen = false
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
