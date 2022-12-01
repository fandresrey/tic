import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: any;
  constructor() { }

  ngOnInit() {
    // this.map = new Leaflet.Map("map").setView([4.5798527,-74.1582833],15);
    // Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

    //     }).addTo(this.map);




    this.map = L.map('map').
      setView([4.5798527, -74.1582833],
        12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 15 }).addTo(this.map);

    //Leaflet.marker([4.5798527,-74.1582833], { draggable: true }).addTo(this.map);


    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

  }


}
