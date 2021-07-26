import {Component} from '@angular/core';

@Component({
  selector: "courses",
  template: `
 {{courses.title | uppercase | lowercase}} <br />
 {{courses.students | number}} <br />
 {{courses.rating | number:'1.1-1'}} <br />
 {{courses.price | currency: "AUD" : false: "3.2-2" }} <br />
 {{courses.releaseDate | date: 'longDate'}} <br />
 {{test | summary: 10 : 4}}
  `
})
export class CoursesComponent {
 courses= {
   title: "the complete angular",
   students: 30000,
   rating: 4.975,
   price: 190.95,
   releaseDate: new Date(2016,3,1)
 };
 test = `lorem ipsum is simply dummy test of the printing and typesetting`
}



// import { CoursesService } from './courses.service';
// import {Component} from '@angular/core';

// @Component({
//   selector: "courses",
//   template: `
//   <h2>{{lenght + " Authors"}}</h2>

//     <ul>
//       <li *ngFor="let course of courses">
//       {{course}}
//       </li>
//     </ul>
//   `
// })
// export class CoursesComponent {
//   title= "3 Authors";
//   courses: any[];
//   lenght: number;
//   constructor(service: CoursesService) {
//     this.courses = service.getCourses()
//     this.lenght = this.courses.length
//   }


// }
