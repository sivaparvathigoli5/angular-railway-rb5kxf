import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  constructor() { }

  tickets: any = [];

  ngOnInit() {
    //load
  }

  download(ticket){
    const id = ticket.id; 
    // var urlSearching = "/download/" + id;
    //     window.open(urlSearching);
  }

}