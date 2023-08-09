import { Component, OnInit } from '@angular/core';
import { Angular } from 'src/app/model/angular';
import { AngularService } from 'src/app/service/angular.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  tutorials?: Angular[];
  age: number;
  names: Array<string>;

  constructor(private tutorialService: AngularService) {
    /*this.age = 16;
    this.names = ['Mabel', 'Toby', 'S'];*/
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  aumentarEdad() {
    this.age++;
  }

  restarEdad() {
    this.age--;
  }

}
