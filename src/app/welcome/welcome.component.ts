import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name = ''
 constructor(private route:ActivatedRoute){

 } 


 ngOnInit(){
  // console.log(this.route.snapshot.params['name']);
  this.name = this.route.snapshot.params['name']
 }
}
