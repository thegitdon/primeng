import { Component, OnInit } from '@angular/core';
import { Angular } from 'src/app/model/angular';
import { AngularService } from 'src/app/service/angular.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  tutorials?: Angular[];
  //Dynamic Columns
  cols: any[];
  items: MenuItem[];
  //
  display: boolean = false;
  //
  tutorial: Angular = {
    title: '',
    published: false
  };
  age: number;
  names: Array<string>;

  constructor(private tutorialService: AngularService) {
    /*this.age = 16;
    this.names = ['Mabel', 'Toby', 'S'];*/
  }

  ngOnInit(): void {
    this.retrieveTutorials();

    this.cols = [
      { field: 'id', header: 'Vin' },
      { field: 'title', header: 'Year' },
      { field: 'published', header: 'Brand' }
    ];

    this.items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: () => this.showDialog()
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil'
      }
    ];
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

  showDialog() {
    this.display = true;
  }

  save() {
    console.log("data");
  }

  aumentarEdad() {
    this.age++;
  }

  restarEdad() {
    this.age--;
  }

}
