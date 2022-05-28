import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../service/train.service';


@Component({
  selector: 'app-table-edit-item-train',
  templateUrl: './table-edit-item-train.component.html',
  styleUrls: ['./table-edit-item-train.component.css']
})
export class TableEditItemTrainComponent implements OnInit {

  trains = [];
  constructor(private trainService: TrainService) { }

  ngOnInit() {
    this.trains = this.trainService.getAll();
  }

  edit(train, i) {
    let newName = "new train";
    //swal
    this.trains[i].name = newName;
    let trainDTO = {
      trainName: train.trainName,
      trainNewName: newName,
      cntCarriage: train.cntCarriage,
      cntSeats: train.cntSeats
    }
    this.trainService.edit(trainDTO);
  }

  delete(trainName, i) {
    this.trainService.delete(trainName);
    this.trains.splice(i, 1);
  }

}