import { Observable } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses', //TAG HTML em caso de exportação
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses$: Observable<Course[]>; //$ significa que é um Observable
  displayedColumns:string[] = ['name', 'category'];

  constructor(private coursesService : CoursesService) {
    this.courses$ = this.coursesService.getCourseList();
  }
  ngOnInit(): void {
    
  }
}
