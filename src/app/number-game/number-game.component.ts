import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-game',
  templateUrl: './number-game.component.html',
  styleUrls: ['./number-game.component.css']
})
export class NumberGameComponent implements OnInit {
   public startNumber: any;
   public endNumber: any;
   public message: string = "";
   public isError: boolean = false;
   public rangeObj = { };
   public range: Array<any>= [];

  constructor() { }

  ngOnInit(): void {
    //empting the array before any operation
    this.range = [];
  }

  public submit(){
    if(this.startNumber != null && this.endNumber != null)
    {
      this.isError = false
      for(var start = this.startNumber; start <= this.endNumber; start++ )
      { 
        //if the number is divisible by both 3 and 5 print “HunhuUbuntu”
        if (start % 15 == 0 && start !==0)
        {
          let HunhuUbuntu = { number: start, text: "HunhuUbuntu"};
          // pushing the object into the range array for it to be called later 
          this.range.push(HunhuUbuntu);
          //clearing the object in case for the next iteration
          HunhuUbuntu = {number: null, text: ""};
        }
        //if the number is divisible by 3 print “Hunhu”
        else if (start % 3 == 0 && start % 5 != 0)
        {
          let Hunhu = { number: start, text: "Hunhu"};
          // pushing the object into the range array for it to be called later 
          this.range.push(Hunhu);
          //clearing the object in case for the next iteration
          Hunhu = {number: null, text: ""};
          
        }
        //if the number is divisible by 5 print “Ubuntu”
        else if (start % 5 == 0 && start % 3 != 0)
        {
          let Ubuntu = { number: start, text: "Ubuntu"};
          // pushing the object into the range array for it to be called later 
          this.range.push(Ubuntu);
          //clearing the object in case for the next iteration
          Ubuntu = {number: null, text: ""};
        }
        //else print nothing 
        else{
          let nothing = { number: start, text: ""};
          // pushing the object into the range array for it to be called later 
          this.range.push(nothing);
          //clearing the object in case for the next iteration
          nothing = {number: null, text: ""};
        }      
      }
    } else { 
      this.isError = true;
      this.message = "All Fields are required";
    }
    
    console.log(this.range);    
  }
  reset(){
    this.range = [];
    this.startNumber = null;
    this.endNumber = null;
    this.isError = false;
  }
}
