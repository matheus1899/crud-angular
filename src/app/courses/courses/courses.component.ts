import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses', //TAG HTML em caso de exportação
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses:Course[] = [];
  displayedColumns:string[] = ['name', 'category'];

  constructor(private coursesService : CoursesService) {
  }
  ngOnInit(): void {
    this.courses = this.coursesService.getCourseList();
  }
}
