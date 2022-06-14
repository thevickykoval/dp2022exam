import { Component, OnInit } from '@angular/core';

import { Rest1 } from '../rest1';
import { MainLogicService } from '../main-logic.service';
import { Entity4 } from '../entity4';

@Component({
  selector: 'app-section2-cards',
  templateUrl: './section2-cards.component.html',
  styleUrls: ['./section2-cards.component.sass']
})
export class Section2CardsComponent implements OnInit {

  title:string="List of Items";

  itemsList:Entity4[]=[];

  showAddForm:boolean=false;
  selectedItem?:Entity4;

  id:number = 1;

  constructor(private service:MainLogicService) { }

  ngOnInit(): void {
    this.updateItems();
  }

  updateItems(){
    this.service.getItems().subscribe(
      (Rest1)=>{
        this.itemsList=Rest1._embedded.entity4s;
        //this.service.setList(items);
      }
    );
  }

  addItem(item:Entity4){
    this.service.postItem(item).subscribe(
      (item)=>{
        // console.log(item);
        this.updateItems();
      }
    );
  }

  updateItem(item:Entity4){
    
    console.log(item);
    item._links =this.selectedItem?._links!;
    
      this.service.putItem(item).subscribe(
      ()=>{
        this.updateItems();      
      }
    );
    this.onSelect(item);
  }

  onSelect(item:Entity4){
    console.log(item);
    if(this.selectedItem && item._links.entity4==this.selectedItem._links.entity4){
      this.selectedItem=undefined;
    } else {
      this.selectedItem=item;
    }
  }

  deleteItem(item:Entity4){
    this.service.deleteItem(item).subscribe(
      ()=>{
        this.updateItems();

      }
    );
  }
  }


  
  

