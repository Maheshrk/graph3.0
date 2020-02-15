import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
// import * as CanvasJS from 'canvasjs';
import * as CanvasJS from '../../assets/canvas.min';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnChanges {

  
  constructor() { }
  @Input() selectedRec;

  ngOnChanges(change: SimpleChanges) {
    console.log("records....for graph", this.selectedRec, change);
    if(this.selectedRec){
      this.arrayfun();
    }
    else{
      console.log("NO Records")
    }
  }

  public gtpl:any[] = [];
  public gowdanar:any[] = [];
  arrayfun(){
    this.gtpl=[];
    this.selectedRec.records.forEach( rec =>{
      if(this.selectedRec.itemName == 'Cars'){
        this.gtpl.push({label:rec.name, y:rec.count});
      }
      else if(this.selectedRec.itemName == 'Books'){
        this.gtpl.push({label:rec.title, y:rec.count});
      }
      
    });
    this.chats();
  }

  chats() {
    console.log("graphsssssss...........sssss", this.gtpl)
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light1", // "light2", "dark1", "dark2"
      animationEnabled: false, // change to true		
      title:{
        text: "Basic Column Chart"
      },
      data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints: this.gtpl,
      }
      ]
    });
    chart.render();
    
    }
  }

