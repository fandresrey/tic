import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { title: 'reservas', url: '/reserve', icon: 'mail' },
    { title: 'mapas', url: '/map', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router,) { }

  ngOnInit() {
  }
  maps(){
    this.router.navigate(["/reserves"], { replaceUrl: false });
   console.log('test');
  }

  reserves(){
    this.router.navigate(["/listasmaps"], { replaceUrl: false });


  }
  carrar(){

    this.router.navigate(["/login"], { replaceUrl: false });


  }
}
