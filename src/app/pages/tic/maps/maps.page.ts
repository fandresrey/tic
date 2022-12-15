import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Geolocation } from '@capacitor/geolocation';
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: any;
  icon= L.icon({
    iconUrl: 'assets/imgs/put.png',
    iconSize: [30, 30]
    });


  constructor() {



   }




  async ngOnInit() {

    
    // this.map = new Leaflet.Map("map").setView([4.5798527,-74.1582833],15);
    // Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

    //     }).addTo(this.map);

    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates.coords.latitude   );
    console.log('Current position:', coordinates.coords.longitude   );

    this.map = L.map('map').
      setView([coordinates.coords.latitude, coordinates.coords.longitude],
        20);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 15 }).addTo(this.map);

    L.marker([coordinates.coords.latitude, coordinates.coords.longitude], { icon:this.icon}).addTo(this.map);
    // L.Routing.control({
    //   waypoints: [L.latLng(4.579482, -74.157192), L.latLng(4.628214, -74.066054)],
    //   routeWhileDragging: true,
    //   pointMarkerStyle: { radius: 5, color: '#03f', fillColor: 'white', opacity: 1, fillOpacity: 0.7 }

    // }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();

    }, 0);

  }


}
