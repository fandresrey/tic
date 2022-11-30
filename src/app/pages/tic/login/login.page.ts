import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor( private router: Router,
    ) { }
  user: string | undefined;
  userArray: any = ['20201383011']
  passArray: any = ['1234']
  password: string | undefined
  ngOnInit() {

    this.user='20201383011'
    this.password='1234'
  }



  confirmLogin() {


    if (this.userArray.includes(this.user)) {

      if (this.passArray.includes(this.password)) {



        //alert('entra')

        this.router.navigated = false;
        this.router.navigate(["/home"]);

      } else { alert('Contraseña incorrecta') }



    } else { alert('Usuario no existe') }







  }
}
