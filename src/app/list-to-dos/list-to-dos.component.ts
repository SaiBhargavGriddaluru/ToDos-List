import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


export class Todo{
  constructor(
    public id: number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){ }
}


@Component({
  selector: 'app-list-to-dos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-to-dos.component.html',
  styleUrl: './list-to-dos.component.css'
})

export class ListToDosComponent {

  todos = [
    new Todo(1, "Learn To Dance", false, new Date()),
    new Todo(2, "Become an expert in Angular", false, new Date()),
    new Todo(3, "Visit the Whole World", false, new Date())

    // {id : 1, description : 'Learn To Dance'},
    // {id : 2, description : 'Become an Expert in Angular'},
    // {id : 3, description : 'Visit the Whole World'},

  ]
  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }
}
