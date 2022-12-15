import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Geolocation } from '@capacitor/geolocation';
import { ActivatedRoute } from '@angular/router';
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



@Component({
  selector: 'app-reservesmaps',
  templateUrl: './reservesmaps.page.html',
  styleUrls: ['./reservesmaps.page.scss'],
})
export class ReservesmapsPage implements OnInit {
  map: any
  item: any;
  icon= L.icon({
    iconUrl: 'assets/imgs/put.png',
    iconSize: [30, 30]
    });
  constructor(private activeRoute: ActivatedRoute,) { }
  onClick() { }
  async ngOnInit() {
    this.item = this.activeRoute.snapshot.params;

    console.log(this.item);
    // this.map = new Leaflet.Map("map").setView([4.5798527,-74.1582833],15);
    // Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

    //     }).addTo(this.map);

    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates.coords.latitude);
    console.log('Current position:', coordinates.coords.longitude);

    this.map = L.map('map').
      setView([4.5798527, -74.1582833],
        12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 15 }).addTo(this.map);

    //Leaflet.marker([4.5798527,-74.1582833], { draggable: true }).addTo(this.map);
    L.Routing.control({
      waypoints: [L.latLng(this.item.coords1, this.item.coords2), L.latLng(this.item.coords3, this.item.coords4)],
      routeWhileDragging: true,
      
      pointMarkerStyle: { radius: 5, color: '#03f', fillColor: 'white', opacity: 1, fillOpacity: 0.7 }

    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();

    }, 0);

  }


}
