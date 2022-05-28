import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainService } from '../../service/train.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor(private trainService: TrainService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    let train = {
      trainName: f.value.cntSeats,
      cntCarriage: f.value.cntCarriage,
      cntSeats: f.value.train
    };
    this.trainService.add(train);
  }
}