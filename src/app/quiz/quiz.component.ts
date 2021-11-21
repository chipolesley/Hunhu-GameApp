import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizDataSource } from './quizDataSource';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
public Questions: any = QuizDataSource;
public countAnswers: number = 0
public QuizTotal: number = 0;
public Answers: Array<any> = [];
public isFinished: boolean = false;

  @ViewChild('f', { static: false })  formData!: NgForm;

  constructor() { }

  ngOnInit(): void {   
  }

  onSubmit(){    
    this.countAnswers = 0; //to make sure that the count of correct answers is zero...
    this.Answers = []; //making sure the array is empty on submission..

    if(this.formData.touched == true && this.formData.valid == true){
      this.isFinished = true;
      //assign answers selected to the values array to iterate it...
      this.Answers = Object.values(this.formData.value);
      this.Answers.map(element =>{
        //checking for the IDs of correct answers and having a counter count to have a final score
        if(element == 1 || element == 6 ||element == 8 || element == 10 || element == 15) this.countAnswers++;
      })
      //getting the percentage of the mark
      this.QuizTotal = (this.countAnswers / this.Answers.length) * 100;
    }    
  }
  
  onReset(){
    //clear the form after the submit
    this.formData.reset();
    this.isFinished = false;
    this.Answers = [];
    this.QuizTotal = 0;
  }

}
