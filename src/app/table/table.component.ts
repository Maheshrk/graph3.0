import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  constructor() { }

  @Input() selectedRec;

  ngOnChanges(change:SimpleChanges) {
    console.log("dattaaaaaa in tableee",this.selectedRec,change);
  }
 

}
