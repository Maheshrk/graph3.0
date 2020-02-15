import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private restService:RestoService) { }

  ngOnInit() {
    this.getCarsData();
    this.getBooksData();
  }

  public selectedRecords:any;
  public carsRecords:any = {};
  public booksRecords:any = {};
  getCarsData(){
    this.restService.getCars().subscribe( data =>{
      console.log("carsss", data);
      this.carsRecords = data;
    })
  }

  getBooksData(){
    this.restService.getBooks().subscribe( data =>{
      console.log("books", data);
      this.booksRecords = data;
    })
  }

  public item:string;
  public itemsLength:number[] = [];
  selectedItem(e){
    this.itemsLength = [];
    console.log("event item", e.target.value);
    this.item = e.target.value;
    let itemSize;
    if(this.item == 'Cars'){
      itemSize = this.carsRecords.length;
      // this.itemsLength = [];
    }
    else if(this.item == 'Books'){
      itemSize = this.booksRecords.length;
      // this.itemsLength = [];
    }
    for(let i = 1; i<= itemSize; i++){
      this.itemsLength.push(i);
      console.log("lllllll",this.itemsLength );
    }
  }

  getValue(event){
    console.log("event count", event.target.value)
    let count = event.target.value;
    let rec;
    if(this.item == 'Cars'){
      rec = this.carsRecords.slice(0,count);
    }else if(this.item == 'Books'){
      rec = this.booksRecords.slice(0,count);
    }

    let data = {"itemName":this.item, "records":rec};

    this.selectedRecords = data;
  }
}
