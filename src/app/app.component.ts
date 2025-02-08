import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-ex';
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted:boolean = false;
  qualification = [{school:'',degree:'',year:''}];

  addQuali(){
    this.qualification.push({school:'',degree:'',year:''})
  }
  formSub(){
    this.submitted = true;
  }
  foredit(){
   this.submitted = false;
  }
}
