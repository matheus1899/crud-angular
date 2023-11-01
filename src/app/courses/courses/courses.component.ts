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
  displayedColumns:string[] = ['name', 'category']
  coursesService : CoursesService;

  constructor() {
    this.coursesService = new CoursesService();
    this.courses = this.coursesService.getCourseList();
  }
  ngOnInit(): void {}
}
