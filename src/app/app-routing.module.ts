import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberGameComponent } from './number-game/number-game.component';
import { QuizComponent } from './quiz/quiz.component';

const routes:Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'number-game', component: NumberGameComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
